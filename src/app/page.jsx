import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import HowItWork from "@/components/HowItWork";

export default function Home() {
  return (
    <div className="min-h-screen px-4 pt-4 md:px-[33px] md:pt-[33px] bg-white">
      <div className="bg-[#f4faf6] rounded-[16px] border border-[oklch(0.929_0.013_255.508)] overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
