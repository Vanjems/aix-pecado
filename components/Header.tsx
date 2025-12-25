import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full min-h-[112px] bg-[#1E1E1E]">
      {/* Logo on the left */}
      <div className="m-5 shrink-0">
        <Image
          src="/images/logo-emrld.svg"
          alt="Logo"
          width={200}
          height={60}
          className="h-auto"
          priority
        />
      </div>

      {/* Pill on the right with navigation */}
      <nav className="m-5 rounded-full shrink-0 flex items-center justify-center gap-[10px] w-[773px] h-[72px] bg-[rgba(53,53,53,0.5)]">
        <Link
          href="/about"
          className="text-white text-base font-semibold hover:opacity-80 transition-opacity"
        >
          About
        </Link>
        <Link
          href="/offerings"
          className="text-white text-base font-semibold hover:opacity-80 transition-opacity"
        >
          Offerings
        </Link>
        <Link
          href="/contact"
          className="text-white text-base font-semibold hover:opacity-80 transition-opacity"
        >
          Contact
        </Link>
        <Link
          href="/launch"
          className="text-black text-base font-semibold rounded-full bg-white py-3 px-7 hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Launch App
        </Link>
      </nav>
    </header>
  );
}

