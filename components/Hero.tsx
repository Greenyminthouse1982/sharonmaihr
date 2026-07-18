import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="site-container home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">WELCOME TO</p>

          <h1 className="home-hero__title">SharonMaiHR</h1>

          <p className="home-hero__subtitle">
            HR Knowledge. Labor Laws.
            <br className="home-hero__mobile-break" />
            Market Perspectives.
          </p>

          <p className="home-hero__description">
            Practical insights and actionable strategies
            <br className="home-hero__desktop-break" />
            in HR managementto create value and
            <br className="home-hero__desktop-break" />
            drive business growth.
          </p>

          <Link href="#featured-articles" className="home-hero__button">
            <span>Explore Articles</span>
            <span className="home-hero__button-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="home-hero__image-wrapper">
          <Image
            src="/hero-hr-team.png"
            alt="HR professionals reviewing workforce analytics"
            width={680}
            height={302}
            className="home-hero__image"
            priority
          />
        </div>
      </div>
    </section>
  );
}