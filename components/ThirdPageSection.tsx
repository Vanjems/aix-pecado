"use client";

import Image from "next/image";

export default function ThirdPageSection() {
  return (
    <div className="w-full h-[1350px] bg-[#FDFBF9] flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center gap-8">
        {/* Title Box */}
        <div className="flex items-center justify-center px-8 py-4 mt-[30px] bg-black/50">
          <h2 className="text-[40px] font-quicksand font-normal text-center text-white">
            Where Capital Market Investing Meets Innovation.
          </h2>
        </div>

        {/* First Black Rectangle Box */}
        <div className="relative">
          <Image
            src="./images/third-page/black-rectangle.svg"
            alt="Black Rectangle"
            width={1150}
            height={560}
            className="object-contain"
          />
          {/* Content overlay */}
          <div className="absolute inset-0 flex p-5">
            {/* First Column - Text */}
            <div className="flex-1 flex pl-25 items-center justify-center">
              <div className="flex flex-col gap-3 text-left justify-center text-white ">
                    <h3 className="text-[24px] font-quicksand font-bold">
                    For Financial Institutions
                    </h3>
                    <p className="text-[16px] font-quicksand font-semibold">
                    Releasing cash flow on just part of an asset. Leverage your assets by accessing our liquidity solutions.
                    </p>
              </div>
            </div>
            {/* Second Column - Image */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/images/third-page/first-box-content.svg"
                alt="First Box Content"
                width={444}
                height={462}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Second Black Rectangle Box */}
        <div className="relative">
          <Image
            src="./images/third-page/black-rectangle.svg"
            alt="Black Rectangle"
            width={1150}
            height={560}
            className="object-contain"
          />
          {/* Content overlay */}
          <div className="absolute inset-0 flex p-5">
            {/* First Column - Image */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/images/third-page/second-box-content.svg"
                alt="Second Box Content"
                width={458}
                height={460}
                className="object-contain"
              />
            </div>
            {/* Second Column - Text Content */}
            <div className="flex-1 flex items-center justify-center pr-6 pl-8">
              <div className="flex flex-col gap-14 text-white">
                {/* First Paragraph */}
                <div className="flex gap-3">
                    <div className="pl-5 flex">
                        {/* Orange line/box */}
                        <div className="w-2 h-[102px] bg-[#E59F19] rounded-full shrink-0"></div>
                        <div className="flex flex-col gap-3">
                            <h3 className="pl-5 text-[25px] font-quicksand font-bold">
                            Global Alternative Investment Access
                            </h3>
                            <p className="pl-5 text-[14px] font-quicksand font-semibold">
                            Unrestricted access to digital alternative investments, removing traditional geographic and financial barriers for High Net Worth Investors, Registered Investment Advisory Firms, Family Offices, and Institutions.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Second Paragraph */}
                <div className="flex flex-col gap-3 text-white/80">
                  <h3 className="text-[25px] font-quicksand font-bold">
                    Instant Access To Liquidity
                  </h3>
                  <p className="text-[14px] font-quicksand font-semibold">
                    Integrating tokenized alternative investments into the decentralized finance ecosystem transforms traditionally illiquid assets into instantly accessible capital, delivering unprecedented liquidity for sophisticated investors.
                  </p>
                </div>
                {/* Third Paragraph */}
                <div className="flex flex-col gap-3 text-white/80">
                  <h3 className="text-[25px] font-quicksand font-bold">
                    Efficient Enhancement of Intrinsic Value
                  </h3>
                  <p className="text-[14px] font-quicksand font-semibold">
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

