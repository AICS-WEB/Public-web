import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InsightSection from "./components/InsightSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import KeyResearchAreasSection from "./components/KeyResearchAreasSection.jsx";
import ForestSection from "./components/ForestSection.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import LabPage from "./components/LabPage.jsx";
import CustomScrollbar from "./components/CustomScrollbar.jsx";
import HomeRailNav from "./components/HomeRailNav.jsx";
import { featureHighlights } from "./data/siteContent.js";
import { pages } from "./data/pages.js";

function HomePage() {
  return (
    <main className="home-page">
      <div id="home">
        <Hero />
      </div>
      <div id="insight">
        <InsightSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="areas">
        {featureHighlights.map((feature) => (
          <FeatureSection key={feature.title} feature={feature} />
        ))}
      </div>
      <div id="research">
        <KeyResearchAreasSection />
      </div>
      <div id="location">
        <ForestSection />
      </div>
      <CtaSection />
      <HomeRailNav />
    </main>
  );
}

export default function App() {
  const pageKey = window.location.pathname.replace(/^\/+|\/+$/g, "") || "home";
  const page = pages[pageKey];

  return (
    <>
      <Header />
      {page ? <LabPage page={page} /> : <HomePage />}
      <Footer />
      <CustomScrollbar />
    </>
  );
}
