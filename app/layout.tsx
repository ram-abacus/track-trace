import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Basiq360 - Track & Trace Platform for Food Exporters",
  description:
    "End-to-end cloud-based traceability system for Middle East food exporters with regulatory compliance and real-time tracking.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "favicon.webp",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "favicon.webp",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "favicon.webp",
        type: "image/svg+xml",
      },
    ],
    apple: "favicon.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/webp" href="/track-trace/favicon.webp" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
