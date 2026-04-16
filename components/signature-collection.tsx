"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const signatureItems = [
  {
    id: "sig-1",
    name: "Rose Petal Macarons",
    price: 28,
    image: "/images/macaron.jpg",
    description: "Delicate French macarons infused with Persian rose essence",
  },
  {
    id: "sig-2",
    name: "Velvet Chocolate Tart",
    price: 45,
    image: "/images/chocolate-tart.jpg",
    description: "Single-origin 70% dark chocolate with salted caramel heart",
  },
  {
    id: "sig-3",
    name: "Golden Éclair",
    price: 18,
    image: "/images/eclair.jpg",
    description: "Choux pastry with Madagascar vanilla cream and gold leaf",
  },
  {
    id: "sig-4",
    name: "Artisan Croissant",
    price: 12,
    image: "/images/croissant.jpg",
    description: "48-hour fermented dough with French butter",
  },
  {
    id: "sig-5",
    name: "Pistachio Gelato",
    price: 16,
    image: "/images/gelato.jpg",
    description: "Sicilian pistachios churned fresh daily",
  },
]

export function SignatureCollection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { addItem, setIsCartOpen } = useCart()
  const [addedId, setAddedId] = useState<string | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleAddToCart = (item: typeof signatureItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
    setAddedId(item.id)
    setTimeout(() => setAddedId(null), 600)
    setTimeout(() => setIsCartOpen(true), 300)
  }

  return (
    <section id="collection" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 transform origin-top-right" />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
                Featured
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-3 text-balance">
                Signature Collection
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
                Our most beloved creations, each one a testament to the art of
                French patisserie.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full border border-border hover:bg-secondary/50 transition-colors group"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-full border border-border hover:bg-secondary/50 transition-colors group"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] pb-8"
        >
          {signatureItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[320px] md:w-[380px] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl glass shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`absolute bottom-4 right-4 p-3 rounded-full bg-card/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${
                      addedId === item.id ? "animate-bounce-subtle" : ""
                    }`}
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-lg font-medium text-accent">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
