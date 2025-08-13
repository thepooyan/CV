"use client"

import { ReactNode, useEffect } from "react"

interface props {
children:ReactNode,
  to: string
}
const ScrollerBtn = ({children, to}:props) => {

  let element:Element | null = null
  useEffect(() => {
    element = document.querySelector(to)
  })

  const scroll = () => {
    if (!element) return
    element.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div onClick={scroll}>
      {children}
    </div>
  )
}

export default ScrollerBtn
