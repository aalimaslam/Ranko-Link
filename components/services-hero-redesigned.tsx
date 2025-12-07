"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesHeroRedesigned() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/30 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100/50 border border-blue-200/60 dark:bg-blue-900/20 dark:border-blue-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm"
          >
            <Shield className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
            Trusted Link Building Services
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight"
          >
            <span className="text-slate-900 dark:text-slate-100">The Links That Build Trust. </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Your Brand's Authority, Authentically Earned
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto text-balance leading-relaxed"
          >
            In a sea of spammy tactics, we stand for quality and transparency. We find relevant, authoritative sites
            and secure real, editorially-placed links that build lasting trust with both users and search engines.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="relative group overflow-hidden rounded-2xl px-8 py-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500" />
              </Link>
            </Button>
            <Link
              href="/services#case-studies"
              className="relative rounded-2xl border-2 border-blue-500/40 px-8 py-6 text-lg font-semibold text-blue-700 dark:text-blue-300 bg-white/30 dark:bg-slate-800/40 backdrop-blur-md transition-all duration-300 hover:bg-blue-100/40 dark:hover:bg-slate-700/50 hover:border-blue-500 hover:scale-105"
            >
              <span className="relative z-10">View Case Studies</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
