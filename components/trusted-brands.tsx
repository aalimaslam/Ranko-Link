'use client'
import Image from "next/image"

export default function TrustedBrands() {
  const logos = [
    { src: "/nexus-link-agency.png", alt: "NexusLink", link: "https://nexuslinkagency.com" },
    { src: "/aural-crave.jpg", alt: "Auralcrave", link: "https://auralcrave.com" },
    { src: "/tech-captures.png", alt: "TechCaptures", link: "https://techcaptures.com" },
    { src: "/g2.svg", alt: "G2", link: "https://g2.com" },
    { src: "/rosario-neustro.png", alt: "Rosario Nuestro", link: "https://rosarionuestro.com" },
    { src: "/promodo.svg", alt: "Promodo", link: "https://promodo.com" },
    { src: "/photo-ad-king.svg", alt: "PhotoADKing", link: "https://photoadking.com" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
          We Don't Just Work Together — 
          <span className="text-blue-500"> We Grow </span>
          Together.
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {logos.map((logo, i) => (
            <a
              key={i}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={80}
                className="object-contain transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
