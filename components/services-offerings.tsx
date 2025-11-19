"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  FileEdit,
  Wrench,
  Globe2,
  PenTool,
  Languages,
} from "lucide-react";

export default function ServicesOfferings() {
  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      description:
        "We put your business on the map. Our targeted Local SEO tactics, including optimizing your Google Business Profile, will ensure customers in your area find you first, driving foot traffic and local conversions.",
      color: "red",
    },
    {
      icon: FileEdit,
      title: "On-Page SEO",
      description:
        "We transform your website into an SEO powerhouse. By optimizing your content, meta tags, and overall on-page elements, we ensure your site is perfectly structured to rank higher and attract your target audience.",
      color: "blue",
    },
    {
      icon: Wrench,
      title: "Technical SEO",
      description:
        "Your website's foundation is its most critical asset. We'll enhance your site's technical health by focusing on a faster, more mobile-friendly, and secure structure that guarantees search engines can crawl and index your pages for top-tier performance.",
      color: "green",
    },
    {
      icon: Globe2,
      title: "Off-Page SEO",
      description:
        "We strengthen your online presence where it matters most. Our strategic off-page SEO services secure high-quality backlinks and build social signals that boost your domain authority and establish your brand as a leader in your industry.",
      color: "pink",
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description:
        "Great content is the backbone of great SEO. We'll craft compelling, SEO-optimized content that not only engages your audience but is also designed to attract valuable backlinks and rank for your most important keywords.",
      color: "gray",
    },
    {
      icon: Languages,
      title: "International SEO",
      description:
        "Expand your brand's footprint around the globe. We tailor international SEO strategies to different languages and cultures, helping you reach new markets and maximize your worldwide visibility.",
      color: "purple",
    },
  ];

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Holistic SEO & Link Building
            </span>{" "}
            for Growth
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team combines strategic link-building campaigns with in-depth
            on-page and technical SEO to create a powerful, integrated plan that
            gets you ahead of the competition and delivers measurable ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15 }}
            >
              <Card
                className={`relative border border-${service.color}-600 group rounded-2xl transition-all duration-500 overflow-hidden h-full`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="space-y-6 relative z-10">
                  {/* Icon with fancy hover */}
                  <div
                    className={`w-14 h-14 bg-${service.color}-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-${service.color}-600/20 transition-transform duration-500`}
                  >
                    <service.icon
                      className={`w-7 h-7 text-${service.color}-600`}
                    />
                  </div>

                  {/* Title */}
                  <CardTitle
                    className={`font-heading font-semibold text-xl text-foreground group-hover:text-${service.color}-600 transition-colors duration-300`}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
