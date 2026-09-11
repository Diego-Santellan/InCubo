const panels = [
{
  img: "/images/diseno-3A.jpg",
  title: "CONSTRUCCIÓN MODULAR",
  text: "Módulos habitables pensados para viviendas, oficinas, cabañas y diferentes necesidades. Soluciones funcionales que hacen más simple el proceso de construir.",
  cta: "VER CONSTRUCCIONES MODULARES\u2192"
},
{
  img: "/images/3c6da8d60_generated_image.png",
  title: "STEEL FRAMING",
  text: "Viviendas y proyectos a medida con estructura de acero galvanizado. Un sistema constructivo moderno, eficiente y adaptable a diferentes diseños.",
  cta: "Ver construccines steel framing\u2192"
}];


import { Link } from "react-router-dom";
import Reveal from "@/components/housedeco/Reveal";

const routes = ["/constructions/modular", "/constructions/steel-framing"];

export default function SolutionsSplit() {
  return (
    <section id="SERVICIOS" className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
      {panels.map((p, i) =>
      <div
        key={i}
        className={`relative flex items-center justify-start p-10 md:p-16 group ${i === 0 ? "md:border-r-2 md:border-[#f04a19]" : "border-t-2 border-[#f04a19] md:border-t-0"}`}
        style={{
          backgroundImage: `url(${p.img})`,
          backgroundSize: "cover",
          backgroundPosition: i === 0 ? "center 35%" : "center"
        }}>
        
          <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-500" />
          <Reveal delay={i * 0.1} className="relative z-10 max-w-md group-hover:-translate-y-1 transition-transform duration-500">
            <h2 className="text-white font-bold uppercase text-3xl md:text-4xl md:whitespace-nowrap mb-4 leading-tight">{p.title}</h2>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-8">{p.text}</p>
            <Link
            to={routes[i]}
            className="inline-block bg-white text-[#1a1a1a] px-7 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#f04a19] hover:text-white transition-colors">

              {p.cta}
            </Link>
          </Reveal>
        </div>
      )}
    </section>);

}