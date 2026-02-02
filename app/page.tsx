import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}