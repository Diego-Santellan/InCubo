const testimonials = [
{ name: "Guido Stramana", quote: "Muy buenas casas. Muy responsables. Exelente laburo" },
{ name: "Maximiliano Huarte", quote: "Nos asesoraron desde el primer momento y encontraron una solución que se adaptó perfecto a lo que necesitábamos." },
{ name: "Jos\xE9 Alberto Cadenas", quote: "La atención fue excelente y cumplieron con cada etapa del proyecto tal como la habíamos planificado." },
{ name: "Juan Rodriguez", quote: "Estamos muy conformes con el resultado. El equipo estuvo siempre disponible y la calidad de la construcción superó nuestras expectativas." }];


import Reveal from "@/components/housedeco/Reveal";

export default function Testimonials() {
  return (
    <section className="bg-[#141414] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">experiencias reales</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold capitalize mb-5">La confianza de nuestros clientes nos respalda</h2>
          <p className="text-white/60 leading-relaxed">
            Cada proyecto comienza con una conversación y termina con un espacio pensado para vos. Conocé la experiencia
            de quienes ya confiaron en InCubo y descubrí por qué elegirnos es el primer paso para construir con tranquilidad.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) =>
            <Reveal key={t.name} delay={i * 0.15} className="bg-[#1f1f1f] p-8 text-center flex flex-col justify-end hover:-translate-y-1 transition-transform duration-300">
              <p className="text-white/80 italic mb-6 min-h-[96px] flex items-center justify-center">"{t.quote}"</p>
              <img src="/images/person-icon.png" alt="" className="w-16 h-16 rounded-full mx-auto object-cover mb-3" />
              <p className="text-[#f04a19] font-semibold capitalize">{t.name}</p>
              <p className="text-white/50 text-sm uppercase tracking-wider">cliente</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}