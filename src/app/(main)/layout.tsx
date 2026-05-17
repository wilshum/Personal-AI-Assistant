import { AppSidebar } from "@/components/AppSidebar";
import { DateTimeHeader } from "@/components/DateTimeHeader";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1">
      <AppSidebar />
      <div className="min-h-0 flex-1 flex flex-col bg-white">
        <header className="border-b border-zinc-200/80 bg-slate-50 px-6 py-4">
          <DateTimeHeader />
        </header>
        <main className="min-h-0 flex-1 overflow-y-auto p-6">{children}</main>
        <footer className="border-t border-zinc-200/80 bg-slate-50 px-6 py-3 text-xs text-zinc-500">
          Wilson Shum
        </footer>
      </div>
    </div>
  );
}
