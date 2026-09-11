import { Play } from "lucide-react";

const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";

export default function WatchVideo() {
  return (
    <section
      className="relative h-[420px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${IMG}spacious-grey-living-room-interior-2XERHJN.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
      
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-center">
        <button className="w-20 h-20 rounded-full border-2 border-[#f04a19] flex items-center justify-center mx-auto hover:bg-[#f04a19] transition-colors group">
          <Play className="w-7 h-7 text-[#f04a19] group-hover:text-[#1a1a1a] fill-current ml-1" />
        </button>
        <p className="text-white text-sm font-semibold tracking-widest uppercase mt-5">VER</p>
      </div>
    </section>);

}