import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import TrustedBrands from "@/components/trusted-brands";
import ServicesSection from "@/components/services-section";
import WorkProcess from "@/components/work-process";
import GrowTogether from "@/components/grow-together";
import ClientReviews, { reviews } from "@/components/client-reviews";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rankolink | Get Links That Actually Rank",
  description:
    "Rankolink is a trusted link-building agency. We focus on earning high-quality backlinks that elevate your brand and improve your search rankings.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TrustedBrands />
        <ServicesSection />
        <WorkProcess />
        <ClientReviews />
        <GrowTogether />
      </main>
      <Footer />
    </div>
  );
}
