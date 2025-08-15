'use client'

import { createContext, useContext, ReactNode } from 'react'

type LangContextType = { lang: string }

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ lang, children }: { lang: string; children: ReactNode }) {
  return <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

