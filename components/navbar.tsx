"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Building2, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Ubicación", href: "#ubicacion" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Building2 className={`h-8 w-8 ${isScrolled ? "text-[#0142A0]" : "text-white"}`} />
            <span className={`font-bold text-xl ${isScrolled ? "text-[#0142A0]" : "text-white"}`}>
              Constructora AQP
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#0142A0]"
                    : "text-white hover:text-[#FFEA00]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#ubicacion"
              className="bg-[#FFEA00] hover:bg-[#FFEA00]/90 px-6 py-2 rounded-full font-semibold text-[#0142A0] transition-all hover:scale-105"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-[#0142A0]" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white py-4 border-gray-200 border-t"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0142A0] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#ubicacion"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mx-4 mt-2 block bg-[#FFEA00] px-4 py-3 rounded-lg text-center font-semibold text-[#0142A0]"
            >
              Contacto
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
