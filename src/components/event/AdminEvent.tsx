"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const AdminEvent = () => {

  const router = useRouter()
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "`") {
        router.push("/en/Admin")
      }
    })
  })

  return null
}

export default AdminEvent
