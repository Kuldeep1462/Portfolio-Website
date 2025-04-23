"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Code } from "lucide-react"
import { useState } from "react"

const frontendSkills = [
  { name: "HTML", level: "Intermediate", progress: 75 },
  { name: "CSS", level: "Intermediate", progress: 70 },
  { name: "JavaScript", level: "Basic", progress: 60 },
  { name: "TypeScript", level: "Basic", progress: 50 },
  { name: "React", level: "Intermediate", progress: 75 },
  { name: "Angular", level: "Basic", progress: 55 },
  { name: "Tailwind CSS", level: "Intermediate", progress: 80 },
]

const backendSkills = [
  { name: "Node.js", level: "Intermediate", progress: 70 },
  { name: "Express.js", level: "Intermediate", progress: 65 },
  { name: "MongoDB", level: "Basic", progress: 55 },
  { name: "MySQL", level: "Basic", progress: 60 },
  { name: "PostgreSQL", level: "Basic", progress: 50 },
  { name: "PHP", level: "Basic", progress: 45 },
  { name: "Git", level: "Intermediate", progress: 75 },
  { name: "RESTful APIs", level: "Intermediate", progress: 70 },
]

const programmingLanguages = [
  { name: "C++", level: "Intermediate", progress: 75 },
  { name: "Java", level: "Intermediate", progress: 70 },
  { name: "Python", level: "Basic", progress: 50 },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 min-h-screen flex flex-col justify-center bg-gradient-purple"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium">Explore My</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Experience
          </h2>
        </motion.div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setActiveTab("frontend")}
              className={`px-4 py-3 text-sm font-medium rounded-l-lg transition-all ${
                activeTab === "frontend"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Frontend
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("backend")}
              className={`px-4 py-3 text-sm font-medium transition-all ${
                activeTab === "backend"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Backend
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("programming")}
              className={`px-4 py-3 text-sm font-medium rounded-r-lg transition-all ${
                activeTab === "programming"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Programming Languages
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border border-border overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {activeTab === "frontend"
                  ? "Frontend Development"
                  : activeTab === "backend"
                    ? "Backend Development"
                    : "Programming Languages"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(activeTab === "frontend"
                  ? frontendSkills
                  : activeTab === "backend"
                    ? backendSkills
                    : programmingLanguages
                ).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all card-3d"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {activeTab === "programming" ? (
                          <Code className="h-5 w-5 text-primary" />
                        ) : (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        )}
                        <h4 className="font-medium">{skill.name}</h4>
                      </div>
                      <Badge variant={skill.level === "Intermediate" ? "default" : "outline"}>{skill.level}</Badge>
                    </div>
                    <div className="skill-progress mt-2">
                      <motion.div
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
