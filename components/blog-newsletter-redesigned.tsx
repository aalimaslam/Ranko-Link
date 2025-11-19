"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function BlogNewsletterRedesigned() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-border bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8 text-center space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
            >
              <Mail className="w-8 h-8 text-primary" />
            </motion.div>
            <div className="space-y-2">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-heading font-bold text-2xl lg:text-3xl text-foreground"
              >
                Stay Updated with SEO Insights
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-muted-foreground text-lg"
              >
                Get the latest link building strategies, SEO tips, and industry insights delivered to your inbox
                weekly.
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email address" className="flex-1" />
                <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Join 5,000+ SEO professionals. Unsubscribe anytime.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
