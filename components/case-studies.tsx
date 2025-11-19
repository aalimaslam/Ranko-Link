"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null)

  const caseStudies = [
    {
      company: "TechStart SaaS",
      industry: "Software",
      challenge: "New SaaS company struggling to gain organic visibility in competitive market",
      results: {
        traffic: "+450%",
        keywords: "+280%",
        backlinks: "+150",
        timeframe: "6 months",
      },
      description:
        "We helped TechStart establish domain authority through strategic link building and content marketing, resulting in first-page rankings for high-value keywords.",
      image: "/saas-dashboard-analytics.png",
    },
    {
      company: "E-commerce Plus",
      industry: "E-commerce",
      challenge: "Declining organic traffic and poor search rankings for product categories",
      results: {
        traffic: "+320%",
        keywords: "+190%",
        backlinks: "+200",
        timeframe: "8 months",
      },
      description:
        "Through targeted link building and technical SEO improvements, we restored and significantly improved their organic search performance.",
      image: "/e-commerce-growth-chart.png",
    },
    {
      company: "Local Services Co",
      industry: "Local Business",
      challenge: "Limited local visibility and low conversion rates from organic search",
      results: {
        traffic: "+280%",
        keywords: "+150%",
        backlinks: "+80",
        timeframe: "4 months",
      },
      description:
        "Our local SEO strategy and targeted link building campaign dramatically improved their local search presence and customer acquisition.",
      image: "/local-business-map-rankings.png",
    },
  ]

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100/50 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl text-gray-900">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how our strategic link building campaigns have transformed businesses
            across different industries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden transform hover:-translate-y-2 h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={`${study.company} case study`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading font-semibold text-xl text-gray-900">{study.company}</CardTitle>
                    <span className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600">{study.challenge}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="font-heading font-bold text-lg text-blue-600">{study.results.traffic}</div>
                      <div className="text-xs text-gray-500">Traffic Growth</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="font-heading font-bold text-lg text-blue-600">{study.results.keywords}</div>
                      <div className="text-xs text-gray-500">Keyword Rankings</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="font-heading font-bold text-lg text-blue-600">{study.results.backlinks}</div>
                      <div className="text-xs text-gray-500">Quality Backlinks</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="font-heading font-bold text-lg text-blue-600">{study.results.timeframe}</div>
                      <div className="text-xs text-gray-500">Timeline</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{study.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
