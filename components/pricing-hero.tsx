"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingHero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      className="relative overflow-hidden bg-white py-20 lg:py-32"
    >
      {/* Floating blue glow blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-medium text-blue-600"
        >
          <DollarSign className="w-4 h-4 mr-2" />
          Transparent Pricing
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
            <span>Choose Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Link Building Plan
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Flexible pricing plans designed to scale with your business. No hidden fees, no long-term contracts—just
          results-driven link building that delivers real ROI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r text-white from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-300 text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-300/20 transition-all duration-300"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-xl border-2 hover:text-blue-600 border-blue-400 hover:bg-blue-50 transition-all duration-300"
          >
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
