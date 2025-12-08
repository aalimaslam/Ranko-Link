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
      </main>

      <Footer />
    </div>
  );
}
