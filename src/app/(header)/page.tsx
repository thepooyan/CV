"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Calendar,
  MessageCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { blogPosts, projects, skillsData } from "@/lib/data"
import Hero from "@/components/layout/Landing/Hero"
import About from "@/components/layout/Landing/About"
import Skills from "@/components/layout/Landing/Skills"
import Projects from "@/components/layout/Landing/Projects"

export default function CVWebsite() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetHeight + offsetTop) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card
                key={post.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <Separator orientation="vertical" className="h-4" />
                    {post.readTime}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                      john@example.com
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent">
                    <Link href="https://t.me/johndeveloper" target="_blank">
                      <MessageCircle className="w-5 h-5 mr-3" />
                      @johndeveloper
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent">
                    <Link href="https://github.com/johndeveloper" target="_blank">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Profile
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full justify-start bg-transparent">
                    <Link href="https://linkedin.com/in/johndeveloper" target="_blank">
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
    </>
  )
}

