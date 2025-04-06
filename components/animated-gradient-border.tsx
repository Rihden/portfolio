"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  borderWidth?: number
  borderRadius?: number
  gradientColors?: string[]
  animationDuration?: number
}

export default function AnimatedGradientBorder({
  children,
  className = "",
  borderWidth = 2,
  borderRadius = 12,
  gradientColors = ["#14b8a6", "#2dd4bf", "#5eead4", "#14b8a6"],
  animationDuration = 8,
}: AnimatedGradientBorderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const createGradient = (t: number) => {
      const gradient = ctx.createLinearGradient(
        canvas.width * Math.cos(t * 0.5) * 0.5 + canvas.width * 0.5,
        canvas.height * Math.sin(t * 0.5) * 0.5 + canvas.height * 0.5,
        canvas.width * Math.cos(t * 0.5 + Math.PI) * 0.5 + canvas.width * 0.5,
        canvas.height * Math.sin(t * 0.5 + Math.PI) * 0.5 + canvas.height * 0.5,
      )

      gradientColors.forEach((color, index) => {
        const offset = (index / (gradientColors.length - 1) + t / animationDuration) % 1
        gradient.addColorStop(offset, color)
      })

      return gradient
    }

    const drawBorder = (timestamp: number) => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate time for animation
      const t = (timestamp % (animationDuration * 1000)) / 1000

      // Create animated gradient
      const gradient = createGradient(t)

      // Draw rounded rectangle with gradient border
      ctx.strokeStyle = gradient
      ctx.lineWidth = borderWidth

      // Draw rounded rectangle
      const x = borderWidth / 2
      const y = borderWidth / 2
      const width = canvas.width - borderWidth
      const height = canvas.height - borderWidth
      const radius = borderRadius

      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.arcTo(x + width, y, x + width, y + radius, radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius)
      ctx.lineTo(x + radius, y + height)
      ctx.arcTo(x, y + height, x, y + height - radius, radius)
      ctx.lineTo(x, y + radius)
      ctx.arcTo(x, y, x + radius, y, radius)
      ctx.closePath()

      ctx.stroke()

      animationFrameId.current = requestAnimationFrame(drawBorder)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animationFrameId.current = requestAnimationFrame(drawBorder)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [borderWidth, borderRadius, gradientColors, animationDuration])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ borderRadius }}
      />
      <div className="relative z-10 w-full h-full" style={{ padding: borderWidth, borderRadius }}>
        {children}
      </div>
    </div>
  )
}

