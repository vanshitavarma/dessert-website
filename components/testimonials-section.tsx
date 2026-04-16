"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophie Chen",
    role: "Food Blogger",
    content:
      "The macarons from Velvet Crumbs are simply divine. Each bite transports you to a Parisian café. The attention to detail is unmatched.",
    rating: 5,
    image: "SC",
  },
  {
    id: 2,
    name: "James Morrison",
    role: "Executive Chef",
    content:
      "As a fellow pastry professional, I can say that Velvet Crumbs represents the pinnacle of artisanal dessert making. Truly exceptional quality.",
    rating: 5,
    image: "JM",
  },
  {
    id: 3,
    name: "Isabella Romano",
    role: "Event Planner",
    content:
      "Every wedding and event I plan, I recommend Velvet Crumbs. Their cakes are not just delicious—they're showstoppers that guests remember.",
    rating: 5,
    image: "IR",
  },
  {
    id: 4,
    name: "David Laurent",
    role: "Restaurant Critic",
    content:
      "In all my years reviewing patisseries, Velvet Crumbs stands out. Their chocolate tart is worth the pilgrimage alone.",
    rating: 5,
    image: "DL",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
            Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-3">
            What People Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass p-8 rounded-2xl transition-all duration-500 ${
                index === activeIndex
                  ? "ring-2 ring-accent/50 shadow-xl"
                  : "hover:shadow-lg"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-accent"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
