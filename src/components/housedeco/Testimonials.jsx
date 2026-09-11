const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";
const testimonials = [
{ name: "Guido Stramana", avatar: "team-1.jpg" },
{ name: "Maximiliano Huarte", avatar: "team-4.jpg" },
{ name: "Jos\xE9 Alberto Cadenas", avatar: "team-3.jpg" }];


import Reveal from "@/components/housedeco/Reveal";

export default function Testimonials() {
  return (
    <section className="bg-[#141414] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">our testimonial</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold capitalize mb-5">¿Qué dice nuestro cliente?</h2>
          <p className="text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) =>
          <Reveal key={t.name} delay={i * 0.15} className="bg-[#1f1f1f] p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <p className="text-white/80 italic mb-6">"Muy buenas casas. Muy responsables. Exelente laburo"</p>
              <img src={IMG + t.avatar} alt="" className="w-16 h-16 rounded-full mx-auto object-cover mb-3" />
              <p className="text-[#f04a19] font-semibold capitalize">{t.name}</p>
              <p className="text-white/50 text-sm uppercase tracking-wider">cliente</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}