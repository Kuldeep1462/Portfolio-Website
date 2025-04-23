"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    title: "Mastering Data Structure & Algorithms using C and C++",
    period: "Jan 2024 - Feb 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERTIFICATE-UDEMY.jpg-r1CAI7tSwpdkfg3PZW1guhBwWDLUjo.jpeg",
    pdf: "./assets/Udemy-DSA.pdf",
  },
  {
    title: "HTML, CSS, Javascript for Web Developers",
    period: "Aug 2024 - Dec 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERTIFICATE-HTML-x7SrPhWJ3z4nuEhrprJbcJSrPmiBrL.png",
    pdf: "./assets/Coursera-HTML-CSS.pdf",
  },
  {
    title: "Server side JavaScript with Node.js",
    period: "Aug 2024 - Dec 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERTIFICATE-SERVER-mY9xlenTdost1t0IUBj0Yu9e9cC1uP.png",
    pdf: "./assets/Coursera-SERVER-SIDE.pdf",
  },
  {
    title: "Developing Front-end apps with React",
    period: "May 2025 - April 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-21%20232425-YXE3Wn76wnUOj3i9yuSFTnkoBtvBRw.png",
    pdf: "./assets/React-Certificate.pdf",
  },
  {
    title: "Programming for Everybody (Getting started with Python)",
    period: "May 2025 - April 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-21%20232408-FiUPOPjZF2EWecXXGe2ir5gkEMEMdd.png",
    pdf: "./assets/Python-Certificate.pdf",
  },
]

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 px-6 md:px-12 min-h-screen flex flex-col justify-center bg-gradient-blue"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium">My Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Certificates
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border border-border hover:shadow-lg transition-shadow card-3d animated-border">
                <div className="relative h-48 w-full">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-white/80 hover:bg-white"
                        onClick={() => window.open(certificate.pdf)}
                      >
                        <FileText className="mr-2 h-4 w-4" /> View Certificate
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <p className="text-muted-foreground">{certificate.period}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full btn-hover-effect"
                    onClick={() => window.open(certificate.pdf)}
                  >
                    <FileText className="mr-2 h-4 w-4" /> View Certificate
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
