"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ChatMessage = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "personal-assistant-chat-v1";

function loadStored(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const out: ChatMessage[] = [];
    for (const m of parsed) {
      if (!m || typeof m !== "object") continue;
      const role = (m as { role?: string }).role;
      const content = (m as { content?: string }).content;
      if (role !== "user" && role !== "assistant") continue;
      if (typeof content !== "string") continue;
      out.push({ role, content });
    }
    return out;
  } catch {
    return [];
  }
}

export function AssistantChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const prevMessagesLenRef = useRef<number>(0);

  useEffect(() => {
    setMessages(loadStored());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* quota or private mode */
    }
  }, [messages, hydrated]);

  useEffect(() => {
    const prevLen = prevMessagesLenRef.current;
    const curLen = messages.length;
    const last = messages[curLen - 1];

    // Only auto-scroll when a new assistant reply was appended.
    if (curLen > prevLen && last && last.role === "assistant") {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    }

    prevMessagesLenRef.current = curLen;
  }, [messages]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || pending) return;

    setError(null);
    const userMessage: ChatMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setPending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data: unknown = await res.json().catch(() => ({}));
      if (!res.ok) {
        const err =
          typeof data === "object" && data && "error" in data && typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : `Request failed (${res.status})`;
        throw new Error(err);
      }
      const reply =
        typeof data === "object" && data && "text" in data && typeof (data as { text: unknown }).text === "string"
          ? (data as { text: string }).text
          : "";
      if (!reply) throw new Error("No reply text");
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setMessages((prev) => prev.slice(0, -1));
      setInput(text);
    } finally {
      setPending(false);
    }
  }, [input, messages, pending]);

  const clear = useCallback(() => {
    setMessages([]);
    setError(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <section className="mt-10 rounded-2xl border border-zinc-200 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold text-zinc-900">Assistant chat</h2>
          <p className="text-xs text-zinc-500">
            Remembers this thread (and your device) until you clear it.
          </p>
        </div>
        <button
          type="button"
          onClick={clear}
          className="shrink-0 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          Clear
        </button>
      </div>

      <div className="flex max-h-[min(420px,55vh)] flex-col">
        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4" ref={messagesRef}>
          {messages.length === 0 && (
            <p className="text-sm text-zinc-500">Say hi—your messages are sent with full history so the model keeps context.</p>
          )}
          {messages.map((m, i) => (
            <div
              key={`${i}-${m.role}`}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  m.role === "user"
                    ? "max-w-[85%] rounded-2xl rounded-br-md bg-zinc-900 px-3 py-2 text-sm leading-relaxed text-white"
                    : "max-w-[85%] rounded-2xl rounded-bl-md border border-zinc-200 bg-white px-3 py-2 text-sm leading-relaxed text-zinc-800"
                }
              >
                <p className="whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
          {pending && (
            <p className="text-xs text-zinc-500" aria-live="polite">
              Thinking…
            </p>
          )}
        </div>

        {error && (
          <div className="border-t border-red-200 bg-red-50 px-4 py-2 text-xs text-red-800">
            {error}
          </div>
        )}

        <form
          className="border-t border-zinc-200 p-3"
          onSubmit={(e) => {
            e.preventDefault();
            void send();
          }}
        >
          <div className="flex gap-2">
            <label className="sr-only" htmlFor="chat-input">
              Message
            </label>
            <textarea
              id="chat-input"
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send();
                }
              }}
              placeholder="Write a message…"
              disabled={pending}
              className="min-h-[44px] flex-1 resize-y rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300/50 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              className="self-end rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
