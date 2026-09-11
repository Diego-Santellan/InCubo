import { Pencil, Trash2, Search } from "lucide-react";

export default function ConstructionList({ items, onEdit, onDelete, query, setQuery }) {
  return (
    <div>
      <div className="flex items-center gap-3 border-b border-[#ccc] mb-6 focus-within:border-[#f04a19] transition-colors">
        <Search className="w-4 h-4 text-[#f04a19]" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título..."
          className="w-full bg-transparent py-3 focus:outline-none text-[#1a1a1a]"
        />
      </div>

      {items.length === 0 ? (
        <p className="text-[#888] text-sm py-8 text-center">No hay obras cargadas.</p>
      ) : (
        <div className="space-y-4">
          {items.map((c) => (
            <div key={c.id} className="bg-white border border-[#eee] p-4 flex gap-4 items-start hover:border-[#f04a19] transition-colors">
              <div className="w-20 h-20 shrink-0 bg-[#f7f4ef] overflow-hidden">
                {c.images?.[0] ? (
                  <img src={c.images[0]} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-[#1a1a1a] font-semibold">{c.title}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 bg-[#f04a19] text-white">{c.type}</span>
                </div>
                {c.subtitle && <p className="text-[#666] text-sm mt-1">{c.subtitle}</p>}
                {c.description && <p className="text-[#888] text-xs mt-1 line-clamp-2">{c.description}</p>}
                {c.pdf_link && (
                  <a href={c.pdf_link} target="_blank" rel="noreferrer" className="text-[#f04a19] text-xs mt-1 inline-block hover:underline">
                    Ver PDF
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => onEdit(c)} className="p-2 text-[#1a1a1a] hover:text-[#f04a19] transition-colors" aria-label="Editar">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => onDelete(c)} className="p-2 text-[#1a1a1a] hover:text-[#f04a19] transition-colors" aria-label="Eliminar">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}