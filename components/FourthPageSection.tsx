"use client";

import Image from "next/image";

export default function FourthPageSection() {
  return (
    <div className="w-full min-h-[600px] md:min-h-[800px] lg:h-[1024px] bg-[#000000] relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="film-grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center py-8 md:py-10 lg:py-0">
        {/* Text Section */}
        <div className="mt-8 md:mt-10 lg:mt-15 flex flex-col items-center text-center gap-0 px-4">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-quicksand font-normal text-white leading-none m-0 mt-4 md:mt-6 lg:mt-10">
            Digitized Alternative Investments Offerings
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-quicksand font-normal text-white leading-none m-0">
            (Digitized Special Purpose Vehicle Investment Fund backed by Rare Colored Gemstone Collection)
          </p>
        </div>

        {/* Background Video with Overlay Content */}
        <div className="w-full mt-4 md:mt-5 lg:mt-5 relative">
          <div className="relative w-full min-h-[1000px] md:min-h-[700px] lg:min-h-[765px]">
            <div className="absolute inset-0">
              <video
                src="/videos/fourth-page/floating-gems.mov"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full opacity-30"
              />
            </div>
            
            {/* Three Gemstone Images with Buttons - Absolutely positioned on top */}
            <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 pt-8 md:pt-12 lg:pt-40 pb-8 md:pb-12 lg:pb-0">
              {/* Emerald Image */}
              <div className="flex flex-col items-center">
                <Image
                  src="/images/fourth-page/emerald-image.svg"
                  alt="Emerald"
                  width={356}
                  height={347}
                  className="object-contain w-full max-w-62.5 md:max-w-75 lg:w-89 h-auto"
                />
                <a
                  href="https://aix-emrld-landingpage.vercel.app/"
                  className="mt-4 md:mt-12 lg:mt-20 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full bg-white font-quicksand text-[20px] md:text-[26px] lg:text-[32px] font-bold text-black flex flex-col items-center hover:opacity-90 transition-opacity cursor-pointer"
                >
                  EMRL.D
                </a>
              </div>

              {/* Ruby Image */}
              <div className="flex flex-col items-center">
                <Image
                  src="/images/fourth-page/ruby-image.svg"
                  alt="Ruby"
                  width={356}
                  height={347}
                  className="object-contain w-full max-w-62.5 md:max-w-75 lg:w-89 h-auto"
                />
                <button className="mt-4 md:mt-12 lg:mt-20 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full bg-white font-quicksand text-[20px] md:text-[26px] lg:text-[32px] font-bold text-black flex flex-col items-center gap-0 leading-none hover:opacity-90 transition-opacity cursor-pointer">
                  <span className="leading-none">RUBY.D</span>
                  <span className="text-[12px] md:text-[13px] lg:text-[15px] font-quicksand font-bold text-black leading-none">coming soon!</span>
                </button>
              </div>

              {/* Sapphire Image */}
              <div className="flex flex-col items-center">
                <Image
                  src="/images/fourth-page/sapphire-image.svg"
                  alt="Sapphire"
                  width={356}
                  height={347}
                  className="object-contain w-full max-w-62.5 md:max-w-75 lg:w-89 h-auto"
                />
                <button className="mt-4 md:mt-12 lg:mt-20 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full bg-white font-quicksand text-[20px] md:text-[26px] lg:text-[32px] font-bold text-black flex flex-col items-center gap-0 leading-none hover:opacity-90 transition-opacity cursor-pointer">
                  <span className="leading-none">SFYR.D</span>
                  <span className="text-[12px] md:text-[13px] lg:text-[15px] font-quicksand font-bold text-black leading-none">coming soon!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

