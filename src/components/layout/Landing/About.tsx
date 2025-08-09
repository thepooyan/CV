import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Database,
  Globe,
} from "lucide-react"

const About = () => {
  return (
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
  )
}

export default About
