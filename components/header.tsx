"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <header>
      <div className="sticky top-0 z-50 w-full bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="basiq360-logo.png" width={120} height={40}
            alt="Basiq360 Logo"
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#compliance" className="text-sm font-medium hover:text-primary transition-colors">
            Compliance
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 cursor-pointer" 
              >
                Request a Demo
              </Button>
        </nav>
      </div>
      </div>
    </header>
  )
}
