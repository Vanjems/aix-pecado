"use client";

import Image from "next/image";
import { useState } from "react";

export default function SecondPageSection() {
  const [selectedButton, setSelectedButton] = useState<'pathway' | 'legacy'>('legacy');

  const pathwayContent = (
    <>
      AI.X is committed to expanding access to sensible alternative investments through asset-backed tokens. Our mission is to{" "}
      <span className="font-bold">bridge the traditional investment landscape with the emerging ecosystem of tokenized real-world assets</span>
      . By focusing on high-value, rare collectibles, AI.X is pioneering the integration of previously inaccessible asset classes into traditional finance through secure and sophisticated blockchain technology.
    </>
  );

  const legacyContent = (
    <>
      Our vision is to redefine global{" "}
      <span className="font-bold">access to alternative investments</span>
      {" "}by making rare, high-value assets, securely investable through blockchain technology—empowering High Net Worth Investors, Registered Investment Advisory Firms, Family Offices, and Institutions to participate in a more inclusive, efficient, and transparent financial ecosystem.
    </>
  );

  return (
    <div id="second-page" className="w-full min-h-150 md:min-h-200 lg:h-256 relative flex flex-col lg:flex-row">
      {/* First Column - Image background */}
      <div className="w-full lg:w-1/2 h-100 md:h-125 lg:h-full bg-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <video
            src="/videos/the-model.mp4"
            autoPlay
            loop
            muted
            className="object-contain max-w-1500 max-h-840"
          />
        </div>
      </div>

      {/* Second Column - Content */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-0 relative z-10 bg-[#FDFBF9]">
        <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5 max-w-lg w-full">
          {/* First Row */}
          <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 w-full">
            <button
              onClick={() => setSelectedButton('pathway')}
              className={`text-[16px] md:text-[20px] lg:text-[24px] font-quicksand text-black text-right flex-1 cursor-pointer transition-all ${
                selectedButton === 'pathway' ? 'font-bold' : 'font-normal'
              }`}
            >
              Your Pathway To Inaccessible Assets
            </button>
            <div className="flex items-center justify-center shrink-0">
              <Image
                src="/images/Line 1.svg"
                alt="Divider"
                width={1}
                height={35}
                className="object-contain h-[25px] md:h-[30px] lg:h-[35px]"
              />
            </div>
            <button
              onClick={() => setSelectedButton('legacy')}
              className={`text-[16px] md:text-[20px] lg:text-[24px] font-quicksand text-black text-left flex-1 cursor-pointer transition-all whitespace-nowrap ${
                selectedButton === 'legacy' ? 'font-bold' : 'font-normal'
              }`}
            >
              Creating Your Legacy
            </button>
          </div>

          {/* Second Row - Box with paragraph */}
          <div className="mt-4 md:mt-5 lg:mt-5 min-h-[200px] w-full">
            <div className="px-4 py-3 md:px-6 md:py-4 lg:px-2 lg:py-4 rounded-[30px] bg-[#FDFBF9] border border-black min-h-[200px] flex items-center">
              <p className="font-quicksand font-normal text-black text-justify text-sm md:text-base">
                {selectedButton === 'pathway' ? pathwayContent : legacyContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

