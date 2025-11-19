"use client"

import { motion } from "framer-motion"

export default function ServicesTrustedBrands() {
  const brands = [
    { name: "Microsoft", logo: "/microsoft-logo.png" },
    { name: "Google", logo: "/google-logo.png" },
    { name: "Amazon", logo: "/amazon-logo.png" },
    { name: "Shopify", logo: "/shopify-logo.png" },
    { name: "Stripe", logo: "/stripe-logo.png" },
    { name: "Slack", logo: "/slack-logo.png" },
    { name: "Zoom", logo: "/zoom-logo.png" },
    { name: "Dropbox", logo: "/dropbox-logo.png" },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl text-white ">
            Trusted by Leading Brands
          </h2>
          <p className="text-blue-50 max-w-2xl mx-auto">
            We're proud to collaborate with some of the most innovative companies worldwide.
          </p>
        </div>

        {/* Grid with Framer Motion animation */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center justify-center p-4 bg-white rounded-xl border border-blue-200 hover:shadow-xl hover:border-blue-400 transition-all duration-300 group"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="h-10 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-1"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative blurred blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
    </section>
  )
}
