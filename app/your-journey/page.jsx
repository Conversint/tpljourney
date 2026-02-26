import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import ResourceSection from "@/components/tpljourney/ResourceSection";
import JourneyProgress from "@/components/tpljourney/JourneyProgress";
import { tplJourneyMenu, yourJourneyResources } from "@/data/tpljourney";
import Link from "next/link";

export const metadata = {
  title: "Your Journey — The Making of a Disciple | TPL Journey",
  description:
    "Begin your personal discipleship journey. Explore resources for growing in Truth, Power, and Love as a follower of Jesus.",
  openGraph: {
    title: "Your Journey — The Making of a Disciple",
    description: "Begin your personal discipleship journey with TPL Journey",
    type: "website",
    siteName: "TPL Journey",
  },
};

export default function YourJourneyPage() {
  return (
    <div className="theme-elegant">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <HeaderTPL links={tplJourneyMenu} />
        </nav>
        <main id="main">
          {/* Page Header */}
          <section className="page-header light-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <div className="page-header-label mb-20">Stage 2: Personal</div>
                  <h1 className="page-header-title">Your Journey</h1>
                  <p className="page-header-subtitle">
                    I Am a Disciple
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Progress */}
          <JourneyProgress currentStage={2} />

          {/* Vision Section */}
          <section className="page-section pb-0">
            <div className="container">
              <div className="row mb-0">
                <div className="col-lg-8 offset-lg-2 wow fadeInUpShort">
                  <div className="scripture-block mb-30">
                    <p className="scripture-text">
                      "Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me."
                    </p>
                    <div className="scripture-reference">— Luke 9:23</div>
                  </div>
                  <div>
                    <p className="lead text-center mb-40">
                      Being a disciple isn't about having all the answers — it's about
                      walking with Jesus and learning His ways. The journey of discipleship
                      transforms us from the inside out as we encounter Truth, experience Power,
                      and grow in Love.
                    </p>
                    <p className="text-center text-gray">
                      These resources are designed to help you begin or deepen your personal
                      journey with God. Whether you're exploring faith for the first time or
                      seeking to grow deeper, there's a pathway for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <ResourceSection
            resources={yourJourneyResources}
            title="The Making of a Disciple Series"
            description="Foundational resources for understanding what it means to be a disciple in the TPL framework."
          />

          {/* TPL Personal Framework */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Growing as a Disciple<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    Discipleship happens when we engage with God in three dimensions:
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-40 mb-md-0 wow fadeInUpShort">
                  <div className="tpl-pillar tpl-pillar-truth">
                    <div className="tpl-pillar-icon mb-20">
                      <i className="mi-book size-48" aria-hidden="true" />
                    </div>
                    <h3 className="tpl-pillar-title mb-20">Truth</h3>
                    <p className="tpl-pillar-description">
                      Knowing God through His Word. Understanding who He is and how
                      He has revealed Himself. Building a foundation of biblical knowledge
                      that informs every area of life.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-40 mb-md-0 wow fadeInUpShort" data-wow-delay="0.15s">
                  <div className="tpl-pillar tpl-pillar-power">
                    <div className="tpl-pillar-icon mb-20">
                      <i className="mi-storm size-48" aria-hidden="true" />
                    </div>
                    <h3 className="tpl-pillar-title mb-20">Power</h3>
                    <p className="tpl-pillar-description">
                      Experiencing the Holy Spirit. Learning to hear God's voice,
                      operate in spiritual gifts, and see God's supernatural work
                      in and through your life.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-40 mb-md-0 wow fadeInUpShort" data-wow-delay="0.3s">
                  <div className="tpl-pillar tpl-pillar-love">
                    <div className="tpl-pillar-icon mb-20">
                      <i className="mi-heart size-48" aria-hidden="true" />
                    </div>
                    <h3 className="tpl-pillar-title mb-20">Love</h3>
                    <p className="tpl-pillar-description">
                      Becoming a vessel of God's love. Allowing His nature to transform
                      how you relate to others. Moving from self-focus to kingdom-focus
                      in all relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Step CTA */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Ready to Grow Together?
                  </h2>
                  <p className="text-gray mb-40">
                    Discipleship was never meant to happen alone. Discover how to
                    experience kingdom community through Life Together.
                  </p>
                  <div className="local-scroll">
                    <Link
                      href="/life-together"
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Explore Life Together{" "}
                        <i
                          className="mi-arrow-right size-18 align-middle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Explore Life Together{" "}
                        <i
                          className="mi-arrow-right size-18 align-middle"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
          <FooterTPL />
        </footer>
      </div>
    </div>
  );
}
