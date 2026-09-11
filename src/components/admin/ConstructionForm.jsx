import { useState } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const empty = { title: "", subtitle: "", description: "", pdf_link: "", type: "Modular", images: [] };

export default function ConstructionForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || empty);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploading(true);
    try {
      const urls = [];
      for (const file of files) {
        const { file_url } = await base44.integrations.Core.UploadPublicFile({ file });
        urls.push(file_url);
      }
      setForm({ ...form, images: [...form.images, ...urls] });
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (idx) => setForm({ ...form, images: form.images.filter((_, i) => i !== idx) });

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(form);
      if (!initial) setForm(empty);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white border border-[#eee] p-6 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider mb-2 block">Título *</label>
          <input value={form.title} onChange={set("title")} required className="w-full bg-transparent border-b border-[#ccc] py-2 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]" />
        </div>
        <div>
          <label className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider mb-2 block">Subtítulo</label>
          <input value={form.subtitle} onChange={set("subtitle")} className="w-full bg-transparent border-b border-[#ccc] py-2 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]" />
        </div>
      </div>

      <div>
        <label className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider mb-2 block">Descripción</label>
        <textarea value={form.description} onChange={set("description")} rows={3} className="w-full bg-transparent border-b border-[#ccc] py-2 focus:outline-none focus:border-[#f04a19] resize-none text-[#1a1a1a]" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider mb-2 block">Link de PDF</label>
          <input value={form.pdf_link} onChange={set("pdf_link")} placeholder="https://..." className="w-full bg-transparent border-b border-[#ccc] py-2 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]" />
        </div>
        <div>
          <label className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider mb-2 block">Tipo *</label>
          <select value={form.type} onChange={set("type")} className="w-full bg-transparent border-b border-[#ccc] py-2 focus:outline-none focus:border-[#f04a19] text-[#1a1a1a]">
            <option value="Modular">Modular</option>
            <option value="Steel Framing">Steel Framing</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider mb-2 block">Imágenes</label>
        <div className="flex items-center gap-3">
          <label className="inline-flex items-center gap-2 cursor-pointer text-[#f04a19] text-xs font-semibold uppercase tracking-wider hover:text-[#1a1a1a] transition-colors">
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            {uploading ? "Subiendo..." : "Subir imágenes"}
            <input type="file" multiple accept="image/*" onChange={handleFiles} className="hidden" disabled={uploading} />
          </label>
        </div>
        {form.images.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            {form.images.map((url, i) => (
              <div key={i} className="relative w-24 h-24">
                <img src={url} alt="" className="w-full h-full object-cover" />
                <button type="button" onClick={() => removeImage(i)} className="absolute -top-2 -right-2 bg-[#1a1a1a] text-white rounded-full p-1 hover:bg-[#f04a19] transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button type="submit" disabled={saving || uploading} className="bg-[#f04a19] text-white px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#1a1a1a] transition-colors disabled:opacity-50">
          {saving ? "Guardando..." : initial ? "Guardar cambios" : "Agregar obra"}
        </button>
        {initial && (
          <button type="button" onClick={onCancel} className="border border-[#ccc] text-[#1a1a1a] px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:border-[#f04a19] hover:text-[#f04a19] transition-colors">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}