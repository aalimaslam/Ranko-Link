"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutHeroRedesigned() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-blue-50/30 py-20 lg:py-32"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8"
        >
          <Users className="w-4 h-4 mr-2" />
          Meet the Team
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
        >
          <span className="text-blue-900">The SEO Experts Behind </span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Your Success
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl lg:text-2xl text-blue-800/80 max-w-4xl mx-auto leading-relaxed mb-10"
        >
          We&apos;re passionate about helping businesses achieve unparalleled online visibility through ethical,
          results-driven SEO and link building strategies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-xl shadow-md transition-all"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Work With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-blue-700 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-400 px-8 py-6 rounded-xl transition-colors"
          >
            Our Story
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
