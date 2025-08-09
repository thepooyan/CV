"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-primary/20 transition-transform hover:scale-105">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              John Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fullstack Developer crafting digital experiences with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate fullstack developer with over 5 years of experience building scalable web
                  applications. I love turning complex problems into simple, beautiful designs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                  or sharing my knowledge through blog posts and community involvement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Code className="w-4 h-4 mr-2" />
                    5+ Years Experience
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <Globe className="w-4 h-4 mr-2" />
                    Remote Friendly
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <Database className="w-4 h-4 mr-2" />
                    Full Stack
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3" />
                <Card className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Quick Facts</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>Based in San Francisco, CA</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>Available for freelance work</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>Open to remote opportunities</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Skills & Technologies</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                  <div key={category} className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary flex items-center">
                      {category === "Frontend" && <Code className="w-4 h-4 mr-2" />}
                      {category === "Backend" && <Database className="w-4 h-4 mr-2" />}
                      {category === "Database" && <Database className="w-4 h-4 mr-2" />}
                      {category === "DevOps & Cloud" && <Globe className="w-4 h-4 mr-2" />}
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {skills.map((skill, index) => (
                        <div key={skill.name} className="flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-12 bg-muted rounded-full h-1.5">
                              <div
                                className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: `${skill.level}%`,
                                  animationDelay: `${(categoryIndex * skills.length + index) * 30}ms`,
                                }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project,) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild className="flex-1">
                      <Link href={project.link} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

