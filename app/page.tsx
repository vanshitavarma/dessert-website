import { CartProvider } from "@/lib/cart-context"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SignatureCollection } from "@/components/signature-collection"
import { InteractiveMenu } from "@/components/interactive-menu"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CartSlide } from "@/components/cart-slide"

export default function Home() {
  return (
    <CartProvider>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <SignatureCollection />
        <InteractiveMenu />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <CartSlide />
    </CartProvider>
  )
}
