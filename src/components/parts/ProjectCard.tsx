"use client"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import Link from "next/link"
import { ChevronDown, Code, Database, ExternalLink, Github, Globe } from "lucide-react"

export interface project {
  title: string
  description: string
  tech: string[]
  importantPages: {url: string, name: string}[]
  features: {title: string, description: string}[]
  challenges: {title: string, description: string}[]
  image: string
  lighthouseScore:
  {
    performance: number
    accessibility: number
    bestPractices: number
    seo: number
  }
  isDemo?: boolean,
  isHobby?: boolean
  link: string
  github?: string
}

interface props {
  project: project
}

function ProjectCard({ project }:props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const getLighthouseColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 50) return "text-yellow-600"
    return "text-red-600"
  }

  const handleExpand = () => {
    setIsAnimating(true)
    setIsExpanded(true)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handleCollapse = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const cardTop = rect.top + scrollTop

      setIsAnimating(true)
      setIsExpanded(false)

      setTimeout(() => {
        window.scrollTo({
          top: cardTop - 100,
          behavior: "smooth",
        })
        setIsAnimating(false)
      }, 600)
    }
  }

  return (
    <Card
      ref={cardRef}
      className={`group transition-all duration-600 ease-in-out overflow-hidden ${
        isExpanded ? "md:col-span-2 lg:col-span-3 shadow-2xl" : "hover:shadow-xl hover:-translate-y-2"
      } ${isAnimating ? "transform-gpu" : ""}`}
      style={{
        transformOrigin: "center top",
      }}
    >
      <div
        className={`transition-all duration-600 ease-in-out h-full flex flex-col justify-between ${
          isExpanded ? "scale-100 opacity-100" : "scale-100 opacity-100"
        }`}
      >
        <CardHeader className="mb-4">
          <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`transition-all duration-500 ease-in-out ${
              isExpanded
                ? "max-h-0 opacity-0 overflow-hidden transform -translate-y-4"
                : "max-h-96 opacity-100 transform translate-y-0"
            }`}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
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
                    {project.isDemo ? "Live Demo" : "Live Website"}
                  </Link>
                </Button>
                {project.github && 
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleExpand}
                disabled={isAnimating}
                className="w-full group/expand hover:bg-primary/10 transition-all duration-300"
              >
                <span className="transition-all duration-300 group-hover/expand:scale-105">View Details</span>
                <ChevronDown className="w-4 h-4 ml-2 transition-all duration-300 group-hover/expand:translate-y-0.5" />
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${
              isExpanded
                ? "max-h-none opacity-100 transform translate-y-0"
                : "max-h-0 opacity-0 overflow-hidden transform translate-y-4"
            }`}
          >
            <div className="space-y-6 pt-2">
              <div
                className={`relative overflow-hidden rounded-lg transition-all duration-700 delay-100 ${
                  isExpanded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div
                className={`transition-all duration-700 delay-200 ${
                  isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-4"
                }`}
              >
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs transition-all duration-300 ${
                        isExpanded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
                      }`}
                      style={{
                        transitionDelay: isExpanded ? `${300 + idx * 50}ms` : "0ms",
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.features.length > 0 && <>

              <div
                className={`transition-all duration-700 delay-300 ${
                  isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-4"
                }`}
              >
                <h4 className="font-semibold mb-3 flex items-center">
                  <Code
                    className={`w-4 h-4 mr-2 transition-all duration-500 delay-400 ${
                      isExpanded ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                    }`}
                  />
                  Key Features
                </h4>
                <div className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-all duration-500 ${
                        isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-2"
                      }`}
                      style={{
                        transitionDelay: isExpanded ? `${500 + idx * 100}ms` : "0ms",
                      }}
                    >
                      <h5 className="font-medium text-sm">{feature.title}</h5>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              </>}
              {project.challenges.length > 0 && <>
              <div
                className={`transition-all duration-700 delay-400 ${
                  isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-4"
                }`}
              >
                <h4 className="font-semibold mb-3 flex items-center">
                  <Database
                    className={`w-4 h-4 mr-2 transition-all duration-500 delay-500 ${
                      isExpanded ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                    }`}
                  />
                  Technical Challenges
                </h4>
                <div className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className={`border-l-2 border-secondary/20 pl-4 hover:border-secondary/40 transition-all duration-500 ${
                        isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-2"
                      }`}
                      style={{
                        transitionDelay: isExpanded ? `${600 + idx * 100}ms` : "0ms",
                      }}
                    >
                      <h5 className="font-medium text-sm">{challenge.title}</h5>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              </>}
              {project.importantPages.length > 0 && <>
              <div
                className={`transition-all duration-700 delay-500 ${
                  isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-4"
                }`}
              >
                <h4 className="font-semibold mb-3 flex items-center">
                  <Globe
                    className={`w-4 h-4 mr-2 transition-all duration-500 delay-600 ${
                      isExpanded ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                    }`}
                  />
                  Important Pages
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.importantPages.map((page, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      asChild
                      className={`hover:scale-105 transition-all duration-400 bg-transparent ${
                        isExpanded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
                      }`}
                      style={{
                        transitionDelay: isExpanded ? `${700 + idx * 75}ms` : "0ms",
                      }}
                    >
                      <Link href={project.link + page.url} target="_blank" className="justify-start">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        {page.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
              </>}

              <div
                className={`transition-all duration-700 delay-600 ${
                  isExpanded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                }`}
              >
                <h4 className="font-semibold mb-3">Lighthouse Scores</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Performance", score: project.lighthouseScore.performance },
                    { label: "Accessibility", score: project.lighthouseScore.accessibility },
                    { label: "Best Practices", score: project.lighthouseScore.bestPractices },
                    { label: "SEO", score: project.lighthouseScore.seo },
                  ].map((metric, idx) => (
                    <div
                      key={metric.label}
                      className={`text-center hover:scale-110 transition-all duration-500 cursor-default ${
                        isExpanded ? "opacity-100 transform scale-100" : "opacity-0 transform scale-50"
                      }`}
                      style={{
                        transitionDelay: isExpanded ? `${800 + idx * 100}ms` : "0ms",
                      }}
                    >
                      <div className={`text-2xl font-bold ${getLighthouseColor(metric.score)}`}>{metric.score}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`flex flex-wrap gap-2 pt-4 border-t transition-all duration-700 delay-700 ${
                  isExpanded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                }`}
              >
                <Button
                  size="sm"
                  asChild
                  className={`hover:scale-105 transition-all duration-400 ${
                    isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-2"
                  }`}
                  style={{ transitionDelay: isExpanded ? "800ms" : "0ms" }}
                >
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.isDemo ? "Live Demo" : "Live Website"}
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className={`hover:scale-105 transition-all duration-400 bg-transparent ${
                    isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-2"
                  }`}
                  style={{ transitionDelay: isExpanded ? "850ms" : "0ms" }}
                >
                  {project.github && 
                  <Link href={project.github} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Link>}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCollapse}
                  disabled={isAnimating}
                  className={`ml-auto group/collapse hover:bg-destructive/10 transition-all duration-300 ${
                    isExpanded ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-2"
                  }`}
                  style={{ transitionDelay: isExpanded ? "900ms" : "0ms" }}
                >
                  <span className="transition-all duration-300 group-hover/collapse:scale-105">Collapse</span>
                  <ChevronDown className="w-4 h-4 ml-2 rotate-180 transition-all duration-300 group-hover/collapse:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
export default ProjectCard 
