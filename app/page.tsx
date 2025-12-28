// Background now uses video elements (styles added in globals.css)
import LogoMarquee from "@/components/LogoMarquee";
import HeroSection from "@/components/HeroSection";
import SecondPageSection from "@/components/SecondPageSection";
import ThirdPageSection from "@/components/ThirdPageSection";
import FourthPageSection from "@/components/FourthPageSection";
import FifthPageSection from "@/components/FifthPageSection";
import SixthPageSection from "@/components/SixthPageSection";
import SeventhPageSection from "@/components/SeventhPageSection";
import EighthPageSection from "@/components/EighthPageSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
    <LogoMarquee />
    <SecondPageSection />
    <ThirdPageSection />
    <FourthPageSection />
    <FifthPageSection />
    <SixthPageSection />
    <SeventhPageSection />
    <EighthPageSection />
    <Footer />
    </>
  );
}


