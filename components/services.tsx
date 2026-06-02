"use client";

import { motion } from "motion/react";
import { Building2, Shield, CheckCircle, Ruler, Hammer, Award } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: Building2,
    title: "Edificios Residenciales",
    description: "Desarrollamos proyectos arquitectónicos modernos que combinan diseño, funcionalidad y sostenibilidad."
  },
  {
    icon: Shield,
    title: "Seguridad Estructural",
    description: "Cumplimos con las más rigurosas normas sísmicas y de construcción para garantizar la seguridad de tu inversión."
  },
  {
    icon: CheckCircle,
    title: "Acabados Premium",
    description: "Materiales de primera calidad y atención al detalle en cada acabado para crear espacios únicos."
  },
  {
    icon: Ruler,
    title: "Diseño Arquitectónico",
    description: "Proyectos personalizados que maximizan el espacio y se integran armoniosamente con el entorno."
  },
  {
    icon: Hammer,
    title: "Ejecución Profesional",
    description: "Equipo técnico especializado con amplia experiencia en construcción de edificios multifamiliares."
  },
  {
    icon: Award,
    title: "Garantía de Calidad",
    description: "Compromiso total con la excelencia, desde la planificación hasta la entrega de llaves."
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20 lg:py-28" id="servicios">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-4xl text-[#0142A0] sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Especialistas en la ejecución de obras residenciales y edificios con los más altos estándares de calidad
          </p>
        </motion.div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-50 hover:bg-white p-8 border shadow-xl border-gray-300 rounded-2xl transition-all hover:shadow-2xl group"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center bg-[#0142A0] rounded-xl transition-all group-hover:scale-110">
                <service.icon className="h-7 w-7 text-yellow" />
              </div>
              <h3 className="mb-3 font-semibold text-[#0142A0] text-xl">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
