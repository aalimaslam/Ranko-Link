import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | RankoLink",
  description: "Terms of Service for RankoLink.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <div className="prose prose-blue max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these Terms of Service carefully before using our website operated by RankoLink.
          </p>
          <h2>Agreement to Terms</h2>
          <p>
            By accessing this site, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
          </p>
          <h2>Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of RankoLink and its licensors.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
