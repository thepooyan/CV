import BsTelegram from "@/components/icons/Telegram"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { STATIC } from "@/lib/static"
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

const Contact = () => {
  return (
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Let's Connect</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                  question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent">
                    <Link href="mailto:john@example.com">
                      <Mail className="w-5 h-5 mr-3" />
                      {STATIC.email}
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent">
                    <Link href={STATIC.telegram} target="_blank">
                      <BsTelegram className="w-5 h-5 mr-3"/>
                      {STATIC.telegram}
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent">
                    <Link href={STATIC.github} target="_blank">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Profile
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent">
                    <Link href={STATIC.linkedIn} target="_blank">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                    </Link>
                  </Button>
                </div>
              </div>
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6">Quick Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-input rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-input rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 border border-input rounded-md bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
)
}

export default Contact
