"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
  glitchInterval?: number
  glitchDuration?: number
  glitchIntensity?: number
}

export default function GlitchText({
  text,
  className = "",
  glitchInterval = 5000,
  glitchDuration = 1000,
  glitchIntensity = 0.3,
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchedText, setGlitchedText] = useState(text)

  // Characters to use for glitch effect
  const glitchChars = "!<>-_\\/[]{}—=+*^?#________"

  useEffect(() => {
    // Start the glitch cycle
    const intervalId = setInterval(() => {
      setIsGlitching(true)

      // End the glitch after duration
      setTimeout(() => {
        setIsGlitching(false)
        setGlitchedText(text)
      }, glitchDuration)
    }, glitchInterval)

    return () => clearInterval(intervalId)
  }, [text, glitchDuration, glitchInterval])

  useEffect(() => {
    if (!isGlitching) return

    let glitchFrames = 0
    const maxGlitchFrames = 10

    // Create glitch animation frames
    const glitchAnimationId = setInterval(() => {
      if (glitchFrames >= maxGlitchFrames) {
        clearInterval(glitchAnimationId)
        return
      }

      // Create glitched version of text
      const newText = text
        .split("")
        .map((char, idx) => {
          // Randomly decide if this character should glitch
          if (Math.random() < glitchIntensity) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          }
          return char
        })
        .join("")

      setGlitchedText(newText)
      glitchFrames++
    }, glitchDuration / maxGlitchFrames)

    return () => clearInterval(glitchAnimationId)
  }, [isGlitching, text, glitchIntensity, glitchDuration])

  return (
    <span className={`relative inline-block ${className}`}>
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-teal-400 opacity-70"
            animate={{
              x: [0, -2, 0, 2, 0],
              y: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: glitchDuration / 200,
              repeatType: "loop",
            }}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
          >
            {glitchedText}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-teal-200 opacity-70"
            animate={{
              x: [0, 2, 0, -2, 0],
              y: [0, -1, 0, 1, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: glitchDuration / 300,
              repeatType: "loop",
            }}
            style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)" }}
          >
            {glitchedText}
          </motion.span>
        </>
      )}
      <span className={isGlitching ? "opacity-90" : "opacity-100"}>{glitchedText}</span>
    </span>
  )
}

