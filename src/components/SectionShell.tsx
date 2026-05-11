import type { ReactNode } from "react";

type SectionShellProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function SectionShell({ title, subtitle, children }: SectionShellProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{subtitle}</p>
      </header>
      {children}
    </div>
  );
}
