"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  author: string
  title: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoRotateInterval?: number
  className?: string
}

export function TestimonialCarousel({ testimonials, autoRotateInterval = 5000, className }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [testimonials.length, autoRotateInterval])

  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)}>
      <div className="overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6 md:p-10">
                  <Quote className="h-10 w-10 text-clotguard-red/20 mb-4" />
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeIndex === index ? "bg-clotguard-red scale-125" : "bg-gray-300 hover:bg-gray-400",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
