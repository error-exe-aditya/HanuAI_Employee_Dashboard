import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TeamShowcaseSection from "../components/TeamShowcaseSection";
import ClosingSection from "../components/ClosingSection";
import ContinuityElements from "../components/ContinuityElements";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <ContinuityElements />
      <HeroSection />
      <ServicesSection />
      <TeamShowcaseSection />
      <ClosingSection />
    </main>
  );
}
