import { MapPin, Phone, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white/75 text-[13px] hidden md:block border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#f04a19]" />
          <span>Piedrabuena 2870, Tandil, Buenos Aires.  </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#f04a19]" />
          <span>+54 9 249 459-9292</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-[#f04a19]" />
          <span>Horario: Lun-Vie 08:00 - 17:00</span>
        </div>
      </div>
    </div>);

}