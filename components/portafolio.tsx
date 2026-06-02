"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import Slider from "react-slick";
import { X, ChevronLeft, ChevronRight, Ruler, MapPin } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import p1 from "@/public/project-1.jpg";
import p2 from "@/public/project-2.jpg";
import p3 from "@/public/project-3.jpg";
import p4 from "@/public/project-4.jpg";
import p5 from "@/public/project-5.jpg";
import p6 from "@/public/project-6.jpg";

interface Project {
  id: number;
  name: string;
  location: string;
  area: string;
  images: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Edificio Misti View",
    location: "Cayma, Arequipa",
    area: "120 m2",
    images: [p1,p2,p3],
    description: "Edificio de 8 pisos con vista panorámica al volcán Misti. Departamentos de 2 y 3 dormitorios con acabados premium."
  },
  {
    id: 2,
    name: "Residencial Yanahuara",
    location: "Yanahuara, Arequipa",
    area: "140 m2",
    images: [p4,p5,p6],
    description: "Complejo residencial exclusivo en el corazón de Yanahuara con áreas verdes y amenidades de lujo."
  },
  {
    id: 3,
    name: "Torre Sachaca",
    location: "Sachaca, Arequipa",
    area: "200 m2",
    images: [p3,p6,p1],
    description: "Moderna torre de 12 niveles con diseño arquitectónico vanguardista y espacios inteligentes."
  },
  {
    id: 4,
    name: "Condominio El Vallecito",
    location: "Vallecito, Arequipa",
    area: "98 m2",
    images: [p2,p6,p4],
    description: "Desarrollo residencial con amplios departamentos y diseño contemporáneo en zona estratégica."
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <section className="py-24 lg:py-32 bg-background" id="proyectos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-4xl text-[#0142A0] sm:text-5xl">
            Nuestros Proyectos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Edificios emblemáticos que transforman el paisaje urbano de Arequipa
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto mb-16 max-w-5xl overflow-hidden rounded-2xl"
        >
          <Slider {...sliderSettings}>
            {projects.map((project) => (
              <div key={project.id} className="relative">
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0142A0]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                    <h3 className="mb-2 font-bold text-3xl text-white sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="text-lg text-white/90">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Gallery Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            >
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0142A0]/0 group-hover:bg-[#0142A0]/70 flex items-center justify-center transition-all duration-300">
                <p className="translate-y-4 opacity-0 font-semibold text-center text-white text-xl group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-4">
                  Ver detalles
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-80 bg-brand/80 backdrop-blur-sm animate-fade-in flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={selectedProject.images[0]}
                alt={selectedProject.name}
                className="w-full aspect-video object-cover rounded-t-3xl"
              />
              <button
                aria-label="Cerrar"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 text-foreground grid place-items-center hover:bg-yellow"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-1.5 text-brand font-semibold">
                  <MapPin className="w-4 h-4" /> {selectedProject.location}, Arequipa
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Ruler className="w-4 h-4" /> {selectedProject.area}
                </span>
              </div>
              <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground">
                {selectedProject.name}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProject.images.map((g, i) => (
                  <Image
                    key={i}
                    src={g}
                    alt={`${selectedProject.name} ${i + 1}`}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                ))}
              </div>

              <a
                href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20el%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-yellow text-accent-foreground font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CustomPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
    >
      <ChevronLeft className="h-6 w-6 text-[#0142A0]" />
    </button>
  );
}

function CustomNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
    >
      <ChevronRight className="h-6 w-6 text-[#0142A0]" />
    </button>
  );
}
