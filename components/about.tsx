"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef, useState } from "react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    
    imageRef.current.style.transform = `
      perspective(1000px)
      rotateY(${x * 15}deg)
      rotateX(${-y * 15}deg)
      scale3d(1.05, 1.05, 1.05)
    `
  }

  const handleMouseLeave = () => {
    if (!imageRef.current) return
    imageRef.current.style.transform = `
      perspective(1000px)
      rotateY(0deg)
      rotateX(0deg)
      scale3d(1, 1, 1)
    `
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 md:px-12 min-h-screen flex flex-col justify-center bg-gradient-blue"
    >
      <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium">Get To Know More</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-[500px] md:h-[600px] mx-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
          >
            {/* 3D Container with gradients */}
            <div 
              ref={imageRef}
              className="relative w-full h-full transition-transform duration-300 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              {/* Gradient backgrounds for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-purple-600/10 rounded-2xl -z-10 transform rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50/10 to-purple-50/10">
                <Image
                  src={'/assets/3d-photo.jpg'}
                  alt="Kuldeep Singh"
                  fill
                  priority
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    transform: 'scale(1.02)',
                  }}
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced floating elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  opacity: isHovered ? [0.3, 0.5, 0.3] : 0.3,
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  opacity: isHovered ? [0.3, 0.5, 0.3] : 0.3,
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm border border-border card-3d">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <Code2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Experience</h3>
                  <p className="text-muted-foreground">
                    Fresher <br />
                    Frontend Development
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-border card-3d">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">B.Tech Computer Science</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
              <p>
                I am Kuldeep Singh, a passionate and driven Full-Stack Developer with expertise in JavaScript, C++, and
                a strong foundation in frontend and backend technologies. My technical skills include working with
                React, Angular, Node.js, Express.js, PHP, and databases like MySQL and MongoDB.
              </p>
              <p>
                With hands-on experience developing web applications, I have built projects such as a Gym Management
                Website, a Library Management System, and an E-commerce platform, focusing on creating user-friendly and
                efficient digital solutions. My proficiency in tools like Tailwind CSS, Bootstrap, and React Hooks
                enables me to develop scalable and optimized web applications.
              </p>
              <p>
                Currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional
                University, I am eager to leverage my skills and knowledge to contribute to innovative projects and
                solve real-world problems in the tech industry.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
