import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export default function AboutMissionVision() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-heading font-bold text-2xl text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground leading-relaxed text-base">
                Our mission is to empower businesses of all sizes to achieve unparalleled online visibility and growth.
                We provide a full suite of professional SEO and link-building services designed to secure your brand's
                authority, drive targeted traffic, and transform your web presence. We're here to help you get
                discovered and dominate your market.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="font-heading font-bold text-2xl text-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground leading-relaxed text-base">
                Our vision is to revolutionize the link-building landscape. We aim to develop a culture of transparency
                and expertise, providing our clients with the tools and strategies they need to make confident decisions
                about their SEO. We believe in creating a competitive, well-known community where every company can
                thrive.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
