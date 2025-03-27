import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import BenefitsSection from "../sections/BenefitsSection";
import Features from "../sections/Features";
import CTA from "../sections/CTA";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BenefitsSection />
      <Features />
      <CTA />
    </>
  );
}

export default Home;
