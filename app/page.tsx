import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#F6F2DF]">
      <Navbar/>
      <main>
        <div className="w-full h-fit md:h-screen py-20 md:py-0 px-6 md:px-0 flex flex-col items-center justify-center gap-6 md:gap-12 bg-[#D1CDBD]">
          <Image id="logo" src="/logo/transparent.png" alt="Snatch & Snack Club Logo" width={400} height={400} className="h-48 md:h-68 w-auto" />
          <a href="/">
            <div className="w-fit h-fit md:px-16 md:py-6 px-10 py-3 bg-white rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <p className="md:text-4xl text-xl text-[#5A3825] tracking-wider">{"Book your next event".toUpperCase()}</p>
            </div>
          </a>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-10 py-10 md:px-60 md:py-20 gap-4 md:gap-8 tracking-wide">
          <p className="text-xl md:text-3xl text-center text-[#5A3825] font-libre-baskerville italic">Pilates with a little something extra</p>
          <p className="text-sm/6 md:text-xl/8 text-[#5A3825] font-libre-baskerville text-center">
            Whether you're here for the workout, the dessert, or simply an excuse to do something for yourself, there's a place for you here.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
