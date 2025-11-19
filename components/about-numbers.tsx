import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Award, Globe, Zap } from "lucide-react";

export default function AboutNumbers() {
  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Successful Campaigns",
      description: "Link building campaigns completed",
    },
    {
      icon: Users,
      number: "200+",
      label: "Happy Clients",
      description: "Businesses we've helped grow",
    },
    {
      icon: Target,
      number: "95%",
      label: "Success Rate",
      description: "Client satisfaction rate",
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      description: "In SEO and link building",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Global reach and expertise",
    },
    {
      icon: Zap,
      number: "10K+",
      label: "Quality Backlinks",
      description: "High-authority links built",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These numbers represent real results and the trust our clients place
            in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-border bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="font-heading font-bold text-3xl text-foreground">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
