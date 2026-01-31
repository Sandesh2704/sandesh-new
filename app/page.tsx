import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import StickyCards from "@/components/StickyCards";
import Image from "next/image";

export default function Home() {
  return (
        <main className="bg-gradient-to-br from-black  to-slate-900 text-white">


      <Hero />
      <AboutSection />
    
      
      <StickyCards />
        <SelectedWork/>
</main>  );
}
