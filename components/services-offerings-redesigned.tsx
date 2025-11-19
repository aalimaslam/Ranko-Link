"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  MapPin,
  FileEdit,
  Wrench,
  Globe2,
  PenTool,
  Languages,
} from "lucide-react"
import { easeOut, motion } from "framer-motion"
import { Heading } from "./heading"

export default function ServicesOfferingsRedesigned() {
  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      description:
        "Optimize your Google Business Profile and dominate local searches to drive more foot traffic and conversions.",
      color: "red",
    },
    {
      icon: FileEdit,
      title: "On-Page SEO",
      description:
        "Enhance your site’s structure and content for higher rankings, better engagement, and optimized visibility.",
      color: "blue",
    },
    {
      icon: Wrench,
      title: "Technical SEO",
      description:
        "Improve site performance, mobile-friendliness, and crawlability for peak technical excellence.",
      color: "green",
    },
    {
      icon: Globe2,
      title: "Off-Page SEO",
      description:
        "Build quality backlinks and authority signals to strengthen your brand’s credibility and visibility.",
      color: "pink",
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description:
        "Engaging, keyword-focused content crafted to connect with your audience and attract valuable links.",
      color: "gray",
    },
    {
      icon: Languages,
      title: "International SEO",
      description:
        "Reach global audiences with multilingual, region-tailored SEO strategies for maximum reach.",
      color: "purple",
    },
  ]

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       
    <Heading black="for Growth" colored="Holistic SEO & Link Building" description=" We combine technical precision, creative content, and strategic link building
            to grow your search visibility and ROI sustainably." />
       
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card
                className={`group border border-border overflow-hidden relative border-blue-600 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md`}
              >
                <div className="h-32 w-32 bg-gradient-to-br from-blue-800 to-blue-500 group-hover:bottom-0 group-hover:right-0 group-hover:h-full group-hover:w-full group-hover:rounded-md -z-10 transition-all bg-blue-600 absolute bottom-[-30%] right-[-25%] rounded-full "/>
                <CardHeader className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${service.color}-600/10 text-${service.color}-600 group-hover:bg-${service.color}-600/20 transition-all duration-300`}
                  >
                    <service.icon className="w-6 h-6 group-hover:text-white" />
                  </div>
                  <CardTitle
                    className={`font-semibold text-lg text-foreground group-hover:text-white transition-colors duration-300`}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed group-hover:text-white">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
