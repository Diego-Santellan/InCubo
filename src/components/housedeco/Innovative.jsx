import Reveal from "@/components/housedeco/Reveal";

const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";

export default function Innovative() {
  return (
    <section className="bg-[#141414] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
        <img src={IMG + "spacious-grey-living-room-interior-2XERHJN.jpg"} alt="" className="w-full h-[420px] object-cover hover:scale-[1.02] transition-transform duration-500" />
        </Reveal>
        <Reveal delay={0.15}>
        <div>
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">DAMOS LO MEJOR</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold uppercase leading-tight mb-5">Ideas innovadoras Diseños con estilo

          </h2>
          <p className="text-white/60 leading-relaxed mb-8">Creemos en una forma de construir más ágil, eficiente y moderna. Incorporamos sistemas de construcción en seco que permiten optimizar tiempos y recursos, sin dejar de lado la calidad y la durabilidad de cada proyecto.


          </p>
          <a
            href="#"
            className="inline-block border border-[#f04a19] text-[#f04a19] px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#f04a19] hover:text-[#1a1a1a] transition-colors">PEDÍ TU DISEÑO


          </a>
        </div>
        </Reveal>
      </div>
    </section>);

}