import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, Globe, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="container space-y-16 py-12 md:py-16 lg:py-24">
      {/* Hero Section */}
      <section className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Electronics Engineer & Web Developer
          </h1>
          <p className="text-xl text-muted-foreground">
            Specializing in IoT, Embedded Systems, and Web Development. Creating innovative solutions at the
            intersection of hardware and software.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="hover-lift">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden animate-slide-in animate-float">
          <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" priority />
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground">
            Electronics and Communication Engineering student with a passion for building innovative solutions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Background</h3>
            <p>
              I am currently pursuing B.Tech in Electronics and Communication Engineering at SRM Institute of Science
              and Technology, graduating in May 2027. My interests span across hardware projects in IoT and Embedded
              Systems, as well as software development focusing on web technologies and workflow design.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Badge>2023 - 2027</Badge>
                <div>
                  <p className="font-medium">B.Tech in Electronics and Communication Engineering</p>
                  <p className="text-sm text-muted-foreground">SRM Institute of Science and Technology</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Badge>2023</Badge>
                <div>
                  <p className="font-medium">12th Grade</p>
                  <p className="text-sm text-muted-foreground">SRGMSSS, Agra</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Badge>2021</Badge>
                <div>
                  <p className="font-medium">10th Grade</p>
                  <p className="text-sm text-muted-foreground">St. Paul's Church College, Agra</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="text-muted-foreground">My technical skills and areas of expertise.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
          <div className="group rounded-lg border p-6 hover:border-primary transition-colors animate-fade-in-up hover-lift">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">Embedded Systems</h3>
            <p className="mt-2 text-muted-foreground">
              Designing and programming microcontroller-based systems for various applications.
            </p>
          </div>
          <div className="group rounded-lg border p-6 hover:border-primary transition-colors animate-fade-in-up hover-lift">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">IoT Development</h3>
            <p className="mt-2 text-muted-foreground">
              Creating connected devices and systems that communicate over networks.
            </p>
          </div>
          <div className="group rounded-lg border p-6 hover:border-primary transition-colors animate-fade-in-up hover-lift">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="mt-2 text-muted-foreground">
              Building responsive and interactive web applications using modern frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work in IoT and web development.</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg border">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Project+${i}`}
                  alt={`Project ${i}`}
                  width={400}
                  height={200}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Project Title {i}</h3>
                <p className="mt-2 text-muted-foreground">
                  A brief description of this project and the technologies used.
                </p>
                <Button variant="link" asChild className="mt-4 p-0">
                  <Link href={`/projects/project-${i}`}>Learn more</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

