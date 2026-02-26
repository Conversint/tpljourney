import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import ResourceSection from "@/components/tpljourney/ResourceSection";
import JourneyProgress from "@/components/tpljourney/JourneyProgress";
import { tplJourneyMenu, intensives } from "@/data/tpljourney";
import Link from "next/link";

export const metadata = {
  title: "Intensives — Into the Harvest | TPL Journey",
  description:
    "Faith-building retreat experiences that take you into the harvest. Experience God working through you in real-world ministry.",
  openGraph: {
    title: "Intensives — Into the Harvest",
    description: "Faith-building retreat experiences with TPL Journey",
    type: "website",
    siteName: "TPL Journey",
  },
};

export default function IntensivesPage() {
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
                  <div className="page-header-label mb-20">Stage 5: Harvest</div>
                  <h1 className="page-header-title">Intensives</h1>
                  <p className="page-header-subtitle">
                    A Faith-Building Personal Experience with God
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Progress */}
          <JourneyProgress currentStage={5} />

          {/* Vision Section */}
          <section className="page-section">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-lg-8 offset-lg-2 wow fadeInUpShort">
                  <div className="scripture-block mb-50">
                    <p className="scripture-text">
                      "The harvest is plentiful, but the workers are few. Ask the Lord
                      of the harvest, therefore, to send out workers into his harvest field."
                    </p>
                    <p className="scripture-reference">— Matthew 9:37-38</p>
                  </div>
                  <div>
                    <p className="lead text-center mb-40">
                      There comes a point in every disciple's journey when it's time
                      to step out — to leave the classroom and enter the field. Intensives
                      are immersive experiences designed to stretch your faith and
                      encounter God in powerful ways.
                    </p>
                    <p className="text-center text-gray">
                      Think of it as a local mission trip: a concentrated time of prayer,
                      teaching, inner healing, and real-world ministry practice. These
                      experiences often become turning points in people's walks with God.
                      We provide structured preparation and reflection materials that walk
                      you through each pillar of the experience before, during, and after
                      your intensive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Five Pillars */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    The Five Pillars<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    Every intensive is built on five key elements that work together
                    to create transformative experiences.
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                {intensives.pillars.map((pillar, index) => (
                  <div key={pillar.id} className="col-6 col-md-4 col-lg mb-30 wow fadeInUpShort" data-wow-delay={`${index * 0.1}s`}>
                    <div className="pillar-card">
                      <div className="pillar-icon">
                        <i className={`${pillar.icon} size-48`} aria-hidden="true" />
                      </div>
                      <h3 className="pillar-title">{pillar.title}</h3>
                      <p className="pillar-description">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="page-section pb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h2 className="section-title text-center mb-50">
                    What to Expect
                  </h2>
                  <div className="row">
                    <div className="col-md-6 mb-30 wow fadeInUpShort">
                      <div className="tpl-pillar-icon mb-15">
                        <i className="mi-users size-32" aria-hidden="true" />
                      </div>
                      <h4 className="mb-15">Intentional Community</h4>
                      <p className="text-gray">
                        You'll journey alongside a small group of people all seeking
                        to grow. Deep relationships form quickly in this concentrated time.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30 wow fadeInUpShort" data-wow-delay="0.1s">
                      <div className="tpl-pillar-icon mb-15">
                        <i className="mi-layers size-32" aria-hidden="true" />
                      </div>
                      <h4 className="mb-15">Stretching Experiences</h4>
                      <p className="text-gray">
                        Expect to do things outside your comfort zone. Faith grows
                        when we step into the unknown trusting God to show up.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30 wow fadeInUpShort" data-wow-delay="0.2s">
                      <div className="tpl-pillar-icon mb-15">
                        <i className="mi-message size-32" aria-hidden="true" />
                      </div>
                      <h4 className="mb-15">Encounter God</h4>
                      <p className="text-gray">
                        Through worship, prayer, and ministry, many people have profound
                        encounters with the Holy Spirit during intensives.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30 wow fadeInUpShort" data-wow-delay="0.3s">
                      <div className="tpl-pillar-icon mb-15">
                        <i className="mi-book size-32" aria-hidden="true" />
                      </div>
                      <h4 className="mb-15">Practical Skills</h4>
                      <p className="text-gray">
                        You'll learn and practice skills like sharing your testimony,
                        praying for healing, and leading others to Jesus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resources */}
          <ResourceSection
            resources={intensives.resources}
            title="Intensive Resources"
            description="Preparation and reflection materials for intensive retreat experiences."
          />

          {/* Interest CTA */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Interested in an Intensive?
                  </h2>
                  <p className="text-gray mb-40">
                    Intensives are held at various times throughout the year in different
                    locations. Reach out to learn about upcoming opportunities.
                  </p>
                  <div className="local-scroll">
                    <Link
                      href="/contact"
                      className="btn btn-mod btn-w btn-large btn-circle"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full Circle */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    The Journey Continues
                  </h2>
                  <p className="text-gray mb-30">
                    Intensives aren't the end — they're a new beginning. Many who experience
                    the harvest return with fresh vision and passion to multiply what
                    they've received.
                  </p>
                  <p className="text-gray mb-40">
                    The journey from Kingdom Vision to Harvest is not a one-time path,
                    but a continuous cycle of growing deeper and reaching further.
                  </p>
                  <div className="local-scroll">
                    <Link
                      href="/the-kingdom"
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Return to The Kingdom{" "}
                        <i
                          className="mi-arrow-right size-18 align-middle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Return to The Kingdom{" "}
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
