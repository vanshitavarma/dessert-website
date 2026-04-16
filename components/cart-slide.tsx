"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, Plus, Minus, ShoppingBag, Trash2, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function CartSlide() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart()

  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsCheckingOut(false)
    setCheckoutSuccess(true)
    clearCart()
    // Reset success state and close cart after delay
    setTimeout(() => {
      setCheckoutSuccess(false)
      setIsCartOpen(false)
    }, 2500)
  }

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isCartOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] glass-dark z-50 shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-white/80" />
              <h2 className="font-serif text-xl text-white">Your Cart</h2>
              {totalItems > 0 && (
                <span className="px-2.5 py-0.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-white/80" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {checkoutSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-white text-2xl font-serif mb-2">Thank You!</h3>
                <p className="text-white/60">
                  Your order has been placed successfully.
                </p>
                <p className="text-white/40 text-sm mt-2">
                  We&apos;ll send you a confirmation email shortly.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-white/20 mb-4" />
                <p className="text-white/60 text-lg">Your cart is empty</p>
                <p className="text-white/40 text-sm mt-2">
                  Add some delicious treats to get started
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-white/5 rounded-xl animate-scale-in"
                  >
                    {/* Image */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">
                        {item.name}
                      </h3>
                      <p className="text-accent text-sm mt-1">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center gap-2 bg-white/10 rounded-full">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5 text-white/80" />
                          </button>
                          <span className="text-white text-sm font-medium min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5 text-white/80" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 hover:bg-red-500/20 rounded-full transition-colors group"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 text-white/40 group-hover:text-red-400" />
                        </button>
                      </div>
                    </div>

                    {/* Line Total */}
                    <div className="text-right">
                      <p className="text-white font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between text-white">
                <span className="text-white/60">Subtotal</span>
                <span className="font-serif text-2xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-white/40 text-sm">
                Shipping and taxes calculated at checkout
              </p>
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut || checkoutSuccess}
                className="w-full py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </>
                ) : checkoutSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    Order Placed!
                  </>
                ) : (
                  "Checkout"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
