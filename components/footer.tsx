"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NextImage from "next/image";
import FooterLink from "./ui/footerLink";
import FooterColumn from "./ui/footerColumn";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideInstagram,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";

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
    <footer className="relative overflow-hidden text-gray-300 mt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 animate-gradient-xy-dark" />

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/Rankolink-logo.svg"
                width={180}
                height={40}
                alt="RankoLink Logo"
                priority
                className="object-contain hover:scale-105 transition-transform"
              />
            </div>

            <p className="text-blue-200 text-sm max-w-xs">
              Premium SEO & Link Building Agency delivering high-quality
              backlinks and measurable ranking improvements.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center space-x-1 text-blue-300">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                <span>99.9% Uptime</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: linkedinIcon, link: "https://linkedin.com" },
                { icon: instagramIcon, link: "https://instagram.com" },
                { icon: facebookIcon, link: "https://facebook.com" },
                { icon: twitterIcon, link: "https://twitter.com" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="hover:text-white text-blue-300 transition"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-blue-200 text-sm font-semibold mb-3">
              Services
            </h3>
            {[
              "Full Managed Link Building",
              "White Label Link Building",
              "SaaS Backlinks",
              "Country Specific Links",
            ].map((service, i) => (
              <FooterLink key={i} href="/services">
                {service}
              </FooterLink>
            ))}
          </div>
          {/* Company */}
          <div>
            <h3 className="text-blue-200 text-sm font-semibold mb-3">
              Company
            </h3>
            {[
              { name: "About Us", href: "/about" },
              { name: "Blog", href: "/blog" },
              { name: "Pricing", href: "/pricing" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => (
              <FooterLink key={i} href={item.href}>
                {item.name}
              </FooterLink>
            ))}
          </div>

          {/* Review Carousel */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[320px] bg-blue-900/40 backdrop-blur-md border border-blue-800/40 rounded-xl p-5 shadow-xl">
              {/* Stars */}
              <div className="flex justify-center mb-2">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-300 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-blue-200 text-sm text-center mb-3 leading-relaxed">
                “{reviews[current].review}”
              </p>

              <p className="text-blue-100 text-xs text-center font-medium">
                {reviews[current].name} —{" "}
                <span className="text-blue-300">
                  {reviews[current].company}
                </span>
              </p>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-3 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition ${
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

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-blue-800 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p className="text-blue-300 text-sm">
                © {new Date().getFullYear()} RankoLink. All rights reserved.
              </p>
              <p className="text-blue-400 text-xs">
                Crafted with ❤️ for SEO Excellence
              </p>
            </div>

            <div className="flex gap-8">
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

        {/* Bottom Brand Name */}
        <div className="flex justify-center">
          <div className="text-4xl md:text-7xl font-black mt-10 bg-gradient-to-r from-blue-800 via-blue-100 to-blue-800 animate-rankolink text-transparent bg-clip-text">
            RankoLink
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-xy-dark {
          0%,
          100% {
            background-position: left center;
          }
          50% {
            background-position: right center;
          }
        }
        .animate-gradient-xy-dark {
          animation: gradient-xy-dark 20s ease infinite;
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
          opacity: 0.85;
        }
      `}</style>
    </footer>
  );
}

/* SVG ICONS */
const linkedinIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.48 7.48h3.82v2.19h.05c.53-1 1.83-2.19 3.76-2.19 4.02 0 4.76 2.65 4.76 6.1V23.5h-4v-8.28c0-1.97-.04-4.5-2.75-4.5-2.75 0-3.17 2.15-3.17 4.36V23.5h-4V7.48z" />
  </svg>
);

const instagramIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
  </svg>
);

const facebookIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.6c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
  </svg>
);

const twitterIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.05 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.89a4.28 4.28 0 001.32 5.71 4.25 4.25 0 01-1.94-.54v.05a4.29 4.29 0 003.44 4.19 4.29 4.29 0 01-1.93.07 4.3 4.3 0 004 2.98A8.6 8.6 0 012 19.53a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.7 8.7 0 0022.46 6z" />
  </svg>
);
