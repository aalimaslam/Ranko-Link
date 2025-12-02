"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface BlogTOCProps {
  content: string;
}

export default function BlogTOC({ content }: BlogTOCProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse content to find headings
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const elements = doc.querySelectorAll("h2, h3");

    const items: TOCItem[] = Array.from(elements).map((element, index) => {
      const id = element.id || `heading-${index}`;
      return {
        id,
        text: element.textContent || "",
        level: Number(element.tagName.substring(1)),
      };
    });

    setHeadings(items);
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [content]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const headingElements = document.querySelectorAll("h2, h3");
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="hidden lg:block sticky top-32">
      <div className="relative">
        <h3 className="font-heading font-bold text-lg text-blue-950 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-600 rounded-full" />
          Table of Contents
        </h3>
        
        <nav className="relative flex flex-col space-y-1">
          {/* Vertical line track */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-blue-100 rounded-full" />

          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            
            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setActiveId(heading.id);
                }}
                className={cn(
                  "group relative flex items-center py-2 text-sm transition-all duration-300",
                  heading.level === 3 ? "pl-8" : "pl-0"
                )}
              >
                {/* Active Indicator Dot */}
                <div className="absolute left-[7px] z-10 flex items-center justify-center w-2.5">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_0_3px_rgba(255,255,255,1)]"
                  />
                  {!isActive && (
                    <div className="w-1.5 h-1.5 bg-blue-200 rounded-full group-hover:bg-blue-400 transition-colors" />
                  )}
                </div>

                {/* Text */}
                <span
                  className={cn(
                    "ml-8 transition-colors duration-200",
                    isActive
                      ? "text-blue-700 font-semibold"
                      : "text-slate-500 hover:text-blue-600 font-medium"
                  )}
                >
                  {heading.text}
                </span>
                
                {/* Active Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeTOC"
                    className="absolute inset-0 bg-blue-50/80 rounded-lg -z-10 ml-5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
