"use client";

import Image from "next/image";

export default function ThirdPageSection() {
  return (
    <div id="third-page" className="w-full min-h-[800px] md:min-h-[1000px] lg:h-[1350px] bg-[#FDFBF9] flex flex-col items-center justify-center relative py-8 md:py-10 lg:py-0">
      <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 w-full px-4">
        {/* Title Box */}
        <div className="flex items-center justify-center px-4 py-3 md:px-6 md:py-3.5 lg:px-8 lg:py-4 mt-4 md:mt-6 lg:mt-[30px] bg-black/50 max-w-[60%] md:max-w-[50%] lg:max-w-none">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-quicksand font-normal text-center text-white">
            Where Capital Market Investing Meets Innovation.
          </h2>
        </div>

        {/* First Black Rectangle Box */}
        <div className="relative w-full md:w-[700px] lg:w-[1150px] bg-[#000000] min-h-[400px] md:min-h-[500px] lg:min-h-[560px] rounded-[30px] overflow-hidden">
          {/* Film grain texture overlay */}
          <div className="film-grain-overlay" />
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row h-full p-3 md:p-4 lg:p-5">
            {/* First Column - Text */}
            <div className="flex-1 flex pl-4 md:pl-6 lg:pl-25 items-center justify-center py-4 md:py-0">
              <div className="flex flex-col gap-2 md:gap-3 text-left justify-center text-white opacity-80">
                    <h3 className="text-[18px] md:text-[21px] lg:text-[24px] font-quicksand font-bold">
                    For Financial Institutions
                    </h3>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] font-quicksand font-semibold">
                    Releasing cash flow on just part of an asset. Leverage your assets by accessing our liquidity solutions.
                    </p>
              </div>
            </div>
            {/* Second Column - Image */}
            <div className="flex-1 flex items-center justify-center py-4 md:py-0">
              <Image
                src="/images/third-page/first-box-content.svg"
                alt="First Box Content"
                width={444}
                height={462}
                loading="lazy"
                className="object-contain w-full max-w-[300px] md:max-w-[350px] lg:w-[444px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Second Black Rectangle Box */}
        <div className="relative w-full md:w-[700px] lg:w-[1150px] bg-[#000000] min-h-[600px] md:min-h-[700px] lg:min-h-[560px] rounded-[30px] overflow-hidden">
          {/* Film grain texture overlay */}
          <div className="film-grain-overlay" />
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row h-full p-3 md:p-4 lg:p-5">
            {/* First Column - Image */}
            <div className="flex-1 flex items-center justify-center py-4 md:py-0 order-2 md:order-1">
              <Image
                src="/images/third-page/second-box-content.svg"
                alt="Second Box Content"
                width={458}
                height={460}
                loading="lazy"
                className="object-contain w-full max-w-[300px] md:max-w-[350px] lg:w-[458px] h-auto"
              />
            </div>
            {/* Second Column - Text Content */}
            <div className="flex-1 flex items-center justify-center pr-4 md:pr-5 lg:pr-6 pl-4 md:pl-5 lg:pl-8 py-4 md:py-0 order-1 md:order-2">
              <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 text-white w-full">
                {/* First Paragraph */}
                <div className="flex gap-2 md:gap-3">
                    <div className="pl-2 md:pl-4 lg:pl-5 flex">
                        {/* Orange line/box */}
                        <div className="w-2 h-[60px] md:h-[80px] lg:h-[102px] bg-[#E59F19] rounded-full shrink-0"></div>
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h3 className="pl-3 md:pl-4 lg:pl-5 text-[20px] md:text-[22px] lg:text-[25px] font-quicksand font-bold">
                            Global Alternative Investment Access
                            </h3>
                            <p className="pl-3 md:pl-4 lg:pl-5 text-[12px] md:text-[13px] lg:text-[14px] font-quicksand font-semibold">
                            Unrestricted access to digital alternative investments, removing traditional geographic and financial barriers for High Net Worth Investors, Registered Investment Advisory Firms, Family Offices, and Institutions.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Second Paragraph */}
                <div className="flex flex-col gap-2 md:gap-3 text-white/80">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[25px] font-quicksand font-bold">
                    Instant Access To Liquidity
                  </h3>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-quicksand font-semibold">
                    Integrating tokenized alternative investments into the decentralized finance ecosystem transforms traditionally illiquid assets into instantly accessible capital, delivering unprecedented liquidity for sophisticated investors.
                  </p>
                </div>
                {/* Third Paragraph */}
                <div className="flex flex-col gap-2 md:gap-3 text-white/80">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[25px] font-quicksand font-bold">
                    Efficient Enhancement of Intrinsic Value
                  </h3>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-quicksand font-semibold">
                    Integrating tokenized alternative investments into the decentralized finance ecosystem elevates market transparency and strengthens the collective understanding of asset class valuation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

