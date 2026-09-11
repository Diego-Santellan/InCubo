import { Phone, Mail } from "lucide-react";
import Reveal from "@/components/housedeco/Reveal";

export default function Contact() {
  return (
    <section id="CONTACTO" className="bg-[#f7f4ef] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">contacto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] capitalize mb-6">have a question ?</h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#f04a19]" />
              <span className="text-[#1a1a1a] font-semibold">+54 9 249 459-9292</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#f04a19]" />
              <span className="text-[#1a1a1a] font-semibold">info@email.com</span>
            </div>
          </div>
          <p className="text-[#666] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
              placeholder="Name"
              className="w-full bg-transparent border-b border-[#ccc] py-3 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]" />
            
          <input
              placeholder="Email"
              className="w-full bg-transparent border-b border-[#ccc] py-3 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]" />
            
          <input
              placeholder="Subject"
              className="w-full bg-transparent border-b border-[#ccc] py-3 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]" />
            
          <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border-b border-[#ccc] py-3 focus:outline-none focus:border-[#f04a19] resize-none text-[#1a1a1a]" />
            
          <button
              type="submit"
              className="bg-[#f04a19] text-[#1a1a1a] px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors">
              
            Send Message
          </button>
        </form>
        </Reveal>
      </div>
    </section>);

}