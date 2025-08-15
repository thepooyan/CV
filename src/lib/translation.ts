const primaryLocale = "en"
const secondaryLocale = "fa"

export const useTranslate = (lang: string) => {
  return (primaryLang: string, secondaryLang: string) => {
    if (lang === primaryLocale) return primaryLang
    if (lang === secondaryLocale) return secondaryLang
    throw new Error(`locale ${lang} is not defined`)
  }
}
