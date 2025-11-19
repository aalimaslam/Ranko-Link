"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutWhoWeAreRedesigned() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-blue-50/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-heading font-bold text-3xl lg:text-4xl text-blue-900"
            >
              Who We Are
            </motion.h2>
            <div className="space-y-4 text-blue-800/80 leading-relaxed">
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                We founded RankoLink with a single mission: to demystify SEO and
                deliver clear, measurable results for every client.
              </motion.p>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                We are passionate about cultivating powerful backlinks from
                leading websites, and our proven methodology consistently drives
                significant enhancements in SEO performance.
              </motion.p>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                We are the driving force behind brands that want to secure top
                positions on search engines and build lasting authority.
              </motion.p>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="font-semibold text-blue-900"
              >
                Are you ready to claim the coveted #1 spot on Google? Let&apos;s
                collaborate and transform your SEO landscape together!
              </motion.p>
            </div>
          </div>

          {/* Image Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <Card className="border-none bg-gradient-to-l from-blue-200 shadow-sm rounded-xl overflow-hidden">
              <CardContent className="p-0 relative">
                {/* Glow Behind Image */}
                <div
                  className="
          absolute inset-0 
         
          blur-xl opacity-70 pointer-events-none
        "
                />

                {/* Image */}
                <img
                  src="/team.svg"
                  alt="RankoLink team collaboration"
                  className="relative w-full h-auto object-cover rounded-2xl"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
