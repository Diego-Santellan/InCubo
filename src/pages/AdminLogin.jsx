import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, User, ArrowLeft } from "lucide-react";
import { loginAdmin } from "@/lib/adminAuth";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (loginAdmin(user, pass)) {
      navigate("/admin");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <section className="bg-[#f7f4ef] min-h-screen flex items-center justify-center py-20 relative">
      <Link
        to="/"
        className="absolute top-6 right-6 inline-flex items-center gap-2 text-[#1a1a1a] text-xs font-semibold tracking-wider uppercase hover:text-[#f04a19] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Volver al inicio
      </Link>
      <div className="max-w-md w-full mx-auto px-6">
        <div className="bg-white shadow-sm border border-[#eee] p-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] uppercase tracking-wide mb-1 text-center">Panel Incubo</h2>
          <p className="text-[#888] text-sm text-center mb-8">Ingresá tus credenciales para administrar las obras</p>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider mb-2 block">Usuario</label>
              <div className="flex items-center gap-3 border-b border-[#ccc] focus-within:border-[#f04a19] transition-colors">
                <User className="w-4 h-4 text-[#f04a19]" />
                <input
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="w-full bg-transparent py-3 focus:outline-none text-[#1a1a1a]"
                  placeholder="usuario"
                />
              </div>
            </div>
            <div>
              <label className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider mb-2 block">Contraseña</label>
              <div className="flex items-center gap-3 border-b border-[#ccc] focus-within:border-[#f04a19] transition-colors">
                <Lock className="w-4 h-4 text-[#f04a19]" />
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full bg-transparent py-3 focus:outline-none text-[#1a1a1a]"
                  placeholder="••••••••"
                />
              </div>
            </div>
            {error && <p className="text-[#f04a19] text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#f04a19] text-white px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#1a1a1a] transition-colors"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}