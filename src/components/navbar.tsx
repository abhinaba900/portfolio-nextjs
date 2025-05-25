"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // optional for routing-based highlighting
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/src/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const linkClass = (href: string) =>
    `transition-colors ${
      activeLink === href
        ? "font-bold underline text-primary"
        : "text-foreground/80 hover:text-primary"
    }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary"
          >
            AJ
          </motion.span>
          <span className="sr-only">John Doe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={link.href}
                className={linkClass(link.href)}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.replace("#", "");
                  const el = document.getElementById(targetId);
                  if (el) {
                    const yOffset = -0; // adjust based on your navbar height
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                    setIsOpen(false); // close mobile menu if open
                    setActiveLink(link.href);
                  }
                }}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              // dark button
              size="sm"
              className="hidden md:inline-flex"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Kn-L3n12I0NiCm-id8tLc-OEi_pSRIx2/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="ml-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={linkClass(link.href)}
                onClick={() => {
                  setIsOpen(false);
                  setActiveLink(link.href);
                }}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Kn-L3n12I0NiCm-id8tLc-OEi_pSRIx2/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
