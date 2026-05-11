import { SectionShell } from "@/components/SectionShell";

export default function StocksPage() {
  return (
    <SectionShell
      title="Stocks"
      subtitle="Track what you own, what you are watching, and why—so decisions stay intentional instead of reactive."
    >
      <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400">
        <p>Placeholder for watchlists, thesis notes, and earnings reminders. Hook up a data provider when you are ready.</p>
      </div>
    </SectionShell>
  );
}
