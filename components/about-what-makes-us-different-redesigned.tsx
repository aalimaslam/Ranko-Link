"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Zap, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutWhatMakesUsDifferentRedesigned() {
  const differentiators = [
    {
      icon: Lightbulb,
      title: "Our Strategy",
      description:
        "We leverage a diverse and powerful range of white-hat link-building tactics, including data-driven broken link building, strategic link insertions, and high-quality guest posts. Our methodology begins with a comprehensive audit to craft a custom strategy before we acquire a single link.",
    },
    {
      icon: Users,
      title: "Our Approach",
      description:
        "We combine cutting-edge technology with human expertise. Our team uses advanced tools to identify and vet high-value link opportunities, while our relationship-driven outreach ensures we acquire the most relevant and powerful links for your brand.",
    },
    {
      icon: Zap,
      title: "Our Flexibility",
      description:
        "We adapt to your unique needs. Our process is designed for flexible collaboration, and we are always open to client discussions, comments, and feedback. We are your dedicated partners in growth, not just another vendor.",
    },
    {
      icon: DollarSign,
      title: "Our Pricing",
      description:
        "We offer a transparent and competitive pricing model that delivers exceptional value. Our packages are designed to provide the highest quality links at a fair and strategic price point, ensuring a strong return on your investment.",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <section className="py-20 bg-blue-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-blue-900">
            What Makes Us Different
          </h2>
          <p className="text-xl text-blue-800/70 max-w-3xl mx-auto">
            We believe that true SEO success comes from a strategic approach that is both powerful and ethical. This is
            what sets us apart from the competition.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="border border-blue-200 bg-white hover:shadow-lg transition-shadow duration-300 h-full rounded-xl">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl text-blue-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-800/80 leading-relaxed">
                    {item.description}
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
