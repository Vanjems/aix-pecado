"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full min-h-[112px] bg-[#000000] relative">
      {/* Film grain texture overlay */}
      <div className="film-grain-overlay" />
      <div className="relative z-10 flex items-center justify-between w-full min-h-[112px]">
        {/* Logo on the left */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="m-5 shrink-0 cursor-pointer"
        >
          <Image
            src="/images/logo-emrld.svg"
            alt="Logo"
            width={200}
            height={60}
            className="h-auto"
            priority
          />
        </a>

        {/* Pill on the right with navigation */}
        <nav className="m-5 rounded-full shrink-0 flex items-center justify-center gap-10 w-[773px] h-[72px] bg-[rgba(53,53,53,0.5)]">
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
      </div>
    </header>
  );
}

