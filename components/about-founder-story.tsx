import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function AboutFounderStory() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
            Co-Founder's Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary behind RankoLink's success and commitment to
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-0 rounded-lg overflow-hidden">
                <img
                  src="/founder-adnan-portrait.png"
                  alt="Mr. Adnan - Co-Founder of RankoLink"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl text-foreground">
                Mr. Adnan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mr. Adnan began his career as an independent link-building
                specialist. His extensive work with numerous websites quickly
                earned him a reputation for expertise and professionalism. It
                was this experience that inspired him to found RankoLink, with a
                singular mission to help every client achieve their SEO goals.
              </p>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <blockquote className="text-foreground font-medium leading-relaxed">
                      "You've come to the right place if you're looking for
                      flexibility, transparent communication, and high-quality
                      backlinks. We take an individual approach with every
                      client and prioritize quality over quantity. We provide
                      you with the best SEO backlinks and ensure that your
                      website will rank on Google."
                    </blockquote>
                    <div className="text-sm text-muted-foreground">
                      — Mr. Adnan, Co-Founder
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Adnan believes that "a happy client is the greatest success."
                Under his leadership, RankoLink is committed to providing the
                best quality links for every niche. Our team of experts is ready
                to conduct an audit for your website and help you begin your
                link-building journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
