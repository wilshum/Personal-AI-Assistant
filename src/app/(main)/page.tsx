import Link from "next/link";
import { AssistantChat } from "@/components/AssistantChat";
import { NotesPanel } from "@/components/NotesPanel";
import { NAV_ITEMS } from "@/lib/nav";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Today</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
        A calm home for the different parts of your life. Chat below uses your Google AI Studio key on the server; the model sees your full thread each time.
      </p>

      <AssistantChat />
      <NotesPanel />

      <h2 className="mt-12 text-sm font-semibold uppercase tracking-wide text-zinc-500">Areas</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-xl border border-zinc-200/90 bg-white/70 p-4 transition-colors hover:border-blue-300 hover:bg-white/90 backdrop-blur-sm"
            >
              <span className="font-medium text-zinc-900">{item.label}</span>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
