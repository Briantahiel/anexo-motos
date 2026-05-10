import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Anexos Motos",
  description: "Sistema de documentación",
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
      <link rel="apple-touch-icon" href="/icon-192.png" />
      <meta name="theme-color" content="#2563eb" />
    </html>
  )
}
