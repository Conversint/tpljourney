import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import HeroKingdom from "@/components/tpljourney/HeroKingdom";
import JourneyStages from "@/components/tpljourney/JourneyStages";
import TPLFramework from "@/components/tpljourney/TPLFramework";
import { tplJourneyMenu } from "@/data/tpljourney";
import ParallaxContainer from "@/components/common/ParallaxContainer";

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

          {/* TPL Framework Section */}
          <TPLFramework />

          {/* Journey Stages Section */}
          <JourneyStages />
        </main>
        <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
          <FooterTPL />
        </footer>
      </div>
    </div>
  );
}
