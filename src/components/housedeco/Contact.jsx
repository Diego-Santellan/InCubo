import { Phone, Mail } from "lucide-react";
import Reveal from "@/components/housedeco/Reveal";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const whatsappMessage = [
      "Hola, te hablo desde la web.",
      "",
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Mensaje: ${message}`,
    ].join("\n");

    window.open(
      `https://wa.me/5492494599292?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="CONTACTO" className="bg-[#f7f4ef] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">contacto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] capitalize mb-6">Hablemos de tu próximo proyecto</h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#f04a19]" />
              <span className="text-[#1a1a1a] font-semibold">+54 9 249 459-9292</span>
            </div>
            <div className="hidden flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#f04a19]" />
              <span className="text-[#1a1a1a] font-semibold">info@email.com</span>
            </div>
          </div>
          <p className="text-[#666] leading-relaxed">
            Contanos qué tenés en mente y te ayudamos a encontrar la solución más adecuada para tu espacio. Nuestro
            equipo puede orientarte sobre materiales, tiempos y alternativas para que avances con confianza.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            name="name"
            required
              placeholder="Nombre"
              className="w-full bg-transparent border-b border-[#ccc] py-3 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]" />
            
          <input
              name="email"
              type="email"
              required
              placeholder="Correo Electronico"
              className="w-full bg-transparent border-b border-[#ccc] py-3 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]" />
            
          <textarea
              name="message"
              required
              placeholder="Mensaje"
              rows={4}
              className="w-full bg-transparent border-b border-[#ccc] py-3 focus:outline-none focus:border-[#f04a19] resize-none text-[#1a1a1a]" />
            
          <button
              type="submit"
              className="bg-[#f04a19] text-[#1a1a1a] px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors">
              
            Enviar por WhatsApp
          </button>
        </form>
        </Reveal>
      </div>
    </section>);

}