import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
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
