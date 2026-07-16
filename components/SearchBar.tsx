"use client";

import { FormEvent, useId, useMemo, useState } from "react";
import Link from "next/link";

import { articles } from "@/data/articles";

interface SearchBarProps {
  popularTopics?: string[];
  label?: string;
  ariaLabel?: string;
}

const defaultTopics = [
  "Performance Management",
  "Employee Engagement",
  "Compensation & Benefits",
  "HR Strategy",
  "Recruitment",
  "Onboarding",
];

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export default function SearchBar({
  popularTopics = defaultTopics,
  label = "Popular searches:",
  ariaLabel = "Search HR articles",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const inputId = useId();

  const searchResults = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
      return [];
    }

    return articles
      .filter((article) => {
        const searchableText = normalizeText(
          [
            article.title,
            article.excerpt,
            article.category,
            ...(article.content ?? []),
          ].join(" ")
        );

        return searchableText.includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [query]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!query.trim()) {
      setHasSearched(false);
      return;
    }

    setHasSearched(true);
  }

  function handlePopularSearch(value: string) {
    setQuery(value);
    setHasSearched(true);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setHasSearched(value.trim().length > 0);
  }

  return (
    <section className="search-section" aria-label={ariaLabel}>
      <div className="site-container">
        <div className="search-panel">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-input-wrapper">
              <svg
                className="search-main-icon"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="m20 20-4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              <label htmlFor={inputId} className="sr-only">
                Search articles, topics or keywords
              </label>

              <input
                id={inputId}
                className="search-input"
                type="search"
                value={query}
                placeholder="Search articles, topics or keywords..."
                autoComplete="off"
                onChange={(event) =>
                  handleQueryChange(event.target.value)
                }
              />
            </div>

            <button type="submit" className="search-submit-button">
              Search
            </button>
          </form>

          <div className="popular-searches">
            <span className="popular-searches-label">{label}</span>

            <div className="popular-searches-list">
              {popularTopics.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="popular-search-chip"
                  onClick={() => handlePopularSearch(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {hasSearched && (
            <div
              style={{
                padding: "16px 20px 20px",
                borderTop: "1px solid #e1e8f1",
                background: "#ffffff",
              }}
            >
              {searchResults.length > 0 ? (
                <>
                  <p
                    style={{
                      margin: "0 0 12px",
                      color: "#5c6f8a",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {searchResults.length} result
                    {searchResults.length === 1 ? "" : "s"} found
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gap: "8px",
                    }}
                  >
                    {searchResults.map((article) => (
                      <Link
                        key={article.id}
                        href={`/${article.category}/${article.slug}`}
                        style={{
                          display: "block",
                          padding: "12px 14px",
                          border: "1px solid #e1e8f1",
                          borderRadius: "7px",
                          background: "#f9fbfe",
                          color: "#082d67",
                          textDecoration: "none",
                        }}
                      >
                        <strong
                          style={{
                            display: "block",
                            fontSize: "14px",
                            lineHeight: 1.4,
                          }}
                        >
                          {article.title}
                        </strong>

                        <span
                          style={{
                            display: "block",
                            marginTop: "4px",
                            color: "#5c6f8a",
                            fontSize: "12px",
                            lineHeight: 1.5,
                          }}
                        >
                          {article.excerpt}
                        </span>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <p
                  style={{
                    margin: 0,
                    color: "#5c6f8a",
                    fontSize: "14px",
                  }}
                >
                  No articles found for “{query}”.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}