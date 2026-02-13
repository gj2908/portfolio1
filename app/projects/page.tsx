import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
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
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCard
                key={i}
                id={i + 1}
                title={`Project ${i + 1}`}
                description="A brief description of this project and the technologies used."
                tags={["IoT", "Web", "Embedded"].slice(0, (i % 3) + 1)}
                category={["IoT", "Embedded Systems", "Web Development"][i % 3]}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="iot" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {Array.from({ length: 2 }).map((_, i) => (
              <ProjectCard
                key={i}
                id={i + 1}
                title={`IoT Project ${i + 1}`}
                description="An Internet of Things project connecting devices and sensors."
                tags={["IoT", "Sensors", "Cloud"]}
                category="IoT"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="embedded" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {Array.from({ length: 2 }).map((_, i) => (
              <ProjectCard
                key={i}
                id={i + 3}
                title={`Embedded Project ${i + 1}`}
                description="An embedded systems project using microcontrollers and custom hardware."
                tags={["Embedded", "Microcontroller", "C++"]}
                category="Embedded Systems"
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {Array.from({ length: 2 }).map((_, i) => (
              <ProjectCard
                key={i}
                id={i + 5}
                title={`Web Project ${i + 1}`}
                description="A web development project using modern frameworks and technologies."
                tags={["Web", "React", "Next.js"]}
                category="Web Development"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

