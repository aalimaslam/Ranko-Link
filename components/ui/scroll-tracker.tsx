"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, (value) => `${value * 100}%`);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-[99999] pointer-events-none">
      <motion.div
        className="h-full bg-blue-600"
        style={{ width }}
      />
    </div>
  );
}
