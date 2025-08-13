import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"

const Projects = () => {
  return (
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project,) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-60 relative"
              >
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors mb-1">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  {project.isHobby && <Badge className="absolute -right-2 -top-3 rotate-45 bg-green-300 text-black ">Hobby</Badge>}
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button size="sm" asChild className={cn("flex-1",
                      project.link === "" && "pointer-events-none opacity-30")}>
                      <Link href={project.link} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.isDemo ? "Live Demo" : "Live Website"}
                      </Link>
                    </Button>
                    {project.github && 
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.github} target="_blank" aria-label={`open github repository: ${project.title}`}>
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
)
}

export default Projects
