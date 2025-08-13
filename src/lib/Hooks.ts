"use client"
import { useEffect } from "react"

export const useScroller = (to: string) => {
  let element:Element | null = null
  useEffect(() => {
    element = document.querySelector(to)
  })

  return () => {
    if (!element) return
    element.scrollIntoView({behavior: "smooth"})
  }
}
