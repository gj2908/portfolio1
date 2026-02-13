import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, Globe, Zap } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects-data"

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
                  <p className="text-sm text-muted-foreground">CGPA: 7.31/10</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Badge>2023</Badge>
                <div>
                  <p className="font-medium">12th Grade - 79.2%</p>
                  <p className="text-sm text-muted-foreground">Sumeet Rahul Goel Memorial Sr. Sec. School (CBSE), Agra</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Badge>2021</Badge>
                <div>
                  <p className="font-medium">10th Grade - 92.4%</p>
                  <p className="text-sm text-muted-foreground">St. Paul's Church College (CISCE), Agra</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          <p className="text-muted-foreground">My work experience and internships.</p>
        </div>
        <div className="rounded-lg border p-6 hover:border-primary transition-colors">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-semibold">Software Developer Intern</h3>
              <p className="text-primary font-medium">MPEBBLES TECHNOLOGIES LLP</p>
              <p className="text-sm text-muted-foreground">Delhi, India</p>
            </div>
            <Badge variant="outline" className="w-fit">Dec 2025 - Mar 2026</Badge>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Developing a cross-platform stock market analysis app using Quasar.js and JavaScript ES6, ensuring high performance across web and mobile devices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Designing responsive UI layouts with HTML/CSS and integrating real-time data feeds via RESTful APIs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Collaborating with the team to enhance application state management and reduce load times for high-frequency data updates</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="text-muted-foreground">My technical skills and areas of expertise.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-primary">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "JavaScript (ES6)", "C/Embedded C", "SQL"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-primary">Web & App Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Quasar.js", "Django", "React.js", "HTML5 & CSS3", "Express.js"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-primary">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "MongoDB", "SQLite"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-primary">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["Google Cloud Platform", "Git & GitHub", "Firebase", "VS Code"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-primary">Hardware Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["ESP32 & Arduino", "IoT Sensor Integration", "Raspberry Pi 4"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-6 space-y-3">
            <h3 className="text-lg font-semibold text-primary">Domain Knowledge</h3>
            <div className="flex flex-wrap gap-2">
              {["OOP", "RESTful API Design", "Windows", "Linux"].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Languages Section */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Certifications & Languages</h2>
          <p className="text-muted-foreground">Professional certifications and language proficiency.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-xl font-semibold">Certifications</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge variant="outline">HackerRank</Badge>
                <span>Java</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline">HackerRank</Badge>
                <span>Python Basic</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline">Microsoft</Badge>
                <span>Generative AI</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-xl font-semibold">Languages</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge>Hindi</Badge>
                <span className="text-muted-foreground">Native Proficiency</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge>English</Badge>
                <span className="text-muted-foreground">Professional Working Proficiency</span>
              </li>
            </ul>
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
          {projects.slice(-3).map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              category={project.category}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

