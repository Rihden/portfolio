"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "Frontend Development", percentage: 95 },
  { name: "Backend Development", percentage: 85 },
  { name: "AI Prompt Engineering", percentage: 90 },
  { name: "UI/UX Design", percentage: 80 },
  { name: "DevOps", percentage: 75 },
  { name: "Mobile Development", percentage: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A combination of technical expertise and AI capabilities that allow me to deliver high-quality solutions
            efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-primary">{skill.percentage}%</span>
              </div>
              <Progress value={skill.percentage} className="h-2" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
        >
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "GraphQL",
            "AWS",
            "Docker",
            "Git",
            "Figma",
            "Tailwind",
          ].map((tech, index) => (
            <div key={tech} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center shadow-md mb-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">{tech.charAt(0)}</span>
                </div>
              </div>
              <span className="text-sm text-center">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

