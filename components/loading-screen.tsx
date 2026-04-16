"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo Animation */}
      <div className="relative">
        <h1 className="font-serif text-4xl md:text-6xl font-semibold text-primary">
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            V
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "50ms" }}
          >
            e
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            l
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            v
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            e
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "250ms" }}
          >
            t
          </span>
          <span className="inline-block mx-3" />
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "350ms" }}
          >
            C
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            r
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "450ms" }}
          >
            u
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            m
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "550ms" }}
          >
            b
          </span>
          <span
            className="inline-block animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            s
          </span>
        </h1>
        <p
          className="text-center text-sm tracking-[0.4em] uppercase text-muted-foreground mt-4 animate-fade-in-up"
          style={{ animationDelay: "700ms" }}
        >
          Patisserie Atelier
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mt-12 w-48">
        <div className="h-0.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
