import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import HeroKingdom from "@/components/tpljourney/HeroKingdom";
import JourneyStages from "@/components/tpljourney/JourneyStages";
import TPLFramework from "@/components/tpljourney/TPLFramework";
import { tplJourneyMenu } from "@/data/tpljourney";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Link from "next/link";

export const metadata = {
  title: "TPL Journey — Experiencing God's Kingdom in Truth, Power, and Love",
  description:
    "TPL Journey equips individuals and communities to experience God's kingdom through a discipleship framework grounded in Truth, Power, and Love.",
  keywords: "discipleship, Christian ministry, TPL, Truth Power Love, kingdom, discipleship training",
  openGraph: {
    title: "TPL Journey — Experiencing God's Kingdom",
    description: "A discipleship movement grounded in Truth, Power, and Love",
    type: "website",
    locale: "en_US",
    siteName: "TPL Journey",
  },
};

export default function HomePage() {
  return (
    <div className="theme-elegant">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <HeaderTPL links={tplJourneyMenu} />
        </nav>
        <main id="main">
          {/* Hero Section with Parallax Background */}
          <ParallaxContainer
            className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)",
            }}
            id="home"
          >
            <HeroKingdom />
          </ParallaxContainer>

          {/* Kingdom Vision Section */}
          <section className="page-section" id="vision">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Kingdom Vision<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray mb-30">
                    "Your kingdom come, your will be done, on earth as it is in heaven."
                  </div>
                  <div className="scripture-reference">— Matthew 6:10</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="wow linesAnimIn" data-splitting="lines">
                    <p className="lead text-center mb-40">
                      God is inviting us into something bigger than ourselves — a kingdom
                      that transforms lives, heals communities, and brings heaven's reality
                      to earth. TPL Journey is a pathway for experiencing this kingdom through
                      discipleship that engages the whole person.
                    </p>
                    <p className="text-center text-gray">
                      We believe that every follower of Jesus is called to be a disciple-maker,
                      equipped to walk in Truth, demonstrate Power, and embody Love. This isn't
                      about programs or performance — it's about presence. Encountering God and
                      becoming vessels of His kingdom wherever we go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TPL Framework Section */}
          <TPLFramework />

          {/* Journey Stages Section */}
          <JourneyStages />

          {/* Call to Action Section */}
          <section
            className="page-section bg-dark-alpha-30 parallax-5 light-content"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Ready to Begin?
                  </h2>
                  <p className="mb-40">
                    Whether you're just starting to explore what it means to follow Jesus,
                    or you're ready to become a disciple-maker yourself, there's a place
                    for you on this journey.
                  </p>
                  <div className="local-scroll">
                    <Link
                      href="/your-journey"
                      className="btn btn-mod btn-w btn-large btn-circle"
                      data-btn-animate="y"
                    >
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">Start Your Journey</span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          Start Your Journey
                        </span>
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
