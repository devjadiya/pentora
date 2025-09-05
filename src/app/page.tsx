import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Features from "./components/Features";
import MoreFeatures from "./components/MoreFeatures";
import Templates from "./components/Templates";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#04010E]">
      <Navbar />
      <main>
        <Hero />
          <Clients />
          <Features />
          <MoreFeatures />
          <Templates />
          <CTA />
          <Footer />
      </main>
    </div>
  );
}