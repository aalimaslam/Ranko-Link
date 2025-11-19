"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutFounderStoryRedesigned() {
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          <h2
            className="font-heading font-extrabold text-3xl lg:text-4xl 
  bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-400 
  text-transparent bg-clip-text"
          >
            Co-Founder's <span className="text-stone-600">Story</span>
          </h2>

          <p className="text-lg md:text-xl text-indigo-900/80 max-w-3xl mx-auto mt-2">
            Meet the visionary behind RankoLink's success and commitment to
            excellence.
          </p>
        </motion.div>

        {/* Founder Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="relative"
          >
            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50/20 to-blue-100/10 rounded-xl">
              <CardContent className="p-8">
                <img
                  src="/adnan.jpg"
                  alt="Mr. Adnan - Co-Founder of RankoLink"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="space-y-6"
          >
            {/* Bio */}
            <motion.div variants={childVariants} className="space-y-4">
              <h3 className="font-heading font-bold text-2xl text-blue-900">
                Mr. Adnan
              </h3>
              <p className="text-blue-800/80 leading-relaxed">
                Mr. Adnan began his career as an independent link-building
                specialist. His extensive work with numerous websites quickly
                earned him a reputation for expertise and professionalism. It
                was this experience that inspired him to found RankoLink, with a
                singular mission to help every client achieve their SEO goals.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div variants={childVariants}>
              <Card className="border border-blue-200 bg-blue-100/20 rounded-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <blockquote className="text-blue-900 font-medium leading-relaxed">
                        "You've come to the right place if you're looking for
                        flexibility, transparent communication, and high-quality
                        backlinks. We take an individual approach with every
                        client and prioritize quality over quantity. We provide
                        you with the best SEO backlinks and ensure that your
                        website will rank on Google."
                      </blockquote>
                      <div className="text-sm text-blue-800/70">
                        — Mr. Adnan, Co-Founder
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Closing Paragraph */}
            <motion.div variants={childVariants} className="space-y-4">
              <p className="text-blue-800/80 leading-relaxed">
                Adnan believes that "a happy client is the greatest success."
                Under his leadership, RankoLink is committed to providing the
                best quality links for every niche. Our team of experts is ready
                to conduct an audit for your website and help you begin your
                link-building journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
