"use client"

import { motion } from "framer-motion"
import { Code, Sparkles, Zap, Terminal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import TerminalEffect from "./terminal-effect"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I bridge the gap between traditional development and AI-powered solutions, creating innovative applications
            that leverage the best of both worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-none bg-gradient-to-br from-card/50 to-card shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Developer</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  With over 5 years of experience in full-stack development, I specialize in building robust, scalable
                  applications using modern technologies like React, Next.js, Node.js, and more. I'm passionate about
                  clean code, performance optimization, and creating exceptional user experiences.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL"].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <Terminal className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-none bg-gradient-to-br from-card/50 to-card shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">AI Prompter</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  I leverage the power of AI to accelerate development and create innovative solutions. By crafting
                  precise prompts and understanding AI capabilities, I can rapidly prototype, generate code, and solve
                  complex problems that would traditionally take much longer to implement.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Prompt Engineering",
                    "GPT-4",
                    "AI Integration",
                    "Rapid Prototyping",
                    "Content Generation",
                    "Automation",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto"
      >
        <TerminalEffect className="w-full" />
      </motion.div>
    </section>
  )
}

