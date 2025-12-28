"use client";

import Image from "next/image";

export default function EighthPageSection() {
  return (
    <div className="w-full min-h-[600px] md:min-h-[800px] lg:min-h-[1024px] relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/eigth-page/drone to lake.mp4"
          autoPlay
          loop
          muted
          preload="metadata"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to dim the background video */}
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] md:min-h-[800px] lg:min-h-[1024px] py-8 md:py-12 lg:py-0 px-4 md:px-8 lg:px-4">
        <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-4 max-w-4xl">
          {/* First Paragraph */}
          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-quicksand font-semibold text-white text-justify">
            DISCLAIMER: Investing in a Special Purpose Vehicle's offered units is speculative and involves substantial risks. The SPV cannot assure you that it will achieve its objectives or that the value of its assets will not decline. Therefore, you should purchase these digitized securities only if you can afford to lose the entirety of your investment.
          </p>

          {/* Second Paragraph */}
          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-quicksand font-semibold text-white text-justify">
            The information provided herein is intended for informational purposes only and should not be construed as proprietary financial advice. Investors are strongly encouraged to conduct thorough due diligence, consult with qualified financial and industry experts, and evaluate their risk tolerance capacity before committing to any digitized or tokenized investment. The dynamic nature of digital assets requires a comprehensive understanding of the associated risks and potential returns, underscoring the importance of informed decision-making in the realm of token-based investments.
          </p>

          {/* Third Paragraph */}
          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-quicksand font-semibold text-white text-justify">
            Note: The foregoing may contain forward-looking statements based on our current expectations, plans, estimates, assumptions, and beliefs, all of which involve numerous risks and uncertainties. Although we believe the expectations reflected in such forward-looking statements are based on reasonable assumptions, actual results and performance may differ materially from those expressed or implied in these statements.
          </p>
        </div>
      </div>
    </div>
  );
}

