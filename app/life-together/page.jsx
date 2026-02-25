import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import ResourceSection from "@/components/tpljourney/ResourceSection";
import JourneyProgress from "@/components/tpljourney/JourneyProgress";
import { tplJourneyMenu, lifeTogether } from "@/data/tpljourney";
import Link from "next/link";

export const metadata = {
  title: "Life Together — Kingdom Community | TPL Journey",
  description:
    "Experience kingdom community through Disciple-Making Teams (DMTs). Resources for starting and leading discipleship communities.",
  openGraph: {
    title: "Life Together — Kingdom Community",
    description: "Experience kingdom community through DMTs",
    type: "website",
    siteName: "TPL Journey",
  },
};

export default function LifeTogetherPage() {
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
                  <div className="page-header-label mb-20">Stage 3: Community</div>
                  <h1 className="page-header-title">Life Together</h1>
                  <p className="page-header-subtitle">
                    Kingdom Communities Grow Together, Pray Together, Share Together, and Care for One Another
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Progress */}
          <JourneyProgress currentStage={3} />

          {/* Scripture Section */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="scripture-block mb-50">
                    <p className="scripture-text">
                      "{lifeTogether.vision.text}"
                    </p>
                    <p className="scripture-reference">— {lifeTogether.vision.scripture}</p>
                  </div>
                  <div className="wow linesAnimIn" data-splitting="lines">
                    <p className="lead text-center mb-40">
                      "We are Disciples"
                    </p>
                    <p className="text-center text-gray">
                      The early church didn't just attend meetings — they did life together.
                      They shared meals, resources, struggles, and victories. This is the
                      model for kingdom community: not programs, but presence. Not attendance,
                      but authentic relationship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Start a Group */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row mb-70 mb-sm-50">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    How to Start a Group<span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray">
                    Starting a DMT is simpler than you think. Here's how to begin:
                  </div>
                </div>
              </div>

              <div className="row">
                {lifeTogether.startingSteps.map((item) => (
                  <div key={item.step} className="col-md-6 col-lg-3 mb-40">
                    <div className="step-card">
                      <div className="step-number">{item.step}</div>
                      <h3 className="step-title">{item.title}</h3>
                      <p className="step-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DMT Resources */}
          <ResourceSection
            resources={lifeTogether.resources}
            title="One Flame DMT Resources"
            description="The Disciple-Making Team (DMT) facilitation guide walks groups through a 20-week journey of discovery, prayer, and practice."
          />

          {/* What is DMT */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h2 className="section-title text-center mb-50">
                    What is Disciple-Making Team?
                  </h2>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <h4 className="mb-15">Discovery</h4>
                      <p className="text-gray">
                        Rather than lecture-based teaching, DMT uses discovery-based learning.
                        The group explores Scripture together, allowing the Holy Spirit to
                        reveal truth directly to each person.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h4 className="mb-15">Making</h4>
                      <p className="text-gray">
                        This isn't passive learning — it's active transformation. Each week,
                        members commit to "I will..." statements, putting what they've
                        discovered into practice.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h4 className="mb-15">Together</h4>
                      <p className="text-gray">
                        Growth happens in community. Members share, pray, encourage, and
                        hold each other accountable. No one walks this journey alone.
                      </p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h4 className="mb-15">Multiplication</h4>
                      <p className="text-gray">
                        The goal isn't just personal growth — it's multiplication. As members
                        grow, they're equipped to start new groups and make new disciples.
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
                    Ready to Lead?
                  </h2>
                  <p className="text-gray mb-40">
                    As you grow in community, God may be calling you to become a disciple-maker —
                    someone who multiplies kingdom life in others.
                  </p>
                  <div className="local-scroll">
                    <Link
                      href="/leaders"
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Explore Leadership{" "}
                        <i
                          className="mi-arrow-right size-18 align-middle"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Explore Leadership{" "}
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
