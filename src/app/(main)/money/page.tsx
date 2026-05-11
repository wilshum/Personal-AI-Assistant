import { SectionShell } from "@/components/SectionShell";

export default function MoneyPage() {
  return (
    <SectionShell
      title="Money management"
      subtitle="Separate spending rhythm from investing noise. Use this view for budgets, subscriptions, and savings targets."
    >
      <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400">
        <p>Later you can wire real accounts or CSV imports. For now, treat this as a dedicated mental slot for cash flow and bills.</p>
      </div>
    </SectionShell>
  );
}
