const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";

export default function Relentless() {
  return (
    <section
      className="relative py-28 md:py-36 flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${IMG}interior-with-dining-table-PRPTKDT.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-6">
        <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">Getting it right</p>
        <h2 className="text-white text-4xl md:text-6xl font-bold capitalize mb-8">Relentles pursuit of perfection</h2>
        <a
          href="#"
          className="inline-block border border-[#f04a19] text-white px-8 py-3 text-[13px] font-semibold tracking-wider uppercase hover:bg-[#f04a19] hover:text-[#1a1a1a] transition-colors"
        >
          Contact now
        </a>
      </div>
    </section>
  );
}