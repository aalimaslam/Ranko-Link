import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Zap, DollarSign } from "lucide-react"

export default function AboutWhatMakesUsDifferent() {
  const differentiators = [
    {
      icon: Lightbulb,
      title: "Our Strategy",
      description:
        "We leverage a diverse and powerful range of white-hat link-building tactics, including data-driven broken link building, strategic link insertions, and high-quality guest posts. Our methodology begins with a comprehensive audit to craft a custom strategy before we acquire a single link.",
    },
    {
      icon: Users,
      title: "Our Approach",
      description:
        "We combine cutting-edge technology with human expertise. Our team uses advanced tools to identify and vet high-value link opportunities, while our relationship-driven outreach ensures we acquire the most relevant and powerful links for your brand.",
    },
    {
      icon: Zap,
      title: "Our Flexibility",
      description:
        "We adapt to your unique needs. Our process is designed for flexible collaboration, and we are always open to client discussions, comments, and feedback. We are your dedicated partners in growth, not just another vendor.",
    },
    {
      icon: DollarSign,
      title: "Our Pricing",
      description:
        "We offer a transparent and competitive pricing model that delivers exceptional value. Our packages are designed to provide the highest quality links at a fair and strategic price point, ensuring a strong return on your investment.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">What Makes Us Different</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe that true SEO success comes from a strategic approach that is both powerful and ethical. This is
            what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading font-semibold text-xl text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
