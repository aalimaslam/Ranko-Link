"use client"
import { Linkedin, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ContactHeroCompact() {
  const router = useRouter();
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16"
    >
      {/* Background subtle grid overlay */}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 min-h-[50vh] flex flex-col items-center justify-center">
        {/* Label */}
        <motion.div
        initial={{scale:0.4, opacity:0}}
        animate={{scale:1, opacity:1}}
        className="group absolute top-[10%] left-[0%] bg-blue-700/10 border-2 border-blue-700 rounded-full text-blue-800 cursor-pointer px-2 pr-4 font-bold py-2 gap-4 flex items-center justify-center"
        onClick={()=> router.push("https://www.linkedin.com/in/adnan-hilal-62070a236")}
        >   
        <div className="hidden group-hover:block hover:block absolute top-[-90%] ">
          <Link href="https://www.linkedin.com/in/adnan-hilal-62070a236" className="flex items-center justify-center gap-[10px] border border-blue-600 px-3 py-2 rounded-md">
            <Linkedin className="text-blue-400" />
            Adnan hilal
          </Link>
        </div>
            <img src="/adnan.jpg" className="rounded-full h-10 w-10 object-cover" />

            Book a call
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center px-3 py-1.5  bg-blue-100 border border-blue-300 rounded-full text-sm font-medium text-blue-600"
        >
          <MessageSquare className="w-4 h-4 mr-1.5" />
          Let's Talk
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-blue-900 leading-tight"
        >
          <span>Ready to </span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Dominate Search Results?
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-base sm:text-lg text-blue-800 max-w-2xl mx-auto leading-relaxed"
        >
          Connect with our SEO specialists today. We’ll analyze your site and craft a tailored link-building
          strategy to boost your search visibility.
        </motion.p>
      </div>
    </motion.section>
  )
}
