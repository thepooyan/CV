import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
