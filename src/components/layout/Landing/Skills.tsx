import { Card } from "@/components/ui/card"
import {
  Code,
  Database,
  Globe,
} from "lucide-react"
import { skillsData } from "@/lib/data"

const Skills = () => {
  return (
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
  )
}

export default Skills
