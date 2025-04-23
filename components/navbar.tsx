"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50)

        // Determine active section
        const sections = navLinks.map((link) => link.href.substring(1))
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section)
          if (!element) return false

          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        })

        if (currentSection) {
          setActiveSection(currentSection)
        } else if (window.scrollY < 100) {
          setActiveSection("")
        }
      }

      // Set initial scroll state
      handleScroll()

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-foreground"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Kuldeep Singh
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "nav-link text-foreground/80 hover:text-foreground transition-colors duration-300 text-lg font-medium",
                    activeSection === link.href.substring(1) && "text-primary font-semibold",
                  )}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          {/* ThemeToggle removed */}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* ThemeToggle removed */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="hover:bg-primary/10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/95 backdrop-blur-md mt-4 rounded-lg shadow-lg overflow-hidden"
        >
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "block py-3 px-6 hover:bg-primary/10 transition-colors",
                    activeSection === link.href.substring(1)
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-foreground",
                  )}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  )
}
