import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PricingHeroRedesigned from "@/components/pricing-hero-redesigned";
import PricingPlansRedesigned from "@/components/pricing-plans-redesigned";
import PricingReviewsRedesigned from "@/components/pricing-reviews-redesigned";
import PricingFAQRedesigned from "@/components/pricing-faq-redesigned";
import ClientReviewsRedesigned from "@/components/client-reviews-redesigned";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | Rankolink",
  description:
    "Find the perfect SEO package for your business. Compare our transparent pricing plans and start building a strong backlink profile that drives real ranking improvements.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PricingHeroRedesigned />
        <PricingPlansRedesigned />
        {/* <PricingReviewsRedesigned /> */}
        <ClientReviewsRedesigned />
        <PricingFAQRedesigned />
      </main>
      <Footer />
    </div>
  );
}
