import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FileDown, ArrowLeft } from "lucide-react";
import { base44 } from "@/api/base44Client";
import TopBar from "@/components/housedeco/TopBar";
import Navbar from "@/components/housedeco/Navbar";
import Footer from "@/components/housedeco/Footer";
import ConstructionCarousel from "@/components/housedeco/ConstructionCarousel";
import Reveal from "@/components/housedeco/Reveal";

const MEDIA = "https://media.base44.com/images/public/6aa05ccb4d9baaa5807a33d9/";

const TYPE_MAP = {
  modular: { label: "Construcciones Modulares", value: "Modular", banner: MEDIA + "06ca59fe8_WhatsAppImage2026-s-08at55718PM.jpeg" },
  "steel-framing": { label: "Construcciones Steel Framing", value: "Steel Framing", banner: MEDIA + "a0eeb59a0__DSC9829.jpg" },
};

export default function Constructions() {
  const { type } = useParams();
  const cfg = TYPE_MAP[type] || TYPE_MAP.modular;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    base44.entities.Construction.filter({ type: cfg.value }, "-created_date", 100)
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  }, [type]);

  return (
    <div className="font-body bg-white">
      <TopBar />
      <Navbar />

      {/* Banner principal */}
      <section className="relative min-h-[42vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cfg.banner})` }} />
        <div className="absolute inset-0 bg-[#000000]/[0.5]" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-white font-bold uppercase tracking-tight leading-[0.95] text-[36px] md:text-6xl">{cfg.label}</h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Link
              to="/"
              className="bg-[#f04a19] text-white px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              Hablemos
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Volver
            </Link>
          </div>
        </div>
      </section>

      {/* Listado de obras */}
      <section className="bg-[#f7f4ef] py-20 md:py-28">
        <div className="w-full">
          {loading ? (
            <p className="text-[#888] text-sm text-center">Cargando obras...</p>
          ) : items.length === 0 ? (
            <p className="text-[#888] text-sm text-center py-16">Aún no hay obras cargadas en esta categoría.</p>
          ) : (
            <div className="space-y-16">
              {items.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.05}>
                  <article className="bg-white w-full p-8 md:p-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] uppercase leading-tight">{c.title}</h2>
                    {c.description && <p className="text-[#666] leading-relaxed mt-4 max-w-3xl">{c.description}</p>}
                    {c.subtitle && <p className="text-[#f04a19] font-semibold uppercase tracking-wide text-sm mt-6">{c.subtitle}</p>}
                    {c.images?.length > 0 && (
                      <div className="mt-6">
                        <ConstructionCarousel images={c.images} />
                      </div>
                    )}
                    {c.pdf_link && (
                      <a
                        href={c.pdf_link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 mt-8 bg-[#1a1a1a] text-white px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#f04a19] transition-colors"
                      >
                        <FileDown className="w-4 h-4" /> Descargar catálogo
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}