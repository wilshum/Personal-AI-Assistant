import { SectionShell } from "@/components/SectionShell";

export default function StocksPage() {
  return (
    <SectionShell
      title="Stocks"
      subtitle="Track what you own, what you are watching, and why—so decisions stay intentional instead of reactive."
    >
      <div className="space-y-6">
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Use this tab</h2>
            <p className="mt-1 text-sm text-zinc-600">Keep watchlists, thesis notes, and research ideas together.</p>
          </div>
          <p className="text-sm text-zinc-600">Use this space to capture both your short-term trades and long-term investment thinking.</p>
        </div>

        {/* Short-term Investing */}
        <div className="space-y-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Short-term Investing</h2>
            <p className="mt-1 text-sm text-zinc-600">Trading and active management over weeks to months</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-zinc-600">Resources and platforms for active trading:</p>
            <ul className="space-y-2">
              <li>
                <a href="https://www.investopedia.com/terms/d/daytrader.asp" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Investopedia - Day Trading Guide
                </a>
              </li>
              <li>
                <a href="https://www.investor.gov/introduction-investing/investing-basics/glossary" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  SEC Investor.gov - Investing Basics
                </a>
              </li>
              <li>
                <a href="https://www.bloomberg.com/markets" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Bloomberg Markets - Real-time Data
                </a>
              </li>
              <li>
                <a href="https://finance.yahoo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Yahoo Finance - Stock Tracking
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3">
            <a href="https://www.youtube.com/watch?v=BYjmRrnS0-A" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/BYjmRrnS0-A/maxresdefault.jpg" alt="Day Trading" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Day Trading for Beginners</p>
                <p className="text-xs text-zinc-500 mt-1">Investopedia</p>
              </div>
            </a>
          </div>
        </div>

        {/* Long-term Investing */}
        <div className="space-y-4 rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Long-term Investing</h2>
            <p className="mt-1 text-sm text-zinc-600">Buy and hold strategy over years to decades</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-zinc-600">Resources for passive investing and wealth building:</p>
            <ul className="space-y-2">
              <li>
                <a href="https://www.bogleheads.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Bogleheads - Index Investing Community
                </a>
              </li>
              <li>
                <a href="https://www.investopedia.com/terms/i/index-investing.asp" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Investopedia - Index Investing Basics
                </a>
              </li>
              <li>
                <a href="https://www.betterment.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Betterment - Automated Investing
                </a>
              </li>
              <li>
                <a href="https://www.vanguard.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Vanguard - Fund & ETF Provider
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://www.youtube.com/watch?v=lGW5zrLhOgE" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-emerald-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/lGW5zrLhOgE/maxresdefault.jpg" alt="Index Investing" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Vanguard Index Funds</p>
                <p className="text-xs text-zinc-500 mt-1">The Investor's Podcast Network</p>
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=gPT3Y1xlM0w" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-emerald-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/gPT3Y1xlM0w/maxresdefault.jpg" alt="Passive Investing" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Passive Investing Explained</p>
                <p className="text-xs text-zinc-500 mt-1">Financial Education</p>
              </div>
            </a>
          </div>
        </div>

        {/* Watchlist */}
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Watchlist & Research</h2>
            <p className="mt-1 text-sm text-zinc-600">Keep track of companies and research tools</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.morningstar.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Morningstar - Stock Analysis & Ratings
                </a>
              </li>
              <li>
                <a href="https://seekingalpha.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Seeking Alpha - Investment Research
                </a>
              </li>
              <li>
                <a href="https://stockanalysis.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  StockAnalysis.com - Fundamental Data
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3">
            <a href="https://www.youtube.com/watch?v=t7Gx7eFyq3s" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/t7Gx7eFyq3s/maxresdefault.jpg" alt="Stock Analysis" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">How to Analyze Stocks</p>
                <p className="text-xs text-zinc-500 mt-1">Graham Stephan</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
