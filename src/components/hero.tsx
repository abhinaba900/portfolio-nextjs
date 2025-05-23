"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 opacity-30" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/30 dark:bg-primary/20 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/30 dark:bg-secondary/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Full Stack Developer
            </span>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text  bg-gradient-to-r from-primary to-secondary"
          >
            Building digital experiences that matter
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-foreground/80 mb-8"
          >
            I'm Abhinaba Jana, a passionate full-stack developer specializing in
            creating modern, responsive, and user-friendly web applications with
            cutting-edge technologies.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex justify-center gap-6 mt-12"
          >
            <Link
              href="https://github.com/abhinaba900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abhinaba-jana-45461327a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Link href="#about" className="text-foreground/50 hover:text-primary">
            <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center items-start p-1">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="w-1 h-1 bg-foreground/50 rounded-full"
              />
            </div>
            <span className="sr-only">Scroll Down</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
