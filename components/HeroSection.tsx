import React from "react";
import HeroVideoBackground from "@/components/HeroVideoBackground";

export default function HeroSection() {
  return (
    <main id="hero" className="relative w-full min-h-screen flex justify-center overflow-hidden pt-16 md:pt-20 lg:pt-25">
      {/* Background: synchronized crossfade (client component) */}
      <HeroVideoBackground />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 lg:gap-8 px-4">
        {/* Text Rectangle */}
        <div className="flex items-center justify-center w-full md:w-[600px] lg:w-[943px] min-h-[50px] md:min-h-[60px] lg:h-[70px] px-4 py-3 md:px-6 md:py-3.5 lg:px-8 lg:py-4 bg-white/50">
          <p className="text-[20px] md:text-[28px] lg:text-[40px] font-quicksand font-normal text-center">
            A step into the future of <span className="font-bold">Alternative Investing.</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
          <button className="px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-full font-bold text-sm md:text-base lg:text-lg text-black font-quicksand transition-opacity hover:opacity-90 cursor-pointer bg-[#E0E0E0]">
            Launch App
          </button>

          <button className="px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-full font-bold text-sm md:text-base lg:text-lg text-white font-quicksand transition-opacity hover:opacity-90 cursor-pointer bg-black/50">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Text Box */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 mb-2 md:mb-3 lg:mb-[15px] px-4 w-full">
        <div className="flex items-center justify-center w-full md:w-[700px] lg:w-[1250px] min-h-[100px] md:min-h-[120px] lg:h-[140px] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-4 bg-white/75 mx-auto">
          <p className="font-quicksand font-normal text-justify text-[14px] md:text-[16px] lg:text-[20px]">
            AI.X is a digital gateway designed for Registered Investment Advisory firms, Family Offices, High-Net-Worth Individuals, and Institutions to access high-value, rare collectibles through secure digitization. Our innovative swap platform seamlessly connects traditional investors to the efficiency, liquidity, and enhanced optionality of digitized rare collectibles—positioned as differentiated alternative investments within a diversified portfolio.
          </p>
        </div>
      </div>
    </main>
  );
}
