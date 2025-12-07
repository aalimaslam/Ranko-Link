import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      contact: "hello@rankolink.com",
      action: "mailto:hello@rankolink.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our SEO experts",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free consultation",
      contact: "30-minute strategy session",
      action: "#",
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Contact Methods */}
        <div className="space-y-4">
          <h2 className="font-heading font-bold text-2xl text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground">
            Choose the method that works best for you. Our team is ready to help you dominate search results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-border bg-background hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-semibold text-foreground">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <a
                      href={method.action}
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {method.contact}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Hours */}
        <Card className="border-border bg-background">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Business Hours</h3>
                <p className="text-sm text-muted-foreground">When you can reach us</p>
              </div>
            </div>
            <div className="space-y-2 pl-15">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{schedule.day}</span>
                  <span className="text-foreground font-medium">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="border-border bg-background">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-semibold text-foreground">Our Location</h3>
                <p className="text-muted-foreground">
                  123 SEO Street
                  <br />
                  Digital Marketing District
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
