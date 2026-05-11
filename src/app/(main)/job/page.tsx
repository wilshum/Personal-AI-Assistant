import { SectionShell } from "@/components/SectionShell";

export default function JobPage() {
  return (
    <SectionShell
      title="Job"
      subtitle="Keep one thread for career: priorities for the week, stakeholder updates, and skills you are building."
    >
      <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400">
        <p>This space is ready for your own lists: OKRs, 1:1 notes, interview prep, or a simple running log of wins.</p>
      </div>
    </SectionShell>
  );
}
