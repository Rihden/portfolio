"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface TerminalEffectProps {
  className?: string
}

export default function TerminalEffect({ className = "" }: TerminalEffectProps) {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const commands = [
    "npm install ai-portfolio",
    "Initializing AI developer environment...",
    "Loading skills database...",
    "import { experience } from './career'",
    "const skills = ['React', 'Next.js', 'AI', 'Prompt Engineering']",
    "function createSolution(problem) {",
    "  return AI.generate(problem, skills)",
    "}",
    "Connecting to project database...",
    "export default Portfolio",
    "Ready to collaborate!",
  ]

  useEffect(() => {
    // State for tracking animation
    let currentCommandIndex = 0
    let currentCharIndex = 0
    let isTyping = true
    let isDeleting = false
    let isPaused = false
    let timeoutId: NodeJS.Timeout | null = null

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    // Function to handle the next animation step
    const animateTerminal = () => {
      const currentCommand = commands[currentCommandIndex]

      // If we're typing
      if (isTyping) {
        // Check if we're at the beginning of a new command
        if (currentCharIndex === 0) {
          // Start with the first character
          setCurrentLine(currentCommand[0])
          currentCharIndex = 1
        } else if (currentCharIndex < currentCommand.length) {
          // Add next character
          setCurrentLine((prev) => prev + currentCommand[currentCharIndex])
          currentCharIndex++
        } else {
          // Finished typing the current command
          isTyping = false

          // Add the completed line to the lines array
          setLines((prev) => [...prev, currentCommand])
          setCurrentLine("")

          // Determine what to do next
          if (currentCommandIndex === 1 || currentCommandIndex === 2 || currentCommandIndex === 8) {
            // For specific lines, pause then delete
            isPaused = true
            timeoutId = setTimeout(() => {
              isPaused = false
              isDeleting = true
              animateTerminal()
            }, 1500)
            return
          } else {
            // Move to the next command
            currentCommandIndex++
            currentCharIndex = 0

            // If we've gone through all commands, reset
            if (currentCommandIndex >= commands.length) {
              isPaused = true
              timeoutId = setTimeout(() => {
                setLines([])
                currentCommandIndex = 0
                currentCharIndex = 0
                isTyping = true
                isPaused = false
                animateTerminal()
              }, 3000)
              return
            }

            // Continue with the next command
            isTyping = true
          }
        }
      }
      // If we're deleting
      else if (isDeleting) {
        // Remove the last line
        setLines((prev) => prev.slice(0, -1))

        // Move to the next command
        currentCommandIndex++
        currentCharIndex = 0
        isDeleting = false
        isTyping = true
      }

      // Schedule the next animation step if not paused
      if (!isPaused) {
        timeoutId = setTimeout(animateTerminal, isTyping ? 50 : 100)
      }
    }

    // Start the animation
    timeoutId = setTimeout(animateTerminal, 500)

    // Cleanup
    return () => {
      clearInterval(cursorInterval)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  // Auto-scroll to bottom when content changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [lines])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-black/80 rounded-lg border border-primary/20 shadow-lg overflow-hidden ${className}`}
    >
      <div className="flex items-center px-4 py-2 bg-black/90 border-b border-primary/20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-center flex-1 text-white/70 font-mono">developer@portfolio:~</div>
      </div>

      <div ref={containerRef} className="p-4 font-mono text-sm text-green-400 h-[300px] overflow-y-auto">
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            <span className="text-primary mr-2">$</span>
            {line}
          </div>
        ))}
        <div className="flex">
          <span className="text-primary mr-2">$</span>
          {currentLine}
          <span className={`w-2 h-4 bg-green-400 ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
        </div>
      </div>
    </motion.div>
  )
}

