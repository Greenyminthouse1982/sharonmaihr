export type CategoryIcon = "book" | "clipboard" | "chart";

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: CategoryIcon;
}

export const categories: Category[] = [
  {
    id: "hr-knowledge",
    slug: "hr-knowledge",
    title: "HR Knowledge",
    description:
      "Practical knowledge and best practices in HR management to drive organizational success.",
    icon: "book",
  },
  {
    id: "labor-laws",
    slug: "labor-laws",
    title: "Labor Laws",
    description:
      "Latest updates and interpretations of labor laws that impact businesses.",
    icon: "clipboard",
  },
  {
    id: "market-perspectives",
    slug: "market-perspectives",
    title: "Market Perspectives",
    description:
      "Trends, research and expert perspectives on the future of work.",
    icon: "chart",
  },
];