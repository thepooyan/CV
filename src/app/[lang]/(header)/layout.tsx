import Footer from "@/components/layout/Footer"
import Navigation from "@/components/layout/Navigation"
import { lang } from "@/lib/translation"
import { ReactNode } from "react"

interface props {
  children: ReactNode,
  params: Promise<{lang: lang}>
}
const layout = async ({children, params}:props) => {
  const {lang} = await params
  return (
    <>
      <Navigation lang={lang}/>
      {children}
      <Footer lang={lang}/>
    </>
  )
}

export default layout
