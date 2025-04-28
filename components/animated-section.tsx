"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold,
  rootMargin,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000"
    const delayClass = delay ? `delay-${delay * 100}` : ""

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-10"
        case "fade-in":
          return "opacity-0"
        case "slide-left":
          return "opacity-0 -translate-x-10"
        case "slide-right":
          return "opacity-0 translate-x-10"
        case "zoom-in":
          return "opacity-0 scale-95"
        default:
          return "opacity-0"
      }
    }

    return "opacity-100 translate-y-0 translate-x-0 scale-100"
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), baseClasses, className, `delay-${delay * 100}`)}>
      {children}
    </div>
  )
}

const baseClasses = "transition-all duration-1000"
