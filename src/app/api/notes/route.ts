import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { deleteFromChroma } from "@/lib/chroma";

export const runtime = "nodejs";

type Note = {
  id: string;
  createdAt: string;
  text: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const NOTES_PATH = path.join(DATA_DIR, "notes.json");

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

async function writeNotes(notes: Note[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(NOTES_PATH, JSON.stringify(notes, null, 2), "utf8");
}

export async function GET() {
  const notes = await readNotes();
  return NextResponse.json({ notes } as { notes: Note[] });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const text = typeof body === "object" && body && "text" in body ? (body as { text?: unknown }).text : undefined;
  if (typeof text !== "string" || !text.trim()) {
    return NextResponse.json({ error: "Expected { text: string }" }, { status: 400 });
  }

  const note: Note = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    text: text.trim(),
  };

  const notes = await readNotes();
  notes.unshift(note);
  await writeNotes(notes);

  return NextResponse.json({ note } as { note: Note });
}

export async function DELETE(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    // If no body, delete all notes (legacy behavior)
    await writeNotes([]);
    return NextResponse.json({ success: true });
  }

  const id = typeof body === "object" && body && "id" in body ? (body as { id?: unknown }).id : undefined;
  
  // If no ID provided, delete all notes
  if (!id) {
    await writeNotes([]);
    return NextResponse.json({ success: true });
  }

  // Delete specific note
  if (typeof id !== "string") {
    return NextResponse.json({ error: "Expected { id: string }" }, { status: 400 });
  }

  const notes = await readNotes();
  const filtered = notes.filter((n) => n.id !== id);
  
  if (filtered.length === notes.length) {
    return NextResponse.json({ error: "Note not found" }, { status: 404 });
  }

  await writeNotes(filtered);
  
  // Also delete from Chroma
  try {
    await deleteFromChroma(id);
  } catch (e) {
    console.error("Failed to delete from Chroma:", e);
    // Don't fail the request if Chroma deletion fails
  }

  return NextResponse.json({ success: true });
}

