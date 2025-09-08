"use client";
import { Header } from "./components/Header";
import { HeroSection } from "./section/Hero";
import AboutSection from "./section/About";
import { TechStack } from "./components/TechStack";
import { BackgroundBeams } from "@/lib/ui/background-beams";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TechStack />
        <AboutSection />
        <BackgroundBeams className="h-[53rem]" />
      </main>

      <Footer />
    </>
  );
}
