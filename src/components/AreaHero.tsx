"use client";

import { useState } from "react";

type LogoBadge = {
  href: string;
  src: string;
  title: string;
};

type AreaHeroProps = {
  image: string;
  title: string;
  description: string;
  logos: LogoBadge[];
};

function LogoCard({ href, src, title }: LogoBadge) {
  const [failed, setFailed] = useState(false);
  const initials = title
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-2 transition hover:border-blue-300"
      title={title}
    >
      {failed ? (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-100 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
          {initials}
        </div>
      ) : (
        <img
          src={`${src}&size=120`}
          alt={title}
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </a>
  );
}

export function AreaHero({ image, title, description, logos }: AreaHeroProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
      <div className="overflow-hidden rounded-[1.75rem] border border-blue-100/80 bg-slate-50 shadow-sm">
        <div className="relative h-72 overflow-hidden sm:h-80">
          <img
            src={image}
            alt={`${title} hero image`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-slate-950">{title} visuals</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          <div className="mt-6 rounded-3xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Featured logos</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {logos.map((logo) => (
                <LogoCard key={logo.href} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/90 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-950">Visual inspiration</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          These images and logos bring each tab to life with strong visual cues. Keep your notes here relevant to the theme, and the page will feel richer and more polished.
        </p>
      </div>
    </div>
  );
}
