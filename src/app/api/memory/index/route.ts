import { NextResponse } from "next/server";
import { indexNoteTextToChroma } from "@/lib/index-note-chroma";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_AI_STUDIO_API_KEY;
  if (!apiKey?.trim()) {
    return NextResponse.json({ error: "Missing GEMINI_API_KEY (or GOOGLE_AI_STUDIO_API_KEY)" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const text = typeof body === "object" && body && "text" in body ? (body as { text?: unknown }).text : undefined;
  const sourceId =
    typeof body === "object" && body && "sourceId" in body ? (body as { sourceId?: unknown }).sourceId : undefined;

  if (typeof text !== "string" || !text.trim()) {
    return NextResponse.json({ error: "Expected { text: string, sourceId?: string }" }, { status: 400 });
  }

  try {
    const result = await indexNoteTextToChroma({
      text,
      sourceId: typeof sourceId === "string" ? sourceId : undefined,
      apiKey,
    });
    return NextResponse.json({ ok: true, chunks: result.chunks, sourceId: result.sourceId });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Indexing failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
