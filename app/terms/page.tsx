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

      <main className="flex-grow">
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 mb-16 overflow-hidden min-h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm">
              Legal
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services to ensure a clear understanding of our mutual agreement.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 pb-12">

        <div className="prose prose-blue max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>
            These Terms of Service (“Terms”) govern your use of the RankoLink
            website and any services we provide. By accessing or using our
            platform, you agree to these Terms. If you do not agree, you should
            discontinue use of our site immediately.
          </p>

          <h2>Use of Our Services</h2>
          <p>
            You agree to use RankoLink’s services only for lawful purposes and in
            a manner that does not violate any applicable laws or regulations. You
            may not misuse our platform, attempt to compromise security, or engage
            in activities that disrupt service performance for others.
          </p>

          <h2>Accounts & Responsibilities</h2>
          <p>
            When creating an account or communicating with RankoLink, you agree to
            provide accurate, current, and complete information. You are
            responsible for maintaining the confidentiality of your access
            credentials and for all activities that occur under your account.
          </p>

          <h2>Service Delivery</h2>
          <p>
            RankoLink provides SEO, link-building, and related digital services.
            While we strive to deliver consistent and high-quality performance, we
            do not guarantee specific rankings, traffic improvements, or outcomes,
            as results may vary based on multiple external factors outside our
            control.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, branding, features, designs, systems, and documentation on
            the RankoLink website are the exclusive property of RankoLink and its
            licensors. You may not copy, reproduce, redistribute, or exploit any
            material without prior written permission.
          </p>

          <h2>Payments & Billing</h2>
          <p>
            Certain RankoLink services may require payment. By purchasing services,
            you agree to provide valid billing information and authorize us to
            charge applicable fees. All payments are non-refundable unless stated
            otherwise in a written agreement.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our site may include links to third-party websites or tools. These are
            provided solely for convenience. RankoLink does not control or endorse
            third-party content and is not responsible for any issues arising from
            their use.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            RankoLink shall not be liable for any indirect, incidental,
            consequential, or punitive damages resulting from the use or inability
            to use our services. Our total liability shall not exceed the amount
            paid by you for services within the previous 30 days.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our site or
            services at any time, without notice, if you violate these Terms or
            engage in harmful behavior that affects our operations or clients.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            RankoLink may update these Terms from time to time. Changes will be
            posted on this page, and your continued use of the site constitutes
            acceptance of the updated Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, feel free to
            contact us:
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
