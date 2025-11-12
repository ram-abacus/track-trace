"use client"

import { useEffect, useState } from "react"

export default function ContactForm() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement("script")
    script.src = "https://js-na2.hsforms.net/forms/embed/242830238.js"
    script.defer = true
    script.onload = () => {
      setIsLoaded(true)
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [isLoaded])

  return (
    <section id="contact" className="w-full py-24 sm:py-32 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-foreground/80">
            See how Basiq360 can transform your supply chain. Talk to our team today.
          </p>
        </div>


        <div
          className="hs-form-frame"
          data-region="na2"
          data-form-id="d5cd240b-2c51-4e7d-ad9d-59bdd9253c25"
          data-portal-id="242830238"
        ></div>

        {/* <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8 md:p-10">
          {submitted && (
            <div className="p-4 bg-accent/20 border border-accent/50 rounded-lg text-center">
              <p className="font-semibold text-primary">Thank you! We'll be in touch soon.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Full Name *</label>
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
              <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
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
              <label className="block text-sm font-medium mb-2 text-foreground">Company Name *</label>
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
              <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
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
            <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
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
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full h-12"
          >
            Get Free Demo Today
          </Button>

          <p className="text-xs text-foreground/60 text-center">
            By submitting, you agree to our terms. We respect your privacy and will never share your information.
          </p>
        </form> */}
      </div>
    </section>
  )
}
