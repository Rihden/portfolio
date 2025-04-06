"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface StreamLine {
  x: number
  y: number
  length: number
  speed: number
  width: number
  opacity: number
  text: string
  textPosition: number
  active: boolean
  delay: number
}

export default function CodeStreamBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamLines = useRef<StreamLine[]>([])
  const animationFrameId = useRef<number | null>(null)
  const frameCount = useRef(0)
  const lastFrameTime = useRef(0)
  const [isInitialized, setIsInitialized] = useState(false)

  // Use intersection observer to only animate when in view
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  // AI/code-related terms for the streams
  const codeTerms = [
    "function",
    "const",
    "let",
    "async",
    "await",
    "import",
    "export",
    "return",
    "class",
    "interface",
    "AI",
    "GPT",
    "model",
    "prompt",
    "token",
    "embedding",
    "vector",
    "neural",
    "transform",
    "generate",
    "<div>",
    "<span>",
    "<code>",
    "useState",
    "useEffect",
    "tailwind",
    "component",
    "props",
    "state",
    "render",
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas size to match window size
    const resizeCanvas = () => {
      // Get the window dimensions
      const width = window.innerWidth
      const height = window.innerHeight

      // Set the canvas dimensions to match the window
      canvas.width = width
      canvas.height = height

      // Set the CSS dimensions to ensure it covers the full viewport
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      if (!isInitialized) {
        initStreamLines(width, height)
        setIsInitialized(true)
      }
    }

    const getRandomCodeTerm = () => {
      return codeTerms[Math.floor(Math.random() * codeTerms.length)]
    }

    const initStreamLines = (width: number, height: number) => {
      streamLines.current = []
      // Scale the number of lines based on screen width, with a reasonable minimum and maximum
      const lineCount = Math.min(Math.max(Math.floor(width / 40), 20), 80)

      for (let i = 0; i < lineCount; i++) {
        const x = Math.random() * width
        const length = Math.random() * 150 + 50
        const delay = Math.random() * 200
        const opacity = Math.random() * 0.5 + 0.1

        streamLines.current.push({
          x,
          y: -length - Math.random() * height,
          length,
          speed: Math.random() * 1.5 + 0.5,
          width: Math.random() * 2 + 0.5,
          opacity,
          text: getRandomCodeTerm(),
          textPosition: 0,
          active: true,
          delay,
        })
      }
    }

    const animate = (timestamp: number) => {
      // Skip frames to maintain performance (aim for ~30fps)
      const elapsed = timestamp - lastFrameTime.current
      if (elapsed < 33) {
        // ~30fps
        animationFrameId.current = requestAnimationFrame(animate)
        return
      }

      lastFrameTime.current = timestamp
      frameCount.current++

      // Only clear and redraw if in view
      if (inView) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Add new stream lines occasionally
        if (frameCount.current % 60 === 0) {
          const x = Math.random() * canvas.width
          const length = Math.random() * 150 + 50
          const opacity = Math.random() * 0.5 + 0.1

          streamLines.current.push({
            x,
            y: -length,
            length,
            speed: Math.random() * 1.5 + 0.5,
            width: Math.random() * 2 + 0.5,
            opacity,
            text: getRandomCodeTerm(),
            textPosition: 0,
            active: true,
            delay: 0,
          })

          // Keep array size manageable
          if (streamLines.current.length > 100) {
            streamLines.current.shift()
          }
        }

        // Process all lines but with optimized rendering
        streamLines.current.forEach((line) => {
          // Skip if still in delay
          if (line.delay > 0) {
            line.delay--
            return
          }

          // Update position
          line.y += line.speed

          // Reset if off screen
          if (line.y > canvas.height) {
            line.y = -line.length
            line.x = Math.random() * canvas.width
            line.text = getRandomCodeTerm()
            line.textPosition = 0
          }

          // Draw stream line
          const gradient = ctx.createLinearGradient(line.x, line.y, line.x, line.y + line.length)

          // Use rgba for all color stops with teal color
          const primaryColor = `rgba(20, 184, 166, ${line.opacity})`
          const transparentColor = "rgba(20, 184, 166, 0)"

          gradient.addColorStop(0, transparentColor)
          gradient.addColorStop(0.2, primaryColor)
          gradient.addColorStop(0.8, primaryColor)
          gradient.addColorStop(1, transparentColor)

          ctx.beginPath()
          ctx.strokeStyle = gradient
          ctx.lineWidth = line.width
          ctx.moveTo(line.x, line.y)
          ctx.lineTo(line.x, line.y + line.length)
          ctx.stroke()

          // Draw text along the line, but only update every few frames
          if (frameCount.current % 5 === 0) {
            line.textPosition = (line.textPosition + 1) % line.text.length
          }

          // Only draw text if it's visible
          const textY = line.y + line.length / 2
          if (textY > 0 && textY < canvas.height) {
            ctx.font = "10px monospace"
            ctx.textAlign = "center"

            // Draw the text character by character with a glowing effect
            // Limit the number of characters for performance
            const maxChars = Math.min(line.text.length, 8)

            for (let i = 0; i < maxChars; i++) {
              const charIndex = (line.textPosition + i) % line.text.length
              const char = line.text[charIndex]
              const charY = textY + i * 10 - maxChars * 5

              if (charY > 0 && charY < canvas.height) {
                // Glow effect
                if (i === 0) {
                  ctx.shadowColor = `rgba(20, 184, 166, ${line.opacity * 2})`
                  ctx.shadowBlur = 10
                  ctx.fillStyle = "#ffffff"
                } else {
                  ctx.shadowBlur = 0
                  ctx.fillStyle = `rgba(20, 184, 166, ${line.opacity * 2})`
                }

                ctx.fillText(char, line.x, charY)
              }
            }

            ctx.shadowBlur = 0
          }
        })
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Handle resize with debounce for performance
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 200)
    }

    window.addEventListener("resize", handleResize)
    resizeCanvas()
    lastFrameTime.current = performance.now()
    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
        animationFrameId.current = null
      }
      // Clear references to prevent memory leaks
      streamLines.current = []
    }
  }, [inView, isInitialized])

  return (
    <div ref={inViewRef} className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  )
}

