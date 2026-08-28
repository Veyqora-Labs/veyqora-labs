import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { InquiryFormData, InquiryFormErrors } from '../types';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'AI Automation',
    budgetRange: '$10k - $25k',
    message: '',
  });

  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: InquiryFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project or operational problem';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real frontend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'AI Automation',
      budgetRange: '$10k - $25k',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#0D111F] border border-white/[0.08] shadow-2xl relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
              <p className="text-sm text-[#A7AFBE] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to Veyqora Labs. We will review your project details and get back to you within 24 hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] max-w-md mx-auto text-left font-mono text-xs text-[#A7AFBE] space-y-1">
              <div className="text-white font-semibold mb-2 border-b border-white/[0.06] pb-1">Submission Telemetry</div>
              <div><span className="text-white/40">Name:</span> {formData.name}</div>
              <div><span className="text-white/40">Type:</span> {formData.projectType}</div>
              <div><span className="text-white/40">Budget:</span> {formData.budgetRange}</div>
              <div><span className="text-white/40">Email:</span> {formData.email}</div>
            </div>

            <Button
              variant="outline"
              size="sm"
              icon={<RefreshCw className="w-3.5 h-3.5" />}
              onClick={handleReset}
            >
              Submit Another Project Inquiry
            </Button>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono font-medium text-white">
                  FULL NAME <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-[#A7AFBE]/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all ${
                    errors.name ? 'border-red-500/80 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono font-medium text-white">
                  EMAIL ADDRESS <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="alex@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-[#A7AFBE]/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all ${
                    errors.email ? 'border-red-500/80 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                  }`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Company (Optional) */}
              <div className="space-y-2">
                <label htmlFor="company" className="block text-xs font-mono font-medium text-white">
                  COMPANY / ORGANISATION <span className="text-[#A7AFBE] text-[10px]">(OPTIONAL)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#080B14] border border-white/10 hover:border-white/20 text-sm text-white placeholder-[#A7AFBE]/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label htmlFor="projectType" className="block text-xs font-mono font-medium text-white">
                  PROJECT TYPE
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#080B14] border border-white/10 hover:border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all cursor-pointer"
                >
                  <option value="AI Automation">AI Automation</option>
                  <option value="Custom AI Software">Custom AI Software</option>
                  <option value="AI MVP Development">AI MVP Development</option>
                  <option value="Technical Partnership">Technical Partnership / Other</option>
                </select>
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <label htmlFor="budgetRange" className="block text-xs font-mono font-medium text-white">
                PROJECT BUDGET RANGE
              </label>
              <select
                id="budgetRange"
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#080B14] border border-white/10 hover:border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all cursor-pointer"
              >
                <option value="< $10k">&lt; $10,000</option>
                <option value="$10k - $25k">$10,000 - $25,000</option>
                <option value="$25k - $50k">$25,000 - $50,000</option>
                <option value="$50k+">$50,000+</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono font-medium text-white">
                PROJECT OVERVIEW / PROBLEM <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                placeholder="Tell us what you're trying to build or automate, your key objectives, and any technical preferences..."
                className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-[#A7AFBE]/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all resize-none ${
                  errors.message ? 'border-red-500/80 bg-red-500/5' : 'border-white/10 hover:border-white/20'
                }`}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              variant="primary"
              disabled={isSubmitting}
              className="w-full justify-center"
              icon={
                isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )
              }
            >
              {isSubmitting ? 'Processing Inquiry...' : 'Send Project Inquiry'}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
