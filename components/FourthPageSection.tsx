"use client";

import { useRef } from "react";

export default function FourthPageSection() {
  const emeraldVideoRef = useRef<HTMLVideoElement>(null);
  const rubyVideoRef = useRef<HTMLVideoElement>(null);
  const sapphireVideoRef = useRef<HTMLVideoElement>(null);

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
              {/* Emerald Video */}
              <div className="flex flex-col items-center">
                {/* Container maintains 356x347px for layout with rounded corners */}
                <div
                  className="w-[356px] h-[347px] relative overflow-hidden rounded-2xl"
                  onMouseEnter={() => {
                    emeraldVideoRef.current?.play();
                  }}
                  onMouseLeave={() => {
                    emeraldVideoRef.current?.pause();
                  }}
                >
                  {/* Larger video container - extends beyond but clipped by parent with rounded corners */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[712px] h-[694px]">
                    <video
                      ref={emeraldVideoRef}
                      src="/videos/fourth-page/emerald.mp4"
                      loop
                      muted
                      playsInline
                      className="absolute left-1/2 top-1/2 -translate-x-[calc(50%-3%)] -translate-y-[calc(50%-3%)] w-[512px] h-[494px] object-cover"
                    />
                  </div>
                  {/* Border overlay matching visible area */}
                  <div className="absolute inset-0 rounded-2xl border border-white pointer-events-none" />
                </div>
                <a
                  href="https://aix-emrld-landingpage.vercel.app/"
                  className="mt-4 md:mt-12 lg:mt-20 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full bg-white font-quicksand text-[20px] md:text-[26px] lg:text-[32px] font-bold text-black flex flex-col items-center hover:opacity-90 transition-opacity cursor-pointer"
                >
                  EMRL.D
                </a>
              </div>

              {/* Ruby Video */}
              <div className="flex flex-col items-center">
                {/* Container maintains 356x347px for layout with rounded corners */}
                <div
                  className="w-[356px] h-[347px] relative overflow-hidden rounded-2xl"
                  onMouseEnter={() => {
                    rubyVideoRef.current?.play();
                  }}
                  onMouseLeave={() => {
                    rubyVideoRef.current?.pause();
                  }}
                >
                  {/* Larger video container - extends beyond but clipped by parent with rounded corners */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[812px] h-[694px]">
                    <video
                      ref={rubyVideoRef}
                      src="/videos/fourth-page/ruby.mp4"
                      loop
                      muted
                      playsInline
                      className="absolute left-1/2 top-1/2 -translate-x-[calc(30%)] -translate-y-1/2 w-[612px] h-[494px] object-cover"
                    />
                  </div>
                  {/* Border overlay matching visible area */}
                  <div className="absolute inset-0 rounded-2xl border border-white pointer-events-none" />
                </div>
                <button className="mt-4 md:mt-12 lg:mt-20 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full bg-white font-quicksand text-[20px] md:text-[26px] lg:text-[32px] font-bold text-black flex flex-col items-center gap-0 leading-none hover:opacity-90 transition-opacity cursor-pointer">
                  <span className="leading-none">RUBY.D</span>
                  <span className="text-[12px] md:text-[13px] lg:text-[15px] font-quicksand font-bold text-black leading-none">
                    coming soon!
                  </span>
                </button>
              </div>

              {/* Sapphire Video */}
              <div className="flex flex-col items-center">
                {/* Container maintains 356x347px for layout with rounded corners */}
                <div
                  className="w-[356px] h-[347px] relative overflow-hidden rounded-2xl"
                  onMouseEnter={() => {
                    sapphireVideoRef.current?.play();
                  }}
                  onMouseLeave={() => {
                    sapphireVideoRef.current?.pause();
                  }}
                >
                  {/* Larger video container - extends beyond but clipped by parent with rounded corners */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[712px] h-[694px]">
                    <video
                      ref={sapphireVideoRef}
                      src="/videos/fourth-page/Sapphire.mp4"
                      loop
                      muted
                      playsInline
                      className="absolute left-1/2 top-1/2 -translate-x-[calc(65%)] -translate-y-1/2 w-[512px] h-[494px] object-cover"
                    />
                  </div>
                  {/* Border overlay matching visible area */}
                  <div className="absolute inset-0 rounded-2xl border border-white pointer-events-none" />
                </div>
                <button className="mt-4 md:mt-12 lg:mt-20 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full bg-white font-quicksand text-[20px] md:text-[26px] lg:text-[32px] font-bold text-black flex flex-col items-center gap-0 leading-none hover:opacity-90 transition-opacity cursor-pointer">
                  <span className="leading-none">SFYR.D</span>
                  <span className="text-[12px] md:text-[13px] lg:text-[15px] font-quicksand font-bold text-black leading-none">
                    coming soon!
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

