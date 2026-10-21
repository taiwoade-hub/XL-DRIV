import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Check
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-dark-950 text-white border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-neutral-700 flex items-center justify-center p-1 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="XL Driv Official Logo" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                XL<span className="text-brand-500">Driv</span>
              </span>
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Beyond ride hailing and sharing services, we provide comfort, satisfaction, and premium value to our customers. Move on your terms with fair negotiated fares and zero-commission driver partnerships.
            </p>

            {/* Social Icons with Clean SVGs */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_DETAILS.whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-neutral-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-neutral-400 hover:text-brand-500 hover:border-brand-500/50 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-neutral-400 hover:text-brand-500 hover:border-brand-500/50 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-neutral-400 hover:text-brand-500 hover:border-brand-500/50 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-neutral-400 hover:text-brand-500 hover:border-brand-500/50 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links / Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/services#city-rides" className="hover:text-brand-400 transition-colors">
                  City Rides
                </Link>
              </li>
              <li>
                <Link to="/services#trucks-logistics" className="hover:text-brand-400 transition-colors">
                  Clearing & Forwarding / Trucking
                </Link>
              </li>
              <li>
                <Link to="/services#ride-sharing" className="hover:text-brand-400 transition-colors">
                  Ride-Sharing / Carpool
                </Link>
              </li>
              <li>
                <Link to="/services#courier" className="hover:text-brand-400 transition-colors">
                  Courier & Parcels
                </Link>
              </li>
              <li>
                <Link to="/services#city-to-city" className="hover:text-brand-400 transition-colors">
                  City-to-City (Interstate)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/about" className="hover:text-brand-400 transition-colors">
                  About XLDriv
                </Link>
              </li>
              <li>
                <Link to="/for-drivers" className="hover:text-brand-400 transition-colors">
                  For Drivers (0% Commission)
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-brand-400 transition-colors">
                  Safety Policy & Standards
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-400 transition-colors">
                  Privacy Policy (NDPR)
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-brand-400 transition-colors">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="hover:text-brand-400 transition-colors text-neutral-500">
                  Account & Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Headquarters & Contact
            </h4>
            
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-brand-400">
                  {COMPANY_DETAILS.phonePrimary}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.emailInfo}`} className="hover:text-brand-400">
                  {COMPANY_DETAILS.emailInfo}
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-neutral-300 mb-2">
                Stay updated with fare perks & news
              </span>
              {!newsletterSubmitted ? (
                <form onSubmit={handleNewsletter} className="space-y-2">
                  <div className="flex">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-3.5 py-2.5 rounded-l-xl bg-dark-900 border border-dark-700 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-brand-500 w-full"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2.5 rounded-r-xl bg-brand-500 hover:bg-brand-600 text-dark-950 font-bold text-xs shrink-0 transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                  <label className="flex items-center space-x-1.5 text-[11px] text-neutral-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="accent-brand-500 rounded"
                      required
                    />
                    <span>I agree to receive updates & offers</span>
                  </label>
                </form>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center space-x-2">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Subscribed! Thank you for joining XLDriv.</span>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Bottom copyright & NDPR statement */}
        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>CAC Registered in Nigeria</span>
            <span>•</span>
            <span>NDPR Compliant</span>
            <span>•</span>
            <Link to="/terms" className="hover:text-neutral-300">Terms</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-neutral-300">Privacy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
