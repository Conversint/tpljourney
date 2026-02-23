"use client";
import { tplSocialLinks } from "@/data/tpljourney";
import Link from "next/link";

export default function FooterTPL() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container position-relative text-center pt-140 pb-80 pb-sm-50">
      {/* Scroll Up */}
      <div className="local-scroll link-to-top-2-wrap" onClick={scrollToTop}>
        <a href="#top" className="link-to-top-2">
          Back to top
        </a>
      </div>
      {/* End Scroll Up */}

      {/* Tagline */}
      <div className="mb-40">
        <p className="footer-tagline">
          Experiencing God's Kingdom in Truth, Power, and Love
        </p>
      </div>

      {/* Social Links */}
      <div className="footer-social-links mb-60">
        {tplSocialLinks.map((link, i) => (
          <a
            href={link.href}
            key={i}
            title={link.title}
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="visually-hidden">{link.name}</span>
            <i className={link.iconClass} />
          </a>
        ))}
      </div>
      {/* End Social Links */}

      {/* Footer Links */}
      <div className="footer-links mb-30">
        <Link href="/about">About</Link>
        <span className="footer-divider">|</span>
        <Link href="/contact">Contact</Link>
        <span className="footer-divider">|</span>
        <Link href="/your-journey">Resources</Link>
      </div>

      {/* Footer Text */}
      <div className="footer-text">
        {/* Copyright */}
        <div>
          © TPL Journey {new Date().getFullYear()}. A nonprofit discipleship ministry.
        </div>
        {/* End Copyright */}
        <div className="footer-made">
          "The harvest is plentiful, but the workers are few." — Matthew 9:37
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
