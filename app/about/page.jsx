import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import { tplJourneyMenu, aboutContent, tplFramework } from "@/data/tpljourney";
import Link from "next/link";

export const metadata = {
  title: "About — TPL Journey",
  description:
    "Learn about TPL Journey, our mission to equip disciples and disciple-makers, and the TPL framework grounded in Truth, Power, and Love.",
  openGraph: {
    title: "About TPL Journey",
    description: "Our mission and the TPL framework",
    type: "website",
    siteName: "TPL Journey",
  },
};

export default function AboutPage() {
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
                  <h1 className="page-header-title">About TPL Journey</h1>
                  <p className="page-header-subtitle">
                    Equipping disciples and disciple-makers around the world
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h2 className="section-title text-center mb-50">Our Mission</h2>
                  <p className="lead text-center mb-40">
                    {aboutContent.mission}
                  </p>
                  <h3 className="text-center mb-30">Our Vision</h3>
                  <p className="text-center text-gray mb-50">
                    {aboutContent.vision}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The TPL Framework */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    The TPL Framework<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    Our discipleship approach is built on three pillars that reflect
                    who God is and how His kingdom comes.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-40 mb-md-0">
                  <div className="tpl-pillar tpl-pillar-truth">
                    <h3 className="tpl-pillar-title mb-20">{tplFramework.truth.title}</h3>
                    <p className="tpl-pillar-description mb-30">
                      {tplFramework.truth.description}
                    </p>
                    <blockquote className="tpl-scripture">
                      <p>"{tplFramework.truth.scriptureText}"</p>
                      <cite>— {tplFramework.truth.scripture}</cite>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-4 mb-40 mb-md-0">
                  <div className="tpl-pillar tpl-pillar-power">
                    <h3 className="tpl-pillar-title mb-20">{tplFramework.power.title}</h3>
                    <p className="tpl-pillar-description mb-30">
                      {tplFramework.power.description}
                    </p>
                    <blockquote className="tpl-scripture">
                      <p>"{tplFramework.power.scriptureText}"</p>
                      <cite>— {tplFramework.power.scripture}</cite>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-4 mb-40 mb-md-0">
                  <div className="tpl-pillar tpl-pillar-love">
                    <h3 className="tpl-pillar-title mb-20">{tplFramework.love.title}</h3>
                    <p className="tpl-pillar-description mb-30">
                      {tplFramework.love.description}
                    </p>
                    <blockquote className="tpl-scripture">
                      <p>"{tplFramework.love.scriptureText}"</p>
                      <cite>— {tplFramework.love.scripture}</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-50">Leadership</h2>
                  <div className="mb-30">
                    <h3 className="mb-10">{aboutContent.founder.name}</h3>
                    <p className="text-gray mb-20">{aboutContent.founder.role}</p>
                    <p className="text-gray">
                      {aboutContent.founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Believe */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h2 className="section-title text-center mb-50">What We Believe</h2>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <h4 className="mb-15">God's Kingdom is Real</h4>
                      <p className="text-gray">
                        Jesus proclaimed the kingdom of God as present reality, not just
                        future hope. We can experience kingdom life now — healing, freedom,
                        power, and transformation.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h4 className="mb-15">Every Believer is Called</h4>
                      <p className="text-gray">
                        Discipleship isn't just for church leaders. Every follower of Jesus
                        is called to be a disciple who makes disciples, multiplying kingdom
                        life wherever they go.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h4 className="mb-15">The Holy Spirit Empowers</h4>
                      <p className="text-gray">
                        We can't live the kingdom life in our own strength. The Holy Spirit
                        empowers us with everything we need — gifts, fruit, guidance, and
                        supernatural power.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h4 className="mb-15">Community is Essential</h4>
                      <p className="text-gray">
                        We were created for relationship. Discipleship happens best in
                        community where we can encourage, challenge, and support one another.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Begin Your Journey
                  </h2>
                  <p className="text-gray mb-40">
                    Ready to experience God's kingdom in Truth, Power, and Love?
                    Explore our resources and start your journey today.
                  </p>
                  <div className="local-scroll">
                    <Link
                      href="/your-journey"
                      className="btn btn-mod btn-large btn-circle"
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
