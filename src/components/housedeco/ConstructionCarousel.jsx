import { useState, useCallback, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function ConstructionCarousel({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState(null);

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

  if (!images.length) return null;

  if (images.length === 1) {
    return (
      <div className="overflow-hidden rounded-xl">
        <img src={images[0]} alt="" className="w-full h-[420px] object-cover" />
      </div>
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
                  <img src={url} alt="" className="w-full h-[420px] object-cover" />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-2 h-9 w-9 bg-white/90 border-none text-[#1a1a1a] hover:bg-[#f04a19] hover:text-white" />
        <CarouselNext className="right-2 h-9 w-9 bg-white/90 border-none text-[#1a1a1a] hover:bg-[#f04a19] hover:text-white" />
      </Carousel>
    </div>
  );
}