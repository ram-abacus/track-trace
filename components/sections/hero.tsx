"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                <span className="text-sm font-medium text-primary">Trusted by food exporters across the GCC</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Farm to Fork Visibility.
              </h1>
              <p className="text-xl sm:text-2xl text-foreground/80">
                Complete regulatory compliance and real-time traceability for food exports.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 cursor-pointer" 
              >
                Get Started
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 font-semibold rounded-full px-8 bg-transparent cursor-pointer"
              >
                Watch Demo
              </Button>
            </div>

            {/* RTB - Reasons to Believe */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <p className="text-sm text-foreground/70">Uptime SLA</p>
                <p className="text-xs text-foreground/50 pt-1">Enterprise-grade reliability</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Real-time</div>
                <p className="text-sm text-foreground/70">Track & Trace</p>
                <p className="text-xs text-foreground/50 pt-1">Live visibility across chain</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">12+</div>
                <p className="text-sm text-foreground/70">Compliance Stds</p>
                <p className="text-xs text-foreground/50 pt-1">All major regulations</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 sm:h-full min-h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl overflow-hidden border border-primary/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="hero.webp"
                alt="Track & Trace Dashboard"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
