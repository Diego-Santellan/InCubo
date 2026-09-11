const TOP = "Eficiencia. Innovación Tecnológica. Elegancia.";
const BOTTOM = "Soluciones Integrales";

export default function TaglineBanner() {
  const topLoop = Array(6).fill(TOP).join("  •  ");
  const bottomLoop = Array(8).fill(BOTTOM).join("  •  ");
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden space-y-4 md:space-y-6">
      <div className="relative flex whitespace-nowrap animate-marquee">
        <span
          className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide shrink-0"
          style={{ WebkitTextStroke: "2px #f04a19", color: "transparent" }}
        >
          {topLoop}
        </span>
        <span
          className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide shrink-0"
          style={{ WebkitTextStroke: "2px #f04a19", color: "transparent" }}
          aria-hidden="true"
        >
          {topLoop}
        </span>
      </div>
      <div className="relative flex whitespace-nowrap animate-marquee-reverse">
        <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide text-[#f04a19] shrink-0">
          {bottomLoop}
        </span>
        <span className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide text-[#f04a19] shrink-0" aria-hidden="true">
          {bottomLoop}
        </span>
      </div>
    </section>
  );
}