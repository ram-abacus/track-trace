"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Problem() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }
  const challenges = [
    {
      title: "Regulatory Compliance Burden",
      description: "Meet SFDA, UAE, Qatar, and GACC requirements without fragmented systems",
      icon: "Compliance.svg"
    },
    {
      title: "Supply Chain Visibility Gaps",
      description: "Real-time tracking from farm to consumer with complete transparency",
      icon: "Supply Chain.svg",
    },
    {
      title: "Recall Response Time",
      description: "Identify affected products and notify customers within minutes, not days",
      icon: "Reponse Time.svg",
    },
  ]

  return (
    <section className="w-full py-24 sm:py-32 px-6 bg-background md:pt-0">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">The Challenge</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Food exporters face mounting pressure to maintain compliance while scaling operations across multiple
            markets with different regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, idx) => (
            <Card key={idx} className="p-8 bg-card border-border hover:border-accent/50 transition-colors">
              <div className="text-4xl mb-4">
                <img 
                  src={challenge.icon}
                  alt={challenge.title}
                  className="w-14 h-14"
                />
                </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
          >
            Learn How We Help
          </Button>
        </div>
      </div>
    </section>
  )
}
