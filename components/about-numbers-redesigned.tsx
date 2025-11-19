"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TrendingUp, Users, Target, Award, Globe, Zap } from "lucide-react";

const AccordionItem = ({
  number,
  label,
  icon: Icon,
  description,
  isActive,
  onClick,
}: any) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

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

      {/* Collapsed State - Show Only Icon with Background Circle */}
      <div
        className={`
          absolute inset-0 p-6 flex flex-col items-center justify-center
          transition-opacity duration-300 bg-gradient-to-br from-blue-50 via-blue-80 to-blue-100
          ${isActive ? "opacity-0" : "opacity-100"}
        `}
      >
        <div className="relative">
          {/* Outer glow circle */}
          <div className="absolute  bg-blue-600/20 rounded-full blur-xl scale-125"></div>

          {/* Main icon circle with gradient */}
          <div
            className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
            bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 
            shadow-lg shadow-blue-200/50  "
          >
            <Icon
              className="w-8 h-8 md:w-10 md:h-10 text-blue-500"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Optional: Show number below icon when collapsed
        <div className="mt-6 text-3xl md:text-4xl font-bold text-blue-400">
          {number}
        </div> */}
      </div>

      {/* Expanded State */}
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
        <Icon
          className="w-12 h-12 md:w-16 md:h-16 text-blue-700 mb-4"
          strokeWidth={1.5}
        />
        <h2
          className="text-5xl md:text-8xl font-extrabold 
  bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
  text-transparent bg-clip-text mb-3"
        >
          {number}
        </h2>

        <h3 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4">
          {label}
        </h3>

        <p className="text-sm md:text-lg text-indigo-900/80 leading-relaxed max-w-xl">
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
      icon: TrendingUp,
      number: "5000+",
      label: "Successful Campaigns",
      description:
        "Link building campaigns completed with exceptional results and measurable impact on organic visibility.",
    },
    {
      icon: Users,
      number: "200+",
      label: "Happy Clients",
      description:
        "Businesses we've helped grow through strategic SEO and link building initiatives.",
    },
    {
      icon: Target,
      number: "95%",
      label: "Success Rate",
      description:
        "Client satisfaction rate demonstrating our commitment to delivering exceptional results.",
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      description:
        "In SEO and link building, helping businesses achieve their digital marketing goals.",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description:
        "Global reach and expertise serving clients across diverse markets and industries.",
    },
    {
      icon: Zap,
      number: "10K+",
      label: "Quality Backlinks",
      description:
        "High-authority links built through strategic outreach and quality content creation.",
    },
  ];

  return (
    <div className="flex items-center justify-center px-5 md:px-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 w-full max-w-7xl h-auto md:h-[500px]">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            icon={item.icon}
            number={item.number}
            label={item.label}
            description={item.description}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutNumbers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-transparent bg-clip-text">
            Our Impact in Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            These numbers represent real results and the trust our clients place
            in us.
          </p>
        </div>

        <HorizontalAccordion />
      </div>
    </section>
  );
}
