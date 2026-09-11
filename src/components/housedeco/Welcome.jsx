import Reveal from "@/components/housedeco/Reveal";

export default function Welcome() {
  return (
    <section id="NOSOTROS" className="bg-[#f7f4ef] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">quienes somos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] capitalize mb-5">En InCubo construimos mucho más que espacios: construimos proyectos de vida.
</h2>
          <p className="text-[#666] leading-relaxed mb-8">Desde 2018 desarrollamos soluciones de construcción modular y Steel Framing, combinando innovación, eficiencia y calidad.

          </p>
          <div className="space-y-6">
            <div>
              
              <p className="text-[#666] text-sm leading-relaxed hidden">Creemos en una forma de construir más ágil, eficiente y moderna. Incorporamos sistemas de construcción en seco que permiten optimizar tiempos y recursos, sin dejar de lado la calidad y la durabilidad de cada proyecto.


              </p>
            </div>
            <div>
              <h3 className="text-[#f04a19] font-semibold uppercase tracking-wide text-sm mb-2">COMPROMISO</h3>
              <p className="text-[#666] text-sm leading-relaxed">Acompañamos cada proyecto de principio a fin, trabajando de manera cercana con nuestros clientes para entender sus necesidades y encontrar la mejor solución. Cada obra es única, y nuestro compromiso es hacerla realidad.


              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="group relative overflow-hidden">
            <img src="/images/quienes-somos.png" alt="" className="w-full h-[420px] object-cover group-hover:scale-[1.01] transition-transform duration-500" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f04a19]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </section>);

}