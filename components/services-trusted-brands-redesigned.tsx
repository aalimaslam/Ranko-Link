"use client";
import Image from "next/image";

export default function TrustedBrands() {
  const logos = [
    {
      src: "/nexus-link-agency.png",
      alt: "NexusLink",
      link: "https://nexuslinkagency.com",
    },
    {
      src: "/aural-crave.jpg",
      alt: "Auralcrave",
      link: "https://auralcrave.com",
    },
    {
      src: "/tech-captures.png",
      alt: "TechCaptures",
      link: "https://techcaptures.com",
    },
    { src: "/g2.png", alt: "G2", link: "https://g2.com" },
    {
      src: "/rosario-neustro.png",
      alt: "Rosario Nuestro",
      link: "https://rosarionuestro.com",
    },
    { src: "/promodo.svg", alt: "Promodo", link: "https://promodo.com" },
    {
      src: "/photo-ad-king.svg",
      alt: "PhotoADKing",
      link: "https://photoadking.com",
    },
    { src: "/stripe-logo.png", alt: "Stripe", link: "https://stripe.com" },
    { src: "/shopify.svg", alt: "Shopify", link: "https://shopify.com" },
    { src: "/slack.svg", alt: "Slack", link: "https://slack.com" },
  ];

  // Duplicate list to create seamless infinite scrolling effect
  const loopLogos = [...logos, ...logos];

  return (
    <section className="py-14 bg-gradient-to-r from-blue-400 via-purple-300 to-blue-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <h2 className="font-heading font-bold text-5xl ">
            Trusted by{" "}
            <span className="font-heading font-bold text-5xl text-blue-600">
              Leading Brands
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with some of the most innovative
            companies worldwide.
          </p>
        </div>

        {/* OUTER WRAPPER */}
        <div className="overflow-hidden relative w-full">
          {/* SCROLLING ROW */}
          <div className="flex items-center gap-8 animate-scrollR2L whitespace-nowrap">
            {loopLogos.map((logo, i) => (
              <a
                key={i}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white p-5 rounded-xl border border-gray-200 
                  flex items-center justify-center min-w-[160px]
                  transition-transform duration-300 hover:scale-105 hover:shadow-lg
                "
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={70}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style jsx>{`
        @keyframes scrollR2L {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scrollR2L {
          animation: scrollR2L 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
