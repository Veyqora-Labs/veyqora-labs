import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { CapabilityStrip } from './sections/CapabilityStrip';
import { ServicesSection } from './sections/ServicesSection';
import { ProblemSolutionSection } from './sections/ProblemSolutionSection';
import { ProcessSection } from './sections/ProcessSection';
import { WhoWeHelpSection } from './sections/WhoWeHelpSection';
import { WorkSection } from './sections/WorkSection';
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

      {/* Main Narrative Flow */}
      <main>
        <HeroSection />
        <CapabilityStrip />
        <ServicesSection />
        <ProblemSolutionSection />
        <ProcessSection />
        <WhoWeHelpSection />
        <WorkSection />
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
