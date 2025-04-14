"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimatedGradientBorder from "./animated-gradient-border";

const projects = [
  {
    title: "Fanticket platform",
    description:
      "A responsive platform for buying and selling event tickets between fans. I was mostly involved with the frontend, a little bit of the backend. A highlight would be the implementation of a custom responsive steps slider that showcases process of using chatbot to buy and sell in detail.",
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
    githubLink: "#",
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
  {
    title: "Prompt Marketplace",
    description:
      "A platform for sharing and discovering effective AI prompts across different domains. Users can rate, comment, and build upon existing prompts.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "GraphQL"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "A tool that helps content creators generate blog posts, social media content, and marketing copy using AI. Includes SEO optimization and tone customization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
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
          <Button variant="outline" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
