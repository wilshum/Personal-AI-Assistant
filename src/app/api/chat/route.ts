import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_MODEL = "claude-sonnet-4-20250514";
const MAX_MESSAGES = 48;

type ClientMessage = { role: "user" | "assistant"; content: string };

function trimMessages(messages: ClientMessage[]): ClientMessage[] {
  if (messages.length <= MAX_MESSAGES) return messages;
  return messages.slice(-MAX_MESSAGES);
}

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey?.trim()) {
    return NextResponse.json(
      { error: "Missing ANTHROPIC_API_KEY. Add it to .env.local and restart the dev server." },
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

  const anthropic = new Anthropic({ apiKey });
  const model = process.env.ANTHROPIC_MODEL?.trim() || DEFAULT_MODEL;

  try {
    const response = await anthropic.messages.create({
      model,
      max_tokens: 4096,
      system:
        "You are a helpful personal assistant inside a private app. Be concise, warm, and practical. If the user refers to earlier messages, use that context.",
      messages: trimmed.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const block = response.content[0];
    const text = block?.type === "text" ? block.text : "";
    if (!text) {
      return NextResponse.json({ error: "Empty model response" }, { status: 502 });
    }

    return NextResponse.json({ text } satisfies { text: string });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
