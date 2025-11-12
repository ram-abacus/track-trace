"use client"

import { Button } from "@/components/ui/button"

export default function Solution() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="w-full py-24 sm:py-32 px-6 bg-gradient-to-r from-accent/15 to-primary/15 ">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                One Platform.
                <br />
                Complete Traceability.
              </h2>
              <p className="text-lg ">
                Basiq360 is the end-to-end track and trace solution built specifically for food exporters in the Middle
                East. From batch creation at the farm to final consumer delivery, every product is tracked in real-time
                with full regulatory compliance.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "GS1 standard identifiers and barcoding",
                "EPCIS-compliant event tracking",
                "Multi-region cloud infrastructure",
                "Role-based access control",
                "Blockchain-backed immutable records",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-accent hover:bg-primary hover:text-primary-foreground text-accent-foreground font-semibold rounded-full px-8"
              >
                Request a Demo
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-primary hover:bg-accent font-semibold rounded-full px-8"
              >
                View Case Studies
              </Button>
            </div>
          </div>

          <div className="relative h-96 sm:h-full min-h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl overflow-hidden border border-primary-foreground/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="Traceability.webp"
                alt="Solution Architecture"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
