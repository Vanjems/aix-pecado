"use client";

import Image from "next/image";

export default function FourthPageSection() {
  return (
    <div className="w-full h-[1024px] bg-[#000000] relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="film-grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Text Section with margin 15 */}
        <div className="mt-15 flex flex-col items-center text-center gap-0">
          <h2 className="text-[40px] font-quicksand font-normal text-white leading-none m-0 mt-10">
            Digitized Alternative Investments Offerings
          </h2>
          <p className="text-[20px] font-quicksand font-normal text-white leading-none m-0">
            (Digitized Special Purpose Vehicle Investment Fund backed by Rare Colored Gemstone Collection)
          </p>
        </div>

        {/* Background Image with Overlay Content */}
        <div className="w-full flex justify-center mt-5 relative">
          <Image
            src="/images/fourth-page/background-image-fourth.svg"
            alt="Fourth Page Background"
            width={1440}
            height={765}
            className="w-full h-auto object-contain"
          />
          
          {/* Three Gemstone Images with Buttons - Positioned inside background image */}
          <div className="absolute inset-0 flex justify-center items-start gap-8 pt-40">
            {/* Emerald Image */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/fourth-page/emerald-image.svg"
                alt="Emerald"
                width={356}
                height={347}
                className="object-contain"
              />
              <button className="mt-20 px-6 rounded-full bg-white font-quicksand text-[32px] font-bold text-black flex flex-col items-center hover:opacity-90 transition-opacity cursor-pointer">
                EMRL.D
              </button>
            </div>

            {/* Ruby Image */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/fourth-page/ruby-image.svg"
                alt="Ruby"
                width={356}
                height={347}
                className="object-contain"
              />
              <button className="mt-20 px-6 rounded-full bg-white font-quicksand text-[32px] font-bold text-black flex flex-col items-center gap-0 leading-none hover:opacity-90 transition-opacity cursor-pointer">
                <span className="leading-none">RUBY.D</span>
                <span className="text-[15px] font-quicksand font-bold text-black leading-none">coming soon!</span>
              </button>
            </div>

            {/* Sapphire Image */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/fourth-page/sapphire-image.svg"
                alt="Sapphire"
                width={356}
                height={347}
                className="object-contain"
              />
              <button className="mt-20 px-6 rounded-full bg-white font-quicksand text-[32px] font-bold text-black flex flex-col items-center gap-0 leading-none hover:opacity-90 transition-opacity cursor-pointer">
                <span className="leading-none">SFYR.D</span>
                <span className="text-[15px] font-quicksand font-bold text-black leading-none">coming soon!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

