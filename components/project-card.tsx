import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export function ProjectCard({ id, title, description, tags, category, githubUrl, liveUrl, image }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border animate-fade-in-up hover-lift flex flex-col h-full">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || `/placeholder.svg?height=200&width=400&text=${title.replace(/\s+/g, "+")}`}
          alt={title}
          width={400}
          height={200}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-xl font-semibold flex-1">{title}</h3>
        </div>
        <div className="flex justify-center mb-3">
          <Badge className="transition-all duration-300 group-hover:scale-110">{category}</Badge>
        </div>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="transition-all duration-300 hover:bg-primary/10">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {liveUrl ? (
            <>
              <Button asChild className="relative overflow-hidden group-hover:bg-primary/90 flex-1">
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="relative z-10">
                  <span className="relative z-10">Live Demo</span>
                  <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </Link>
              </Button>
              {githubUrl && (
                <Button asChild variant="outline" size="icon" className="hover-lift">
                  <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </>
          ) : (
            <>
              <Button asChild className="relative overflow-hidden group-hover:bg-primary/90 flex-1">
                <Link href={`/projects/project-${id}`} className="relative z-10">
                  <span className="relative z-10">View Project</span>
                  <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </Link>
              </Button>
              {githubUrl && (
                <Button asChild variant="outline" size="icon" className="hover-lift">
                  <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

