"use client"

import type React from "react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { useEffect , useState } from "react"

export default function CTA() {

  return (
    <section id="contact" className="w-full py-24 sm:py-32 px-6 bg-gradient-to-r from-accent/15 to-primary/15 ">
      <div className="mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl">
            Join leading Middle East food exporters who are using Basiq360 to ensure compliance, reduce recalls, and
            build customer trust. Get started with a free 14-day demo today.
          </p>
        </div>

        <Script
          src="https://js-na2.hsforms.net/forms/embed/242830238.js"
          strategy="afterInteractive"
        />
        <div
          className="hs-form-frame bg-white rounded-2xl"
          data-region="na2"
          data-form-id="371299e1-44d5-4eab-bb07-cf9c760665f0"
          data-portal-id="242830238"
        />

        {/* <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/95 border border-primary/10 rounded-2xl p-8 md:p-10"
        >
          {submitted && (
            <div className="p-4 bg-accent/20 border border-accent/50 rounded-lg text-center">
              <p className="font-semibold text-primary">Thank you! We'll be in touch soon.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Your company"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+966..."
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-primary">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business needs..."
              rows={4}
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-[#ffa700] text-accent-foreground font-semibold rounded-full h-12 cursor-pointer"
          >
            Get Free Demo Today
          </Button>

          <p className="text-xs text-primary/70 text-center">
            No credit card required. Full platform access for 14 days. ✓ 99.9% Uptime ✓ 12+ Compliance Standards ✓
            Real-time Tracking
          </p>
        </form> */}
      </div>
    </section>
  )
}
