"use client"

import { useScroller } from "@/lib/Hooks"
import { ReactNode } from "react"

interface props {
children:ReactNode,
  to: string
}
const ScrollerBtn = ({children, to}:props) => {

  const scroll = useScroller(to)

  return (
    <div onClick={scroll}>
      {children}
    </div>
  )
}

export default ScrollerBtn
