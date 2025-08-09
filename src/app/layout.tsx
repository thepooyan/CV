import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { STATIC } from "@/lib/static"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${STATIC.name} ${STATIC.lastName} - Fullstack Developer`,
  description:
    "Portfolio website of John Developer, a passionate fullstack developer specializing in modern web technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}
