"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    handleSmoothScroll(e, targetId);
  };

  return (
    <header className="sticky top-0 z-50 w-full min-h-[80px] md:min-h-[96px] lg:min-h-[112px] bg-[#000000] relative">
      {/* Film grain texture overlay */}
      <div className="film-grain-overlay" />
      <div className="relative z-10 flex items-center justify-between w-full min-h-[80px] md:min-h-[96px] lg:min-h-[112px]">
        {/* Logo on the left */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="m-3 md:m-4 lg:m-5 shrink-0 cursor-pointer"
        >
          <Image
            src="/images/logo-emrld.svg"
            alt="Logo"
            width={200}
            height={60}
            className="w-[120px] md:w-[160px] lg:w-[200px] h-auto"
            priority
          />
        </a>

        {/* Hamburger Menu Button - Mobile/Tablet */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden m-3 md:m-4 text-white text-2xl cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className="text-3xl">×</span>
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </button>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <nav className="hidden lg:flex m-5 rounded-full shrink-0 items-center justify-center gap-10 w-[773px] h-[72px] bg-[rgba(53,53,53,0.5)]">
          <a
            href="#second-page"
            onClick={(e) => handleSmoothScroll(e, 'second-page')}
            className="text-white text-base font-semibold hover:opacity-80 transition-opacity cursor-pointer"
          >
            About
          </a>
          <a
            href="#third-page"
            onClick={(e) => handleSmoothScroll(e, 'third-page')}
            className="text-white text-base font-semibold hover:opacity-80 transition-opacity cursor-pointer"
          >
            Offerings
          </a>
          <a
            href="#seventh-page"
            onClick={(e) => handleSmoothScroll(e, 'seventh-page')}
            className="text-white text-base font-semibold hover:opacity-80 transition-opacity cursor-pointer"
          >
            Contact
          </a>
          <Link
            href="/launch"
            className="ml-12 text-black text-base font-semibold rounded-full bg-white py-3 px-7 hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
          >
            Launch App
          </Link>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[80px] md:top-[96px] bg-[#000000] z-40 overflow-y-auto">
            <div className="flex flex-col items-center gap-6 py-8 px-4">
              <a
                href="#second-page"
                onClick={(e) => handleLinkClick(e, 'second-page')}
                className="text-white text-lg md:text-xl font-semibold hover:opacity-80 transition-opacity cursor-pointer"
              >
                About
              </a>
              <a
                href="#third-page"
                onClick={(e) => handleLinkClick(e, 'third-page')}
                className="text-white text-lg md:text-xl font-semibold hover:opacity-80 transition-opacity cursor-pointer"
              >
                Offerings
              </a>
              <a
                href="#seventh-page"
                onClick={(e) => handleLinkClick(e, 'seventh-page')}
                className="text-white text-lg md:text-xl font-semibold hover:opacity-80 transition-opacity cursor-pointer"
              >
                Contact
              </a>
              <Link
                href="/launch"
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-lg md:text-xl font-semibold rounded-full bg-white py-3 px-7 hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
              >
                Launch App
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

