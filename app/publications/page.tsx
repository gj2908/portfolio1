import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, BookOpen, FileText } from "lucide-react"

export default function PublicationsPage() {
  return (
    <div className="container py-12 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Publications</h1>
        <p className="text-xl text-muted-foreground">My research papers, articles, and other publications.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((publication, index) => (
          <Card key={index} className="animate-fade-in-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge>{publication.type}</Badge>
                <Badge variant="outline">{publication.year}</Badge>
              </div>
              <CardTitle className="mt-2">{publication.title}</CardTitle>
              <CardDescription>{publication.authors}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{publication.abstract}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="mr-1 h-4 w-4" />
                {publication.journal}
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={publication.link}
                  className="flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read <ArrowUpRight className="h-3 w-3" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Technical Reports</h2>
        <div className="grid gap-4">
          {technicalReports.map((report, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg border animate-fade-in-up">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-background">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{report.title}</p>
                  <Badge variant="outline">{report.year}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{report.description}</p>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href={report.link} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const publications = [
  {
    title: "IoT-Based Smart Home Energy Management System",
    authors: "Your Name, Co-author Name",
    abstract:
      "This paper presents a novel approach to energy management in smart homes using IoT devices and machine learning algorithms to optimize power consumption.",
    journal: "Journal of IoT Applications",
    year: "2024",
    type: "Conference Paper",
    link: "#",
  },
  {
    title: "Efficient Embedded Systems for Wearable Health Monitoring",
    authors: "Your Name, Co-author Name, Another Co-author",
    abstract:
      "A comprehensive study on low-power embedded systems designed for continuous health monitoring in wearable devices.",
    journal: "IEEE Embedded Systems Letters",
    year: "2023",
    type: "Journal Article",
    link: "#",
  },
  {
    title: "Web-Based Interface for Remote Sensor Networks",
    authors: "Your Name, Co-author Name",
    abstract:
      "This paper describes the design and implementation of a web-based interface for monitoring and controlling remote sensor networks in agricultural applications.",
    journal: "International Conference on Web Technologies",
    year: "2023",
    type: "Conference Paper",
    link: "#",
  },
  {
    title: "Low-Power Communication Protocols for IoT Devices",
    authors: "Your Name",
    abstract:
      "A comparative analysis of various low-power communication protocols suitable for battery-operated IoT devices in smart city applications.",
    journal: "Journal of Network Communications",
    year: "2022",
    type: "Journal Article",
    link: "#",
  },
]

const technicalReports = [
  {
    title: "Implementation of LoRaWAN for Campus-Wide IoT Network",
    description:
      "Technical report detailing the implementation and performance evaluation of a LoRaWAN network for IoT applications across a university campus.",
    year: "2024",
    link: "#",
  },
  {
    title: "Comparative Analysis of Microcontroller Platforms for Embedded Systems Education",
    description:
      "A detailed report comparing various microcontroller platforms for teaching embedded systems concepts to undergraduate engineering students.",
    year: "2023",
    link: "#",
  },
  {
    title: "Web Development Frameworks for IoT Dashboards",
    description:
      "Technical evaluation of modern web frameworks suitable for creating responsive and real-time dashboards for IoT data visualization.",
    year: "2023",
    link: "#",
  },
]

