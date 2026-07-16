import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5.5c2.5-.8 5.1-.2 8 1.7v11c-2.9-1.9-5.5-2.5-8-1.7v-11Z" />
      <path d="M20 5.5c-2.5-.8-5.1-.2-8 1.7v11c2.9-1.9 5.5-2.5 8-1.7v-11Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v5c0 5 3.4 8.6 7 10 3.6-1.4 7-5 7-10V6l-7-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function AboutContactPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-hero">
          <div className="site-container about-hero__inner">
            <div className="about-hero__content">
              <h1>About SharonMaiHR</h1>

              <p>
                SharonMaiHR is a knowledge hub focused on HR management,
                labor laws and workforce insights. Our mission is to provide
                practical, reliable and actionable content that helps
                organizations and HR professionals create value and achieve
                sustainable growth.
              </p>
            </div>

            <div className="about-hero__visual">
              <Image
                src="/about-contact-hero.png"
                alt="Laptop, notebook, coffee cup and office plant"
                width={760}
                height={241}
                className="about-hero__image"
                priority
              />
            </div>
          </div>
        </section>

        <section className="about-content">
          <div className="site-container">
            <div className="about-principles">
              <article className="about-principle">
                <div className="about-principle__icon">
                  <BookIcon />
                </div>

                <p>
                  We share knowledge gained from real-world experience and
                  industry practices. In addition, we provide our personal
                  perspectives on HR management issues, along with data and
                  insights from reputable publications, with clear citation
                  of sources where available. These contents are not intended
                  as guidelines, instructions, or requirements. Readers are
                  encouraged to view them as a reference perspective and take
                  full responsibility for their own decisions.
                </p>
              </article>

              <article className="about-principle">
                <div className="about-principle__icon">
                  <ShieldIcon />
                </div>

                <p>
                  This website is created for the purpose of developing
                  community knowledge. We do not charge any fees, solicit
                  donations or sponsorships, nor require users to provide any
                  personal information such as registration or account
                  creation to access our content. However, we kindly ask our
                  readers to respect copyright laws. Please do not edit,
                  modify, distort, or claim our content as your own original
                  work without our permission. We reserve the right to request
                  the removal of any content that violates our rights in order
                  to protect our legal ownership.
                </p>
              </article>
            </div>

            <section className="contact-panel">
              <div className="contact-form-area">
                <div className="contact-heading">
                  <MailIcon />

                  <div>
                    <h2>Contact Us</h2>
                    <p>
                      We&apos;d love to hear from you. Please fill out the form
                      and we will get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                <form className="contact-form">
                  <div className="contact-form__row">
                    <label>
                      <span>
                        Your Email <strong>*</strong>
                      </span>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </label>

                    <label>
                      <span>
                        Subject <strong>*</strong>
                      </span>

                      <input
                        type="text"
                        name="subject"
                        placeholder="Enter the subject"
                        required
                      />
                    </label>
                  </div>

                  <label>
                    <span>
                      Message <strong>*</strong>
                    </span>

                    <textarea
                      name="message"
                      placeholder="Write your message here..."
                      rows={4}
                      required
                    />
                  </label>

                  <button type="submit" className="contact-submit">
                    <span>Send Message</span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </button>

                  <p className="contact-privacy">
                    <span aria-hidden="true">🔒</span>
                    Your information will be kept confidential and used only
                    to respond to your inquiry.
                  </p>
                </form>
              </div>

              <aside className="linkedin-panel">
                <div className="linkedin-logo" aria-hidden="true">
                  in
                </div>

                <div className="linkedin-panel__content">
                  <h2>Connect with me on LinkedIn</h2>

                  <p>
                    For insights, updates and conversations about HR and the
                    future of work.
                  </p>

                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin-button"
                  >
                    Visit LinkedIn

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </Link>
                </div>
              </aside>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}