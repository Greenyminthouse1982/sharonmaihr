import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/categories";
import { getArticleBySlug } from "@/data/articles";

import "./article.css";

type ArticlePageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { category: categorySlug, slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article || article.category !== categorySlug) {
    notFound();
  }

  const category = categories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="article-page">
        <article className="site-container article-page__container">
          <nav
            className="article-page__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${category.slug}`}>
              {category.title}
            </Link>
          </nav>

          <header className="article-page__header">
            <p className="article-page__category">
              {category.title}
            </p>

            <h1>{article.title}</h1>
          </header>

          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={675}
            priority
            draggable={false}
            className="article-page__image"
          />

          <div className="article-page__content">
            <p className="article-page__lead">
              {article.excerpt}
            </p>

            {article.content?.map((paragraph, index) => {
              const isHeading =
                paragraph === "Conclusion" ||
                /^\d+\.\s/.test(paragraph);

              if (isHeading) {
                return (
                  <h2 key={`${paragraph}-${index}`}>
                    {paragraph}
                  </h2>
                );
              }

              return (
                <p key={`${paragraph}-${index}`}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="article-page__bottom">
            <Link
              href={`/${category.slug}`}
              className="article-page__back-link"
            >
              ← Back to {category.title}
            </Link>

            <div className="article-page__views-footer">
              <span aria-hidden="true">◉</span>{" "}
              {article.views.toLocaleString("en-US")} views
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}