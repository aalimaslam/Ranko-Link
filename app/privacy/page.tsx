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

      <main className="flex-grow">
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 mb-16 overflow-hidden min-h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm">
              Legal
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              We are committed to protecting your personal data and ensuring transparency in how we handle your information.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 pb-12">

        <div className="prose prose-blue max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>
            At RankoLink, protecting your privacy is one of our core commitments.
            This Privacy Policy explains what information we collect, how we use it,
            and the rights you have regarding your personal data when you use our
            website or services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect information from you in the following ways:</p>

          <ul>
            <li>
              <strong>Personal Data:</strong> Information you voluntarily provide,
              including your name, email address, phone number, or details submitted
              through contact forms.
            </li>
            <li>
              <strong>Business Information:</strong> Details related to your SEO or
              link-building requirements when you request services.
            </li>
            <li>
              <strong>Derivative Data:</strong> Automatically collected technical
              data such as IP address, browser type, pages visited, and other
              analytics for improving user experience.
            </li>
            <li>
              <strong>Cookies & Tracking Data:</strong> Cookies that help remember
              your preferences and analytics tools used to optimize performance.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>Your information may be used to:</p>

          <ul>
            <li>Deliver, operate, and improve RankoLink services.</li>
            <li>Communicate with you regarding inquiries or ongoing projects.</li>
            <li>Send promotional or marketing content (only with your consent).</li>
            <li>Analyze usage patterns to enhance user experience.</li>
            <li>Comply with legal obligations and prevent fraudulent activity.</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            RankoLink does <strong>not sell or trade</strong> your personal
            information. However, we may share data with:
          </p>

          <ul>
            <li>
              <strong>Trusted service providers</strong> who assist in operations
              such as analytics, hosting, or communication.
            </li>
            <li>
              <strong>Legal authorities</strong> if required by law.
            </li>
            <li>
              <strong>Business partners</strong> in the event of a merger,
              acquisition, or restructuring, under strict confidentiality.
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption,
            limited access controls, secure servers, and routine security reviews to
            protect your data from unauthorized access or misuse.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>

          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request updates or corrections to inaccurate information.</li>
            <li>Request deletion of your data, where applicable.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Request data portability, where feasible.</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            RankoLink uses essential, analytical, and marketing cookies. You may
            control or disable cookies through your browser settings. Some features
            may not function properly without cookies.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated “Last updated” date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, you can
            reach us at:
          </p>

          <p><strong>Email:</strong> info@rankolink.com</p>

          <p>© {new Date().getFullYear()} RankoLink. All rights reserved.</p>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
