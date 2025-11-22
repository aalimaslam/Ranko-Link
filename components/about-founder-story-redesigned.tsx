"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutFounderStoryRedesigned() {
  // Lightweight parallax (GPU transform only)
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-white">
      {/* 🔵 Soft Parallax Glow — inexpensive */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-20 left-1/2 -translate-x-1/2 
        w-[500px] h-[500px] bg-blue-200/50 blur-[110px] rounded-full opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center space-y-5 mb-20"
        >
          <h2
            className="font-heading font-extrabold text-4xl lg:text-5xl 
            bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-400 
            bg-clip-text text-transparent"
          >
            Co-Founder's Story
          </h2>

          <p className="text-blue-800/70 text-lg max-w-3xl mx-auto leading-relaxed">
            The vision and mission behind RankoLink’s growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ===================== Founder Image (Optimized) ===================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute w-[340px] h-[340px] bg-blue-300/20 blur-[100px] rounded-full -z-10" />

            {/* Image */}
            <motion.img
              src="/adnan.jpg"
              alt="Co-Founder Adnan"
              className="rounded-2xl w-[380px] h-auto object-cover shadow-xl border border-blue-100/50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* ===================== Text Section ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-8"
          >
            {/* BIO */}
            <div>
              <h3 className="font-heading text-3xl font-extrabold text-blue-900">
                Mr. Adnan
              </h3>
              <p className="text-blue-700/80 leading-relaxed mt-3">
                Adnan started as an independent SEO strategist, helping brands
                grow through premium link-building. His hands-on expertise and
                dedication to results shaped RankoLink — now one of the most
                trusted authorities in SEO & backlinks.
              </p>
            </div>

            {/* QUOTE BOX */}
            <Card className="bg-white/50 border border-blue-100/40 shadow-xl backdrop-blur-xl rounded-xl">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Quote className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <blockquote className="text-blue-800 leading-relaxed font-medium">
                    “If you're seeking transparent, reliable and results-driven
                    SEO — you're at the right place. We focus on quality,
                    ethics, and measurable success.”
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            {/* FINAL TEXT */}
            <p className="text-blue-700/80 leading-relaxed">
              Guided by his philosophy that{" "}
              <span className="font-semibold text-blue-900">
                “A client's success is our greatest achievement,”
              </span>{" "}
              RankoLink continues to deliver real ranking improvements for
              brands worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
