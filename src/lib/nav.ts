export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/job",
    label: "Job",
    description: "Career goals, meetings, and deliverables",
  },
  {
    href: "/money",
    label: "Money",
    description: "Budgets, bills, and cash flow",
  },
  {
    href: "/stocks",
    label: "Stocks",
    description: "Watchlists, positions, and research",
  },
  {
    href: "/social",
    label: "Social",
    description: "Friends, plans, and community",
  },
  {
    href: "/dating",
    label: "Dating",
    description: "Matches, dates, and intentions",
  },
];
