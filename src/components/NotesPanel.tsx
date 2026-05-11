"use client";

import { useEffect, useMemo, useState } from "react";

type Note = {
  id: string;
  createdAt: string;
  text: string;
};

export function NotesPanel() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [indexHint, setIndexHint] = useState<string | null>(null);
  const [reindexPending, setReindexPending] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const sorted = useMemo(() => notes, [notes]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/notes");
      const data = (await res.json()) as { notes?: Note[] };
      setNotes(Array.isArray(data.notes) ? data.notes : []);
    })().catch(() => {});
  }, []);

  async function addNote() {
    const t = text.trim();
    if (!t || pending) return;
    setPending(true);
    setError(null);
    setIndexHint(null);
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: t }),
      });
      const data: unknown = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg =
          typeof data === "object" && data && "error" in data && typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : `Request failed (${res.status})`;
        throw new Error(msg);
      }
      const note =
        typeof data === "object" && data && "note" in data && typeof (data as { note: unknown }).note === "object"
          ? (data as { note: Note }).note
          : null;
      if (!note) throw new Error("Bad response");

      setNotes((prev) => [note, ...prev]);
      setText("");

      const idxRes = await fetch("/api/memory/index", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: note.text, sourceId: note.id }),
      });
      const idxData: unknown = await idxRes.json().catch(() => ({}));
      if (!idxRes.ok) {
        const msg =
          typeof idxData === "object" && idxData && "error" in idxData && typeof (idxData as { error: unknown }).error === "string"
            ? (idxData as { error: string }).error
            : `Indexing failed (${idxRes.status}). Is Chroma running? Try: docker compose up -d`;
        throw new Error(msg);
      }
      const chunks =
        typeof idxData === "object" && idxData && "chunks" in idxData && typeof (idxData as { chunks: unknown }).chunks === "number"
          ? (idxData as { chunks: number }).chunks
          : 0;
      setIndexHint(`Indexed into Chroma (${chunks} chunk${chunks === 1 ? "" : "s"}). Chat can use this on the next message.`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setPending(false);
    }
  }

  async function reindexAll() {
    setReindexPending(true);
    setError(null);
    setIndexHint(null);
    try {
      const res = await fetch("/api/memory/reindex", { method: "POST" });
      const data: unknown = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg =
          typeof data === "object" && data && "error" in data && typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : `Reindex failed (${res.status})`;
        throw new Error(msg);
      }
      const indexed =
        typeof data === "object" && data && "indexed" in data && typeof (data as { indexed: unknown }).indexed === "number"
          ? (data as { indexed: number }).indexed
          : 0;
      const total =
        typeof data === "object" && data && "total" in data && typeof (data as { total: unknown }).total === "number"
          ? (data as { total: number }).total
          : 0;
      const errors =
        typeof data === "object" && data && "errors" in data && Array.isArray((data as { errors: unknown }).errors)
          ? (data as { errors: string[] }).errors
          : [];
      if (errors.length) {
        throw new Error(errors.slice(0, 2).join(" · "));
      }
      setIndexHint(`Reindexed ${indexed} / ${total} notes into Chroma.`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Reindex failed");
    } finally {
      setReindexPending(false);
    }
  }

  async function deleteNote(id: string) {
    setError(null);
    setIndexHint(null);
    setDeletingId(id);
    try {
      const res = await fetch("/api/notes", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        throw new Error(`Failed to delete note (${res.status})`);
      }
      setNotes((prev) => prev.filter((n) => n.id !== id));
      setIndexHint("Note deleted successfully.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to delete note");
    } finally {
      setDeletingId(null);
    }
  }

  async function clearAllNotes() {
    if (!confirm("Are you sure you want to delete all notes? This action cannot be undone.")) return;
    
    setError(null);
    setIndexHint(null);
    try {
      const res = await fetch("/api/notes", { method: "DELETE" });
      if (!res.ok) {
        throw new Error(`Failed to clear notes (${res.status})`);
      }
      setNotes([]);
      setIndexHint("All notes cleared successfully.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to clear notes");
    }
  }

  return (
    <section className="mt-10 rounded-2xl border border-zinc-200 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-200 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold text-zinc-900">Notes (stored locally)</h2>
          <p className="text-xs text-zinc-500">
            Notes are saved to disk, then embedded and stored in Chroma so chat can retrieve them.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => void reindexAll()}
            disabled={reindexPending}
            className="shrink-0 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 disabled:opacity-50"
          >
            {reindexPending ? "Reindexing…" : "Re-index all notes"}
          </button>
          <button
            type="button"
            onClick={() => void clearAllNotes()}
            disabled={notes.length === 0}
            className="shrink-0 rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs font-medium text-red-700 transition-colors hover:bg-red-50 disabled:opacity-50"
          >
            Clear all notes
          </button>
        </div>
      </div>

      {error && (
        <div className="border-b border-red-200 bg-red-50 px-4 py-2 text-xs text-red-800">
          {error}
        </div>
      )}

      {indexHint && !error && (
        <div className="border-b border-emerald-200 bg-emerald-50 px-4 py-2 text-xs text-emerald-900">
          {indexHint}
        </div>
      )}

      <div className="p-4">
        <div className="flex gap-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a note you’d like the assistant to remember…"
            rows={3}
            className="min-h-[52px] flex-1 resize-y rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300/50"
          />
          <button
            type="button"
            onClick={() => void addNote()}
            disabled={pending || !text.trim()}
            className="self-end rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? "Saving…" : "Save"}
          </button>
        </div>

        <ul className="mt-6 space-y-3">
          {sorted.slice(0, 10).map((n) => (
            <li key={n.id} className="rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-800">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="whitespace-pre-wrap">{n.text}</p>
                  <p className="mt-2 text-[11px] text-zinc-500">{new Date(n.createdAt).toLocaleString()}</p>
                </div>
                <button
                  type="button"
                  onClick={() => void deleteNote(n.id)}
                  disabled={deletingId === n.id}
                  className="shrink-0 rounded-lg border border-red-200 bg-white px-2 py-1 text-[11px] font-medium text-red-700 transition-colors hover:bg-red-50 disabled:opacity-50"
                  title="Delete this note"
                >
                  {deletingId === n.id ? "Deleting…" : "Delete"}
                </button>
              </div>
            </li>
          ))}
          {sorted.length === 0 && <li className="text-sm text-zinc-500">No notes yet.</li>}
        </ul>
      </div>
    </section>
  );
}
