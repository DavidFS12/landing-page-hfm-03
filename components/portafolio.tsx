"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import Slider from "react-slick";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  location: string;
  image: string;
  images: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Edificio Misti View",
    location: "Cayma, Arequipa",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop"
    ],
    description: "Edificio de 8 pisos con vista panorámica al volcán Misti. Departamentos de 2 y 3 dormitorios con acabados premium."
  },
  {
    id: 2,
    name: "Residencial Yanahuara",
    location: "Yanahuara, Arequipa",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    ],
    description: "Complejo residencial exclusivo en el corazón de Yanahuara con áreas verdes y amenidades de lujo."
  },
  {
    id: 3,
    name: "Torre Sachaca",
    location: "Sachaca, Arequipa",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Moderna torre de 12 niveles con diseño arquitectónico vanguardista y espacios inteligentes."
  },
  {
    id: 4,
    name: "Condominio El Vallecito",
    location: "Vallecito, Arequipa",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    ],
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
    <section className="bg-gray-50 py-20 lg:py-28" id="proyectos">
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
                    src={project.image}
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
                src={project.image}
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
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
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

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white rounded-2xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all"
        >
          <X className="h-5 w-5 text-[#0142A0]" />
        </button>

        <div className="p-6 sm:p-8 lg:p-12">
          <h3 className="mb-2 font-bold text-3xl text-[#0142A0] sm:text-4xl">
            {project.name}
          </h3>
          <p className="mb-6 text-gray-600 text-lg">{project.location}</p>
          <p className="mb-8 text-gray-700 leading-relaxed">{project.description}</p>

          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="aspect-video overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`${project.name} - Imagen ${index + 1}`}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
