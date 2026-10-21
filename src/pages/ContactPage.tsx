import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Rider Support',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      {/* Hero Header */}
      <div className="bg-neutral-50 dark:bg-dark-900/60 py-16 border-b border-neutral-200/80 dark:border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>24/7 Dedicated Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-dark-950 dark:text-white font-display tracking-tight">
            We’re always here to <br />
            <span className="text-brand-600 dark:text-brand-400">help you keep moving.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Have an inquiry about ride bookings, driver subscriptions, freight haulage, or need immediate assistance? Reach our Lagos headquarters anytime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-900 dark:bg-dark-900 text-white rounded-3xl p-8 border border-neutral-800 dark:border-dark-800 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold font-display text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Our support desk operates round the clock. You can call, email, chat on WhatsApp, or visit our head office in Egbeda, Lagos.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 text-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Primary Hotline
                    </span>
                    <a href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`} className="font-extrabold text-sm sm:text-base text-white hover:text-brand-400">
                      {COMPANY_DETAILS.phonePrimary}
                    </a>
                    <span className="block text-xs text-neutral-500">
                      Alt: {COMPANY_DETAILS.phoneSecondary}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 text-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Email Inquiries
                    </span>
                    <a href={`mailto:${COMPANY_DETAILS.emailInfo}`} className="font-semibold text-sm text-white hover:text-brand-400">
                      {COMPANY_DETAILS.emailInfo}
                    </a>
                    <span className="block text-xs text-neutral-500">
                      Support: {COMPANY_DETAILS.emailSupport}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 text-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Registered Office
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 text-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Operational Hours
                    </span>
                    <p className="text-xs text-white">
                      Rides & Dispatch: 24/7, 365 Days <br />
                      Office Walk-in: Mon - Fri, 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={COMPANY_DETAILS.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-dark-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-dark-800 shadow-xl">
            <h3 className="text-2xl font-bold font-display text-dark-950 dark:text-white mb-1">
              Send Us a Message
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              Fill in your inquiry and our operations team will respond promptly.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chioma Eze"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="080 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Subject / Topic *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="Rider Support">Rider Support & Inquiries</option>
                      <option value="Driver Partner">Driver Subscription & Registration</option>
                      <option value="Logistics Quote">Trucking, Clearing & Freight</option>
                      <option value="Interstate Route">City-to-City Long Distance</option>
                      <option value="Partnership">Corporate Partnership</option>
                      <option value="Account Deletion">Account Deletion Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-dark-950 hover:bg-black text-white dark:bg-brand-500 dark:text-dark-950 dark:hover:bg-brand-400 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-brand-500 dark:text-dark-950" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h4 className="text-2xl font-black text-dark-950 dark:text-white font-display">Message Sent!</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-sm mx-auto">
                  Thank you, <b>{formData.name}</b>. We have received your message regarding <b>{formData.subject}</b> and will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-brand-600 dark:text-brand-400 font-bold underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Embedded Interactive Google Map */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-neutral-200 dark:border-dark-800 shadow-xl bg-neutral-100 dark:bg-dark-900">
          <div className="p-4 bg-white dark:bg-dark-950 border-b border-neutral-200 dark:border-dark-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-bold text-dark-950 dark:text-white">
                XLDriv Corporate Headquarters — 27, Raji Oba Street, Egbeda, Lagos
              </span>
            </div>
            <a
              href={COMPANY_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-dark-950 dark:hover:text-white flex items-center space-x-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="h-80 w-full">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=27+raji+oba+street,+Egbeda,+Lagos&output=embed"
              title="XLDriv Office Location"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
