import { Reveal } from "./reveal";
import Image from "next/image";
import hero from "@/public/hero-building.jpg"

const timeline = [
  { year: "1998", title: "Fundación en Cayma", desc: "Nace la I.E.P. Niño Magistral con la primera promoción de inicial." },
  { year: "2005", title: "Primera promoción de Secundaria", desc: "Ingresos destacados a universidades públicas y privadas de Arequipa." },
  { year: "2012", title: "Segunda sede", desc: "Crecemos para atender a más familias caymeñas." },
  { year: "2018", title: "Laboratorios de cómputo", desc: "Implementación de aulas tecnológicas en todos los niveles." },
  { year: "2024", title: "Tercera sede & Robótica", desc: "Ampliamos infraestructura y lanzamos talleres de robótica." },
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
        <div className="container-apple grid gap-10 md:grid-cols-2 relative z-10">
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
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-apple">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance text-brand">Nuestra trayectoria.</h2>
          </Reveal>
          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-yellow md:-translate-x-1/2" aria-hidden />
            <ul className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <li className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                    <div className="md:[direction:ltr] pl-12 md:pl-0 md:pr-10 md:text-right">
                      <span className="absolute left-4 md:left-1/2 -translate-y-1 md:-translate-x-1/2 grid h-3 w-3 rounded-full bg-brand ring-4 ring-yellow" aria-hidden />
                      <div className="text-brand/80 font-semibold tracking-tight text-lg">{t.year}</div>
                      <h3 className="text-brand mt-1 text-xl font-semibold">{t.title}</h3>
                      <p className="mt-2 text-muted-foreground">{t.desc}</p>
                    </div>
                    <div />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
