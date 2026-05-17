import { AreaHero } from "@/components/AreaHero";
import { SectionShell } from "@/components/SectionShell";

export default function DatingPage() {
  return (
    <SectionShell
      title="Dating"
      subtitle="Clarify what you want, reflect after dates, and keep boundaries visible—without mixing this headspace into work or money tabs."
    >
      <div className="space-y-8">
        <AreaHero
          image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
          title="Dating inspiration"
          description="A warm visual cue to keep relationship notes feeling thoughtful, with platform logos for easy reference."
          logos={[
            { href: "https://hinge.co", src: "https://logo.clearbit.com/hinge.co", title: "Hinge" },
            { href: "https://bumble.com", src: "https://logo.clearbit.com/bumble.com", title: "Bumble" },
            { href: "https://psychologytoday.com", src: "https://logo.clearbit.com/psychologytoday.com", title: "Psychology Today" },
          ]}
        />
        <div className="space-y-6">
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Use this tab</h2>
            <p className="mt-1 text-sm text-zinc-600">Keep dating intentions, reflections, and boundaries together.</p>
          </div>
          <p className="text-sm text-zinc-600">Use the notes panel here for date recaps, dealbreakers, and what felt good or off.</p>
        </div>

        {/* Dating Platforms */}
        <div className="space-y-4 rounded-xl border border-dashed border-pink-200 bg-pink-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Dating Platforms</h2>
            <p className="mt-1 text-sm text-zinc-600">Apps and websites for meeting people</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.hinge.co" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Hinge - The app designed to be deleted
                </a>
              </li>
              <li>
                <a href="https://www.bumble.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Bumble - Women make the first move
                </a>
              </li>
              <li>
                <a href="https://www.theatlantic.com/technology/archive/2024/01/modern-dating-apps/677154/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  The Atlantic - Modern Dating Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Relationship & Communication */}
        <div className="space-y-4 rounded-xl border border-dashed border-purple-200 bg-purple-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Relationship Advice</h2>
            <p className="mt-1 text-sm text-zinc-600">Building healthy relationships and communication</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.gottman.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  The Gottman Institute - Relationship Research
                </a>
              </li>
              <li>
                <a href="https://www.psychologytoday.com/us/basics/relationships" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Psychology Today - Relationship Basics
                </a>
              </li>
              <li>
                <a href="https://www.ted.com/topics/love" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  TED Talks - Love & Relationships
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Self-Improvement */}
        <div className="space-y-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Personal Growth</h2>
            <p className="mt-1 text-sm text-zinc-600">Develop yourself for better relationships</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.mindful.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Mindful Magazine - Mindfulness & Dating
                </a>
              </li>
              <li>
                <a href="https://www.brainpickings.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Brain Pickings - Ideas on Love & Life
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Your Notes */}
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Your Boundaries & Patterns</h2>
            <p className="mt-1 text-sm text-zinc-600">Personal reflections and non-negotiables</p>
          </div>
          <p className="text-sm text-zinc-600">Use the notes panel to track patterns, dealbreakers, and what you're looking for in a partner.</p>
        </div>
        {/* YouTube Videos */}
        <div className="space-y-4 rounded-xl border border-dashed border-red-200 bg-red-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Dating Advice Videos</h2>
            <p className="mt-1 text-sm text-zinc-600">Relationship wisdom and self-improvement</p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://www.youtube.com/watch?v=S8X5cJM4K1k" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-red-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/S8X5cJM4K1k/maxresdefault.jpg" alt="Dating" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Modern Dating Wisdom</p>
                <p className="text-xs text-zinc-500 mt-1">School of Life</p>
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=7Ug_q3YS_gE" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-red-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/7Ug_q3YS_gE/maxresdefault.jpg" alt="Relationships" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Healthy Relationships</p>
                <p className="text-xs text-zinc-500 mt-1">TEDx Talks</p>
              </div>
            </a>
          </div>
        </div>      </div>
      </div>
    </SectionShell>
  );
}
