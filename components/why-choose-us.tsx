import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Target, BarChart3, Link, Zap } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Ethical Approach",
      description:
        "Our processes are completely ethical. We only use Google-compliant tactics, which build a strong and trustworthy foundation for your website without any risk.",
    },
    {
      icon: Heart,
      title: "Personalized Outreach",
      description:
        "We acquire every backlink through genuine and personal communication. Our focus is on building real relationships, not on automation or spamming, to ensure you get the best possible links.",
    },
    {
      icon: Target,
      title: "Quality Link Sources",
      description:
        "We only place links on websites that have their own organic audience. This helps you not only with rankings but also with referral traffic and brand awareness.",
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      description:
        "You will be fully informed about everything. We provide detailed reports so you know exactly where your links are, how they are performing, and what the next steps are.",
    },
    {
      icon: Link,
      title: "Contextual Links",
      description:
        "Your links are placed exactly where they should be—naturally within the body of editorial content. Not in footers or spammy sidebars, so Google values them even more.",
    },
    {
      icon: Zap,
      title: "Quick & Efficient Delivery",
      description:
        "We prioritize quality along with speed. Our streamlined process gives you fast results, helping you stay ahead of your competition.",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Decorative background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-blue-300/20 rounded-full blur-3xl top-20 left-10" />
        <div className="absolute w-96 h-96 bg-purple-300/20 rounded-full blur-3xl bottom-10 right-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-blue-900 relative inline-block">
            Why Choose Us
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
          </h2>
          <p className="text-xl text-blue-700/80 max-w-3xl mx-auto leading-relaxed">
            Because we don’t just build links — we build SEO growth, authority, and ROI that lasts.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="relative border border-blue-200/40 bg-white/70 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="space-y-4">
                {/* Icon with gradient background */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="font-heading font-semibold text-2xl text-blue-900">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-800/80 leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
