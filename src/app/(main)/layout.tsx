import { AppSidebar } from "@/components/AppSidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1">
      <AppSidebar />
      <div className="min-h-0 flex-1 overflow-y-auto bg-white dark:bg-zinc-950">{children}</div>
    </div>
  );
}
