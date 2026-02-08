import Footer from "@/components/layout/Footer"
import Navigation from "@/components/layout/Navigation"
import { useParseLang } from "@/lib/Hooks"
import { ReactNode } from "react"

interface props {
  children: ReactNode,
  params: Promise<{lang: string}>
}
const layout = async ({children, params}:props) => {
  const lang = await useParseLang(params)
  return (
    <>
      <Navigation lang={lang}/>
      {children}
      <Footer lang={lang}/>
    </>
  )
}

export default layout
