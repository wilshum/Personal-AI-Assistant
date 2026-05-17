"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";

const icons: Record<string, ReactNode> = {
  "/job": (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "/cooking": (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M7 3v4M11 3v4M15 3v4M6 7h10v4a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V7Zm10 2h1a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "/money": (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 3v18M17 7H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 1 0 5H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "/health": (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 7.5v9M7.5 12h9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "/stocks": (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 19V5M4 19h16M8 17V9m4 8V7m4 10v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "/social": (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12-4v6m-3-3h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "/dating": (
    <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.5.5-.5-.5a5.5 5.5 0 0 0-7.8 7.8l.5.5L12 21l7.3-7.3.5-.5a5.5 5.5 0 0 0 0-7.8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-72 shrink-0 flex-col border-r border-zinc-200/80 bg-white/90 backdrop-blur-sm">
      <div className="flex h-14 items-center border-b border-zinc-200/80 px-4">
        <Link href="/" className="font-semibold tracking-tight text-zinc-900 whitespace-nowrap">
          Personal AI Knowledge Assistant
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 p-3" aria-label="Life areas">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-blue-50 text-zinc-900 shadow-sm ring-1 ring-blue-200"
                  : "text-zinc-600 hover:bg-white/70 hover:text-zinc-900",
              ].join(" ")}
            >
              {icons[item.href]}
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <p className="border-t border-zinc-200/80 px-4 py-3 text-xs leading-relaxed text-zinc-500">
        Pick an area to focus. Add notes and tasks here over time.
      </p>
    </aside>
  );
}
