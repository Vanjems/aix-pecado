"use client";

import Image from "next/image";
import { useState } from "react";

export default function TwoColumnSection() {
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
    <div className="w-full h-[1024px] relative flex">
      {/* First Column - Image background */}
      <div className="w-1/2 h-full bg-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src="/images/second-page-image.svg"
            alt="Second Page Image"
            width={1920}
            height={1024}
            className="object-contain"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </div>
      </div>

      {/* Second Column - Content */}
      <div 
        className="w-1/2 h-full flex flex-col items-center justify-center px-8 relative z-10"
        style={{ backgroundColor: '#FDFBF9' }}
      >
        <div className="flex flex-col items-center gap-5 max-w-lg">
          {/* First Row */}
          <div className="flex items-center justify-center gap-4 w-full">
            <button
              onClick={() => setSelectedButton('pathway')}
              className={`text-[24px] font-quicksand text-black text-right flex-1 cursor-pointer transition-all ${
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
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setSelectedButton('legacy')}
              className={`text-[24px] font-quicksand text-black text-left flex-1 cursor-pointer transition-all whitespace-nowrap ${
                selectedButton === 'legacy' ? 'font-bold' : 'font-normal'
              }`}
            >
              Creating Your Legacy
            </button>
          </div>

          {/* Second Row - Box with paragraph */}
          <div style={{ marginTop: '20px', minHeight: '200px', width: '100%' }}>
            <div
              className="px-2 py-4"
              style={{
                borderRadius: '30px',
                backgroundColor: '#FDFBF9',
                border: '1px solid black',
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <p className="font-quicksand font-normal text-black text-justify">
                {selectedButton === 'pathway' ? pathwayContent : legacyContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

