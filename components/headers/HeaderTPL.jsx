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
        <ul className="clearlist scroll-nav local-scroll justify-content-center scrollspyLinks">
          <NavTPL links={links} />
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
