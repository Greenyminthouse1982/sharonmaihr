import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";

const laborTopics = [
  "Labor Contract",
  "Probation Period",
  "Wage & Salary",
  "Working Hours",
  "Termination",
];

export default function LaborLawsPage() {
  const category = categories.find(
    (item) => item.slug === "labor-laws"
  );

  const laborArticles = getArticlesByCategory("labor-laws");

  if (!category) {
    return null;
  }

  return (
    <>
      <Header />

      <main className="hr-page labor-laws-page">
        <section className="hr-page__hero labor-laws-page__hero">
          <div className="site-container hr-page__hero-inner">
            <div className="hr-page__hero-content">
              <h1>{category.title}</h1>

              <p className="hr-page__hero-description">
                {category.description}
              </p>
            </div>

            <div className="hr-page__hero-visual labor-laws-page__visual">
              <Image
                src="/labor-laws-hero-final.png"
                alt="Scales of justice, legal books and an office plant"
                width={660}
                height={320}
                className="hr-page__hero-image labor-laws-page__hero-image"
                priority
              />
            </div>
          </div>
        </section>

        <section className="hr-page__content">
          <SearchBar
            label="Popular topics:"
            ariaLabel="Search labor law articles"
            popularTopics={laborTopics}
          />

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
              {laborArticles.map((article) => (
                <article
                  className="hr-article-row"
                  key={article.slug}
                >
                  <Link
                    href={`/labor-laws/${article.slug}`}
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
                      <Link href={`/labor-laws/${article.slug}`}>
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
              aria-label="Labor law article pages"
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
                aria-current="page"
              >
                1
              </button>

              <button type="button">2</button>
              <button type="button">3</button>

              <span aria-hidden="true">…</span>

              <button type="button">8</button>

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