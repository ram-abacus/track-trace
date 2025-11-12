"use client"

import { Button } from "@/components/ui/button"

export default function Architecture() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }
  const layers = [
    {
      title: "Data Capture",
      description: "Barcode/QR scanners, RFID readers, IoT sensors, and mobile apps capture events at every touchpoint",
    },
    {
      title: "Cloud Platform",
      description:
        "Microservices architecture handles batch management, serialization, event tracking, and recalls at scale",
    },
    {
      title: "Data Management",
      description: "Secure, redundant database with blockchain-backed immutable records and real-time synchronization",
    },
    {
      title: "Integration & Access",
      description: "APIs for ERP/WMS integration, role-based dashboards, and regulatory reporting",
    },
  ]

  return (
    <section className="w-full py-24 sm:py-32 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Enterprise-Grade Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for scale, reliability, and data integrity across your entire supply chain
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {layers.map((layer, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="md:text-right">
                <div className="text-sm font-bold text-accent mb-1">Layer {idx + 1}</div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{layer.title}</h3>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
              </div>
              <p className="text-muted-foreground">{layer.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent/15 to-primary/15 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">99.9% Uptime SLA</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Multi-region cloud deployment, redundant backups, and disaster recovery ensure your traceability data is
            always available when you need it.
          </p>
          <Button
           onClick={() => scrollToSection("contact")} 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
          >
            Review Technical Specs
          </Button>
        </div>
      </div>
    </section>
  )
}
