"use client"

import { Button } from "@/components/ui/button"

export default function Compliance() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const standards = [
    {
      name: "Digital Passport",
      icon: "Digital Product Passport.svg",
      description: "EU-compliant digital product identity for complete transparency",
    },
    { name: "GS1", icon: "GS1.svg", description: "Global barcode and GTIN standards for supply chain interoperability" },
    { name: "SFDA", icon: "SFDA.svg", description: "Saudi Food & Drug Authority compliance for Middle East exports" },
    { name: "GACC", icon: "GACC.svg", description: "China General Administration of Customs clearance requirements" },
    { name: "EPCIS", icon: "EPCIS.svg", description: "Supply chain event visibility standards for real-time tracking" },
    { name: "ISO 22000", icon: "ISO.svg", description: "Food safety management systems certification" },
  ]

  return (
    <section id="compliance" className="w-full py-24 sm:py-32 px-6 bg-background md:pt-0 md:pb-0">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">Industry Standards</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">Regulatory Compliance Built-In</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Pre-configured compliance modules for all major Middle East regulations and international export standards.
            Ensure every shipment meets requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {standards.map((standard, idx) => (
            <div
              key={idx}
              className="p-6 bg-primary/5 border border-primary/20 rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">
                  <img
                    src={standard.icon}
                    alt={standard.name + " Icon"}
                    className="h-10 w-10 object-contain group-hover:scale-105 transition-transform"
                  />
                  </div>
                <div className="flex-1">
                  <div className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                    {standard.name}
                  </div>
                  <p className="text-foreground/70 text-sm">{standard.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance benefits section with RTB */}
        <div className="bg-gradient-to-r from-accent/15 to-primary/15 border border-accent/20 rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">Ensure Every Export is Compliant</h3>
            <p className="text-foreground/80 text-lg">
              Our platform automatically validates all required data fields, generates compliant labels, and maintains
              audit-ready records for regulatory inspections across all supported standards. Never miss a compliance
              requirement.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 cursor-pointer"
            >
              Get Compliance Checklist
            </Button>
          </div>
        </div>

        {/* Key compliance features - RTB */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-primary/10 bg-primary/5">
            <h4 className="font-bold text-primary mb-3">✓ Automated Validation</h4>
            <p className="text-foreground/70 text-sm">
              Real-time checks ensure all data meets regulatory requirements before export. Prevent rejections and
              costly delays.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-primary/10 bg-primary/5">
            <h4 className="font-bold text-primary mb-3">✓ Audit Ready</h4>
            <p className="text-foreground/70 text-sm">
              Complete documentation and traceability logs for regulatory inspections and certifications. Pass audits
              with confidence.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-primary/10 bg-primary/5">
            <h4 className="font-bold text-primary mb-3">✓ Multi-Market Support</h4>
            <p className="text-foreground/70 text-sm">
              Export to multiple markets with different compliance requirements simultaneously. Scale without
              complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
