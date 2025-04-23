"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Experience from "@/components/experience"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import LoadingSpinner from "@/components/loading-spinner"
import { ThemeProvider } from "@/components/theme-provider"

// Dynamically import components with 3D elements
const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  ),
})

const Projects = dynamic(() => import("@/components/projects"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  ),
})

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
        <Toaster />
      </main>
    </ThemeProvider>
  )
}
