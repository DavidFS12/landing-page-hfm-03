"use client";

import { motion, useInView } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useRef } from "react";

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20 lg:py-28" id="ubicacion">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-4xl text-[#0142A0] sm:text-5xl">
            Ubicación y Contacto
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Presencia en las mejores zonas de Arequipa: Cayma, Yanahuara, Sachaca y más
          </p>
        </motion.div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[#0142A0] rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-[#0142A0] text-xl">Oficina Principal</h3>
              <p className="text-gray-700">
                Av. Ejército 1234, Cayma<br />
                Arequipa, Perú
              </p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[#0142A0] rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-[#0142A0] text-xl">Teléfono</h3>
              <p className="text-gray-700">
                +51 999 999 999<br />
                +51 (054) 123 456
              </p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[#0142A0] rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-[#0142A0] text-xl">Correo Electrónico</h3>
              <p className="text-gray-700">
                info@constructora.pe<br />
                ventas@constructora.pe
              </p>
            </div>

            <div className="bg-[#0142A0] p-6 rounded-xl text-white">
              <h3 className="mb-3 font-semibold text-xl">Zonas de Cobertura</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-[#FFEA00] rounded-full" />
                  Cayma
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-[#FFEA00] rounded-full" />
                  Yanahuara
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-[#FFEA00] rounded-full" />
                  Sachaca
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-[#FFEA00] rounded-full" />
                  Vallecito
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-[#FFEA00] rounded-full" />
                  Centro de Arequipa
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[500px] overflow-hidden rounded-2xl shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3425821633494!2d-71.53754248509817!3d-16.39889408867849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a55496cf727%3A0x506f85e4327c32f5!2sArequipa%2C%20Peru!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
