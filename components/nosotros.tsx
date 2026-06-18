import { Reveal } from "./reveal";
import Image from "next/image";
import hero from "@/public/hero-building.jpg"
import { HandCoins, Sparkle } from "lucide-react";

const timeline = [
  { year: "1998", title: "Fundación en Cayma", desc: "Nace la I.E.P. Niño Magistral con la primera promoción de inicial." },
  { year: "2005", title: "Primera promoción de Secundaria", desc: "Ingresos destacados a universidades públicas y privadas de Arequipa." },
  { year: "2012", title: "Segunda sede", desc: "Crecemos para atender a más familias caymeñas." },
  { year: "2018", title: "Laboratorios de cómputo", desc: "Implementación de aulas tecnológicas en todos los niveles." },
  { year: "2024", title: "Tercera sede & Robótica", desc: "Ampliamos infraestructura y lanzamos talleres de robótica." },
];

const valors = [
  { id: 1, valor: "valor" },
  { id: 2, valor: "Valores" },
  { id: 3, valor: "Valorvalores" },
  { id: 4, valor: "Valoresvalor" },
  { id: 5, valor: "Valoalor" },
  { id: 6, valor: "Valvalors" },
];

export function Nosotros() {
  return (
    <>
      <section id="nosotros" className=" relative py-16 md:py-24 grid gap-16">
        <Image
          src={hero}
          alt="Edificio moderno"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/90 to-white/98" />
        <div className="container-apple grid gap-10 relative z-10">
          <Reveal>
            <div className="rounded-3xl bg-surface border-border p-8 text-center">
              <h2 className="mb-4 font-bold text-4xl text-brand sm:text-5xl">¿Quienes Somos?</h2>
              <p className="mx-auto max-w-4xl text-lg text-gray-600">
                Brindar una educación de calidad basada en valores, ciencia y tecnología, formando estudiantes
                críticos, creativos y comprometidos con su comunidad. Brindar una educación de calidad basada en valores, 
                ciencia y tecnología, formando estudiantes críticos, creativos y comprometidos con su comunidad.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="container-apple grid gap-10 md:grid-cols-3 relative z-10">
          <Reveal>
            <div className="rounded-3xl bg-brand border-2 border-char-1 shadow-2xl p-8">
              <h2 className="text-4xl font-semibold text-yellow">Misión</h2>
              <p className="mt-3 leading-relaxed text-white/80">
                Brindar una educación de calidad basada en valores, ciencia y tecnología, formando estudiantes
                críticos, creativos y comprometidos con su comunidad.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-background border-chart-1 border-2 shadow-2xl p-8">
              <h2 className="text-4xl font-semibold text-brand">Visión</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Ser la institución educativa de referencia en Cayma y Arequipa, reconocida por su excelencia
                académica e innovación pedagógica y algo más para agregar.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-brand border-2 border-char-1 shadow-2xl p-8">
              <div className="flex gap-3">
                <h2 className="font-bold text-4xl text-yellow">Valores</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                  {valors.map((v, i) => (
                    <div key={i} className="flex gap-3">
                      <Sparkle className="w-5 h-5 text-yellow" />
                      <h2 className="text-white/80">{v.valor}</h2>
                    </div>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
