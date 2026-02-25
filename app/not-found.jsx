import FooterTPL from "@/components/footers/FooterTPL";
import HeaderTPL from "@/components/headers/HeaderTPL";
import { tplJourneyMenu } from "@/data/tpljourney";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found — TPL Journey",
  description: "The page you're looking for could not be found.",
};

export default function NotFoundPage() {
  return (
    <div className="theme-elegant">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <HeaderTPL links={tplJourneyMenu} />
        </nav>
        <main id="main">
          {/* 404 Section */}
          <section
            className="home-section bg-dark-alpha-30 light-content parallax-5"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)",
            }}
            id="home"
          >
            <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
              <div className="home-content text-center w-100">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="wow fadeInUp" data-wow-delay=".1s">
                      <h1 className="hs-title-12 mb-40 mb-sm-30">404</h1>
                    </div>
                    <div className="mb-40 mb-sm-30 wow fadeInUp" data-wow-delay=".2s">
                      <h2 className="section-descr mb-20">
                        The page you're looking for could not be found.
                      </h2>
                      <p className="text-gray">
                        Perhaps the harvest led you astray, or this path hasn't been
                        established yet. Let us guide you back.
                      </p>
                    </div>
                    <div className="local-scroll wow fadeInUp" data-wow-delay=".3s">
                      <Link
                        href="/"
                        className="btn btn-mod btn-w btn-large btn-circle"
                      >
                        <i className="mi-arrow-left size-18 align-middle me-2" />
                        Return to The Kingdom
                      </Link>
                    </div>
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
