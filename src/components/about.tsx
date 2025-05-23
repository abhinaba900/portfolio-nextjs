"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/src/components/ui/card"
import { Code2, Database, Layout, Server, Smartphone, Sparkles } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6 text-primary" />,
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      technologies: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Supabase"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      technologies: ["React Native", "Expo", "Flutter", "Mobile-First Design"],
    },
    {
      category: "DevOps",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      technologies: ["Docker", "CI/CD", "AWS", "Vercel", "GitHub Actions"],
    },
    {
      category: "AI/ML",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      technologies: ["OpenAI API", "TensorFlow.js", "Hugging Face", "LangChain", "Vector DBs"],
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50 dark:bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-30 blur-xl"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-primary/20">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="John Doe"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Full Stack Developer with 5+ years of experience</h3>
            <p className="text-foreground/80">
              I'm passionate about building exceptional digital experiences that live at the intersection of design and
              technology. With expertise spanning the entire development stack, I create scalable, performant, and
              user-friendly applications.
            </p>
            <p className="text-foreground/80">
              My approach combines technical excellence with creative problem-solving. I stay at the forefront of web
              technologies and best practices to deliver solutions that not only meet but exceed expectations.
            </p>
            <p className="text-foreground/80">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing
              knowledge through my blog and community involvement.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-primary/10 dark:border-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {skill.icon}
                      <h4 className="text-lg font-semibold">{skill.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.technologies.map((tech) => (
                        <li key={tech} className="text-foreground/80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
