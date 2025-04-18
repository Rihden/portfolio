"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Figma } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedGradientBorder from "./animated-gradient-border";

const projects = [
  {
    title: "Fanticket platform",
    description:
      "A responsive platform for buying and selling event tickets between fans. I was mostly involved with the frontend. A highlight would be the implementation of a custom responsive steps slider that showcases process of using chatbot to buy and sell in detail. The design didn't have mobile version, so I had to come up with a solution to make it responsive.",
    image: "/fanticket-preview.png",
    tags: [
      "TypeScript",
      "Tailwind CSS",
      "Jinja",
      "Flask",
      "PostgreSQL",
      "Webpack",
    ],
    demoLink: "https://fantiket-preview.vercel.app/",
    design: "/design/fanticket",
  },
  {
    title: "PDF generator of VIN car report for MotorIQ",
    description:
      "A script used in MotorIQ app to to generate PDF files for cars VIN reports based on a figma design. The script generates pages and sections dynamically, supports Metric/imperial units of measure, EN/FR/IT/DE/ES languages, modular code using reusable snippets, generates charts using chart.js and leverages pdfmonkey.io's API and webhooks.",
    image: "/motor-iq preview.png",
    tags: ["Liquid", "TailwindCSS", "Pdfmonkey.io", "Chart.js", "Webhooks"],
    demoLink: "/motor-iq preview.pdf",
    githubLink: "https://github.com/Rihden/pdf-generator-motoriq",
    design: "/design/motor-iq",
  },

  {
    title: "Bioflorin website",
    description:
      "A website for Bioflorin® owned by Swiss pharmaceutical company Sanofi-Aventis, I worked on this project as a webdev contractor for the german company Illume.de. The website is built with Next.js, TypeScript, Tailwind CSS, and uses i18n for internationalization.",
    image: "/bioflorin preview.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    demoLink: "https://www.bioflorin.ch/de/",
  },
  {
    title: "One day Chess challenge",
    description:
      "This project is a fully functional chess application that I challenged myself to build in just one day, completely from scratch. All chess logic, move validation, and game mechanics were implemented without consulting external resources or Googling solutions.",
    image: "/chess-preview.png",
    tags: ["JavaScript", "React", "CSS"],
    demoLink: "https://chess-react-five.vercel.app/",
    githubLink: "https://github.com/Rihden/chess-react",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work showcasing both traditional
            development and AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AnimatedGradientBorder
                borderWidth={2}
                animationDuration={10 + index * 2}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group"
                        asChild
                      >
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      {project.design && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="group"
                          asChild
                        >
                          <Link href={project.design}>
                            <Figma className="mr-2 h-4 w-4" />
                            Design
                          </Link>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="group"
                          asChild
                        >
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedGradientBorder>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
