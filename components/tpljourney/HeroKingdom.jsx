"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";

export default function HeroKingdom() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content text-center">
        <h2 className="section-title-tiny mb-50 mb-sm-30 wow fadeInDownShort">
          TPL Journey
        </h2>
        <h1 className="hs-title-3 mb-40 mb-sm-30 mb-xs-20">
          <span className="wow charsAnimInLong" data-splitting="chars">
            <AnimatedText text="Experiencing God's Kingdom" />
          </span>
        </h1>
        <h2 className="hs-title-6 mb-60 mb-sm-40 wow fadeInUpShort" data-wow-delay="0.3s">
          in Truth, Power, and Love
        </h2>
        <p className="hero-tagline mb-60 mb-sm-40 wow fadeInUpShort" data-wow-delay="0.4s">
          "The harvest is plentiful, but the workers are few."
          <span className="hero-scripture"> — Matthew 9:37</span>
        </p>
        <div className="local-scroll">
          <Link
            href="/the-kingdom"
            className="link-hover-anim link-circle-1 align-middle wow fadeInUpShort"
            data-link-animate="y"
            data-wow-delay="0.5s"
          >
            <span className="link-strong link-strong-unhovered">
              Begin Your Journey{" "}
              <i
                className="mi-arrow-right size-18 align-middle"
                aria-hidden="true"
              ></i>
            </span>
            <span
              className="link-strong link-strong-hovered"
              aria-hidden="true"
            >
              Begin Your Journey{" "}
              <i
                className="mi-arrow-right size-18 align-middle"
                aria-hidden="true"
              ></i>
            </span>
          </Link>
        </div>
      </div>
      {/* End Home Section Content */}
    </div>
  );
}
