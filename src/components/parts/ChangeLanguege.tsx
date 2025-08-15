import Link from "next/link"
import { Button } from "../ui/button"
import { Globe } from "lucide-react"
import { lang, useTranslate } from "@/lib/translation"

const ChangeLanguege = ({lang}:{lang: lang}) => {
  const t = useTranslate(lang)
  return (
    <Link href={"/" + t("fa", "en")}>
      <Button variant="ghost" className="border-1 border-white">
        <Globe/>
        {t("fa", "en")}
      </Button>
    </Link>
  )
}

export default ChangeLanguege
