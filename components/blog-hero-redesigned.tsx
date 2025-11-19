"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface BlogHeroProps {
  onSearchChange: (query: string) => void;
}

export default function BlogHeroRedesigned({ onSearchChange }: BlogHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden bg-blue-50 dark:bg-blue-950 py-20 sm:py-24"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Label */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-flex items-center px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          SEO Knowledge Hub
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-balance"
        >
          <span className="text-blue-900 dark:text-white">
            Master SEO with{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Expert Insights
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Stay ahead with actionable SEO strategies, link building guides, and
          expert analyses from the RankoLink team.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="max-w-xl mx-auto"
        >
          <div
            className="
      relative flex items-center 
      bg-white/80 backdrop-blur-xl
      dark:bg-blue-900/40 
      rounded-2xl
      border border-blue-200/60 dark:border-blue-800/60
      shadow-[0_4px_20px_rgba(30,64,175,0.12)]
      transition-all duration-300
      hover:shadow-[0_6px_28px_rgba(30,64,175,0.18)]
    "
          >
            {/* Search Icon */}
            <Search className="absolute left-4 text-blue-600 dark:text-blue-300 w-5 h-5" />

            {/* Input */}
            <Input
              type="text"
              placeholder="Search articles, guides, and insights..."
              className="
        pl-14 pr-36 py-5 
        text-base rounded-2xl
        bg-transparent border-none 
        focus:ring-0 focus:outline-none 
        placeholder:text-gray-400 dark:placeholder:text-gray-300
      "
              onChange={(e) => onSearchChange(e.target.value)}
            />

            {/* Search Button */}
            <Button
              size="sm"
              className="
        absolute right-0 
        rounded-xl px-8 py-5
        bg-gradient-to-r from-blue-600 to-indigo-600
        hover:from-blue-700 hover:to-indigo-700
        text-white font-medium
        shadow-md hover:shadow-lg
        transition-all duration-300
      "
            >
              Search
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
