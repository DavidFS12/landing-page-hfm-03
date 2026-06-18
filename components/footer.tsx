"use client";

import { useState, useEffect } from "react";
import { Facebook, Globe, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import logo_blue from "@/public/logo-blue.jpg";
import logo_yellow from "@/public/logo-white.jpg";

export function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <footer className="bg-[#0142A0] pt-16 pb-8 text-white" id="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <Image
                  src={logo_yellow}
                  alt="Logo"
                  height={50}
                />
              </a>
            </div>
            <p className="text-white/80 leading-relaxed">
              Especialistas en construcción de edificios y departamentos premium en Arequipa, con más de 15 años de experiencia y proyectos emblemáticos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-[#FFEA00] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-[#FFEA00] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-white/80 hover:text-[#FFEA00] transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-white/80 hover:text-[#FFEA00] transition-colors">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#FFEA00]" />
                <span className="text-white/80">info@constructora.pe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#FFEA00]" />
                <span className="text-white/80">+51 999 999 999</span>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="mt-1 h-5 w-5 shrink-0 text-[#FFEA00]" />
                <span className="text-white/80">Av. Ejército 1234, Cayma, Arequipa</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center bg-white/10 hover:bg-[#FFEA00] hover:text-brand rounded-full transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center bg-white/10 hover:bg-[#FFEA00] hover:text-brand rounded-full transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center bg-white/10 hover:bg-[#FFEA00] hover:text-brand rounded-full transition-all hover:scale-110"
                aria-label="Globe"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-white/20 pt-8 border-t text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Constructora AQP. Todos los derechos reservados.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-[#FFEA00] transition-colors">
              Política de Privacidad
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#FFEA00] transition-colors">
              Términos y Condiciones
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#FFEA00] transition-colors">
              Libro de Reclamaciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
