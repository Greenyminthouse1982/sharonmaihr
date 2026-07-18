import Image from "next/image";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="site-container home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__description">
            Practical insights and actionable strategies
            <br />
            in HR management to create value and
            <br />
            drive business growth.
          </p>
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