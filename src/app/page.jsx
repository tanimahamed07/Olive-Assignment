import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import HowItWork from "@/components/HowItWork";

export default function Home() {
  return (
    <div className="min-h-screen px-[33px] pt-[33px] bg-white">
      <div className="max-w-[1404px] mx-auto bg-[#f4faf6] border-b-0 border-[1px] border-[oklch(0.929_0.013_255.508)] rounded-t-[16px] overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
