"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutMissionVisionRedesigned() {
  const cardVariants = (fromLeft: boolean) => ({
    hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  })

  return (
    <section className="py-20 bg-blue-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants(true)}
          >
            <Card className="border border-blue-200 bg-white hover:shadow-lg transition-shadow duration-300 h-full rounded-xl">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-700" />
                </div>
                <CardTitle className="font-heading font-bold text-2xl text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-800/80 leading-relaxed text-base">
                  Our mission is to empower businesses of all sizes to achieve unparalleled online visibility and
                  growth. We provide professional SEO and link-building services designed to secure your brand's authority,
                  drive targeted traffic, and transform your web presence.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants(false)}
          >
            <Card className="border border-blue-200 bg-white hover:shadow-lg transition-shadow duration-300 h-full rounded-xl">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-700" />
                </div>
                <CardTitle className="font-heading font-bold text-2xl text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-800/80 leading-relaxed text-base">
                  Our vision is to revolutionize the link-building landscape. We aim to foster transparency and expertise,
                  providing clients with strategies to confidently grow their SEO. We envision a thriving, well-known community
                  where every company can succeed.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
