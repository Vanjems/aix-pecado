"use client";

import Image from "next/image";
import { useState } from "react";

export default function SeventhPageSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      <div className="relative z-10 flex flex-col items-center pt-15 h-full">
        {/* Text Box */}
        <div 
          className="flex items-center justify-center bg-black border border-white"
          style={{
            width: '620px',
            height: '120px',
          }}
        >
          <p className="text-[40px] px-22 font-quicksand font-normal text-white text-center">
            Become even greater at what you do.
          </p>
        </div>

        {/* Two Columns */}
        <div className="flex justify-center items-start gap-30 mt-12">
          {/* First Column */}
          <div className="flex flex-col items-center">
            {/* Row 1: Phone Image */}
            <Image
              src="/images/sixth-page/phone-image.svg"
              alt="Phone"
              width={445}
              height={445}
              className="object-contain"
            />

            {/* Centered Block: from Follow us through phone number */}
            <div className="flex flex-col w-[320px] mx-auto mt-6">
              {/* Row 2: Follow us text */}
              <div>
                <p className="text-[24px] font-quicksand font-bold text-white">
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

              {/* Row 4: Contact us text */}
              <div className="mt-6">
                <p className="text-[24px] font-quicksand font-bold text-white">
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
                  className="object-contain"
                />
                <p className="text-[20px] font-quicksand font-semibold text-white">
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
                  className="object-contain"
                />
                <p className="text-[20px] font-quicksand font-semibold text-white">
                  +1 888 929 2825
                </p>
              </div>
            </div>
          </div>

          {/* Second Column - Contact Form */}
          <div className="flex flex-col items-start">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <label className="text-[24px] font-quicksand font-bold text-white">
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
                className="rounded-lg bg-white/10 text-white placeholder-white placeholder-opacity-50 px-4 py-3 font-quicksand outline-none border-none"
                style={{
                  width: '615px',
                  height: '85px',
                }}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-1">
                <label className="text-[24px] font-quicksand font-bold text-white">
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
                className="rounded-lg bg-white/10 text-white placeholder-white placeholder-opacity-50 px-4 py-3 font-quicksand outline-none border-none"
                style={{
                  width: '615px',
                  height: '85px',
                }}
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-1">
                <label className="text-[24px] font-quicksand font-bold text-white">
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
                className="rounded-lg bg-white/10 text-white placeholder-white placeholder-opacity-50 px-4 py-3 font-quicksand outline-none border-none"
                style={{
                  width: '615px',
                  height: '335px',
                }}
              />
            </div>

            {/* Send Message Button */}
            <button
              className="rounded-full bg-white text-black font-quicksand font-bold text-[20px] mt-4 flex items-center justify-center"
              style={{
                width: '227px',
                height: '65px',
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

