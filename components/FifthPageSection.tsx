"use client";

import Image from "next/image";

export default function FifthPageSection() {
  return (
    <div className="w-full h-[1024px] bg-[#000000] relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/film-grain.jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full">
        {/* Text Section with margin top 20 */}
        <div className="mt-10 flex flex-col items-center text-center mb-20 gap-0">
          <h2 className="text-[40px] font-quicksand font-normal text-white leading-none m-0">
            Digitized Proprietary Investments Offerings
          </h2>
          <p className="text-[20px] font-quicksand font-normal text-white leading-none m-0">
            (Tokenized Special Purpose Vehicle Investment Fund)
          </p>
        </div>

        {/* Two Images with Buttons - Centered */}
        <div className="flex justify-center items-center gap-15 flex-1">
          {/* PECAT Image */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/fifth-page/pecat-image.svg"
              alt="PECAT"
              width={356}
              height={347}
              className="object-contain"
            />
            <button className="mt-40 px-6 rounded-full bg-white font-quicksand text-[32px] font-bold text-black flex flex-col items-center">
              PECAT.D
            </button>
          </div>

          {/* RLINK Image */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/fifth-page/rlink-image.svg"
              alt="RLINK"
              width={356}
              height={347}
              className="object-contain"
            />
            <button className="mt-40 px-6 rounded-full bg-white font-quicksand text-[32px] font-bold text-black flex flex-col items-center">
              RLINK.D
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

