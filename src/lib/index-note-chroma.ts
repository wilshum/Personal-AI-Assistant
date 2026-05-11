import { GoogleGenAI } from "@google/genai";
import crypto from "node:crypto";
import { upsertToChroma } from "@/lib/chroma";

const DEFAULT_EMBED_MODEL = "gemini-embedding-001";

function chunkText(text: string, maxChars = 900, overlap = 120) {
  const t = text.trim();
  if (t.length <= maxChars) return [t];
  const chunks: string[] = [];
  let i = 0;
  while (i < t.length) {
    const end = Math.min(t.length, i + maxChars);
    chunks.push(t.slice(i, end));
    if (end >= t.length) break;
    i = Math.max(0, end - overlap);
  }
  return chunks;
}

async function embedMany(texts: string[], apiKey: string, model: string) {
  const ai = new GoogleGenAI({ apiKey });
  const resp = await ai.models.embedContent({
    model,
    contents: texts,
  });

  const raw = resp.embeddings ?? [];
  const embeddings: number[][] = raw.map((e) => {
    const v = e.values;
    if (!Array.isArray(v) || v.length === 0) throw new Error("Empty embedding vector");
    return v;
  });
  if (embeddings.length !== texts.length) throw new Error("Embedding response size mismatch");
  return embeddings;
}

export async function indexNoteTextToChroma(args: { text: string; sourceId?: string; apiKey: string }) {
  const chunks = chunkText(args.text);
  const embedModel = process.env.GEMINI_EMBED_MODEL?.trim() || DEFAULT_EMBED_MODEL;
  const vectors = await embedMany(chunks, args.apiKey, embedModel);

  const base = typeof args.sourceId === "string" && args.sourceId.trim() ? args.sourceId.trim() : crypto.randomUUID();
  const ids = chunks.map((_, idx) => `note_${base}_${idx}`);

  await upsertToChroma({
    ids,
    embeddings: vectors,
    documents: chunks,
    metadatas: chunks.map((_, idx) => ({
      type: "note",
      sourceId: base,
      chunk: String(idx),
      createdAt: new Date().toISOString(),
    })),
  });

  return { chunks: chunks.length, sourceId: base };
}
