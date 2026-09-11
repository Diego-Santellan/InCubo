import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "@/components/housedeco/Reveal";

const faqs = [
{ q: "¿Qué son las soluciones modulares de CHR?" },
{ q: "¿Qué medidas de módulos ofrecen?" },
{ q: "¿Cuál es el plazo de entrega?" },
{ q: "¿Tienen financiación?" },
{ q: "¿Se pueden hacer divisiones interiores?" },
{ q: "¿Incluyen baño?", dot: true },
{ q: "¿Qué terminaciones incluyen?" },
{ q: "¿El transporte está incluido?" },
{ q: "¿Incluyen la base de apoyo?" }];


const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";

export default function FAQ() {
  const [open, setOpen] = useState(null);
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
              src="https://media.base44.com/images/public/6aa05ccb4d9baaa5807a33d9/e346c9377_IMG_20211019_081618.jpg"
              alt=""
              className="absolute top-12 left-8 w-60 h-44 object-cover shadow-xl hover:scale-105 transition-transform duration-500" />
            <img
              src="https://media.base44.com/images/public/6aa05ccb4d9baaa5807a33d9/f093a213f_IMG_20220208_093421.jpg"
              alt=""
              className="absolute top-0 right-8 w-60 h-44 object-cover shadow-xl hover:scale-105 transition-transform duration-500" />
            <img
              src="https://media.base44.com/images/public/6aa05ccb4d9baaa5807a33d9/77ba66278_IMG-20210604-WA0006.jpg"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                      mattis, pulvinar dapibus leo.
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