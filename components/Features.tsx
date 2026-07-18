const features = [
  {
    title: "Practical & Actionable",
    description: "Insights you can apply to your organization.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 3 15 0 18" />
        <path d="M12 3c-3 3-3 15 0 18" />
      </>
    ),
  },
  {
    title: "HR Management Focused",
    description:
      "All content is focused on creating value for businesses.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16.5" cy="9" r="2.5" />
        <path d="M3.5 20v-2.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V20" />
        <path d="M14 13.8a4 4 0 0 1 6.5 3.2v3" />
      </>
    ),
  },
  {
    title: "Build Better Workplaces",
    description: "Empowering HR leaders to drive growth and success.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
        <path d="m14.8 9.2 4.7-4.7" />
        <path d="M16.5 4.5h3v3" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section
      className="features-section"
      aria-label="Why SharonMaiHR"
    >
      <div className="site-container">
        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-item" key={feature.title}>
              <div
                className="feature-item__icon"
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
                  {feature.icon}
                </svg>
              </div>

              <div className="feature-item__content">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}