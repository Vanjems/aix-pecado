import Image from "next/image";
import LogoMarquee from "@/components/LogoMarquee";
import SecondPageSection from "@/components/SecondPageSection";
import ThirdPageSection from "@/components/ThirdPageSection";
import FourthPageSection from "@/components/FourthPageSection";
import FifthPageSection from "@/components/FifthPageSection";
import SixthPageSection from "@/components/SixthPageSection";
import SeventhPageSection from "@/components/SeventhPageSection";
import EighthPageSection from "@/components/EighthPageSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <main id="hero" className="relative w-full min-h-screen flex justify-center overflow-hidden pt-25">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-hero.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Text Rectangle */}
        <div 
          className="flex items-center justify-center px-8 py-4"
          style={{
            width: '943px',
            height: '70px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <p className="text-[40px] font-quicksand font-normal text-center">
            A step into the future of{" "}
            <span className="font-bold">Alternative Investing.</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* Launch App Button */}
          <button
            className="px-8 py-3 rounded-full font-bold text-black font-quicksand transition-opacity hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: '#E0E0E0' }}
          >
            Launch App
          </button>

          {/* Learn More Button */}
          <button
            className="px-8 py-3 rounded-full font-bold text-white font-quicksand transition-opacity hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Text Box */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 mb-[15px] px-4">
        <div 
          className="flex items-center justify-center px-8 py-4"
          style={{
            width: '1250px',
            height: '140px',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          }}
        >
          <p className="font-quicksand font-normal text-justify text-[20px]">
            AI.X is a digital gateway designed for Registered Investment Advisory firms, Family Offices, High-Net-Worth Individuals, and Institutions to access high-value, rare collectibles through secure digitization. Our innovative swap platform seamlessly connects traditional investors to the efficiency, liquidity, and enhanced optionality of digitized rare collectibles—positioned as differentiated alternative investments within a diversified portfolio.
          </p>
        </div>
      </div>
    </main>
    <LogoMarquee />
    <SecondPageSection />
    <ThirdPageSection />
    <FourthPageSection />
    <FifthPageSection />
    <SixthPageSection />
    <SeventhPageSection />
    <EighthPageSection />
    <Footer />
    </>
  );
}


