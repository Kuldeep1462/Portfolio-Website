"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen pt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Enhanced 3D background with larger bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background gradient bubbles */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/5 blur-3xl"
          style={{
            top: "10%",
            left: "5%",
            transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/5 blur-3xl"
          style={{
            top: "40%",
            right: "5%",
            transform: `translate(${-mousePosition.x / 60}px, ${-mousePosition.y / 60}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/10 blur-3xl"
          style={{
            bottom: "10%",
            left: "30%",
            transform: `translate(${mousePosition.x / 70}px, ${-mousePosition.y / 70}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* 3D floating shapes */}
        {[...Array(12)].map((_, i) => {
          const size = 20 + Math.random() * 60
          const isCircle = Math.random() > 0.5
          const depth = 0.5 + Math.random() * 0.5
          const duration = 15 + Math.random() * 20

          return (
            <div
              key={i}
              className={`absolute ${isCircle ? "rounded-full" : "rounded-lg"} bg-white/10 backdrop-blur-sm`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateZ(${depth * 100}px)`,
                animation: `float-3d ${duration}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
            />
          )
        })}
      </div>

      <div className="w-full md:w-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-primary font-medium text-lg"
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 tracking-wide pb-1 leading-tight"
            >
              Kuldeep Singh
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mt-4 h-14"
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Software Developer",
                  1000,
                  "React Specialist",
                  1000,
                  "UI/UX Enthusiast",
                  1000,
                  "Full-Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-xl md:text-2xl font-medium"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              className="rounded-full px-6 btn-hover-effect"
              onClick={() => window.open("/assets/Kuldeep-CV.pdf")}
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
            <Button variant="outline" className="rounded-full px-6 btn-hover-effect" asChild>
              <Link href="#contact">Contact Info</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4 pt-4"
          >
            <Link
              href="https://www.linkedin.com/in/kuldeep-singh12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Kuldeep1462"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[400px] md:h-[500px] relative"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Animated circles */}
          <div
            className="absolute rounded-full bg-blue-500/10 w-[300px] h-[300px] animate-pulse"
            style={{
              transform: `translate(${(mousePosition.x - 300) / 20}px, ${(mousePosition.y - 300) / 20}px)`,
            }}
          ></div>
          <div
            className="absolute rounded-full bg-purple-500/10 w-[350px] h-[350px] animate-pulse"
            style={{
              animationDelay: "0.5s",
              transform: `translate(${(mousePosition.x - 300) / 30}px, ${(mousePosition.y - 300) / 30}px)`,
            }}
          ></div>

          {/* Profile image with floating animation */}
          <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl floating">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-pic.jpg-sTBRtT7WuunWV6cNK7HstdqSEwQfoi.jpeg"
              alt="Kuldeep Singh"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>

          {/* Tech icons floating around */}
          <div
            className="absolute top-0 right-0 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg floating"
            style={{ animationDelay: "0.2s" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M18 20.7c-.6.3-2.2.8-4 .8-3.8 0-7-1.5-7-4V4.3c0-2.1 3.1-3.3 7-3.3 3.8 0 7 1.1 7 3.3V17c0 1.7-1.3 3-3 3.7z"></path>
              <path d="M18 12c-.6.3-2.2.8-4 .8-3.8 0-7-1.5-7-4"></path>
              <path d="M18 6.7c-.6.3-2.2.8-4 .8-3.8 0-7-1.5-7-4"></path>
            </svg>
          </div>
          <div
            className="absolute bottom-10 left-0 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg floating"
            style={{ animationDelay: "0.5s" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-500"
            >
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
              <path d="M7 7h.01"></path>
            </svg>
          </div>
          <div
            className="absolute top-1/2 left-0 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg floating"
            style={{ animationDelay: "0.8s" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <Link href="#about">
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
