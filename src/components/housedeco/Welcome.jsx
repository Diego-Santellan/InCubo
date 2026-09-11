import Reveal from "@/components/housedeco/Reveal";

const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";
const images = [
"spacious-grey-living-room-interior-2XERHJN.jpg",
"home-office-interior-in-modern-natural-style-98DLTQ3.jpg",
"lamp-next-to-dark-couch-with-pink-blanket-in-white-H4KZ8LS.jpg",
"interior-with-dining-table-PRPTKDT.jpg"];


export default function Welcome() {
  return (
    <section className="bg-[#f7f4ef] py-20 md:py-28">
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
          <img src={IMG + images[0]} alt="" className="w-full h-[420px] object-cover hover:scale-[1.02] transition-transform duration-500" />
        </Reveal>
      </div>
    </section>);

}