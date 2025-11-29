"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { plans } from "./pricing-plans-redesigned"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPricingRedesigned() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* HEADER */}
        <div className="text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our flexible pricing plans designed to meet your specific link building and SEO needs.
          </p>
         
        </div>

        {/* PRICING SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`relative overflow-hidden rounded-2xl border border-blue-400/30 bg-gradient-to-br ${
                  plan.popular
                    ? "from-blue-500/60 via-blue-600/60 to-blue-700/60 shadow-xl shadow-blue-400/30"
                    : "from-blue-500/10 via-blue-600/10 to-blue-700/10"
                } backdrop-blur-xl text-white`}
              >
                {/* {plan.popular && (
                  <span className="absolute top-4 right-4 bg-white text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )} */}
                <CardHeader className="text-center pb-0">
                  <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
                  <p className="text-blue-200 mt-2">{plan.period}</p>
                </CardHeader>
                <CardContent className="text-center space-y-6 mt-4">
                  <div className="text-5xl font-bold">
                    {plan.price}
                    {/* <span className="text-lg text-blue-200 font-medium"> {plan.period}</span> */}
                  </div>
                  <CardDescription className="text-blue-100">
                    {plan.description}
                  </CardDescription>
{/* 
                  <div className="space-y-3 text-left text-blue-100 mt-6">
                    {plan.features?.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-300" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div> */}

                  <Button
                    size="lg"
                    className={`w-full mt-6 text-lg font-semibold ${
                      plan.popular
                        ? "bg-white text-blue-700 hover:bg-blue-50"
                        : "bg-blue-600/40 text-white border border-blue-300/40 hover:bg-blue-600/60"
                    } rounded-xl py-6 transition-all`}
                  >
                    <Link  href="/pricing">
                    Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
        </div>
         <div className="bg-gradient-to-r text-center from-blue-500/30 to-blue-400/30 rounded-2xl p-8 border border-blue-300/40 shadow-lg">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-2xl text-white">
                Custom Solutions for Every Business
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Our pricing is tailored to your specific needs, industry, and goals. We offer transparent, competitive
                rates with no hidden fees.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl font-semibold shadow-md transition-transform hover:scale-105"
              >
                <Link href="/pricing" className="flex items-center gap-2">
                  Compare Pricing Plans
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
      </div>
    </motion.section>
  )
}
