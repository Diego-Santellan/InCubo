import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Lock } from "lucide-react";

const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";
const navItems = ["INICIO", "NOSOTROS", "SERVICIOS", "PÁGINAS", "CONTACTO"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#1a1a1a] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <img src="/images/77d7fa0b2_logo.png" alt="Incubo" className="h-9 w-auto" />
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href="#"
              className="text-white text-[13px] font-semibold tracking-wider uppercase flex items-center gap-1 hover:text-[#f04a19] transition-colors"
            >
              {item}
              {i !== 0 && i !== 4 && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
        </nav>
        <Link to="/admin-login" className="hidden md:inline-flex items-center gap-1.5 text-white/50 hover:text-[#f04a19] text-xs font-semibold tracking-wider uppercase transition-colors" aria-label="Panel admin">
          <Lock className="w-3.5 h-3.5" />
        </Link>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-[#1a1a1a] px-6 pb-4 flex flex-col gap-3 border-t border-white/10">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-white text-sm uppercase font-semibold tracking-wider">
              {item}
            </a>
          ))}
          <Link to="/admin-login" className="text-white/50 text-sm uppercase font-semibold tracking-wider inline-flex items-center gap-1.5 pt-3 border-t border-white/10">
            <Lock className="w-3.5 h-3.5" /> Panel admin
          </Link>
        </nav>
      )}
    </header>
  );
}