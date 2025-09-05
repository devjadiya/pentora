import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Features from "./components/Features";
import MoreFeatures from "./components/MoreFeatures";
import Templates from "./components/Templates";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { TracingBeam } from "./components/TracingBeam"; // <-- IMPORT THE COMPONENT

export default function Home() {
  return (
    <div className="bg-[#04010E]">
      <Navbar />
      <main>
        <Hero />
        {/*
          This is the crucial part: Wrap all sections after the Hero
          in the TracingBeam component to get the scroll animation.
        */}
        <TracingBeam>
          <Clients />
          <Features />
          <MoreFeatures />
          <Templates />
          <CTA />
          <Footer />
        </TracingBeam>
      </main>
    </div>
  );
}