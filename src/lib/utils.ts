import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { STATIC } from "./static"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toggleDarkMode = () => {
  if (!document) throw new Error("toggleDarkMode called in a server component")
  const isDark = document.documentElement.classList.contains("dark")
  if (isDark)
  document.documentElement.classList.remove("dark")
    else
  document.documentElement.classList.add("dark")
}

export const getFullName = () => STATIC.name + " " + STATIC.lastName

export const formatMessage = (name: string, email: string, msg: string) => `name: ${name}\nemail: ${email}\n\n${msg}`

export function respondToVisibility(
  element: Element,
  onEnter: (el: Element) => void,
  onLeave?: (el: Element) => void,
  options: IntersectionObserverInit = {}
): () => void {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        onEnter(entry.target)
      } else {
        onLeave?.(entry.target)
      }
    }
  }, options)

  observer.observe(element)

  return () => observer.unobserve(element)
}
