const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";
const partners = ["partner1.png", "partner2.png", "partner3.png", "partner4.png", "partner5.png", "partner6.png"];

export default function Partners() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest">our partner</p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
          {[...partners, ...partners].map((p, i) => (
            <img
              key={i}
              src={IMG + p}
              alt=""
              className="h-12 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
}