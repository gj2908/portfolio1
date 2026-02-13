import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
}

export function ProjectCard({ id, title, description, tags, category }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border animate-fade-in-up hover-lift">
      <div className="aspect-video overflow-hidden">
        <Image
          src={`/placeholder.svg?height=200&width=400&text=${title.replace(/\s+/g, "+")}`}
          alt={title}
          width={400}
          height={200}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <Badge className="transition-all duration-300 group-hover:scale-110">{category}</Badge>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="transition-all duration-300 hover:bg-primary/10">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild className="relative overflow-hidden group-hover:bg-primary/90">
          <Link href={`/projects/project-${id}`} className="relative z-10">
            <span className="relative z-10">View Project</span>
            <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

