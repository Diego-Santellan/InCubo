import Reveal from "@/components/housedeco/Reveal";
import { Link } from "react-router-dom";

const projects = [
  { img: "/images/diseno-1A.jpg", title: "Construcción modular" },
  { img: "/images/diseno-1B.jpg", title: "Steel Framing" },
  { img: "/images/diseno-2A.jpeg", title: "Soluciones habitables" },
  { img: "/images/diseno-3A.jpg", title: "Diseño a medida" },
];

export default function LatestProject() {
  return (
    <section className="bg-[#f7f4ef] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">nuestros proyectos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] capitalize mb-5">Construcciones que hacen realidad tus ideas</h2>
          <p className="text-[#666] leading-relaxed">
            Conocé algunos de nuestros proyectos de construcción modular y Steel Framing. Diseñamos soluciones a medida,
            optimizamos cada etapa de la obra y te acompañamos desde la primera idea hasta la entrega final. Contanos
            qué necesitás y preparemos juntos una propuesta para tu próximo proyecto.
          </p>
        </Reveal>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="min-w-[85%] snap-center group hover:-translate-y-1 transition-transform duration-300 md:min-w-0">
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#f04a19]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="hidden flex items-center justify-between mt-4">
                <h3 className="text-[#1a1a1a] font-semibold capitalize">{p.title}</h3>
                <a href="#" className="text-[#f04a19] text-sm uppercase tracking-wider">
                  Ver proyecto
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            to="/constructions/modular"
            className="w-full sm:w-auto bg-[#f04a19] text-white px-8 py-3 text-[13px] font-semibold tracking-wider uppercase text-center hover:bg-[#1a1a1a] transition-colors"
          >
            Ver construcciones modulares
          </Link>
          <Link
            to="/constructions/steel-framing"
            className="w-full sm:w-auto border border-[#f04a19] text-[#f04a19] px-8 py-3 text-[13px] font-semibold tracking-wider uppercase text-center hover:bg-[#f04a19] hover:text-white transition-colors"
          >
            Ver Steel Framing
          </Link>
        </div>
      </div>
    </section>
  );
}