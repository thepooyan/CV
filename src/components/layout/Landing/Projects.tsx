import { projects } from "@/lib/data"
import ProjectCard from "@/components/parts/ProjectCard"

const Projects = () => {
  return (
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map(p => <ProjectCard key={p.title} project={p}/>)}
          </div>
        </div>
      </section>
)
}

export default Projects
