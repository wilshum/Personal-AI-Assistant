import { AreaHero } from "@/components/AreaHero";
import { SectionShell } from "@/components/SectionShell";

export default function HealthPage() {
  return (
    <SectionShell
      title="Health"
      subtitle="Keep fitness, habits, and wellness check-ins in one calm place so energy and routine stay consistent."
    >
      <div className="space-y-8">
        <AreaHero
          image="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=80"
          title="Health inspiration"
          description="A fresh health-focused hero image paired with trusted wellness and fitness platform logos."
          logos={[
            { href: "https://www.who.int/", src: "https://logo.clearbit.com/who.int", title: "WHO" },
            { href: "https://www.healthline.com/", src: "https://logo.clearbit.com/healthline.com", title: "Healthline" },
            { href: "https://www.myfitnesspal.com/", src: "https://logo.clearbit.com/myfitnesspal.com", title: "MyFitnessPal" },
          ]}
        />

        <div className="space-y-6">
          <div className="space-y-4 rounded-xl border border-dashed border-pink-200 bg-pink-50/50 p-6">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Use this tab</h2>
              <p className="mt-1 text-sm text-zinc-600">Track your habits, workouts, and appointments in one place.</p>
            </div>
            <p className="text-sm text-zinc-600">Capture how you feel, what you do, and the small wins that build reliable health.</p>
          </div>

          <div className="space-y-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Routine & Habits</h2>
              <p className="mt-1 text-sm text-zinc-600">Make daily health actions habitual and easy to review.</p>
            </div>
            <ul className="space-y-2 text-sm text-blue-600">
              <li>
                <a href="https://www.myfitnesspal.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 hover:underline">
                  MyFitnessPal - Nutrition tracking and meal logs
                </a>
              </li>
              <li>
                <a href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 hover:underline">
                  Headspace - Mindfulness and meditation
                </a>
              </li>
              <li>
                <a href="https://www.sleepfoundation.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 hover:underline">
                  Sleep Foundation - Better rest and recovery
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-6">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Wellness Check-ins</h2>
              <p className="mt-1 text-sm text-zinc-600">Capture mood, energy, and progress notes.</p>
            </div>
            <p className="text-sm text-zinc-600">Use notes to record how you felt after workouts, your recovery days, and the small habits that matter most.</p>
          </div>

          <div className="space-y-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Health Resources</h2>
              <p className="mt-1 text-sm text-zinc-600">Save research, appointments, and trusted guidance links.</p>
            </div>
            <ul className="space-y-2 text-sm text-blue-600">
              <li>
                <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 hover:underline">
                  CDC - Authoritative health guidance
                </a>
              </li>
              <li>
                <a href="https://www.healthline.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 hover:underline">
                  Healthline - Medical and lifestyle advice
                </a>
              </li>
              <li>
                <a href="https://www.webmd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 hover:underline">
                  WebMD - Symptoms, conditions, and care tips
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
