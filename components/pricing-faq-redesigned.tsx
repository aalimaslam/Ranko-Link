"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { easeOut, motion } from "framer-motion";

export default function PricingFAQRedesigned() {
  const faqs = [
    {
      question: "What is link building and why is it so important for SEO?",
      answer:
        "Link building is the process of acquiring backlinks (links) from other high-authority websites to your own. These backlinks act as a vote of confidence, signaling to Google that your website is trustworthy and valuable, which helps to boost your search engine rankings and organic traffic.",
    },
    {
      question: "What kind of backlinks do you build?",
      answer:
        "We only build high-quality, white-hat, and contextually relevant backlinks. Our focus is on acquiring links from genuine, high-traffic blogs and websites that are directly related to your niche, ensuring that your website's authority grows organically.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Link building is a long-term strategy. Typically, you can expect to see initial ranking improvements and traffic growth within 3 to 6 months. Our consistent, long-term efforts are designed to build lasting authority for your site.",
    },
    {
      question: "How safe are your link-building services?",
      answer:
        "All of our services follow Google's strict guidelines. We never use black-hat or spammy techniques. Our goal is to build a high-quality link profile that will benefit your site over the long term, not put it at risk.",
    },
    {
      question: "How can I track my link-building campaign?",
      answer:
        "Each month, we provide you with detailed and transparent reports that include information on all acquired links, their metrics, and the overall progress. This ensures you are fully informed every step of the way.",
    },
    {
      question: "Can you build links for specific countries or niches?",
      answer:
        "Yes, absolutely. We offer customized link-building campaigns that are tailored to target specific geographies and industries. This helps you attract geo-specific traffic and build local authority effectively.",
    },
    {
      question: "What's the difference between your pricing plans?",
      answer:
        "Our plans differ in the number of backlinks per month, level of support, reporting frequency, and additional services. The Starter plan is perfect for small businesses, Professional includes content creation and priority support, while Advanced offers dedicated account management and custom campaigns.",
    },
    // {
    //   question: "Do you offer refunds if I'm not satisfied?",
    //   answer:
    //     "We stand behind our work with a satisfaction guarantee. If you're not happy with our services within the first 30 days, we'll work with you to address any concerns or provide a refund for unused services.",
    // },
  ];

  const faqVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: easeOut,
      },
    }),
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-blue-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-blue-600">
            Everything you need to know about our link building services and
            pricing.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={faqVariants}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group border border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="flex justify-between items-center px-6 py-4 font-heading font-semibold text-left text-blue-900 hover:text-blue-700 transition-all duration-300">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden px-6 pb-6 text-blue-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
