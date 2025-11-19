import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AboutHeroRedesigned from "@/components/about-hero-redesigned";
import AboutWhoWeAreRedesigned from "@/components/about-who-we-are-redesigned";
import AboutNumbersRedesigned from "@/components/about-numbers-redesigned";
import AboutMissionVisionRedesigned from "@/components/about-mission-vision-redesigned";
import AboutWhatMakesUsDifferentRedesigned from "@/components/about-what-makes-us-different-redesigned";
import AboutFounderStoryRedesigned from "@/components/about-founder-story-redesigned";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHeroRedesigned />
        <AboutWhoWeAreRedesigned />
        <AboutNumbersRedesigned />
        <AboutFounderStoryRedesigned />
        <AboutMissionVisionRedesigned />
        <AboutWhatMakesUsDifferentRedesigned />
      </main>
      <Footer />
    </div>
  );
}
