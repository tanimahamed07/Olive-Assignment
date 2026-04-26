import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="px-[33px] pt-[33px]">
        <Navbar />
      </header>
      <Banner />
    </div>
  );
}
