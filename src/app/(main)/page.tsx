import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Today</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        A calm home for the different parts of your life. Choose a category from the sidebar to go deep on one area at a time.
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-xl border border-zinc-200/90 bg-zinc-50/50 p-4 transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">{item.label}</span>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
