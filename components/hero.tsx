"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";
import hero from "@/public/hero-building.jpg"
import Image from "next/image";

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/51999999999?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20proyectos", "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Edificio moderno"
          fill
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0142A0]/90 via-[#0142A0]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 font-bold text-5xl text-white sm:text-6xl lg:text-7xl leading-tight">
              Construimos el futuro residencial de Arequipa
            </h1>
            <p className="mb-8 text-lg text-white/90 sm:text-xl lg:text-2xl">
              Edificios modernos y departamentos premium con los más altos estándares de calidad y diseño arquitectónico.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-[#FFEA00] px-8 py-4 rounded-full font-semibold text-[#0142A0] text-lg shadow-2xl transition-all hover:shadow-[#FFEA00]/50"
            >
              <Phone className="h-6 w-6" />
              Cotiza por WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/80">Desliza para descubrir</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-5 border-2 border-white/50 rounded-full flex items-start justify-center p-1"
          >
            <div className="h-2 w-1 bg-white/80 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
