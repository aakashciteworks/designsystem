import type { Metadata } from "next"
import "@fontsource-variable/inter"
import "@fontsource/space-mono/400.css"
import "@fontsource/space-mono/700.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ember Finance Design System",
  description: "A Brex-inspired design system starter for v0",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
