"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates marketing copy, blog posts, and social media content based on user prompts.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "OpenAI", "TailwindCSS"],
      category: "ai",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description:
        "A collaborative task management tool with real-time updates, team assignments, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Firebase", "Redux", "Framer Motion"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      description:
        "A mobile-first web application for tracking workouts, nutrition, and fitness goals with data visualization.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "GraphQL", "D3.js", "MongoDB"],
      category: "mobile",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Real Estate Marketplace",
      description:
        "A platform connecting property buyers, sellers, and agents with advanced search, filtering, and messaging.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "PostgreSQL", "Prisma", "Google Maps API"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Developer Portfolio Template",
      description:
        "A customizable portfolio template for developers with animations, dark mode, and content management.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "TailwindCSS", "Framer Motion", "Contentful"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Mobile" },
    { value: "ai", label: "AI/ML" },
  ]

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore my recent projects showcasing my expertise in web development, mobile applications, and innovative
            solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mx-auto flex flex-wrap justify-center h-auto bg-transparent space-x-2 space-y-2 sm:space-y-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="overflow-hidden h-full border-primary/10 dark:border-primary/5 hover:shadow-lg transition-all group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
