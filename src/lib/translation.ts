export type lang = "en" | "fa"

const languegeOrder:lang[] = [
  "en",
  "fa"
]

export const useTranslate = (lang: lang) => {
  return (...args: string[]) => {
    let index = languegeOrder.indexOf(lang)
    return args[index]
  }
}
