import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen } from "lucide-react"

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
            <BookOpen className="w-4 h-4 mr-2" />
            SEO Knowledge Hub
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
              <span className="text-foreground">Master SEO with</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Expert Insights
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Stay ahead of the curve with our latest SEO strategies, link building techniques, and industry insights from
            the RankoLink team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, guides, and insights..."
                className="pl-12 pr-4 py-6 text-lg rounded-xl border-2"
              />
              <Button size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
