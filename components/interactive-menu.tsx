"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const categories = [
  { id: "cakes", label: "Cakes" },
  { id: "pastries", label: "Pastries" },
  { id: "gelato", label: "Gelato" },
  { id: "beverages", label: "Beverages" },
]

const menuItems: Record<string, Array<{
  id: string
  name: string
  price: number
  image: string
  description: string
}>> = {
  cakes: [
    {
      id: "cake-1",
      name: "Champagne Layer Cake",
      price: 85,
      image: "/images/cake.jpg",
      description: "Light sponge infused with Moët, elderflower buttercream",
    },
    {
      id: "cake-2",
      name: "Opera Cake",
      price: 72,
      image: "/images/chocolate-tart.jpg",
      description: "Classic French layers of almond sponge, coffee, chocolate",
    },
    {
      id: "cake-3",
      name: "Mille-Feuille",
      price: 42,
      image: "/images/gallery-6.jpg",
      description: "Caramelized puff pastry, vanilla diplomat cream",
    },
    {
      id: "cake-4",
      name: "Fruit Tart Royale",
      price: 58,
      image: "/images/gallery-4.jpg",
      description: "Seasonal fruits, pastry cream, almond frangipane",
    },
  ],
  pastries: [
    {
      id: "pastry-1",
      name: "Croissant au Beurre",
      price: 8,
      image: "/images/croissant.jpg",
      description: "Classic butter croissant, 48-hour ferment",
    },
    {
      id: "pastry-2",
      name: "Pain au Chocolat",
      price: 9,
      image: "/images/eclair.jpg",
      description: "Valrhona chocolate batons, laminated dough",
    },
    {
      id: "pastry-3",
      name: "Kouign-Amann",
      price: 10,
      image: "/images/gallery-1.jpg",
      description: "Caramelized Breton pastry, sea salt flakes",
    },
    {
      id: "pastry-4",
      name: "Macaron Box (12pc)",
      price: 48,
      image: "/images/macaron.jpg",
      description: "Assorted seasonal flavors",
    },
  ],
  gelato: [
    {
      id: "gelato-1",
      name: "Sicilian Pistachio",
      price: 14,
      image: "/images/gelato.jpg",
      description: "Bronte pistachios, pure cream base",
    },
    {
      id: "gelato-2",
      name: "Stracciatella",
      price: 12,
      image: "/images/gelato.jpg",
      description: "Fior di latte with chocolate shards",
    },
    {
      id: "gelato-3",
      name: "Salted Caramel",
      price: 12,
      image: "/images/gelato.jpg",
      description: "House-made caramel, Guérande salt",
    },
    {
      id: "gelato-4",
      name: "Seasonal Sorbet",
      price: 11,
      image: "/images/gelato.jpg",
      description: "Fresh fruit, dairy-free",
    },
  ],
  beverages: [
    {
      id: "bev-1",
      name: "Signature Hot Chocolate",
      price: 9,
      image: "/images/gallery-3.jpg",
      description: "Valrhona 70%, house-made marshmallow",
    },
    {
      id: "bev-2",
      name: "Matcha Latte",
      price: 8,
      image: "/images/gallery-2.jpg",
      description: "Ceremonial grade, oat milk option",
    },
    {
      id: "bev-3",
      name: "Espresso",
      price: 5,
      image: "/images/gallery-5.jpg",
      description: "Single origin Ethiopian roast",
    },
    {
      id: "bev-4",
      name: "Champagne by Glass",
      price: 22,
      image: "/images/gallery-2.jpg",
      description: "Veuve Clicquot Yellow Label",
    },
  ],
}

export function InteractiveMenu() {
  const [activeCategory, setActiveCategory] = useState("cakes")
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())
  const { addItem } = useCart()

  const handleAddToCart = (item: typeof menuItems.cakes[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
    setAddedItems((prev) => new Set(prev).add(item.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev)
        next.delete(item.id)
        return next
      })
    }, 1500)
  }

  return (
    <section id="menu" className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
            Explore
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-3">
            Our Menu
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Every item crafted with intention, sourced with care, presented with
            love.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card hover:bg-secondary/50 text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={item.id}
              className="group glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative w-full sm:w-40 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-lg font-semibold text-accent whitespace-nowrap">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={addedItems.has(item.id)}
                    className={`mt-4 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      addedItems.has(item.id)
                        ? "bg-green-100 text-green-700"
                        : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {addedItems.has(item.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
