import Footer from "@/components/layout/Footer"
import Navigation from "@/components/layout/Navigation"
import { parseLangFromParams } from "@/lib/utils"
import { ReactNode } from "react"

interface props {
  children: ReactNode,
  params: Promise<{lang: string}>
}
const layout = async ({children, params}:props) => {

  const lang = await parseLangFromParams(params)

  return (
    <>
      <Navigation lang={lang}/>
      {children}
      <Footer lang={lang}/>
    </>
  )
}

export default layout
