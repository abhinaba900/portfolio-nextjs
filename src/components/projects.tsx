"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Replica of Costco.com",
      description:
        "Using advanced HTML, CSS, JavaScript, and web frameworks, I accurately recreated Costco's website.Focused on the layout, navigation, and interactive elements.Emphasized mobile responsiveness and cross-browser compatibility.",
      image:
        "https://abhinaba900.github.io/Portpolio1/static/media/Screenshot%202024-02-19%20191850.5eb64c06829a8a106535.png",
      tags: ["React.js", "Express.js", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/abhinaba900/costco.com",
      demo: "https://costco-clone-eight.vercel.app/",
    },
    {
      id: 2,
      title: "Replica of airtable.com",
      description:
        "Revolutionizing work management with its dynamic blend of spreadsheet and database functionalities.Empowering seamless collaboration among team members.Enabling structured organization of data and tasks.",
      image:
        "https://abhinaba900.github.io/Portpolio1/static/media/airtable1.3eab62b1b01e0842fa0e.png",
      tags: ["React", "Chakra UI"],
      category: "frontend",
      github: "https://github.com/abhinaba1999/airtable.com",
      demo: "https://airtable-com-eight.vercel.app/",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description:
        "Created a feature-rich e-commerce platform focusing on enhancing user experience using React and JavaScript.Implemented advanced filtering and search functionalities to enhance product discovery and user navigation.",
      image:
        "https://github.com/abhinaba900/Portpolio1/blob/main/src/image/Screenshot%202025-05-23%20220248.png?raw=true",
      tags: ["React"],
      category: "frontend",
      github: "https://github.com/abhinaba900/meesho-clone__",
      demo: "https://meeso-clone.web.app/",
    },
    {
      id: 4,
      title: "Go Moon",
      description:
        "I am practicing the UI and it has dynamic dropdown and Stack..",
      image:
        "https://github.com/abhinaba900/Portpolio1/blob/main/src/image/WhatsApp%20Image%202025-05-23%20at%2013.49.15%20(1).jpeg?raw=true",
      tags: ["Flutter", "Dart"],
      category: "mobile",
      github: "https://github.com/abhinaba900/go_moon_androaid_app",
      demo: "https://github.com/abhinaba900/go_moon_androaid_app/releases/tag/flutter",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Mobile" },
  ];

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
            Explore my recent projects showcasing my expertise in web
            development, mobile applications, and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
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
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
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
  );
}
