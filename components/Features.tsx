const features = [
  {
    title: "Reliable & Accurate",
    description: "Well-researched content and regularly updated.",
    icon: (
      <path d="M12 3 5 6v5c0 5 3.4 8.6 7 10 3.6-1.4 7-5 7-10V6l-7-3Z" />
    ),
  },
  {
    title: "Practical & Actionable",
    description: "Insights you can apply to your organization.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
  },
  {
    title: "HR Management Focused",
    description: "All content is focused on creating value for businesses.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M4 20v-2a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v2" />
        <path d="M15 14h1a4 4 0 0 1 4 4v2" />
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
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
          <path d="M15.5 8.5L19 5" />
          <path d="M16.8 5H19v2.2" />
        </>
    ),
    
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="site-container features-grid">
        {features.map((feature) => (
          <article className="feature-item" key={feature.title}>
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {feature.icon}
              </svg>
            </div>

            <div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}