import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactHeroRedesigned from "@/components/contact-hero-redesigned";
import ContactFormRedesigned from "@/components/contact-form-redesigned";
import ContactInfoRedesigned from "@/components/contact-info-redesigned";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Reach Out for Link Building Help",
  description:
    "Ready to improve your rankings? Contact the Rankolink team today. Book a free consultation or reach out via email to discuss your SEO and link building goals.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHeroRedesigned />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ContactFormRedesigned />
          <ContactInfoRedesigned />
        </div>
      </main>
      <Footer />
    </div>
  );
}
