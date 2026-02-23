"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import NavTPL from "./components/NavTPL";
import Link from "next/link";

export default function HeaderTPL({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo */}
      <div className="nav-logo-wrap local-scroll">
        <Link href="/" className="logo font-alt">
          <span className="logo-text">TPL Journey</span>
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <NavTPL links={links} />
          <li className="ms-3 me-2" />
          <li>
            <Link
              href="/contact"
              className="opacity-1 no-hover"
            >
              <span
                className="btn btn-mod btn-small btn-border-w btn-circle"
                data-btn-animate="y"
              >
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">Begin Your Journey</span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    Begin Your Journey
                  </span>
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
