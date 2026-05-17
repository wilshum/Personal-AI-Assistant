import { AreaHero } from "@/components/AreaHero";
import { SectionShell } from "@/components/SectionShell";

export default function SocialPage() {
  return (
    <SectionShell
      title="Social life"
      subtitle="Friendships need lightweight systems too: who you want to see, ideas for hangs, and follow-ups so nobody slips through the cracks."
    >
      <div className="space-y-8">
        <AreaHero
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
          title="Social inspiration"
          description="A vibrant people-first hero image and popular social planning logos to warm up the space."
          logos={[
            { href: "https://www.eventbrite.com/", src: "https://logo.clearbit.com/eventbrite.com", title: "Eventbrite" },
            { href: "https://www.meetup.com/", src: "https://logo.clearbit.com/meetup.com", title: "Meetup" },
            { href: "https://www.yelp.com/", src: "https://logo.clearbit.com/yelp.com", title: "Yelp" },
          ]}
        />
        <div className="space-y-6">
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Use this tab</h2>
            <p className="mt-1 text-sm text-zinc-600">Plan social time, follow-ups, and group ideas in one place.</p>
          </div>
          <p className="text-sm text-zinc-600">Capture events, people to check in with, and creative hangout ideas so friendships stay active.</p>
        </div>

        {/* Event Planning */}
        <div className="space-y-4 rounded-xl border border-dashed border-rose-200 bg-rose-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Event Planning</h2>
            <p className="mt-1 text-sm text-zinc-600">Organize hangouts and gatherings</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.eventbrite.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Eventbrite - Find & Create Events
                </a>
              </li>
              <li>
                <a href="https://www.meetup.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Meetup - Local Groups & Events
                </a>
              </li>
              <li>
                <a href="https://www.airbnb.com/experiences" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Airbnb Experiences - Fun Activities
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Friendship Maintenance */}
        <div className="space-y-4 rounded-xl border border-dashed border-red-200 bg-red-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Stay Connected</h2>
            <p className="mt-1 text-sm text-zinc-600">Tools to keep friendships strong</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.doxie.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Doxie - Friend Check-in Reminders
                </a>
              </li>
              <li>
                <a href="https://www.slack.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Slack - Group Messaging
                </a>
              </li>
              <li>
                <a href="https://www.discord.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Discord - Community Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Ideas */}
        <div className="space-y-4 rounded-xl border border-dashed border-yellow-200 bg-yellow-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Activity Ideas</h2>
            <p className="mt-1 text-sm text-zinc-600">Inspiration for group hangouts</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.timeout.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Timeout - Things to Do
                </a>
              </li>
              <li>
                <a href="https://www.thrillist.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Thrillist - Restaurants & Entertainment
                </a>
              </li>
              <li>
                <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Yelp - Reviews & Recommendations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Your People */}
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Your Circle</h2>
            <p className="mt-1 text-sm text-zinc-600">Birthdays, contact info, and follow-ups</p>
          </div>
          <p className="text-sm text-zinc-600">Use the notes panel to track people you want to see regularly, birthdays, and friends you should text back.</p>
        </div>

        {/* YouTube Videos */}
        <div className="space-y-4 rounded-xl border border-dashed border-pink-200 bg-pink-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Social Videos</h2>
            <p className="mt-1 text-sm text-zinc-600">Social skills, friendship advice, and connection tips</p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://www.youtube.com/watch?v=qm0jnpvCJEI" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-pink-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/qm0jnpvCJEI/maxresdefault.jpg" alt="Making Friends" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">How to Make Real Friends</p>
                <p className="text-xs text-zinc-500 mt-1">Psych2Go</p>
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=qtRHnqygdBA" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-pink-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/qtRHnqygdBA/maxresdefault.jpg" alt="Social Skills" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Conversation Skills</p>
                <p className="text-xs text-zinc-500 mt-1">TED-Ed</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </SectionShell>
  );
}
