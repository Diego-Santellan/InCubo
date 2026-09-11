import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function ConstructionCarousel({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);

  const handleSelect = useCallback((a) => {
    if (!a) return;
    setSelectedIndex(a.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    handleSelect(api);
    api.on("select", handleSelect);
    api.on("reInit", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  useEffect(() => {
    if (previewIndex === null) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setPreviewIndex(null);
      if (event.key === "ArrowLeft") setPreviewIndex((index) => (index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setPreviewIndex((index) => (index + 1) % images.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [previewIndex, images.length]);

  if (!images.length) return null;

  if (images.length === 1) {
    return (
      <>
        <button type="button" onClick={() => setPreviewIndex(0)} className="block w-full overflow-hidden rounded-xl cursor-zoom-in">
          <img src={images[0]} alt="Ver imagen completa" className="w-full h-[420px] object-cover" />
        </button>
        {previewIndex !== null && <ImagePreview images={images} index={previewIndex} onClose={() => setPreviewIndex(null)} onChange={setPreviewIndex} />}
      </>
    );
  }

  return (
    <div className="relative">
      <Carousel opts={{ loop: true, align: "center" }} setApi={setApi} className="overflow-hidden">
        <CarouselContent className="-ml-2">
          {images.map((url, i) => {
            const active = i === selectedIndex;
            return (
              <CarouselItem key={i} className="pl-2 basis-[80%] md:basis-[68%]">
                <div
                  className={`overflow-hidden rounded-xl transition-all duration-500 ${
                    active ? "" : "blur-sm scale-95 opacity-60"
                  }`}
                >
                  <button type="button" onClick={() => setPreviewIndex(i)} className="block w-full cursor-zoom-in">
                    <img src={url} alt="Ver imagen completa" className="w-full h-[420px] object-cover" />
                  </button>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-2 h-9 w-9 bg-white/90 border-none text-[#1a1a1a] hover:bg-[#f04a19] hover:text-white" />
        <CarouselNext className="right-2 h-9 w-9 bg-white/90 border-none text-[#1a1a1a] hover:bg-[#f04a19] hover:text-white" />
      </Carousel>
      {previewIndex !== null && <ImagePreview images={images} index={previewIndex} onClose={() => setPreviewIndex(null)} onChange={setPreviewIndex} />}
    </div>
  );
}

function ImagePreview({ images, index, onClose, onChange }) {
  const [touchStart, setTouchStart] = useState(null);
  const changeImage = (direction) => {
    onChange((currentIndex) => (currentIndex + direction + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 p-6 flex items-center justify-center cursor-zoom-out"
      role="dialog"
      aria-modal="true"
      aria-label="Imagen completa"
      onClick={onClose}
      onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart === null) return;
        const distance = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(distance) > 50) changeImage(distance > 0 ? -1 : 1);
        setTouchStart(null);
      }}
    >
      <button
        type="button"
        aria-label="Cerrar imagen"
        onClick={onClose}
        className="absolute top-5 right-5 text-white hover:text-[#f04a19] transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={(event) => { event.stopPropagation(); changeImage(-1); }}
            className="absolute left-5 text-white hover:text-[#f04a19] transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={(event) => { event.stopPropagation(); changeImage(1); }}
            className="absolute right-5 text-white hover:text-[#f04a19] transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </>
      )}
      <img
        src={images[index]}
        alt="Vista completa"
        className="max-w-full max-h-[90vh] object-contain cursor-default"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}