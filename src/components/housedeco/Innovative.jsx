import Reveal from "@/components/housedeco/Reveal";

export default function Innovative() {
  return (
    <section className="bg-[#141414] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
        <div className="group relative overflow-hidden">
          <img src="/images/diseno-innovador.jpg" alt="" className="w-full h-[420px] object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f04a19]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
        </Reveal>
        <Reveal delay={0.15}>
        <div>
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">DAMOS LO MEJOR</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold uppercase leading-tight mb-5">Ideas innovadoras Diseños con estilo

          </h2>
          <p className="text-white/60 leading-relaxed mb-8">Creemos en una forma de construir más ágil, eficiente y moderna. Incorporamos sistemas de construcción en seco que permiten optimizar tiempos y recursos, sin dejar de lado la calidad y la durabilidad de cada proyecto.


          </p>
          <a
            href="#CONTACTO"
            className="inline-block border border-[#f04a19] text-[#f04a19] px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#f04a19] hover:text-[#1a1a1a] transition-colors">PEDÍ TU DISEÑO


          </a>
        </div>
        </Reveal>
      </div>
    </section>);

}