"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Award } from "lucide-react";
import TextType from "./ui/text-type";
import StatsSection from "./hero-numbers";

export default function FancyHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const rotatingWords = [
    "Customers",
    "Profit",
    "Traffic",
    "Leads",
    "SEO Success",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-white"
    >
      {/* Background Grid Pattern */}
      {/* <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(45deg,transparent_49%,#4f46e4_49%_51%,transparent_51%),linear-gradient(-45deg,transparent_49%,#4f46e4_49%_51%,transparent_51%)] bg-[size:2em_2em]" /> */}

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-8 marker:lg:px-12 marker:lg:pt-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Section (Text) */}
        <div
          className={`flex-1 transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          {/* Small Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full mb-10 bg-white/30 backdrop-blur-md border border-blue-300 shadow-sm">
            <Award className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">
              Award-Winning Link Building Agency
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            RankoLink Builds{" "}
            <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Links That Convert
            </span>
            <br />
            Into{" "}
            <span
              className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <TextType
                text={rotatingWords}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
              />
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
            We help ambitious brands achieve sustainable SEO growth with
            backlinks that deliver measurable traffic and lasting authority.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact#contact-section"
              className="group px-4 py-3 text-lg font-medium text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md transition-all hover:shadow-lg hover:scale-[1.03]"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/services#case-studies"
              className="flex items-center justify-center px-4 py-3 text-lg font-medium text-gray-700 bg-white/80 border border-gray-200 rounded-xl shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              View Our Work
            </Link>
          </div>
          {/* Stats Section Below */}
          <div className="mt-16">
            <StatsSection isVisible={isVisible} />
          </div>
        </div>

        {/* Right Section (Image) */}
        <div
          className={`flex-1 md:flex hidden justify-center lg:justify-end transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0 "
          }`}
        >
          <div className="relative w-[100%]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-indigo-400/10 to-purple-400/20 rounded-3xl blur-3xl -z-10"></div>
            <img
              src="/hero.svg"
              alt="SEO Growth Illustration"
              className="w-full border border-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
