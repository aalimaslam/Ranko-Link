import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function PricingReviews() {
  const reviews = [
    {
      name: "Jennifer Martinez",
      company: "Digital Growth Agency",
      rating: 5,
      review:
        "The Professional plan was perfect for our agency. RankoLink's white-label reporting allowed us to seamlessly integrate their services with our client offerings. The ROI has been exceptional.",
      plan: "Professional Plan",
    },
    {
      name: "Robert Chen",
      company: "TechVenture Startup",
      rating: 5,
      review:
        "Started with the Starter plan and quickly upgraded to Advanced. The quality of backlinks and the dedicated account manager made all the difference. Our organic traffic increased by 400% in 8 months.",
      plan: "Advanced Plan",
    },
    {
      name: "Lisa Thompson",
      company: "Local Services Co",
      rating: 5,
      review:
        "As a small business, the Starter plan was exactly what we needed. The team understood our budget constraints while delivering high-quality links that actually moved the needle for our local SEO.",
      plan: "Starter Plan",
    },
    {
      name: "Mark Williams",
      company: "E-commerce Empire",
      rating: 5,
      review:
        "The Advanced plan's international link building capabilities helped us expand into new markets. The weekly strategy calls and custom content creation have been game-changers for our global SEO strategy.",
      plan: "Advanced Plan",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from businesses that have transformed their SEO with our pricing plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground leading-relaxed">"{review.review}"</blockquote>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.company}</div>
                  </div>
                  <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {review.plan}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
