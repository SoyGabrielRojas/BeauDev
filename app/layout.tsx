import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BeauDev - Belleza y Tecnología en Código",
  description:
    "Consultora de programación y diseño digital que crea páginas web con belleza, funcionalidad y armonía visual.",
  generator: "v0.app",
  keywords: ["desarrollo web", "diseño web", "UX/UI", "programación", "consultora digital"],
  authors: [{ name: "BeauDev" }],
  icons: {
    icon: [
      {
        url: "/images/design-mode/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/design-mode/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/design-mode/logo.png",
        type: "image/png",
      },
    ],
    apple: "/images/design-mode/logo.png",
  },
}

export const viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
