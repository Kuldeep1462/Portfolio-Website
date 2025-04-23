"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Rock Gym",
    description:
      "A gym website built with React and Tailwind CSS where users can see all the details about the gym, membership plans, and trainers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rock%20gym.jpg-OPynpZjByhyjHd7OL36wRm0b0ZruyH.jpeg",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Kuldeep1462/Gym-website",
  },
  {
    title: "Library Management System",
    description: "A robust system to streamline book issuance, returns, and catalog management, built with C++.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LMS-pic.jpg-QFa2uZuM3OMVbQm4xwT8vNXEAt36KD.jpeg",
    tags: ["C++", "Data Structures", "OOP"],
    github: "https://github.com/Kuldeep1462",
  },
  {
    title: "Stark Power",
    description:
      "An e-commerce website for electronic items built with Angular, allowing users to browse and purchase products.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stark-power.jpg-nLRjfdUWQNZ28KGDkhqWNTm0VZBycW.jpeg",
    tags: ["Angular", "TypeScript", "Bootstrap"],
    github: "https://github.com/Kuldeep1462",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium">Browse My Recent</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border border-border hover:shadow-lg transition-shadow card-3d">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" size="sm" className="btn-hover-effect w-full" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
