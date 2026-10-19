import React from 'react';
import { 
  Smartphone, 
  Star, 
  ShieldCheck, 
  QrCode, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const AppDownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-white dark:bg-dark-950 text-dark-950 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-neutral-200/60 dark:border-dark-800">
      {/* Background radial glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-brand-400/10 dark:bg-brand-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Download Copy & Store Buttons */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-dark-900 border border-brand-500/20 dark:border-dark-800 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Available for iOS & Android</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-dark-950 dark:text-white leading-tight">
              Move effortlessly. <br />
              <span className="text-brand-600 dark:text-brand-500">Download the XLDriv App.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              Get instant rides within your city, schedule interstate trips, send parcels with live tracking, or negotiate fares directly with verified drivers in seconds.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center space-x-2.5 text-sm text-neutral-700 dark:text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-brand-400 shrink-0" />
                <span>Instant fare proposal & live bids</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-neutral-700 dark:text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-brand-400 shrink-0" />
                <span>Share trip status with loved ones</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-neutral-700 dark:text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-brand-400 shrink-0" />
                <span>Safe wallet & instant Nigerian bank top-up</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-neutral-700 dark:text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-brand-400 shrink-0" />
                <span>24/7 dedicated support & SOS emergency</span>
              </div>
            </div>

            {/* Store Download Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              {/* Google Play */}
              <a
                href={COMPANY_DETAILS.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-dark-950 dark:bg-white text-white dark:text-dark-950 hover:bg-black dark:hover:bg-neutral-100 font-bold flex items-center justify-center space-x-3 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.235 2.235 0 0 1-.61-1.586V3.4a2.235 2.235 0 0 1 .609-1.586zm11.603 11.603l2.42 2.42-12.784 7.378 10.364-9.798zm0-2.834L4.848.785 17.632 8.163l-2.42 2.42zm1.417 1.417l3.655-2.11a1.69 1.69 0 0 0 0-2.934l-3.655-2.11-2.42 2.42 2.42 2.42.001.314z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-semibold text-neutral-400 dark:text-neutral-500 leading-none">
                    GET IT ON
                  </span>
                  <span className="text-base font-extrabold text-white dark:text-dark-950 font-display">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Apple App Store */}
              <a
                href={COMPANY_DETAILS.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-neutral-100 dark:bg-dark-900 border border-neutral-300 dark:border-dark-700 text-dark-950 dark:text-white hover:bg-neutral-200 dark:hover:bg-dark-800 font-bold flex items-center justify-center space-x-3 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
              >
                <svg className="w-6 h-6 fill-current text-dark-950 dark:text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.13-1.95 1-3.08-.98.04-2.16.65-2.85 1.46-.6.7-1.13 1.83-.99 2.93 1.1.08 2.22-.56 2.84-1.31z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-semibold text-neutral-500 dark:text-neutral-400 leading-none">
                    Download on the
                  </span>
                  <span className="text-base font-extrabold text-dark-950 dark:text-white font-display">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            {/* Micro rating indicator */}
            <div className="flex items-center space-x-3 text-xs text-neutral-500 dark:text-neutral-400 pt-2">
              <div className="flex text-brand-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-500" />
                ))}
              </div>
              <span>4.8 Rating • 50,000+ Downloads across Nigeria</span>
            </div>
          </div>

          {/* Right Column: Phone Mockup image */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full transform -rotate-6" />
              <img
                src={`${import.meta.env.BASE_URL}images/appDisImg.webp`}
                alt="XLDriv Mobile Application Interface"
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
