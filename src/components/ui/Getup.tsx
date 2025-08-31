"use client"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

const Getup = () => {
  const [active, setActive] = useState(false)
  const goup = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) setActive(true)
      else setActive(false)
    })
  })
  return (
    <div
      className={cn(
        `bg-black rounded-sm p-2 fixed right-4 -bottom-9 transition-all cursor-pointer dark:bg-white hover:rotate-45 group z-10 box
         ring-white ring  `,
        active && "bottom-4"
      )}
      onClick={goup}
    >
      <ArrowUp className="text-white dark:text-black group-hover:-rotate-45 transition-all"/>
    </div>
  )
}

export default Getup
