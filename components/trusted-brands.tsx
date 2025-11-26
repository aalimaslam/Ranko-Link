"use client";
import Image from "next/image";

export default function TrustedBrands() {
  const logos = [
    {
      src: "/nexus-link-agency.png",
      alt: "NexusLink",
      // link: "https://nexuslinkagency.com",
    },
    {
      src: "/aural-crave.jpg",
      alt: "Auralcrave",
      // link: "https://auralcrave.com",
    },
    {
      src: "/tech-captures.png",
      alt: "TechCaptures",
      // link: "https://techcaptures.com",
    },
    {
      src: "/g2.png",
      alt: "G2",
      // link: "https://g2.com",
    },
    {
      src: "/rosario-neustro.png",
      alt: "Rosario Nuestro",
      // link: "https://rosarionuestro.com",
    },
    { src: "/promodo.svg", alt: "Promodo" },
    {
      src: "/photo-ad-king.svg",
      alt: "PhotoADKing",
      // link: "https://photoadking.com",
    },
    {
      src: "/stripe-logo.png",
      alt: "Stripe",
      // link: " https://stripe.com",
    },
    {
      src: "/shopify.svg",
      alt: "Shopify",
      // link: " https://shopify.com",
    },
    {
      src: "/slack.svg",
      alt: "Slack",
      // link: " https://slack.com",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight ">
          We Don't Just Work Together
          <span
            className="
      bg-gradient-to-r 
      from-purple-500 
      via-purple-600 
      to-blue-500
      bg-clip-text 
      text-transparent
      pt-4 
      text-[3rem]
      line-clamp-3
    "
          >
            We Grow Together.
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {logos.map((logo, i) => (
            <a
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="
            bg-white p-4 rounded-xl border border-gray-200 
            flex items-center justify-center 
            transition-transform duration-300 
            hover:scale-105 hover:shadow-lg
          "
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
