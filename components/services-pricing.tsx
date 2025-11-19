import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our flexible pricing plans designed to meet your specific link building and SEO needs.
          </p>

          <div className="bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-2xl p-8 border border-blue-300/40 shadow-lg">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-2xl text-white">
                Custom Solutions for Every Business
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Our pricing is tailored to your specific needs, industry, and goals. We offer transparent, competitive
                rates with no hidden fees.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl font-semibold shadow-md"
              >
                <Link href="/pricing" className="flex items-center gap-2">
                  Compare Pricing Plans
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
