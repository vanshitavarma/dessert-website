"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/images/hero-dessert.jpg"
          alt="Luxury desserts"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-sm tracking-[0.4em] uppercase text-accent font-medium mb-6">
            Est. 2024 · Paris
          </span>
        </div>

        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.1] mb-8 text-balance transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Indulge in
          <br />
          <span className="text-primary italic">Edible Art</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Handcrafted desserts designed to delight every sense. Each creation is
          a masterpiece of flavor, texture, and visual elegance.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#menu"
            className="group px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Menu
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </a>
          <a
            href="#collection"
            className="px-8 py-4 glass text-foreground font-medium tracking-wide rounded-full hover:bg-secondary/80 transition-all duration-300"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#collection"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-scroll-indicator" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-secondary/30 blur-3xl" />
    </section>
  )
}
