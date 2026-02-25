import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import JourneyProgress from "@/components/tpljourney/JourneyProgress";
import { tplJourneyMenu, theKingdomContent } from "@/data/tpljourney";
import Link from "next/link";

export const metadata = {
  title: "The Kingdom — God's Vision for His People | TPL Journey",
  description:
    "Discover God's vision for His kingdom on earth as it is in heaven. Understand who God is and how His kingdom comes through Truth, Power, and Love.",
  openGraph: {
    title: "The Kingdom — God's Vision for His People",
    description: "Discover God's vision for His kingdom on earth as it is in heaven",
    type: "website",
    siteName: "TPL Journey",
  },
};

export default function TheKingdomPage() {
  const { vision, whoGodIs, howKingdomComes } = theKingdomContent;

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
                  <div className="page-header-label mb-20">Stage 1: Vision</div>
                  <h1 className="page-header-title">The Kingdom</h1>
                  <p className="page-header-subtitle">
                    God's Vision for His People
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Progress */}
          <JourneyProgress currentStage={1} />

          {/* Kingdom Vision Section */}
          <section className="page-section">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Kingdom Vision<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray mb-30">
                    "{vision.scriptureText}"
                  </div>
                  <div className="scripture-reference">— {vision.scripture}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div>
                    <p className="lead text-center mb-40">
                      {vision.lead}
                    </p>
                    <p className="text-center text-gray">
                      {vision.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who God Is Section */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    {whoGodIs.title}<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    {whoGodIs.description}
                  </div>
                </div>
              </div>
              <div className="row">
                {whoGodIs.pillars.map((pillar) => (
                  <div key={pillar.title} className="col-md-4 mb-40 mb-md-0">
                    <div className="tpl-pillar">
                      <h3 className="tpl-pillar-title mb-20">{pillar.title}</h3>
                      <p className="tpl-pillar-description">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How God's Kingdom Comes Section */}
          <section className="page-section">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    {howKingdomComes.title}<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray mb-30">
                    "{howKingdomComes.scriptureText}"
                  </div>
                  <div className="scripture-reference mb-30">— {howKingdomComes.scripture}</div>
                  <p className="text-gray">
                    {howKingdomComes.description}
                  </p>
                </div>
              </div>
              <div className="row">
                {howKingdomComes.ways.map((way) => (
                  <div key={way.title} className="col-md-4 mb-40 mb-md-0">
                    <div className="tpl-pillar text-center">
                      <div className="mb-20">
                        <i className={`${way.icon} size-48`} aria-hidden="true" />
                      </div>
                      <h3 className="tpl-pillar-title mb-20">{way.title}</h3>
                      <p className="tpl-pillar-description">{way.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Next Step CTA */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Ready to Begin Your Journey?
                  </h2>
                  <p className="text-gray mb-40">
                    The kingdom vision is only the beginning. Discover what it means
                    to walk as a disciple in Truth, Power, and Love.
                  </p>
                  <div className="local-scroll">
                    <Link
                      href="/your-journey"
                      className="link-circle-1 align-middle"
                    >
                      Explore Your Journey{" "}
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
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
