import BsTelegram from "@/components/icons/Telegram"
import { Button } from "@/components/ui/button"
import { STATIC } from "@/lib/static"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"
import Link from "next/link"
import QuickMessage from "../QuickMessage"
import { lang, useTranslate } from "@/lib/translation"

interface pr {
  lang: lang
}
const Contact = ({lang}:pr) => {
  const t = useTranslate(lang)
  return (
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("Let's Connect", "راه‌های ارتباطی")}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">{t("Get In Touch", "در تماس باشید!")}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
                "من همیشه علاقه‌مند به شنیدن درباره فرصت‌های جدید و پروژه‌های هیجان‌انگیز هستم. چه سوالی داشته باشید و چه فقط بخواهید سلام کنید، خوشحال می‌شوم با من تماس بگیرید!"
                )}
                </p>
                <div className="space-y-4">
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent ltr">
                    <Link href={`call:${STATIC.mobile}`}>
                      <Phone className="w-5 h-5 mr-3" />
                      {STATIC.mobile}
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent ltr">
                    <Link href="mailto:john@example.com">
                      <Mail className="w-5 h-5 mr-3" />
                      {STATIC.email}
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent ltr">
                    <Link href={STATIC.telegram} target="_blank">
                      <BsTelegram className="w-5 h-5 mr-3"/>
                      {STATIC.telegram}
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent ltr">
                    <Link href={STATIC.github} target="_blank">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Profile
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent ltr">
                    <Link href={STATIC.linkedIn} target="_blank">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                    </Link>
                  </Button>
                </div>
              </div>
              <QuickMessage lang={lang}/>
            </div>
          </div>
        </div>
      </section>
)
}

export default Contact
