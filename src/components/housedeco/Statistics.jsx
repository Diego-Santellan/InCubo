import Reveal from "@/components/housedeco/Reveal";

const IMG = "https://darkorange-zebra-814695.hostingersite.com/wp-content/uploads/sites/2/2021/05/";

function Bar({ label, value }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#1a1a1a] font-medium capitalize">{label}</span>
        <span className="text-[#f04a19] font-semibold">{value}%</span>
      </div>
      <div className="h-1.5 bg-[#e5e0d6]">
        <div className="h-full bg-[#f04a19]" style={{ width: `${value}%` }} />
      </div>
    </div>);

}

export default function Statistics() {
  return null;

































}