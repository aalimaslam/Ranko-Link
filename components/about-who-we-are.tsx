import { Card, CardContent } from "@/components/ui/card"

export default function AboutWhoWeAre() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We founded RankoLink with a single mission: to demystify SEO and deliver clear, measurable results for
                every client.
              </p>
              <p>
                We are passionate about cultivating powerful backlinks from leading websites, and our proven methodology
                consistently drives significant enhancements in SEO performance.
              </p>
              <p>
                We are the driving force behind brands that want to secure top positions on search engines and build
                lasting authority.
              </p>
              <p className="font-semibold text-foreground">
                Are you ready to claim the coveted #1 spot on Google? Let's collaborate and transform your SEO landscape
                together!
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <img
                  src="/about-team-collaboration.png"
                  alt="RankoLink team collaboration"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
