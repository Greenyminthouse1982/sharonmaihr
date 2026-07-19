import Image from "next/image";
import Link from "next/link";

import { categories } from "@/data/categories";
import type { CategoryIcon } from "@/data/categories";
import { client } from "@/sanity/lib/client";

type SanityArticle = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt?: string;
  image?: string;
};

const FEATURED_ARTICLES_QUERY = `
  *[
    _type == "article" &&
    defined(slug.current) &&
    category in [
      "hr-knowledge",
      "labor-laws",
      "market-perspectives"
    ]
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    "image": image.asset->url
  }
`;

function CategoryIconGraphic({ type }: { type: CategoryIcon }) {
  if (type === "book") {
    return (
      <>
        <path d="M4 5.5c2.5-.8 5.1-.2 8 1.7v11c-2.9-1.9-5.5-2.5-8-1.7v-11Z" />
        <path d="M20 5.5c-2.5-.8-5.1-.2-8 1.7v11c2.9-1.9 5.5-2.5 8-1.7v-11Z" />
      </>
    );
  }

  if (type === "clipboard") {
    return (
      <>
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 4V2.8h6V4" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </>
    );
  }

  return (
    <>
      <path d="M4 20h16" />
      <path d="M7 17v-5M11 17V9M15 17v-7M19 17V6" />
      <path d="m6 10 4-3 4 2 5-5" />
      <path d="M16 4h3v3" />
    </>
  );
}

function formatArticleDate(publishedAt?: string) {
  if (!publishedAt) {
    return "";
  }

  const date = new Date(publishedAt);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function FeaturedArticles() {
  const articles = await client.fetch<SanityArticle[]>(
    FEATURED_ARTICLES_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return (
    <section
      id="featured-articles"
      className="knowledge-section"
      aria-label="Featured articles"
    >
      <div className="site-container">
        <div className="knowledge-grid">
          {categories.map((category) => {
            const categoryArticles = articles
              .filter(
                (article) => article.category === category.slug
              )
              .slice(0, 3);

            const categoryHref = `/${category.slug}`;

            return (
              <article
                className="knowledge-card"
                key={category.slug}
              >
                <div className="knowledge-card__header">
                  <Link
                    href={categoryHref}
                    className="knowledge-card__icon-link"
                    aria-label={`Open ${category.title}`}
                  >
                    <div
                      className="knowledge-card__icon"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <CategoryIconGraphic type={category.icon} />
                      </svg>
                    </div>
                  </Link>

                  <div className="knowledge-card__heading">
                    <h2>
                      <Link href={categoryHref}>
                        {category.title}
                      </Link>
                    </h2>

                    <p>{category.description}</p>
                  </div>
                </div>

                <div className="knowledge-card__articles">
                  {categoryArticles.length > 0 ? (
                    categoryArticles.map((article) => {
                      const articleHref =
                        `/${category.slug}/${article.slug}`;

                      return (
                        <Link
                          className="knowledge-article"
                          href={articleHref}
                          key={article._id}
                          aria-label={`Open article: ${article.title}`}
                        >
                          <Image
                            src={
                              article.image ||
                              "/hero-hr-team.png"
                            }
                            alt={article.title}
                            width={92}
                            height={50}
                            className="knowledge-article__image"
                          />

                          <span className="knowledge-article__content">
                            <strong>{article.title}</strong>

                            {article.publishedAt ? (
                              <small>
                                {formatArticleDate(
                                  article.publishedAt
                                )}
                              </small>
                            ) : null}
                          </span>
                        </Link>
                      );
                    })
                  ) : (
                    <p className="knowledge-card__empty">
                      No articles published yet.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}