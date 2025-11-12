"use client"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="basiq360-logo.png" width={120} height={40}
            alt="Basiq360 Logo"
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="/#compliance" className="text-sm font-medium hover:text-primary transition-colors">
            Compliance
          </a>
          <a href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
