import type React from "react"
import type { Metadata } from "next"
import { Inter, Vazirmatn } from "next/font/google"
import "@/app/globals.css"
import { STATIC } from "@/lib/static"
import { GoogleTagManager } from '@next/third-parties/google'
import { getFullName } from "@/lib/utils"
import { redirect } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })
const vazir = Vazirmatn({ subsets: ["arabic"] })

const getFont = (lang: string) => {
  if (lang === "fa") return vazir
  return inter
}

export const metadata: Metadata = {
  title: `${STATIC.name} ${STATIC.lastName} - Fullstack Developer`,
  description:
    `Portfolio website of ${getFullName()}, a passionate fullstack developer specializing in modern web technologies.`,
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{lang: string}> }) {

  const {lang} = await params
  if (lang !== "en" && lang !== "fa") redirect("/")

  return (
    <html lang={lang} className="dark">
      <body className={getFont(lang).className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-KS6XFX2S" />
    </html>
  )
}
