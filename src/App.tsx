import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Inventory from '@/components/Inventory';
import Calculator from '@/components/Calculator';
import TradeIn from '@/components/TradeIn';
import HowItWorks from '@/components/HowItWorks';
import Service from '@/components/Service';
import Reviews from '@/components/Reviews';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)]">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Inventory />
        <Calculator />
        <TradeIn />
        <HowItWorks />
        <Service />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
