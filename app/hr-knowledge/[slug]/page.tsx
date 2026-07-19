import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import "./article.css";

type Article = {
  title: string;
  description: string;
  publishedAt?: string;
  image?: string;
  body?: Array<Record<string, unknown>>;
};

const ARTICLE_QUERY = `
  *[
    _type == "article" &&
    slug.current == $slug
  ][0] {
    title,
    description,
    publishedAt,
    "image": image.asset->url,
    body
  }
`;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = await client.fetch<Article | null>(
    ARTICLE_QUERY,
    { slug },
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="article-page">
        <article className="article-container">
          <Link href="/hr-knowledge" className="article-back-link">
            ← Back to HR Knowledge
          </Link>

          <header className="article-header">
            <p className="article-category">HR Knowledge</p>

            <h1 className="article-title">{article.title}</h1>

            {article.description && (
              <p className="article-description">{article.description}</p>
            )}

            {article.publishedAt && (
              <time
                className="article-date"
                dateTime={article.publishedAt}
              >
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            )}
          </header>

          {article.image && (
            <div className="article-image-wrapper">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={675}
                className="article-image"
                priority
              />
            </div>
          )}

          {article.body && (
            <div className="article-content">
              <PortableText value={article.body as never} />
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}