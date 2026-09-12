import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "@/components/housedeco/Reveal";

const faqs = [
{ q: "¿Qué son las soluciones modulares de InCubo?", a: "Son construcciones realizadas por módulos que permiten optimizar tiempos y costos, sin resignar confort, diseño ni calidad. Se adaptan a viviendas, oficinas, cabañas y espacios comerciales." },
{ q: "¿Qué medidas de módulos ofrecen?", a: "Trabajamos con distintas medidas y configuraciones. Analizamos el terreno y tus necesidades para definir la distribución y la combinación de módulos más conveniente para cada proyecto." },
{ q: "¿Cuál es el plazo de entrega?", a: "El plazo depende del tamaño, el sistema constructivo y el nivel de terminación elegido. Luego de conocer tu proyecto, te compartimos un cronograma claro con cada etapa de la obra." },
{ q: "¿Tienen financiación?", a: "Evaluamos distintas alternativas según el alcance del proyecto. Contactanos para conocer las opciones disponibles y recibir una propuesta ajustada a tu presupuesto." },
{ q: "¿Se pueden hacer divisiones interiores?", a: "Sí. Podemos definir la distribución interior y sumar divisiones, ambientes y aberturas según el uso que quieras darle al espacio." },
{ q: "¿Incluyen baño?", a: "Sí, podemos incorporar baño y cocina dentro del proyecto, con instalaciones y terminaciones acordes al diseño y al nivel de equipamiento que elijas.", dot: true },
{ q: "¿Qué terminaciones incluyen?", a: "Las terminaciones se definen junto con vos y pueden incluir revestimientos, pisos, aberturas, instalaciones, pintura y equipamiento. Armamos cada propuesta según tus prioridades." },
{ q: "¿El transporte está incluido?", a: "El transporte se cotiza de acuerdo con la ubicación del proyecto, la cantidad de módulos y las condiciones de acceso al terreno. Lo contemplamos desde el inicio para evitar sorpresas." },
{ q: "¿Incluyen la base de apoyo?", a: "La base de apoyo se define según el terreno y las características de la construcción. Te asesoramos sobre la alternativa más adecuada y la incorporamos al presupuesto cuando corresponde." }];

export default function FAQ() {
  const [open, setOpen] = useState(/** @type {number | null} */ (null));
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between border-b border-[#cccccc] pb-4 mb-12">
          <h2 className="text-[#1a1f2c] font-bold uppercase tracking-widest text-sm">Preguntas Frecuentes</h2>
          <span className="text-[#1a1f2c] font-bold text-sm">03</span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal className="relative h-[440px] hidden md:block">
            <img
              src="/images/e346c9377_IMG_20211019_081618.jpg"
              alt=""
              className="absolute top-12 left-8 w-60 h-44 object-cover shadow-xl hover:scale-105 transition-transform duration-500" />
            <img
              src="/images/f093a213f_IMG_20220208_093421.jpg"
              alt=""
              className="absolute top-0 right-8 w-60 h-44 object-cover shadow-xl hover:scale-105 transition-transform duration-500" />
            <img
              src="/images/77ba66278_IMG-20210604-WA0006.jpg"
              alt=""
              className="absolute top-16 left-1/2 -translate-x-1/2 w-52 h-80 object-cover shadow-2xl" />
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="font-bold text-[#1a1f2c] mb-8 text-5xl md:text-5xl">¿Tienes alguna consulta?</h3>
            <div className="divide-y divide-[#e5e5e5]">
              {faqs.map((item, i) =>
              <div key={i}>
                  <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group hover:text-[#f04a19] transition-colors">
                  
                    <span className="text-[#1a1f2c] font-medium flex items-center gap-3">
                      {item.q}
                      {item.dot && <span className="w-2 h-2 rounded-full bg-[#004d40] inline-block" />}
                    </span>
                    <span className="text-[#1a1f2c] shrink-0 ml-4">
                      {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  {open === i &&
                <p className="pb-5 text-[#666] text-sm leading-relaxed">
                      {item.a}
                    </p>
                }
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}