import { useState, useEffect } from "react";

const MEDIA = "/images/";
const slides = [
MEDIA + "diseno-1A.jpg",
MEDIA + "diseno-1B.jpg",
MEDIA + "diseno-1C.jpg",
MEDIA + "diseno-2A.jpeg",
MEDIA + "diseno-2B.jpeg"];


export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="INICIO" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((s, idx) =>
      <div
        key={idx}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2500ms] ${idx === i ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${s})` }} />

      )}
      <div className="absolute inset-0 bg-[#000000]/[0.5]" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-[#f04a19] font-bold uppercase tracking-tight leading-[0.95] text-[36px] md:text-7xl lg:text-7xl">construcción modular

        </h1>
        <h1 className="text-white font-bold uppercase tracking-tight leading-[0.95] mt-2 text-[36px] md:text-7xl lg:text-7xl">steel framing

        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#CONTACTO"
            className="border border-white text-white px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:border-[#f04a19] hover:bg-[#f04a19] hover:text-[#1a1a1a] transition-colors">hablemos


          </a>
          <a
            href="#SERVICIOS"
            className="border border-[#f04a19] text-[#f04a19] px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#f04a19] hover:text-[#1a1a1a] transition-colors">proyectos


          </a>
        </div>
      </div>
    </section>);

}