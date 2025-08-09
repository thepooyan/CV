import Footer from "@/components/layout/Footer"
import Navigation from "@/components/layout/Navigation"
import { ReactNode } from "react"

const layout = ({children}:{children: ReactNode}) => {
  return (
    <>
      <Navigation/>
      {children}
      <Footer/>
    </>
  )
}

export default layout
