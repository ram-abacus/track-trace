import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import Problem from "@/components/sections/problem"
import Solution from "@/components/sections/solution"
import Features from "@/components/sections/features"
import Compliance from "@/components/sections/compliance"
import Architecture from "@/components/sections/architecture"
import Cta from "@/components/sections/cta"

export const metadata = {
  title: "Basiq360 - End-to-End Track & Trace for Food Exporters",
  description:
    "Cloud-based track and trace platform for Middle East food exporters. Regulatory compliant, real-time visibility, from farm to fork.",
}

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Compliance />
      <Architecture />
      <Cta />
    </main>
  )
}
