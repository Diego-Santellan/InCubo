import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "INICIO", href: "/#INICIO" },
  { label: "NOSOTROS", href: "/#NOSOTROS" },
  { label: "SERVICIOS", href: "/#SERVICIOS" },
  // { label: "PÁGINAS", href: "/constructions/modular" },
  { label: "CONTACTO", href: "/#CONTACTO" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#1a1a1a] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/#INICIO" aria-label="Ir al inicio">
          <img src="/images/77d7fa0b2_logo.png" alt="Incubo" className="h-9 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => item.label === "SERVICIOS" ? (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-white text-[13px] font-semibold tracking-wider uppercase flex items-center gap-1 hover:text-[#f04a19] transition-colors"
              >
                {item.label}
                <ChevronDown className="w-3 h-3" />
              </a>
              <div className="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="w-56 bg-[#1a1a1a] border-t-2 border-[#f04a19] py-2 shadow-lg">
                  <Link to="/constructions/modular" className="block px-5 py-3 text-white text-xs uppercase tracking-wider hover:bg-[#f04a19] transition-colors">
                    Construcciones modulares
                  </Link>
                  <Link to="/constructions/steel-framing" className="block px-5 py-3 text-white text-xs uppercase tracking-wider hover:bg-[#f04a19] transition-colors">
                    Steel Framing
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-[13px] font-semibold tracking-wider uppercase flex items-center gap-1 hover:text-[#f04a19] transition-colors"
            >
              {item.label}
              {i == 2 && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
        </nav>
        <a
          href="/#CONTACTO"
          className="hidden md:inline-flex border border-[#f04a19] bg-[#f04a19] text-white px-5 py-2 text-[11px] font-semibold tracking-wider uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors"
        >
          Hablemos
        </a>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-[#1a1a1a] px-6 pb-4 flex flex-col gap-3 border-t border-white/10">
          {navItems.map((item) => (
            item.label === "SERVICIOS" ? (
              <div key={item.label}>
                <a href={item.href} onClick={() => setOpen(false)} className="text-white text-sm uppercase font-semibold tracking-wider">
                  {item.label}
                </a>
                <div className="flex flex-col gap-2 pl-4 pt-2">
                  <Link to="/constructions/modular" onClick={() => setOpen(false)} className="text-white/70 text-xs uppercase tracking-wider hover:text-[#f04a19]">
                    Construcciones modulares
                  </Link>
                  <Link to="/constructions/steel-framing" onClick={() => setOpen(false)} className="text-white/70 text-xs uppercase tracking-wider hover:text-[#f04a19]">
                    Steel Framing
                  </Link>
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-white text-sm uppercase font-semibold tracking-wider">
                {item.label}
              </a>
            )
          ))}
          <a href="/#CONTACTO" onClick={() => setOpen(false)} className="border border-[#f04a19] bg-[#f04a19] text-white text-sm uppercase font-semibold tracking-wider text-center py-3 mt-2 hover:bg-[#1a1a1a] hover:text-white transition-colors">
            Hablemos de tu proyecto
          </a>
        </nav>
      )}
    </header>
  );
}