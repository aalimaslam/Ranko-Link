import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | RankoLink",
  description: "Privacy Policy for RankoLink services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At RankoLink, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>Personal Data (Name, Email, Phone number)</li>
            <li>Derivative Data (IP address, Browser type)</li>
          </ul>
          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at hello@rankolink.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
