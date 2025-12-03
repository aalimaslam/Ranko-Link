import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AboutHeroRedesigned from "@/components/about-hero-redesigned";
import AboutWhoWeAreRedesigned from "@/components/about-who-we-are-redesigned";
import AboutNumbersRedesigned from "@/components/about-numbers-redesigned";
import AboutMissionVisionRedesigned from "@/components/about-mission-vision-redesigned";
import AboutWhatMakesUsDifferentRedesigned from "@/components/about-what-makes-us-different-redesigned";
import AboutFounderStoryRedesigned from "@/components/about-founder-story-redesigned";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rankolink | Your SEO & Link Building Partner",
  description:
    "We're a team of SEO experts dedicated to helping you achieve higher rankings. Learn more about our mission to provide transparent, results-focused link building services for sustainable growth.",
};

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
