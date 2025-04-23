"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Kuldeep Singh. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
