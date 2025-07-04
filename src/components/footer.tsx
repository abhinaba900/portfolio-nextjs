"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Frame, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t dark:border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold mb-4"
            >
              <Frame className="w-6 h-6 text-primary" />
              <span>Abhinaba Jana</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Building exceptional digital experiences with modern web
              technologies. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/abhinaba900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhinaba-jana-45461327a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:abhinabajana900@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("home");
                    if (el) {
                      const yOffset = -0; // adjust this based on your fixed navbar height
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("about");
                    if (el) {
                      const yOffset = -0; // adjust this based on your fixed navbar height
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("projects");
                    if (el) {
                      const yOffset = -0; // adjust this based on your fixed navbar height
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) {
                      const yOffset = -0; // adjust this based on your fixed navbar height
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">Web Development</li>
              <li className="text-foreground/70">Mobile Applications</li>
              <li className="text-foreground/70">API Development</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
