import { SectionShell } from "@/components/SectionShell";

export default function JobPage() {
  return (
    <SectionShell
      title="Job"
      subtitle="Keep one thread for career: priorities for the week, stakeholder updates, and skills you are building."
    >
      <div className="space-y-6">
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Use this tab</h2>
            <p className="mt-1 text-sm text-zinc-600">Keep your job-related plans, goals, and updates in one place.</p>
          </div>
          <p className="text-sm text-zinc-600">Save interview notes, career goals, and quick follow-ups so your next step stays clear.</p>
        </div>

        {/* Career Development */}
        <div className="space-y-4 rounded-xl border border-dashed border-indigo-200 bg-indigo-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Career Development</h2>
            <p className="mt-1 text-sm text-zinc-600">Build skills and plan your growth</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Coursera - Online Learning Courses
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  LinkedIn Learning - Professional Skills
                </a>
              </li>
              <li>
                <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Udemy - Affordable Career Courses
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Interview Prep */}
        <div className="space-y-4 rounded-xl border border-dashed border-cyan-200 bg-cyan-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Interview Preparation</h2>
            <p className="mt-1 text-sm text-zinc-600">Get ready for your next opportunity</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  LeetCode - Technical Interview Practice
                </a>
              </li>
              <li>
                <a href="https://www.glassdoor.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Glassdoor - Company Reviews & Interview Questions
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@tprojects" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  T-Projects (YouTube) - Interview Tips
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Job Search */}
        <div className="space-y-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Job Search Platforms</h2>
            <p className="mt-1 text-sm text-zinc-600">Find your next role</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  LinkedIn Jobs - Professional Network
                </a>
              </li>
              <li>
                <a href="https://angel.co/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Wellfound - Startup Jobs
                </a>
              </li>
              <li>
                <a href="https://www.indeed.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Indeed - Job Search Engine
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Work Notes */}
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Your Work Log</h2>
            <p className="mt-1 text-sm text-zinc-600">OKRs, 1:1 notes, and wins</p>
          </div>
          <p className="text-sm text-zinc-600">Use the notes panel to track priorities, stakeholder updates, accomplishments, and skills you're building.</p>
        </div>

        {/* YouTube Videos */}
        <div className="space-y-4 rounded-xl border border-dashed border-purple-200 bg-purple-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Career Videos</h2>
            <p className="mt-1 text-sm text-zinc-600">Interviews, tips, and professional development</p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://www.youtube.com/watch?v=Cc4GF5AY0fs" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-purple-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/Cc4GF5AY0fs/maxresdefault.jpg" alt="Interviewing" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Ace Your Interview</p>
                <p className="text-xs text-zinc-500 mt-1">TED-Ed</p>
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=CKJA0WuZJqE" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-purple-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/CKJA0WuZJqE/maxresdefault.jpg" alt="Career Growth" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Career Pivots & Growth</p>
                <p className="text-xs text-zinc-500 mt-1">Ali Abdaal</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
