import Reveal from "@/components/housedeco/Reveal";

const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";
const projects = [
  { img: "spacious-grey-living-room-interior-2XERHJN.jpg", title: "Residential Design" },
  { img: "modern-office-with-desk-and-bookcase-7TBZAN8.jpg", title: "Corporate Design" },
  { img: "interior-with-dining-table-PRPTKDT.jpg", title: "Restaurant Design" },
  { img: "clothes-shop-interior-PTD6SX7.jpg", title: "Commercial Design" },
];

export default function LatestProject() {
  return (
    <section className="bg-[#f7f4ef] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#f04a19] text-sm font-semibold uppercase tracking-widest mb-3">our project</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] capitalize mb-5">Our latest project</h2>
          <p className="text-[#666] leading-relaxed">
            Cras sagittis justo enim, eu sagittis purus molestie vitae. Vestibulum porttitor in massa feugiat blandit.
            Nunc ac viverra magna. Etiam dictum pellentesque libero a porttitor. Vestibulum dapibus, metus a molestie
            tincidunt, tortor nisl mollis mi, vitae commodo lorem mi auctor tellus. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="group hover:-translate-y-1 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={IMG + p.img}
                  alt=""
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-[#1a1a1a] font-semibold capitalize">{p.title}</h3>
                <a href="#" className="text-[#f04a19] text-sm uppercase tracking-wider">
                  See more
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}