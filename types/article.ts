export type ArticleIcon = "book" | "clipboard" | "chart";

export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
}

export interface ArticleCategory {
  title: string;
  slug: string;
  description: string;
  icon: ArticleIcon;
  articles: Article[];
}