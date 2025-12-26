"use client";

import Image from "next/image";

export default function FifthPageSection() {
  return (
    <div className="w-full min-h-[600px] md:min-h-[800px] lg:h-[1024px] bg-[#000000] relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="film-grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-[600px] md:min-h-[800px] lg:h-full py-8 md:py-10 lg:py-0">
        {/* Text Section */}
        <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col items-center text-center mb-8 md:mb-12 lg:mb-20 gap-0 px-4">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-quicksand font-normal text-white leading-none m-0 mt-4 md:mt-6 lg:mt-10">
            Digitized Proprietary Investments Offerings
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-quicksand font-normal text-white leading-none m-0">
            (Tokenized Special Purpose Vehicle Investment Fund)
          </p>
        </div>

        {/* Two Images with Buttons - Centered */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-15 flex-1 px-4">
          {/* PECAT Image */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/fifth-page/pecat-image.svg"
              alt="PECAT"
              width={356}
              height={347}
              className="object-contain w-full max-w-[250px] md:max-w-[300px] lg:w-[356px] h-auto"
            />
            <button className="mt-8 md:mt-12 lg:mt-40 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full bg-white font-quicksand text-[20px] md:text-[26px] lg:text-[32px] font-bold text-black flex flex-col items-center hover:opacity-90 transition-opacity cursor-pointer">
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
              className="object-contain w-full max-w-[250px] md:max-w-[300px] lg:w-[356px] h-auto"
            />
            <button className="mt-8 md:mt-12 lg:mt-40 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full bg-white font-quicksand text-[20px] md:text-[26px] lg:text-[32px] font-bold text-black flex flex-col items-center hover:opacity-90 transition-opacity cursor-pointer">
              RLINK.D
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

