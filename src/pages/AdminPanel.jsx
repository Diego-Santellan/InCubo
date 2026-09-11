import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Plus, X } from "lucide-react";
import { localClient } from "@/api/localClient";
import { isAdminAuthed, logoutAdmin } from "@/lib/adminAuth";
import ConstructionForm from "@/components/admin/ConstructionForm";
import ConstructionList from "@/components/admin/ConstructionList";

export default function AdminPanel() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminAuthed()) {
      navigate("/admin-login");
      return;
    }
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    try {
      const data = await localClient.entities.Construction.list("-created_date", 200);
      setItems(data);
    } finally {
      setLoading(false);
    }
  };

  const onSave = async (form) => {
    if (editing) {
      await localClient.entities.Construction.update(editing.id, form);
      setEditing(null);
      setShowForm(false);
    } else {
      await localClient.entities.Construction.create(form);
      setShowForm(false);
    }
    await load();
  };

  const onEdit = (c) => {
    setEditing(c);
    setShowForm(true);
  };

  const onDelete = async (c) => {
    if (window.confirm(`¿Eliminar "${c.title}"?`)) {
      await localClient.entities.Construction.delete(c.id);
      load();
    }
  };

  const onLogout = () => {
    logoutAdmin();
    navigate("/admin-login");
  };

  const filtered = items.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="bg-[#f7f4ef] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-1">administración</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] uppercase">Panel de Obras</h1>
          </div>
          <button onClick={onLogout} className="inline-flex items-center gap-2 text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider hover:text-[#f04a19] transition-colors">
            <LogOut className="w-4 h-4" /> Salir
          </button>
        </div>

        {!showForm && (
          <button
            onClick={() => { setEditing(null); setShowForm(true); }}
            className="inline-flex items-center gap-2 bg-[#f04a19] text-white px-6 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#1a1a1a] transition-colors mb-8"
          >
            <Plus className="w-4 h-4" /> Nueva obra
          </button>
        )}

        {showForm && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide">{editing ? "Editar obra" : "Nueva obra"}</h2>
              <button onClick={() => { setShowForm(false); setEditing(null); }} className="text-[#1a1a1a] hover:text-[#f04a19] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <ConstructionForm initial={editing} onSave={onSave} onCancel={() => { setShowForm(false); setEditing(null); }} />
          </div>
        )}

        <div>
          <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-6">Obras cargadas</h2>
          {loading ? (
            <p className="text-[#888] text-sm">Cargando...</p>
          ) : (
            <ConstructionList items={filtered} onEdit={onEdit} onDelete={onDelete} query={query} setQuery={setQuery} />
          )}
        </div>
      </div>
    </section>
  );
}