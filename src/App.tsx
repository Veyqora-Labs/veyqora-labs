import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { CapabilityStrip } from './sections/CapabilityStrip';
import { ServicesSection } from './sections/ServicesSection';
import { WorkSection } from './sections/WorkSection';
import { ProcessSection } from './sections/ProcessSection';
import { AboutSection } from './sections/AboutSection';
import { WhyVeyqoraSection } from './sections/WhyVeyqoraSection';
import { CTASection } from './sections/CTASection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#080B14] text-white selection:bg-[#0066FF]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        <HeroSection />
        <CapabilityStrip />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <AboutSection />
        <WhyVeyqoraSection />
        <CTASection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
