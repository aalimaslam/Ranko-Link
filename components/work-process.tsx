"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Heading } from "./heading";

const AccordionItem = ({
  number,
  title,
  description,
  isActive,
  onClick,
}: any) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  // GSAP Entry + Hover
  useEffect(() => {
    const el = cardRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );

    const hoverIn = () => {
      gsap.to(el, { scale: 1.02, duration: 0.3, ease: "power2.out" });
      gsap.to(bg, { opacity: 0.18, duration: 0.3 });
    };

    const hoverOut = () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(bg, { opacity: isActive ? 0.15 : 0.1, duration: 0.3 });
    };

    el.addEventListener("mouseenter", hoverIn);
    el.addEventListener("mouseleave", hoverOut);

    return () => {
      el.removeEventListener("mouseenter", hoverIn);
      el.removeEventListener("mouseleave", hoverOut);
    };
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`
        relative rounded-3xl cursor-pointer group overflow-hidden
        shadow-md hover:shadow-xl transition-all duration-700 ease-in-out
        bg-gradient-to-br from-gray-50 via-white to-gray-100
        ${isActive ? "md:flex-[4]" : "md:flex-1"}
        
        /* Mobile: each card is full-width */
        w-full 
        min-h-[240px]
      `}
    >
      {/* Premium Line Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-500"
      >
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 600 600"
          preserveAspectRatio="none"
        >
          <path
            d="M50 300 Q300 50 550 300 T1050 300"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="transparent"
            strokeOpacity="0.3"
          />
          <path
            d="M50 350 Q300 100 550 350 T1050 350"
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeOpacity="0.25"
            fill="transparent"
          />
        </svg>
      </div>

      {/* Collapsed Header */}
      <div
        className={`
          absolute inset-0 p-6 flex items-center justify-start md:justify-center
          transition-opacity duration-300
          ${isActive ? "opacity-0" : "opacity-100"}
        `}
      >
        <div className="text-[80px] md:text-[140px] font-bold text-blue-400 leading-none transition-all">
          {number}
        </div>
      </div>

      {/* Expanded */}
      <div
        className={`
          absolute inset-0 p-6 md:p-12 flex flex-col justify-center
          transition-opacity duration-500
          ${
            isActive
              ? "opacity-100 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300"
              : "opacity-0"
          }
        `}
      >
        <h2 className="text-5xl md:text-8xl font-bold text-blue-700 mb-3">
          {number}
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
          {title}
        </h3>
        <p className="text-sm md:text-lg text-blue-900 leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

function HorizontalAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      number: "1",
      title: "Discovery & Research",
      description:
        "We dive deep into understanding your business, target audience, and market landscape. Through comprehensive research and analysis, we uncover opportunities and insights that shape our strategic approach.",
      colorClass: "bg-white",
    },
    {
      number: "2",
      title: "Smart Planning & Strategy",
      description:
        "We craft a custom plan prioritizing quality, relevance, and maximum impact on your website's organic visibility. We analyze your existing content and identify the most relevant publications in your vertical.",
      colorClass: "bg-white",
    },
    {
      number: "3",
      title: "Content Creation",
      description:
        "Our team creates compelling, high-quality content that resonates with your audience and aligns with your brand voice. We focus on content that drives engagement, builds authority, and achieves your objectives.",
      colorClass: "bg-white",
    },
    {
      number: "4",
      title: "Optimization & Growth",
      description:
        "We continuously monitor performance metrics and refine our approach to maximize results. Data-driven optimization ensures sustainable growth and long-term success for your digital presence.",
      colorClass: "bg-white",
    },
  ];

  return (
    <div className="flex items-center justify-center px-5 md:px-10">
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        @media (max-width: 768px) {
          .writing-mode-vertical {
            writing-mode: horizontal-tb;
          }
        }
      `}</style>

      <div className="flex flex-col md:flex-row gap-4 md:gap-2 w-full max-w-7xl h-auto md:h-[500px]">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkProcess() {
  return (
    <section className="bg-gray-50 py-20">
      <Heading
        black="Work Process"
        colored="Our"
        description="Our work process is designed to ensure that we deliver the best results for our clients. From discovery and research to optimization and growth, we follow a structured approach that prioritizes quality, relevance, and impact."
      />
      <HorizontalAccordion />
    </section>
  );
}
