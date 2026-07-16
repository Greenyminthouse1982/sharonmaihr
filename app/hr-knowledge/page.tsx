import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";

export default function HRKnowledgePage() {
  const category = categories.find(
    (item) => item.slug === "hr-knowledge"
  );

  const hrArticles = getArticlesByCategory("hr-knowledge");

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
              {hrArticles.map((article) => (
                <article
                  className="hr-article-row"
                  key={article.slug}
                >
                  <Link
                    href={`/hr-knowledge/${article.slug}`}
                    className="hr-article-row__image-link"
                  >
                    <Image
                      src={article.image}
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

                    <p>{article.excerpt}</p>
                  </div>

                  <time className="hr-article-row__date">
                    {article.date}
                  </time>
                </article>
              ))}
            </div>

            <nav
              className="hr-pagination"
              aria-label="Article pages"
            >
              <button
                type="button"
                className="hr-pagination__arrow"
                aria-label="Previous page"
                disabled
              >
                ‹
              </button>

              <button
                type="button"
                className="is-active"
              >
                1
              </button>

              <button type="button">2</button>
              <button type="button">3</button>

              <span aria-hidden="true">…</span>

              <button type="button">10</button>

              <button
                type="button"
                className="hr-pagination__arrow"
                aria-label="Next page"
              >
                ›
              </button>
            </nav>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}