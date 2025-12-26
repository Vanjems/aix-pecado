"use client";

import Image from "next/image";
import { useState } from "react";

export default function SeventhPageSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div id="seventh-page" className="w-full min-h-[800px] md:min-h-[900px] lg:h-[1024px] bg-[#000000] relative overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="film-grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-8 md:pt-12 lg:pt-15 py-8 md:py-10 lg:py-0 min-h-[800px] md:min-h-[900px] lg:h-full">
        {/* Text Box */}
        <div className="flex items-center justify-center bg-black border border-white w-full max-w-[620px] min-h-[100px] md:min-h-[110px] lg:h-[120px] px-4 md:px-8 lg:px-22">
          <p className="text-[24px] md:text-[32px] lg:text-[40px] font-quicksand font-normal text-white text-center">
            Become even greater at what you do.
          </p>
        </div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 md:gap-10 lg:gap-30 mt-8 md:mt-10 lg:mt-12 px-4 md:px-6 lg:px-0">
          {/* First Column */}
          <div className="flex flex-col items-center w-full lg:w-auto">
            {/* Row 1: Phone Image */}
            <Image
              src="/images/sixth-page/phone-image.svg"
              alt="Phone"
              width={445}
              height={445}
              className="object-contain w-full max-w-[300px] md:max-w-[350px] lg:w-[445px] h-auto"
            />

            {/* Centered Block: from Follow us through phone number */}
            <div className="flex flex-col w-full max-w-[320px] mx-auto mt-6">
              {/* Row 2: Follow us text */}
              <div>
                <p className="text-[18px] md:text-[21px] lg:text-[24px] font-quicksand font-bold text-white">
                  Follow us
                </p>
              </div>

              {/* Row 3: Social Media Icons */}
              <div className="flex items-center gap-2 mt-0">
                <Image
                  src="/images/sixth-page/icons-facebook.svg"
                  alt="Facebook"
                  width={50}
                  height={50}
                  className="object-contain w-[40px] md:w-[45px] lg:w-[50px] h-auto"
                />
                <Image
                  src="/images/sixth-page/icons-twitter.svg"
                  alt="Twitter/X"
                  width={50}
                  height={50}
                  className="object-contain w-[40px] md:w-[45px] lg:w-[50px] h-auto"
                />
                <Image
                  src="/images/sixth-page/icons-instagram.svg"
                  alt="Instagram"
                  width={50}
                  height={50}
                  className="object-contain w-[40px] md:w-[45px] lg:w-[50px] h-auto"
                />
                <Image
                  src="/images/sixth-page/icons-linkedin.svg"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                  className="object-contain w-[40px] md:w-[45px] lg:w-[50px] h-auto"
                />
              </div>

              {/* Row 4: Contact us text */}
              <div className="mt-6">
                <p className="text-[18px] md:text-[21px] lg:text-[24px] font-quicksand font-bold text-white">
                  Contact us
                </p>
              </div>

              {/* Row 5: Email */}
              <div className="flex items-center gap-2 mt-0">
                <Image
                  src="/images/sixth-page/icons-email.svg"
                  alt="Email"
                  width={25}
                  height={25}
                  className="object-contain w-[20px] md:w-[22px] lg:w-[25px] h-auto"
                />
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-quicksand font-semibold text-white">
                  info@pecapita.org
                </p>
              </div>

              {/* Row 6: Phone */}
              <div className="flex items-center gap-2 mt-0">
                <Image
                  src="/images/sixth-page/icons-phone.svg"
                  alt="Phone"
                  width={25}
                  height={25}
                  className="object-contain w-[20px] md:w-[22px] lg:w-[25px] h-auto"
                />
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-quicksand font-semibold text-white">
                  +1 888 929 2825
                </p>
              </div>
            </div>
          </div>

          {/* Second Column - Contact Form */}
          <div className="flex flex-col items-start w-full lg:w-auto">
            {/* Name Field */}
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-1">
                <label className="text-[18px] md:text-[21px] lg:text-[24px] font-quicksand font-bold text-white">
                  Name
                </label>
                {name === "" && (
                  <span className="text-red-500">*</span>
                )}
              </div>
              <input
                type="text"
                placeholder="What is your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg bg-white/10 text-white placeholder-white placeholder-opacity-50 px-4 py-3 font-quicksand outline-none border-none w-full lg:w-[615px] h-[65px] md:h-[75px] lg:h-[85px] text-[16px] md:text-[18px] lg:text-[20px]"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2 mt-4 w-full">
              <div className="flex items-center gap-1">
                <label className="text-[18px] md:text-[21px] lg:text-[24px] font-quicksand font-bold text-white">
                  Email
                </label>
                {email === "" && (
                  <span className="text-red-500">*</span>
                )}
              </div>
              <input
                type="email"
                placeholder="Please enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg bg-white/10 text-white placeholder-white placeholder-opacity-50 px-4 py-3 font-quicksand outline-none border-none w-full lg:w-[615px] h-[65px] md:h-[75px] lg:h-[85px] text-[16px] md:text-[18px] lg:text-[20px]"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2 mt-4 w-full">
              <div className="flex items-center gap-1">
                <label className="text-[18px] md:text-[21px] lg:text-[24px] font-quicksand font-bold text-white">
                  Message
                </label>
                {message === "" && (
                  <span className="text-red-500">*</span>
                )}
              </div>
              <textarea
                placeholder="Please enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-lg bg-white/10 text-white placeholder-white placeholder-opacity-50 px-4 py-3 font-quicksand outline-none border-none w-full lg:w-[615px] h-[250px] md:h-[300px] lg:h-[335px] text-[16px] md:text-[18px] lg:text-[20px] resize-none"
              />
            </div>

            {/* Send Message Button */}
            <button
              className="rounded-full bg-white text-black font-quicksand font-bold text-[16px] md:text-[18px] lg:text-[20px] mt-4 flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer w-full max-w-[227px] h-[55px] md:h-[60px] lg:h-[65px]"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

