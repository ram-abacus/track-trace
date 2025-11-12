"use client"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Basiq360</h3>
            <p className="text-background/70 text-sm">
              End-to-end track & trace for food exporters in the Middle East.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">© 2025 Basiq360. All rights reserved.</p>
            <div className="flex gap-4">
              <Button variant="link" className="text-background/70 hover:text-background p-0 text-sm">
                Twitter
              </Button>
              <Button variant="link" className="text-background/70 hover:text-background p-0 text-sm">
                LinkedIn
              </Button>
              <Button variant="link" className="text-background/70 hover:text-background p-0 text-sm">
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
