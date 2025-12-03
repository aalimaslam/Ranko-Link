import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServicesHeroRedesigned from "@/components/services-hero-redesigned"
import ServicesTrustedBrandsRedesigned from "@/components/services-trusted-brands-redesigned"
import ServicesOfferingsRedesigned from "@/components/services-offerings-redesigned"
import CaseStudiesRedesigned from "@/components/case-studies-redesigned"
import ServicesPricingRedesigned from "@/components/services-pricing-redesigned"
import WhyChooseUsRedesigned from "@/components/why-choose-us-redesigned"
import GrowTogether from '@/components/grow-together'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link Building & SEO Services | Rankolink",
  description:
    "Boost your site's authority and rankings with our expert link building services. We specialize in manual outreach, guest posting, and a data-driven approach to get your site the quality links it needs.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServicesHeroRedesigned />
        <ServicesTrustedBrandsRedesigned />
        <ServicesOfferingsRedesigned />
        <CaseStudiesRedesigned />
        <ServicesPricingRedesigned />
        <WhyChooseUsRedesigned />
        <GrowTogether />
      </main>
      <Footer />
    </div>
  )
}
