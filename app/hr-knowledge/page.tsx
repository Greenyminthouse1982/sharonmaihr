import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { client } from "@/sanity/lib/client";

type Article = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  publishedAt?: string;
  image?: string;
};

const HR_ARTICLES_QUERY = `
  *[
    _type == "article" &&
    category == "hr-knowledge"
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    "image": image.asset->url
  }
`;

export default async function HRKnowledgePage() {
  const category = categories.find(
    (item) => item.slug === "hr-knowledge"
  );

  const hrArticles = await client.fetch<Article[]>(
    HR_ARTICLES_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!category) {
    return null;
  }

  return (
    <>
      <Header />

      <main className="hr-page">
        <section className="hr-page__hero">
          <div className="site-container hr-page__hero-inner">
            <div className="hr-page__hero-content">
              <p className="hr-page__eyebrow">
                HR INSIGHTS &amp; RESOURCES
              </p>

              <h1>{category.title}</h1>

              <p className="hr-page__hero-description">
                {category.description}
              </p>
            </div>

            <div className="hr-page__hero-visual">
              <div
                className="hr-page__hero-circle"
                aria-hidden="true"
              />

              <Image
                src="/hero-hr-team.png"
                alt="HR professionals reviewing workforce information"
                width={680}
                height={302}
                className="hr-page__hero-image"
                priority
              />
            </div>
          </div>
        </section>

        <section className="hr-page__content">
          <SearchBar />

          <div className="site-container hr-page__articles-container">
            <div
              className="hr-page__tabs"
              aria-label="Article sorting"
            >
              <button
                type="button"
                className="hr-page__tab is-active"
              >
                Latest
              </button>

              <button
                type="button"
                className="hr-page__tab"
              >
                Most Popular
              </button>
            </div>

            <div className="hr-article-list">
              {hrArticles.length > 0 ? (
                hrArticles.map((article) => (
                  <article
                    className="hr-article-row"
                    key={article._id}
                  >
                    <Link
                      href={`/hr-knowledge/${article.slug}`}
                      className="hr-article-row__image-link"
                    >
                      <Image
                        src={article.image || "/hero-hr-team.png"}
                        alt={article.title}
                        width={220}
                        height={124}
                        className="hr-article-row__image"
                      />
                    </Link>

                    <div className="hr-article-row__content">
                      <h2>
                        <Link
                          href={`/hr-knowledge/${article.slug}`}
                        >
                          {article.title}
                        </Link>
                      </h2>

                      <p>{article.description}</p>
                    </div>

                    {article.publishedAt && (
                      <time
                        className="hr-article-row__date"
                        dateTime={article.publishedAt}
                      >
                        {new Date(
                          article.publishedAt
                        ).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    )}
                  </article>
                ))
              ) : (
                <p>No articles published yet.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}