"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const reviews = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "Marketing Director",
    rating: 5,
    review:
      "RankoLink transformed our SEO strategy completely. Within 6 months, we saw a 300% increase in organic traffic and secured top rankings for our target keywords. Their white-hat approach gave us confidence in long-term results.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    company: "E-commerce Solutions",
    role: "CEO & Founder",
    rating: 5,
    review:
      "The team at RankoLink is exceptional. Their personalized outreach and quality link placements helped us establish authority in our niche. The detailed reporting keeps us informed every step of the way.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    company: "Digital Marketing Pro",
    role: "Growth Manager",
    rating: 5,
    review:
      "As a marketing agency, we needed a reliable white-label partner. RankoLink delivers consistently high-quality backlinks that we're proud to present to our clients. Their transparency and professionalism are unmatched.",
    avatar: "ER",
  },
  {
    name: "David Thompson",
    company: "SaaS Startup",
    role: "Head of Growth",
    rating: 5,
    review:
      "RankoLink's SaaS-focused link building strategy was exactly what we needed. They understood our industry and delivered relevant, high-authority links that boosted both our rankings and referral traffic significantly.",
    avatar: "DT",
  },
];

export default function ClientReviews() {
  const infiniteReviews = reviews.map((revi) => ({
    name: revi.name,
    quote: revi.review,
    title: revi.role,
  }));

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="text-center space-y-6 mb-20">
        <h2 className="text-4xl lg:text-5xl  font-bold font-heading ">
          Loved by{" "}
          <span className="bg-gradient-to-r from-[#5905f6] to-[#9418c5d4] bg-clip-text text-transparent">
            Growing Brands
          </span>
          {/* <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-black to-gray-400 rounded-full" /> */}
        </h2>
        <p className="text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto">
          Teams worldwide rely on RankoLink to scale their SEO and dominate
          search results with proven strategies.
        </p>
      </div>
      <InfiniteMovingCards speed="slow" items={infiniteReviews} />
    </section>
  );
}
