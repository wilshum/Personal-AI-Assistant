import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { queryChroma } from "@/lib/chroma";

export const runtime = "nodejs";

const DEFAULT_MODEL = "gemini-3-flash-preview";
const DEFAULT_EMBED_MODEL = "gemini-embedding-001";
const MAX_MESSAGES = 48;

type ClientMessage = { role: "user" | "assistant"; content: string };

function trimMessages(messages: ClientMessage[]): ClientMessage[] {
  if (messages.length <= MAX_MESSAGES) return messages;
  return messages.slice(-MAX_MESSAGES);
}

export async function POST(req: Request) {
  // Google AI Studio key (Gemini). The newer SDK looks for `GEMINI_API_KEY` by default.
  // We also accept `GOOGLE_AI_STUDIO_API_KEY` for backwards compatibility with this project.
  const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_AI_STUDIO_API_KEY;
  if (!apiKey?.trim()) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY (or GOOGLE_AI_STUDIO_API_KEY). Add it to .env.local and restart the dev server." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || !("messages" in body)) {
    return NextResponse.json({ error: "Expected { messages: [...] }" }, { status: 400 });
  }

  const raw = (body as { messages: unknown }).messages;
  if (!Array.isArray(raw) || raw.length === 0) {
    return NextResponse.json({ error: "messages must be a non-empty array" }, { status: 400 });
  }

  const messages: ClientMessage[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") continue;
    const role = (m as { role?: string }).role;
    const content = (m as { content?: string }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string" || !content.trim()) continue;
    messages.push({ role, content: content.trim() });
  }

  if (messages.length === 0 || messages[messages.length - 1]?.role !== "user") {
    return NextResponse.json({ error: "Last message must be from the user" }, { status: 400 });
  }

  const trimmed = trimMessages(messages);

  const model = process.env.GEMINI_MODEL?.trim() || process.env.GOOGLE_AI_STUDIO_MODEL?.trim() || DEFAULT_MODEL;

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Retrieve personal context from Chroma (best-effort)
    let memoryContext = "";
    try {
      const embedModel = process.env.GEMINI_EMBED_MODEL?.trim() || DEFAULT_EMBED_MODEL;
      const q = trimmed[trimmed.length - 1]?.content ?? "";
      const embedResp = await ai.models.embedContent({ model: embedModel, contents: [q] });
      const vec = embedResp.embeddings?.[0]?.values;
      if (vec && vec.length > 0) {
        const results = await queryChroma({ embedding: vec, nResults: 6 });
        const docs = results.documents?.[0]?.filter((d): d is string => typeof d === "string" && d.trim().length > 0) ?? [];
        if (docs.length) {
          memoryContext =
            "Personal memory (your notes). Use only if relevant; do not invent details beyond these snippets:\n" +
            docs.map((d, i) => `- [${i + 1}] ${d}`).join("\n");
        }
      }
    } catch {
      // ignore memory failures; chat still works without retrieval
    }

    const response = await ai.models.generateContent({
      model,
      contents: [
        ...(memoryContext
          ? [
              {
                role: "user" as const,
                parts: [{ text: memoryContext }],
              },
            ]
          : []),
        ...trimmed.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
        })),
      ],
      config: {
        systemInstruction:
          "You are a helpful personal assistant inside a private app. Be concise, warm, and practical. If the user refers to earlier messages, use that context.",
        maxOutputTokens: 1024,
      },
    });

    const text = response.text;
    if (!text) {
      return NextResponse.json({ error: "Empty model response" }, { status: 502 });
    }

    return NextResponse.json({ text } satisfies { text: string });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
