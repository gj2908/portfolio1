import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects-data"

export default function ProjectsPage() {
  const iotProjects = projects.filter(p => p.category === "IoT")
  const embeddedProjects = projects.filter(p => p.category === "Embedded Systems")
  const webProjects = projects.filter(p => p.category === "Web Development")

  return (
    <div className="container py-12 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of my work in IoT, Embedded Systems, and Web Development.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="iot">IoT</TabsTrigger>
          <TabsTrigger value="embedded">Embedded Systems</TabsTrigger>
          <TabsTrigger value="web">Web Development</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                category={project.category}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="iot" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {iotProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                category={project.category}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="embedded" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {embeddedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                category={project.category}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {webProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                category={project.category}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

