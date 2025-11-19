import { MessageSquare } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Talk
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
              <span className="text-foreground">Ready to</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dominate Search Results?
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Get in touch with our SEO experts today. We'll analyze your current situation and create a custom link
            building strategy that delivers real results.
          </p>
        </div>
      </div>
    </section>
  )
}
