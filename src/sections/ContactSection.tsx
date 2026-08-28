import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { Mail, Linkedin, Github, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative z-10 bg-[#080B14] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something Useful."
          description="Tell us about your project requirements, business goals, or operational workflow challenges."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Direct Contact Telemetry Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D111F] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Direct Communication</h3>
              
              <a
                href="mailto:veyqora.labs@gmail.com"
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Email Inquiry</div>
                  <div className="text-[#A7AFBE]">veyqora.labs@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/veyqora-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors text-xs"
              >
                <Linkedin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">LinkedIn Page</div>
                  <div className="text-[#A7AFBE]">linkedin.com/company/veyqora-labs</div>
                </div>
              </a>

              <a
                href="https://github.com/veyqora-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors text-xs"
              >
                <Github className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">GitHub Repositories</div>
                  <div className="text-[#A7AFBE]">github.com/veyqora-labs</div>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D111F] border border-white/[0.08] space-y-3 font-mono text-xs text-[#A7AFBE]">
              <div className="flex items-center gap-2 text-white font-medium">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Response Time SLA</span>
              </div>
              <p className="leading-relaxed">
                We review every project inquiry directly with engineering leadership and reply within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
