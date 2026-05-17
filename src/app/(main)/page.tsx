import Link from "next/link";
import { AssistantChat } from "@/components/AssistantChat";
import { NotesPanel } from "@/components/NotesPanel";
import { TasksToday } from "@/components/TasksToday";
import { TasksTomorrow } from "@/components/TasksTomorrow";
import { NAV_ITEMS } from "@/lib/nav";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <div className="overflow-hidden rounded-[2rem] border border-blue-200/70 bg-white/95 shadow-[0_30px_90px_-50px_rgba(59,130,246,0.3)] ring-1 ring-blue-100">
        <div className="px-8 py-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Today</h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A calm home for the different parts of your life. Chat below uses your Google AI Studio key on the server; the model sees your full thread each time.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            <TasksToday />
            <TasksTomorrow />
            <AssistantChat />
            <NotesPanel />
          </div>

          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Areas</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-3xl border border-blue-100/90 bg-slate-50 px-5 py-4 transition duration-200 hover:border-blue-300 hover:bg-white"
                  >
                    <span className="font-semibold text-slate-950">{item.label}</span>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
