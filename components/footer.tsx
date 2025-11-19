"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const reviews = [
    {
      name: "Daniel R.",
      company: "Growthify Agency",
      review:
        "RankoLink helped us scale our backlink strategy with consistent, high-quality placements. Our organic traffic doubled in 3 months.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      company: "SaaS Launchpad",
      review:
        "Exceptional communication, clean reports, and powerful backlinks. Easily the most reliable link-building service we've used.",
      rating: 5,
    },
    {
      name: "Michael T.",
      company: "Ecom Boosters",
      review:
        "They delivered exactly what they promised — high authority links and real ranking improvements. Highly recommended!",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative overflow-hidden text-gray-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 animate-gradient-xy-dark" />

      {/* Glowing particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-500 rounded-full animate-ping" />
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-500" />
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700" />
      </div>

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm border-t border-blue-800/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 — Logo */}
          <div className="space-y-6 group">
            <div className="flex items-center space-x-3 group-hover:scale-105 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl rotate-3 group-hover:rotate-6 transition">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
                RankoLink
              </span>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Premium SEO & Link Building Agency delivering high-quality
              backlinks and measurable ranking improvements.
            </p>

            <div className="flex space-x-4 text-xs">
              <div className="flex items-center space-x-1 text-blue-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                <span>99.9% Uptime</span>
              </div>
            </div>

            {/* Social icons (left column) */}
            <div className="flex items-center space-x-4 pt-3">
              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white text-blue-300 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.48 7.48h3.82v2.19h.05c.53-1 1.83-2.19 3.76-2.19 4.02 0 4.76 2.65 4.76 6.1V23.5h-4v-8.28c0-1.97-.04-4.5-2.75-4.5-2.75 0-3.17 2.15-3.17 4.36V23.5h-4V7.48z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-white text-blue-300 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white text-blue-300 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.6c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
                </svg>
              </Link>

              {/* Twitter */}
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-white text-blue-300 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.05 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.89a4.28 4.28 0 001.32 5.71 4.25 4.25 0 01-1.94-.54v.05a4.29 4.29 0 003.44 4.19 4.29 4.29 0 01-1.93.07 4.3 4.3 0 004 2.98A8.6 8.6 0 012 19.53a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.7 8.7 0 0022.46 6z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-blue-100 text-lg relative">
              Services
              <div className="absolute -bottom-1 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full" />
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Full Managed Link Building",
                "White Label Link Building",
                "SaaS Backlinks",
                "Country Specific Links",
              ].map((service, i) => (
                <li key={i} className="group">
                  <Link
                    href="/services"
                    className="text-blue-200 hover:text-white flex items-center space-x-2 group-hover:translate-x-1 transition"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-blue-100 text-lg relative">
              Company
              <div className="absolute -bottom-1 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full" />
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" },
              ].map((item, i) => (
                <li key={i} className="group">
                  <Link
                    href={item.href}
                    className="text-blue-200 hover:text-white flex items-center space-x-2 transition group-hover:translate-x-1"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Review Carousel */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[330px] bg-blue-900/40 backdrop-blur-md border border-blue-800/40 rounded-xl p-4 shadow-xl">
              <div className="flex justify-center mb-2">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <span key={i} className="text-yellow-300 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-blue-200 text-sm text-center leading-relaxed mb-3">
                “{reviews[current].review}”
              </p>

              <p className="text-blue-100 text-xs text-center font-medium">
                {reviews[current].name} —{" "}
                <span className="text-blue-300">
                  {reviews[current].company}
                </span>
              </p>

              <div className="flex justify-center mt-3 space-x-2">
                {reviews.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition ${
                      current === index
                        ? "bg-blue-300 scale-125"
                        : "bg-blue-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Social Icons */}
        <div className="mt-16 pt-8 border-t border-blue-800 relative">
          {/* Glowing line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          {/* Social Icons (top-right) */}
          <div className="absolute top-0 right-6 -translate-y-1/2 flex items-center space-x-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-blue-300 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.48 7.48h3.82v2.19h.05c.53-1 1.83-2.19 3.76-2.19 4.02 0 4.76 2.65 4.76 6.1V23.5h-4v-8.28c0-1.97-.04-4.5-2.75-4.5-2.75 0-3.17 2.15-3.17 4.36V23.5h-4V7.48z" />
              </svg>
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-blue-300 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
              </svg>
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-blue-300 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.6c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
              </svg>
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-blue-300 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.05 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.89a4.28 4.28 0 001.32 5.71 4.25 4.25 0 01-1.94-.54v.05a4.29 4.29 0 003.44 4.19 4.29 4.29 0 01-1.93.07 4.3 4.3 0 004 2.98A8.6 8.6 0 012 19.53a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.7 8.7 0 0022.46 6z" />
              </svg>
            </Link>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-blue-300 text-sm">
                © {new Date().getFullYear()} RankoLink. All rights reserved.
              </p>
              <div className="hidden md:block w-1 h-1 bg-blue-500 rounded-full" />
              <p className="text-blue-400 text-xs">
                Crafted with ❤️ for SEO Excellence
              </p>
            </div>

            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="hover:text-blue-400 text-blue-300 text-sm hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-blue-400 text-blue-300 text-sm hover:underline underline-offset-4"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom big brand */}
        <div className="flex justify-center">
          <div className="md:text-8xl text-4xl text-center font-black mt-10 bg-gradient-to-r from-blue-800 via-blue-100 to-blue-800 animate-rankolink text-transparent bg-clip-text">
            RankoLink
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-xy-dark {
          0%,
          100% {
            background-size: 400% 400%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-xy-dark {
          animation: gradient-xy-dark 25s ease infinite;
        }

        @keyframes animateRankolink {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 600px 0;
          }
        }
        .animate-rankolink {
          background-size: 600px auto;
          animation: animateRankolink 4s linear infinite;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
}
