import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
            <Users className="w-4 h-4 mr-2" />
            Meet the Team
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
              <span className="text-foreground">The SEO Experts Behind</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Success
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            We're passionate about helping businesses achieve unparalleled online visibility through ethical,
            results-driven SEO and link building strategies.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl">
              <Link href="/contact" className="flex items-center gap-2">
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 bg-transparent">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
