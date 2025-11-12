"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Features() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }
  const features = [
    {
      title: "Batch & Lot Management",
      description: "Create and track batches from production through distribution with complete input-output mapping",
      cta: "Explore Feature",
    },
    {
      title: "Serialization & IDs",
      description: "GS1-compliant unique identifiers for items, cases, and pallets with automated barcode generation",
      cta: "Learn More",
    },
    {
      title: "Real-time Event Tracking",
      description: "Capture every critical event from harvest to consumer delivery with GPS and IoT sensor integration",
      cta: "See in Action",
    },
    {
      title: "Smart Label Generation",
      description:
        "Dynamic labels compliant with SFDA, UAE, Qatar, and GACC requirements. Multi-language support included.",
      cta: "View Templates",
    },
    {
      title: "Recall Management",
      description:
        "Execute rapid recalls with automated identification of affected inventory and instant customer notification",
      cta: "Watch Demo",
    },
    {
      title: "Compliance & Standards",
      description: "Built-in support for GS1, EPCIS, Halal certification, and all regional regulatory frameworks",
      cta: "Check Compliance",
    },
  ]

  return (
    <section className="w-full py-24 sm:py-32 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage end-to-end traceability with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-8 bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <Button onClick={() => scrollToSection("contact")} variant="link" className="text-accent hover:text-accent/80 p-0 font-semibold">
                {feature.cta} →
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
