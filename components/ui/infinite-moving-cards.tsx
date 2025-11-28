"use client";

import { cn } from "@/lib/utils";
import { MessageCircle, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  IconThumbUp,
  IconMessageCircle,
  IconRepeat,
} from "@tabler/icons-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "100s"; // default (slow)
      if (speed === "fast") duration = "150s";
      else if (speed === "normal") duration = "150s";
      else if (speed === "slow") duration = "150s";

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 mx-auto",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="
    relative w-[350px] max-w-full shrink-0 rounded-3xl 
    bg-white/90 dark:bg-white/10 
    backdrop-blur-2xl 
    px-7 py-6 md:w-[450px]

    shadow-[0_6px_24px_rgba(0,0,0,0.06)]
    hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
    transition-all duration-300 
    hover:-translate-y-2
  "
            key={item.name}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              {/* Avatar */}
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 flex items-center justify-center text-white font-semibold font-sans uppercase backdrop-blur-md">
                {item.name.charAt(0)}
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-neutral-800 dark:text-gray-100">
                  {item.name}
                </span>
                <span className="text-xs text-neutral-500 dark:text-gray-400">
                  {item.title}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-base text-neutral-700 dark:text-gray-200 leading-relaxed">
              {item.quote}
            </p>

            {/* Footer */}
            <div className="mt-5 flex justify-between items-center">
              {/* RankoLink Badge */}
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-sm">
                RankoLink
              </span>

              {/* Actions */}
              <div className="flex items-center gap-4 text-neutral-500 dark:text-gray-400">
                <IconThumbUp
                  size={20}
                  className="cursor-pointer hover:text-purple-600 transition"
                />
                <IconMessageCircle
                  size={20}
                  className="cursor-pointer hover:text-blue-600 transition"
                />
                <IconRepeat
                  size={20}
                  className="cursor-pointer hover:text-teal-600 transition"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
