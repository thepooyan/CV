import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { STATIC } from "./static"
import { lang, useTranslate } from "./translation"
import { setThemeCookie } from "./actions"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toggleDarkMode = () => {
  if (!document) throw new Error("toggleDarkMode called in a server component")
  const isDark = document.documentElement.classList.contains("dark")
  if (isDark) {
    setThemeCookie("light")
    document.documentElement.classList.remove("dark")
  } else {
    document.documentElement.classList.add("dark")
    setThemeCookie("dark")
  }
}

export const getDynamicName = (lang: lang) => {
  const t = useTranslate(lang)
  return t(getFullName(),getFullNameFa())
}
export const getFullName = () => STATIC.name + " " + STATIC.lastName;
export const getFullNameFa = () => STATIC.nameFa + " " + STATIC.lastNameFa;

export const formatMessage = (name: string, email: string, msg: string) => `name: ${name}\nemail: ${email}\n\n${msg}`

export function respondToVisibility(
  element: Element,
  onEnter: (el: Element) => void,
  onLeave?: (el: Element) => void,
  offset: number = 0,
  options: Omit<IntersectionObserverInit, 'rootMargin'> = {}
): () => void {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        onEnter(entry.target)
      } else {
        onLeave?.(entry.target)
      }
    }
  }, {
    rootMargin: `${offset}px 0px ${offset}px 0px`,
    ...options
  })

  observer.observe(element)

  return () => observer.unobserve(element)
}

export const getBlogPicUrl = (str: string | null) => {
  return str ?
    `/blog/${str}`
    :
    "/placeholder.svg"
}
export const getBlogDetailUrl = (postTitle: string) => `/en/Blog/${encodeURIComponent(postTitle)}`

export const isProd = () => process.env.NODE_ENV === 'production'
