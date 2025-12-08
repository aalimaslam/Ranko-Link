"use client";

import { Card, CardContent } from "@/components/ui/card";
import 
{
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfoCompact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      contact: "adnandandroo322@gmail.com",
      action: "mailto:adnandandroo322@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our SEO experts",
      contact: "+91 6006351087",
      action: "tel:+916006351087",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team on WhatsApp",
      contact: "Chat Now",
      action: "https://wa.me/916006351087",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free consultation",
      contact: "30-minute strategy session",
      action: "#",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
    { day: "Saturday - Sunday", hours: "Closed" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08 },
    }),
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-l from-blue-100 to-blue-50 "
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2
            className="
            font-heading font-extrabold text-3xl sm:text-4xl
            bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
            bg-clip-text text-transparent
          "
          >
            Get In Touch
          </h2>

          <p className="text-indigo-900/70 text-sm sm:text-base max-w-xl mx-auto">
            Reach out using any method below. We’re always here to support your
            growth.
          </p>
        </div>

        {/* CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card
                  className="
                  border border-transparent rounded-2xl overflow-hidden
                  bg-gradient-to-r from-blue-100 to-purple-50 shadow-md hover:shadow-xl
                  transition-all duration-300
                "
                >
                  <CardContent className="p-6 flex items-start gap-4 relative">
                    {/* Glow Behind Icon */}
                    <div
                      className="
                      absolute -top-4 left-0 right-0 mx-auto w-32 h-32 
                      bg-gradient-to-r from-blue-100 to-purple-50
                      blur-3xl opacity-60 pointer-events-none
                    "
                    />

                    {/* Icon */}
                    <div
                      className="
                      w-12 h-12 rounded-xl flex items-center justify-center
                      bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100
                      shadow-inner flex-shrink-0
                    "
                    >
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>

                    {/* Text */}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-indigo-900 text-lg">
                        {method.title}
                      </h3>
                      <p className="text-sm text-indigo-800/70">
                        {method.description}
                      </p>

                      <a
                        href={method.action}
                        className="
                        text-indigo-700 hover:text-indigo-600 text-sm font-medium
                        transition-colors
                      "
                      >
                        {method.contact} ↗
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* BUSINESS HOURS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className="
            rounded-2xl bg-gradient-to-r from-blue-100 to-purple-50 shadow-md hover:shadow-xl 
            border border-transparent transition-all duration-300
          "
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="
                  w-12 h-12 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100
                "
                >
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-indigo-900 text-lg">
                    Business Hours
                  </h3>
                  <p className="text-sm text-indigo-700/70">
                    When we’re available
                  </p>
                </div>
              </div>

              <div className="space-y-2 pl-16">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-indigo-800/80">{schedule.day}</span>
                    <span className="font-medium text-indigo-900">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* LOCATION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className="
            rounded-2xl bg-gradient-to-r from-blue-100 to-purple-50 shadow-md hover:shadow-xl
            border border-transparent transition-all duration-300
          "
          >
            <CardContent className="p-6 flex gap-4">
              <div
                className="
                w-12 h-12 rounded-xl flex items-center justify-center
                bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100
              "
              >
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-indigo-900 text-lg">
                  Our Location
                </h3>

                <p className="text-sm text-indigo-800/70 leading-relaxed">
                  Shalteng, Srinagar, Kashmir <br />
                  Near Noora Hospital <br />
                  190012
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* FLOATING CTA BAR */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        bg-white shadow-xl rounded-2xl px-6 py-3
        border border-transparent
        backdrop-blur-md
        flex items-center gap-4
        z-50
      "
      >
        <div
          className="
          w-10 h-10 rounded-xl flex items-center justify-center
          bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100
        "
        >
          ❓
        </div>

        <p className="text-indigo-900 font-medium text-sm">
          Still have questions?
        </p>

        <a
          href="#contact"
          className="
          text-sm px-4 py-2 rounded-xl font-medium text-white
          bg-gradient-to-r from-blue-600 to-purple-600
          hover:opacity-90 transition
        "
        >
          Contact Us
        </a>
      </motion.div> */}
    </motion.section>
  );
}
