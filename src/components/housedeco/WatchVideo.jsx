import { useState } from "react";
import { Play, X } from "lucide-react";

export default function WatchVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="relative h-[420px] flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/diseno-2B.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}>
      
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center">
          <button
            type="button"
            aria-label="Reproducir video"
            onClick={() => setIsVideoOpen(true)}
            className="w-20 h-20 rounded-full border-2 border-[#f04a19] flex items-center justify-center mx-auto hover:bg-[#f04a19] transition-colors group"
          >
            <Play className="w-7 h-7 text-[#f04a19] group-hover:text-[#1a1a1a] fill-current ml-1" />
          </button>
          <p className="text-white text-sm font-semibold tracking-widest uppercase mt-5">VER</p>
        </div>
      </section>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6" role="dialog" aria-modal="true" aria-label="Video InCubo">
          <button
            type="button"
            aria-label="Cerrar video"
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-5 right-5 text-white hover:text-[#f04a19] transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
          <video className="max-w-5xl w-full max-h-[85vh]" src="/images/video-incubo-poliuretano.mp4" controls autoPlay />
        </div>
      )}
    </>);

}