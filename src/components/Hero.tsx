import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { BookingCard } from './BookingCard';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenDriverModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenDriverModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-white dark:bg-dark-950 overflow-hidden bg-grid-pattern dark:bg-grid-pattern-dark transition-colors duration-300">
      {/* Subtle brand warm ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-brand-400/10 dark:bg-brand-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Confident Editorial Copy */}
          <div className="lg:col-span-6 space-y-8 animate-fade-up">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-dark-900 border border-neutral-200/80 dark:border-dark-800 text-dark-900 dark:text-neutral-200 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
              <span>Nigeria's Fair Mobility Network</span>
              <span className="text-neutral-400 dark:text-neutral-500">•</span>
              <span className="text-brand-700 dark:text-brand-400 font-bold">Propose Your Fare</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-950 dark:text-white font-display leading-[1.08] text-balance">
              Move on <br className="hidden sm:inline" />
              <span className="relative inline-block">
                your terms.
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-500/25 -z-10 rounded" />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl text-balance">
              Book a ride, set your fare, and connect with drivers who get you moving. From everyday trips to long-distance journeys, XLDriv makes every trip simpler.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-2xl bg-dark-950 dark:bg-brand-500 hover:bg-black dark:hover:bg-brand-400 text-white dark:text-dark-950 font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Book a Ride</span>
                <ArrowRight className="w-5 h-5 text-brand-500 dark:text-dark-950 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenDriverModal ? onOpenDriverModal : () => window.location.href = '/for-drivers'}
                className="px-7 py-4 rounded-2xl border-2 border-dark-950 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-dark-900 text-dark-950 dark:text-white font-bold text-base transition-all flex items-center justify-center space-x-2"
              >
                <span>Drive with XLDriv</span>
              </button>
            </div>

            {/* Key Value Metrics & Social Proof */}
            <div className="pt-6 border-t border-neutral-100 dark:border-dark-800 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-black text-dark-950 dark:text-white font-display">0%</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Driver commission</div>
              </div>
              <div>
                <div className="text-2xl font-black text-dark-950 dark:text-white font-display">₦2,450</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Flat daily sub</div>
              </div>
              <div>
                <div className="flex items-center text-2xl font-black text-dark-950 dark:text-white font-display">
                  <span>4.8</span>
                  <Star className="w-4 h-4 ml-1 text-brand-500 fill-brand-500 inline" />
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">App store rating</div>
              </div>
            </div>

          </div>

          {/* Right Column: Vehicle Photography + Floating Interactive Booking Card */}
          <div className="lg:col-span-6 relative">
            {/* Background vehicle card frame */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-neutral-100 to-neutral-200/50 dark:from-dark-900 dark:to-dark-800 p-3 shadow-xl border border-neutral-200/60 dark:border-dark-800 mb-6 lg:mb-0">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-neutral-900 group">
                <img
                  src={`${import.meta.env.BASE_URL}images/bb.webp`}
                  alt="XLDriv Premium Vehicle"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-brand-500 text-black text-xs font-black uppercase tracking-wider">
                      Verified Fleet
                    </span>
                    <p className="text-sm font-bold mt-1 text-white">Modern AC Sedan & Executive Comfort</p>
                  </div>
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold">
                    <CheckCircle className="w-4 h-4 text-brand-400" />
                    <span>Real-Time GPS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Booking Interface */}
            <div className="lg:absolute lg:-bottom-12 lg:-left-6 lg:w-[94%] xl:w-[90%] z-20">
              <BookingCard onProceedToBooking={onOpenBooking} />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
