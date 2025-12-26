import Image from "next/image";

const logos = [
  { src: "/images/series/series-1-polygon.svg", alt: "Polygon" },
  { src: "/images/series/series-2-coinbase.svg", alt: "Coinbase" },
  { src: "/images/series/series-3-pecapital.svg", alt: "PE Capital" },
  { src: "/images/series/series-4-zelle.svg", alt: "Zelle" },
  { src: "/images/series/series-5-pecado.svg", alt: "Pecado" },
  { src: "/images/series/series-6-gemini.svg", alt: "Gemini" },
  { src: "/images/series/series-7-lumia.svg", alt: "Lumia" },
  { src: "/images/series/series-8-metamask.svg", alt: "MetaMask" },
];

export default function LogoMarquee() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full h-[112px] bg-[#000000] overflow-hidden relative">
      {/* Film grain texture overlay */}
      <div className="film-grain-overlay" />
      <div className="relative z-10 flex items-center h-full animate-marquee whitespace-nowrap">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center mx-8 h-full flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="h-auto max-h-[60px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

