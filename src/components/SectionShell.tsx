import type { ReactNode } from "react";

type SectionShellProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function SectionShell({ title, subtitle, children }: SectionShellProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10">
      <div className="overflow-hidden rounded-[2rem] border border-blue-200/70 bg-white/95 shadow-[0_30px_90px_-50px_rgba(59,130,246,0.35)] ring-1 ring-blue-100">
        <header className="border-b border-blue-100/70 px-8 py-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{subtitle}</p>
        </header>
        <div className="px-8 py-8">{children}</div>
      </div>
    </div>
  );
}
