import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { STATIC } from "@/lib/static"
import { GoogleTagManager } from '@next/third-parties/google'
import { getFullName } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${STATIC.name} ${STATIC.lastName} - Fullstack Developer`,
  description:
    `Portfolio website of ${getFullName()}, a passionate fullstack developer specializing in modern web technologies.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-KS6XFX2S" />
    </html>
  )
}
