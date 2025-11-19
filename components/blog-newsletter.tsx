import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function BlogNewsletter() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-border bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">
                Stay Updated with SEO Insights
              </h2>
              <p className="text-muted-foreground text-lg">
                Get the latest link building strategies, SEO tips, and industry insights delivered to your inbox weekly.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email address" className="flex-1" />
                <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Join 5,000+ SEO professionals. Unsubscribe anytime.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
