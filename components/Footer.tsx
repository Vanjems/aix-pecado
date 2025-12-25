"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[425px] bg-[#000000] relative overflow-hidden">
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
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-row gap-8 h-full px-8 py-8">
          {/* First Column */}
          <div className="flex flex-col flex-1 justify-center gap-2 pl-10">
            {/* Logo */}
            <div className="flex">
              <Image
                src="/images/logo-emrld.svg"
                alt="Logo"
                width={200}
                height={60}
                className="h-auto"
              />
            </div>
            
            {/* Gap-2 */}
            <div className="h-2" />
            
            {/* Description Text */}
            <p className="font-quicksand font-medium text-[12px] text-white">
              AI.X is an innovative venture founded by a team of dynamic entrepreneurs, each contributing deep expertise and a shared commitment to redefining the future of investment. At its core, AI.X embodies a collective vision: to revolutionize asset participation through the next era of Web 3.0 by leveraging the transformative capabilities of blockchain technology. Our mission is to deliver a more accessible, transparent, and operationally efficient investment ecosystem—empowering sophisticated investors and institutions to unlock new opportunities with confidence.
            </p>
            
            {/* Gap-4 */}
            <div className="h-4" />
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <Image
                src="/images/sixth-page/icons-facebook.svg"
                alt="Facebook"
                width={50}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/sixth-page/icons-twitter.svg"
                alt="Twitter/X"
                width={50}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/sixth-page/icons-instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/sixth-page/icons-linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            
            {/* Gap-4 */}
            <div className="h-4" />
            
            {/* Copyright Text */}
            <p className="font-quicksand font-medium text-[12px] text-white">
              ©2024 AI.X Pecado. All Rights Reserved.
            </p>
          </div>
          
          {/* Second Column */}
          <div className="flex flex-col flex-1 items-center justify-center">
            <div className="flex flex-row gap-25">
              {/* First Sub-column: IMPORTANT */}
              <div className="flex flex-col gap-7">
                <p className="font-quicksand text-[14px] font-bold text-white">
                  IMPORTANT
                </p>
                <p className="font-quicksand text-[14px] text-white">Privacy Policy</p>
                <p className="font-quicksand text-[14px] text-white">Terms of Use</p>
                <p className="font-quicksand text-[14px] text-white">Cookie Policy</p>
              </div>
              
              {/* Second Sub-column: COMPANY */}
              <div className="flex flex-col gap-7">
                <p className="font-quicksand text-[14px] font-bold text-white">
                  COMPANY
                </p>
                <p className="font-quicksand text-[14px] text-white">Ecosystem</p>
                <p className="font-quicksand text-[14px] text-white">Whitepaper</p>
                <p className="font-quicksand text-[14px] text-white">Tokenomics</p>
              </div>
              
              {/* Third Sub-column: SITEMAP */}
              <div className="flex flex-col gap-7">
                <p className="font-quicksand text-[14px] font-bold text-white">
                  SITEMAP
                </p>
                <p className="font-quicksand text-[14px] text-white">About us</p>
                <p className="font-quicksand text-[14px] text-white">Latest news</p>
                <p className="font-quicksand text-[14px] text-white">FAQs</p>
                <p className="font-quicksand text-[14px] text-white">Contact us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

