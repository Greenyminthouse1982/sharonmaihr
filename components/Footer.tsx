import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__main">
        <div className="site-footer__content">
          <h2>SharonMaiHR</h2>

          <p>
            Build with purpose.
            <br />
            Share with you.
          </p>

          <div className="site-footer__socials">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="site-footer__social-link"
            >
              <span>in</span>
            </Link>

            <Link
              href="mailto:contact@sharonmaihr.com"
              aria-label="Email SharonMaiHR"
              className="site-footer__social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="site-footer__art" aria-hidden="true"></div>
      </div>
      
      <div className="site-container site-footer__bottom">
        <span>© 2026 SharonMaiHR. All rights reserved.</span>
      </div>
    </footer>
  );
}