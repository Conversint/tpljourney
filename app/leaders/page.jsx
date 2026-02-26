import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import ResourceSection from "@/components/tpljourney/ResourceSection";
import JourneyProgress from "@/components/tpljourney/JourneyProgress";
import { tplJourneyMenu, leadersResources } from "@/data/tpljourney";
import Link from "next/link";

export const metadata = {
  title: "Leaders — Becoming Disciple-Makers | TPL Journey",
  description:
    "Develop as a disciple-maker through Two Flame leader development. Multiply kingdom life by equipping others to make disciples.",
  openGraph: {
    title: "Leaders — Becoming Disciple-Makers",
    description: "Two Flame leader development for disciple-makers",
    type: "website",
    siteName: "TPL Journey",
  },
};

export default function LeadersPage() {
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
                  <div className="page-header-label mb-20">Stage 4: Multiplication</div>
                  <h1 className="page-header-title">Leaders</h1>
                  <p className="page-header-subtitle">
                    We are Disciple Makers
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Progress */}
          <JourneyProgress currentStage={4} />

          {/* Vision Section */}
          <section className="page-section">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-lg-8 offset-lg-2 wow fadeInUpShort">
                  <div className="scripture-block mb-50">
                    <p className="scripture-text">
                      "We are Disciple-Makers"
                    </p>
                  </div>
                  <div>
                    <p className="lead text-center mb-40">
                      The journey doesn't end with personal growth or even community.
                      Jesus called us to "make disciples of all nations" — to multiply
                      what we've received by pouring into others.
                    </p>
                    <p className="text-center text-gray">
                      A disciple-maker is someone who has walked the journey, experienced
                      transformation, and is now equipped to guide others on the same path.
                      It's not about being perfect — it's about being faithful to pass on
                      what you've received.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Two Flame Concept */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Two Flame Leadership<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    One flame burns for personal passion. Two flames multiply the fire.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-40 mb-md-0 wow fadeInUpShort">
                  <div className="tpl-pillar tpl-pillar-power">
                    <div className="tpl-pillar-icon mb-20">
                      <i className="mi-sun size-48" aria-hidden="true" />
                    </div>
                    <h3 className="tpl-pillar-title mb-20">One Flame</h3>
                    <p className="tpl-pillar-description mb-30">
                      Your personal journey with God. The fire of the Holy Spirit
                      burning in your own life. Without this foundation, there's
                      nothing to multiply.
                    </p>
                    <ul className="text-gray">
                      <li>Personal devotion and prayer</li>
                      <li>Hearing God's voice</li>
                      <li>Walking in the Spirit</li>
                      <li>Obedience and surrender</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-40 mb-md-0 wow fadeInUpShort" data-wow-delay="0.15s">
                  <div className="tpl-pillar tpl-pillar-power">
                    <div className="tpl-pillar-icon mb-20">
                      <i className="mi-users size-48" aria-hidden="true" />
                    </div>
                    <h3 className="tpl-pillar-title mb-20">Two Flames</h3>
                    <p className="tpl-pillar-description mb-30">
                      Lighting another's flame from yours. Multiplication happens
                      when your fire sparks transformation in someone else who then
                      does the same.
                    </p>
                    <ul className="text-gray">
                      <li>Mentoring and discipling others</li>
                      <li>Starting and leading groups</li>
                      <li>Developing other leaders</li>
                      <li>Sending out into the harvest</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leader Development Resources */}
          <ResourceSection
            resources={leadersResources}
            title="Two Flame Leader Development"
            description="Training modules for developing disciple-makers who multiply kingdom communities."
          />

          {/* Leader Qualities */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h2 className="section-title text-center mb-50">
                    Qualities of a Disciple-Maker
                  </h2>
                  <div className="row">
                    <div className="col-md-6 mb-30 wow fadeInUpShort">
                      <div className="tpl-pillar-icon mb-15">
                        <i className="mi-heart size-32" aria-hidden="true" />
                      </div>
                      <h4 className="mb-15">Faithful, Not Perfect</h4>
                      <p className="text-gray">
                        You don't need to have it all figured out. You just need to be
                        faithfully walking the journey yourself and willing to bring
                        others along.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30 wow fadeInUpShort" data-wow-delay="0.1s">
                      <div className="tpl-pillar-icon mb-15">
                        <i className="mi-user size-32" aria-hidden="true" />
                      </div>
                      <h4 className="mb-15">Available</h4>
                      <p className="text-gray">
                        Disciple-making requires time and presence. It happens in
                        life's everyday moments, not just scheduled meetings.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30 wow fadeInUpShort" data-wow-delay="0.2s">
                      <div className="tpl-pillar-icon mb-15">
                        <i className="mi-book size-32" aria-hidden="true" />
                      </div>
                      <h4 className="mb-15">Hungry to Learn</h4>
                      <p className="text-gray">
                        The best leaders are still students. A posture of learning
                        keeps you growing and models humility to those you lead.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30 wow fadeInUpShort" data-wow-delay="0.3s">
                      <div className="tpl-pillar-icon mb-15">
                        <i className="mi-refresh size-32" aria-hidden="true" />
                      </div>
                      <h4 className="mb-15">Multiplication Mindset</h4>
                      <p className="text-gray">
                        Think beyond yourself. The goal is to raise up leaders who
                        raise up leaders — exponential kingdom growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Step CTA */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Experience the Harvest
                  </h2>
                  <p className="text-gray mb-40">
                    Ready for a faith-building, immersive experience? Intensives take
                    you into the field to practice what you've learned.
                  </p>
                  <div className="local-scroll">
                    <Link
                      href="/intensives"
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Explore Intensives{" "}
                        <i
                          className="mi-arrow-right size-18 align-middle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Explore Intensives{" "}
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
