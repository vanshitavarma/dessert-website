"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bakery-interior.jpg"
                alt="Velvet Crumbs Patisserie Interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 md:right-8 glass p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="font-serif text-2xl text-foreground italic">
                &ldquo;Where passion meets precision&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — Chef Marie Laurent
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 leading-tight">
              Every Dessert is
              <br />
              <span className="text-primary italic">a Piece of Art</span>
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in the heart of Paris, Velvet Crumbs was born from a
                simple belief: that desserts should be more than just sweet—they
                should be memorable experiences that engage all the senses.
              </p>
              <p>
                Our atelier combines time-honored French techniques with
                innovative flavors and stunning visual presentations. Each
                creation begins with the finest ingredients, sourced from
                artisan producers who share our commitment to excellence.
              </p>
              <p>
                From the delicate layers of our signature macarons to the rich,
                velvety depths of our chocolate tarts, every item that leaves
                our kitchen carries with it a piece of our passion.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary font-semibold">
                  15+
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Years of Craft
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary font-semibold">
                  50K
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Happy Guests
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-primary font-semibold">
                  200+
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Unique Creations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
