import { SectionShell } from "@/components/SectionShell";

export default function DatingPage() {
  return (
    <SectionShell
      title="Dating"
      subtitle="Clarify what you want, reflect after dates, and keep boundaries visible—without mixing this headspace into work or money tabs."
    >
      <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400">
        <p>Private notes on apps, patterns you notice, and non-negotiables belong here so the rest of the assistant stays compartmentalized.</p>
      </div>
    </SectionShell>
  );
}
