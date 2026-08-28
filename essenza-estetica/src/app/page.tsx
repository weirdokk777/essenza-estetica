import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Treatments from "@/components/sections/Treatments";
import AboutDoctor from "@/components/sections/AboutDoctor";
import Differentials from "@/components/sections/Differentials";
import Results from "@/components/sections/Results";
import CtaSection from "@/components/sections/CtaSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Treatments />
        <AboutDoctor />
        <Differentials />
        <Results />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
