"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"
import { easeOut, motion } from "framer-motion"

export const plans = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/month",
    description: "Perfect for small businesses looking to establish their online presence",
    features: [
      "5-10 high-quality backlinks per month",
      "Basic competitor analysis",
      "Monthly reporting",
      "Email support",
      "White-hat techniques only",
      "Domain authority 30+ sites",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$3,500",
    period: "/month",
    description: "Ideal for growing businesses ready to dominate their market",
    features: [
      "15-25 high-quality backlinks per month",
      "Advanced competitor analysis",
      "Bi-weekly reporting",
      "Priority email & phone support",
      "Content creation included",
      "Domain authority 40+ sites",
      "Link insertion opportunities",
      "Branded reporting available",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Advanced",
    price: "$6,500",
    period: "/month",
    description: "For established businesses seeking aggressive growth and market leadership",
    features: [
      "30-50 high-quality backlinks per month",
      "Comprehensive SEO audit",
      "Weekly reporting & strategy calls",
      "Dedicated account manager",
      "Custom content creation",
      "Domain authority 50+ sites",
      "International link building",
      "White-label reporting",
      "Priority placement",
      "Custom outreach campaigns",
    ],
    popular: false,
    cta: "Scale Up",
  },
]
export default function PricingPlansRedesigned() {

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 1,
        ease: easeOut,
      },
    }),
  }

  return (
    <section className="relative py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white">
            Pricing Plans That Scale With You
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include our signature white-hat approach and
            transparent reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card
                className={`relative backdrop-blur-xl bg-blue-800/40 border border-blue-500 shadow-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(96,165,250,0.5)] hover:-translate-y-2 rounded-2xl h-full flex flex-col ${
                  plan.popular ? "scale-105 shadow-[0_0_50px_rgba(96,165,250,0.6)]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-blue-600/40 text-white px-4 py-1 flex items-center gap-1 shadow-lg hover:bg-blue-600 backdrop-blur-2xl">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center space-y-4 pt-8 relative z-10">
                  <CardTitle className="font-heading font-bold text-2xl text-white">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-heading font-bold text-4xl text-white">{plan.price}</span>
                      <span className="text-blue-200">{plan.period}</span>
                    </div>
                    <CardDescription className="text-blue-200">{plan.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10 flex-grow flex flex-col">
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-100 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-400 to-blue-300 hover:from-blue-500 hover:to-blue-200 text-white"
                        : "bg-blue-200 hover:bg-blue-300 text-blue-900"
                    }`}
                    size="lg"
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12 space-y-4">
          <p className="text-blue-100">
            Need a custom solution? We offer tailored packages for enterprise clients.
          </p>
          <Button variant="outline" size="lg" asChild className="border-blue-300 text-white hover:bg-blue-50">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
