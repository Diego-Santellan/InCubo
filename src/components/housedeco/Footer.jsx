const pages = [
  { label: "Inicio", href: "/#INICIO" },
  { label: "Nosotros", href: "/#NOSOTROS" },
  { label: "Servicios", href: "/#SERVICIOS" },
  { label: "Proyectos", href: "/constructions/modular" },
  { label: "Contacto", href: "/#CONTACTO" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141414] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <img src="/images/77d7fa0b2_logo.png" alt="Incubo" className="h-10 mb-5" />
          <p className="text-white/60 leading-relaxed max-w-md">Acompañamos cada proyecto de principio a fin, trabajando de manera cercana con nuestros clientes para entender sus necesidades y encontrar la mejor solución. Cada obra es única, y nuestro compromiso es hacerla realidad.



          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wide text-sm mb-5">Navegación</h3>
          <ul className="space-y-2">
            {pages.map((p) =>
            <li key={p.label}>
                <a href={p.href} className="text-white/60 hover:text-[#f04a19] text-sm transition-colors">
                  {p.label}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-px mb-8">
        <img src="/images/diseno-1A.jpg" alt="" className="w-full h-32 object-cover" />
        <img src="/images/diseno-1B.jpg" alt="" className="w-full h-32 object-cover" />
        <img src="/images/diseno-1C.jpg" alt="" className="w-full h-32 object-cover" />
      </div>
      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-white/40 text-sm">Copyright 2026 © InCubo. All rights reserved | Powered by Lis Medina & Diego Santellan</p>
      </div>
    </footer>);

}