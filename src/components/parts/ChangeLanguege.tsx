"use client"
import { Button } from "../ui/button"
import { Globe } from "lucide-react"
import { lang, useTranslate } from "@/lib/translation"
import { useRouter } from "next/navigation"
import { setLangCookie } from "@/lib/actions"

const ChangeLanguege = ({lang}:{lang: lang}) => {
  const t = useTranslate(lang)
  const router = useRouter()
  const targetLang = t("fa", "en")

  const click = () => {
    setLangCookie(targetLang)
    router.push(`/${targetLang}`)
  }

  return (
    <Button variant="ghost" className="border-1 border-white" onClick={click}>
      <Globe/>
      {targetLang}
    </Button>
  )
}

export default ChangeLanguege
