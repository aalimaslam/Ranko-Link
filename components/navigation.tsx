"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Logo from "@/public/Ranko-Logo.png";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();

  // ⚡ Optimized scroll handling
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60 && !isScrolled) setIsScrolled(true);
    else if (latest <= 60 && isScrolled) setIsScrolled(false);
  });

  // Spotlight effect (GPU-based, no layout shift)
  const handleSpotlight = (e: any) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    navRef.current.style.setProperty("--spotlight-x", `${x}px`);
    navRef.current.style.setProperty("--spotlight-y", `${y}px`);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav
      ref={navRef}
      onMouseMove={handleSpotlight}
      className="
        sticky top-0 z-50 
        lg:w-[80%] lg:mx-auto lg:top-5 
        backdrop-blur-[5px]
        rounded-none lg:rounded-full 
        overflow-hidden
        transition-all
      "
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255,255,255,0.55)"
          : "rgba(255,255,255,0.15)",
        boxShadow: isScrolled
          ? "0 8px 30px rgba(0,0,0,0.09)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        // Spotlight effect (fast + GPU)
        backgroundImage: `
          radial-gradient(300px circle at var(--spotlight-x) var(--spotlight-y),
          rgba(150,170,255,0.25),
          transparent 70%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <motion.img
              src={Logo.src}
              alt="RankoLink Logo"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={item.href}
                  className="relative text-[15px] font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all"></span>
                </Link>
              </motion.div>
            ))}

            <Button
              className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full px-6 py-2 hover:scale-[1.04] transition"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* TABLET NAV */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[14px] text-gray-700 hover:text-blue-500 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden rounded-xl shadow-lg mt-2 py-4 px-3 
                bg-gradient-to-b from-blue-50 to-white
                border border-blue-100
              "
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-[16px] font-medium text-gray-800 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <Button
                className="w-full mt-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow hover:shadow-lg"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
