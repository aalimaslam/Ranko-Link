"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ContactFormCompact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/20"
    >
      <div className="max-w-2xl mx-auto px-4">
        {/* Glow Behind Card */}
        <div className="relative">
          <div
            className="absolute inset-0 mx-auto w-[90%] h-[90%] 
            bg-gradient-to-br from-purple-300/30 via-indigo-300/30 to-blue-300/30 
            blur-3xl opacity-60 rounded-3xl pointer-events-none"
          />

          <Card
            className="
            relative backdrop-blur-md
            rounded-3xl border border-white/40
            shadow-xl
            bg-gradient-to-br from-white/80 via-white/60 to-white/40
          "
          >
            <CardHeader className="text-center pb-4 space-y-2">
              <CardTitle
                className="
                text-3xl font-extrabold 
                bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
                text-transparent bg-clip-text
              "
              >
                Get Your Free SEO Audit
              </CardTitle>

              <CardDescription className="text-indigo-900/70 text-sm">
                Receive a custom strategy within 24 hours.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-indigo-900 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="
                        rounded-xl border-indigo-200 focus:ring-2 
                        focus:ring-indigo-400 focus:border-indigo-400 
                        transition-all bg-white/60
                      "
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-indigo-900 font-medium">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="
                        rounded-xl border-indigo-200 focus:ring-2 
                        focus:ring-indigo-400 focus:border-indigo-400 
                        transition-all bg-white/60
                      "
                      required
                    />
                  </div>
                </div>

                {/* COMPANY + WEBSITE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-indigo-900 font-medium">
                      Company
                    </Label>
                    <Input
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="
                        rounded-xl border-indigo-200 focus:ring-2 
                        focus:ring-indigo-400 focus:border-indigo-400 
                        transition-all bg-white/60
                      "
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-indigo-900 font-medium">
                      Website
                    </Label>
                    <Input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => handleChange("website", e.target.value)}
                      className="
                        rounded-xl border-indigo-200 focus:ring-2 
                        focus:ring-indigo-400 focus:border-indigo-400 
                        transition-all bg-white/60
                      "
                    />
                  </div>
                </div>

                {/* SELECTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-indigo-900 font-medium">
                      Service Interested In
                    </Label>
                    <Select onValueChange={(v) => handleChange("service", v)}>
                      <SelectTrigger className="rounded-xl bg-white/60 border-indigo-200">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-managed">
                          Full Managed Link Building
                        </SelectItem>
                        <SelectItem value="white-label">
                          White Label Link Building
                        </SelectItem>
                        <SelectItem value="saas">SaaS Backlinks</SelectItem>
                        <SelectItem value="country-specific">
                          Country Specific Links
                        </SelectItem>
                        <SelectItem value="link-insertions">
                          Link Insertions
                        </SelectItem>
                        <SelectItem value="blogger-outreach">
                          Blogger Outreach
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-indigo-900 font-medium">
                      Monthly Budget
                    </Label>
                    <Select onValueChange={(v) => handleChange("budget", v)}>
                      <SelectTrigger className="rounded-xl bg-white/60 border-indigo-200">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000-2500">
                          $1,000 - $2,500
                        </SelectItem>
                        <SelectItem value="2500-5000">
                          $2,500 - $5,000
                        </SelectItem>
                        <SelectItem value="5000-10000">
                          $5,000 - $10,000
                        </SelectItem>
                        <SelectItem value="10000+">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-1">
                  <Label className="text-indigo-900 font-medium">
                    Project Details *
                  </Label>
                  <Textarea
                    rows={4}
                    placeholder="Describe your current SEO goals..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="
                      rounded-xl border-indigo-200 focus:ring-2 
                      focus:ring-indigo-400 focus:border-indigo-400 
                      transition-all bg-white/60
                    "
                    required
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <Button
                  type="submit"
                  size="lg"
                  className="
                    w-full rounded-xl text-white font-semibold text-base
                    bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
                    hover:opacity-90 shadow-md transition-all py-6
                    flex items-center justify-center gap-2
                  "
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
