import { SectionShell } from "@/components/SectionShell";

export default function MoneyPage() {
  return (
    <SectionShell
      title="Money management"
      subtitle="Separate spending rhythm from investing noise. Use this view for budgets, subscriptions, and savings targets."
    >
      <div className="space-y-6">
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Use this tab</h2>
            <p className="mt-1 text-sm text-zinc-600">Track your money goals and everyday spending in one place.</p>
          </div>
          <p className="text-sm text-zinc-600">Capture budgets, subscriptions, and saving targets so decisions feel calm instead of reactive.</p>
        </div>

        {/* Budgeting & Tracking */}
        <div className="space-y-4 rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Budgeting & Tracking</h2>
            <p className="mt-1 text-sm text-zinc-600">Monitor spending and stay on budget</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.ynab.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  YNAB - You Need A Budget
                </a>
              </li>
              <li>
                <a href="https://www.mint.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Mint - Spending Tracker
                </a>
              </li>
              <li>
                <a href="https://www.personalcapital.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Personal Capital - Comprehensive Finances
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Savings & Investing */}
        <div className="space-y-4 rounded-xl border border-dashed border-teal-200 bg-teal-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Savings & Investing</h2>
            <p className="mt-1 text-sm text-zinc-600">Build wealth over time</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.vanguard.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Vanguard - Low-Cost Funds
                </a>
              </li>
              <li>
                <a href="https://www.schwab.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Charles Schwab - Brokerage
                </a>
              </li>
              <li>
                <a href="https://www.bogleheads.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Bogleheads - Investment Philosophy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Taxes & Planning */}
        <div className="space-y-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Taxes & Planning</h2>
            <p className="mt-1 text-sm text-zinc-600">Optimize your tax situation</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  IRS.gov - Official Tax Information
                </a>
              </li>
              <li>
                <a href="https://www.investopedia.com/terms/t/tax-planning.asp" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Investopedia - Tax Planning Guide
                </a>
              </li>
              <li>
                <a href="https://www.turbotax.intuit.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  TurboTax - Tax Filing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Financial Education */}
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Financial Education</h2>
            <p className="mt-1 text-sm text-zinc-600">Learn personal finance fundamentals</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.khanacademy.org/college-careers-more/finance-and-capital-markets" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Khan Academy - Finance Courses
                </a>
              </li>
              <li>
                <a href="https://podcast.getrichslowly.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Get Rich Slowly Podcast
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* YouTube Videos */}
        <div className="space-y-4 rounded-xl border border-dashed border-orange-200 bg-orange-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Money Videos</h2>
            <p className="mt-1 text-sm text-zinc-600">Budget tips, investing, and financial planning</p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://www.youtube.com/watch?v=0HPbvf-Gm1c" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-orange-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/0HPbvf-Gm1c/maxresdefault.jpg" alt="Budgeting" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Personal Finance 101</p>
                <p className="text-xs text-zinc-500 mt-1">Graham Stephan</p>
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=gFQNPmLKJ1k" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-orange-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/gFQNPmLKJ1k/maxresdefault.jpg" alt="Saving Money" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Save Money & Build Wealth</p>
                <p className="text-xs text-zinc-500 mt-1">Two Cents - PBS</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
