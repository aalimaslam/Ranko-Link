"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { HoverEffect } from "./ui/card-hover-effect"
import { Link2, Shield, Zap, Globe, FileText, MessageSquare } from "lucide-react"
import { Heading } from "./heading"

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: Link2,
      title: "Full Managed Link Building",
      description:
        "Achieve SEO Authority on Autopilot. We create and execute your entire backlink strategy, ensuring you consistently acquire powerful, niche-relevant links without lifting a finger.",
    },
    {
      icon: Shield,
      title: "White Label Link Building",
      description:
        "Your Brand, Our Backlinks. Partner with us for a transparent, scalable, and fully managed link-building service that you can resell to your clients with complete confidence.",
    },
    {
      icon: Zap,
      title: "SaaS Backlinks",
      description:
        "Grow Your SaaS with Authority. We build a powerful backlink profile for your software company by acquiring relevant, high-quality links that drive traffic and establish your brand as a leader in the tech space.",
    },
    {
      icon: Globe,
      title: "Country Specific Links",
      description:
        "Connect with Your Target Market. Expand your global footprint with strategic, country-specific link building. Our service delivers high-authority backlinks from publications and sites relevant to your target country.",
    },
    {
      icon: FileText,
      title: "Link Insertions",
      description:
        "Contextual Links for Immediate Impact. Our link insertion service places diverse and effective backlinks directly into existing, high-authority articles that are already ranking and attracting traffic.",
    },
    {
      icon: MessageSquare,
      title: "Blogger Outreach Links",
      description:
        "Genuine Backlinks from Real Blogs. We build relationships with authentic bloggers to secure high-quality, editorial guest post backlinks that are contextually relevant and appear on genuine blogs.",
    },
  ]

  const headerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  }

  const blobVariants = {
    animate: {
      x: ["-20%", "20%", "-20%"],
      y: ["-20%", "20%", "-20%"],
      scale: [0.9, 1.2, 0.9],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* Floating Blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute top-40 -right-32 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}

        <Heading colored="Our" black="Services" description="Comprehensive link building solutions tailored to your specific needs and industry requirements."/>

        {/* Cards */}
        <HoverEffect items={services} />
      </div>
    </section>
  )
}
