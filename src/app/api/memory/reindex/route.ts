import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { indexNoteTextToChroma } from "@/lib/index-note-chroma";

export const runtime = "nodejs";

type Note = { id: string; createdAt: string; text: string };

const NOTES_PATH = path.join(process.cwd(), "data", "notes.json");

async function readNotes(): Promise<Note[]> {
  try {
    const raw = await fs.readFile(NOTES_PATH, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const out: Note[] = [];
    for (const n of parsed) {
      if (!n || typeof n !== "object") continue;
      const id = (n as { id?: unknown }).id;
      const createdAt = (n as { createdAt?: unknown }).createdAt;
      const text = (n as { text?: unknown }).text;
      if (typeof id !== "string" || typeof createdAt !== "string" || typeof text !== "string") continue;
      out.push({ id, createdAt, text });
    }
    return out;
  } catch {
    return [];
  }
}

export async function POST() {
  const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_AI_STUDIO_API_KEY;
  if (!apiKey?.trim()) {
    return NextResponse.json({ error: "Missing GEMINI_API_KEY (or GOOGLE_AI_STUDIO_API_KEY)" }, { status: 500 });
  }

  const notes = await readNotes();
  let indexed = 0;
  const errors: string[] = [];

  for (const n of notes) {
    try {
      await indexNoteTextToChroma({ text: n.text, sourceId: n.id, apiKey });
      indexed += 1;
    } catch (e) {
      errors.push(`${n.id}: ${e instanceof Error ? e.message : "failed"}`);
    }
  }

  return NextResponse.json({
    ok: errors.length === 0,
    total: notes.length,
    indexed,
    errors,
  });
}
