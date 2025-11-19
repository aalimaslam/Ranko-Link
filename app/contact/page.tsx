import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactHeroRedesigned from "@/components/contact-hero-redesigned";
import ContactFormRedesigned from "@/components/contact-form-redesigned";
import ContactInfoRedesigned from "@/components/contact-info-redesigned";

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
