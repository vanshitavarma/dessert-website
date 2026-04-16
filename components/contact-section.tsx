"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-3">
              Experience the
              <br />
              <span className="italic">Velvet Touch</span>
            </h2>
            <p className="text-primary-foreground/70 mt-6 max-w-md leading-relaxed">
              Step into our atelier and experience the art of patisserie
              firsthand. Every visit is a sensory journey through flavors and
              craftsmanship.
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    24 Rue de Rivoli
                    <br />
                    75004 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    +33 1 42 60 82 82
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    hello@velvetcrumbs.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    Mon - Sat: 8:00 AM - 8:00 PM
                    <br />
                    Sunday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.0164817990504!2d2.3515999!3d48.8566969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e18e23b4ea1%3A0x8db4e3e7e3f5d6e0!2sRue%20de%20Rivoli%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Velvet Crumbs location"
              />
            </div>
            
            {/* Map Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-xl">
              <p className="font-serif text-xl text-foreground">
                Velvet Crumbs Atelier
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Premium desserts await
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
