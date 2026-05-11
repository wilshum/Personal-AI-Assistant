import { SectionShell } from "@/components/SectionShell";

export default function SocialPage() {
  return (
    <SectionShell
      title="Social life"
      subtitle="Friendships need lightweight systems too: who you want to see, ideas for hangs, and follow-ups so nobody slips through the cracks."
    >
      <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400">
        <p>Use this area for birthdays, recurring dinners, or a short list of people you have been meaning to text back.</p>
      </div>
    </SectionShell>
  );
}
