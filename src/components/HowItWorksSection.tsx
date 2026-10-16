import React, { useState } from 'react';
import { 
  MapPin, 
  Sliders, 
  ShieldCheck, 
  Car, 
  Smartphone, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { HOW_IT_WORKS } from '../data/mobilityData';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <MapPin className="w-6 h-6 text-brand-500" />;
      case 1: return <Sliders className="w-6 h-6 text-brand-500" />;
      case 2: return <ShieldCheck className="w-6 h-6 text-brand-500" />;
      case 3: return <Car className="w-6 h-6 text-brand-500" />;
      default: return <Sparkles className="w-6 h-6 text-brand-500" />;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-dark-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-dark-900 text-dark-900 dark:text-neutral-200 text-xs font-bold uppercase tracking-wider mb-4 border border-transparent dark:border-dark-800">
            <Smartphone className="w-3.5 h-3.5 text-brand-500" />
            <span>Effortless Booking Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark-950 dark:text-white font-display tracking-tight">
            How XLDriv Works in <span className="text-brand-600 dark:text-brand-500">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Enjoy premium quality ride-hailing and logistics with complete pricing transparency and direct driver communication.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((item, index) => {
            const isCurrent = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer relative group flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-neutral-900 dark:bg-dark-900 text-white border-neutral-900 dark:border-brand-500/50 shadow-xl scale-[1.02]'
                    : 'bg-neutral-50 dark:bg-dark-900/60 text-dark-950 dark:text-white border-neutral-200/80 dark:border-dark-800 hover:border-brand-500/40 hover:bg-white dark:hover:bg-dark-900 hover:shadow-card'
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-3xl font-black font-display tracking-tight ${
                      isCurrent ? 'text-brand-500' : 'text-neutral-300 dark:text-dark-700 group-hover:text-brand-500'
                    }`}>
                      {item.step}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isCurrent ? 'bg-dark-800 dark:bg-dark-800' : 'bg-white dark:bg-dark-800 shadow-sm'
                    }`}>
                      {getStepIcon(index)}
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold font-display mb-3 ${
                    isCurrent ? 'text-white' : 'text-dark-950 dark:text-white'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isCurrent ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/20 dark:border-dark-800 flex items-center text-xs font-semibold">
                  <span className={isCurrent ? 'text-brand-400' : 'text-neutral-400 dark:text-neutral-500 group-hover:text-dark-950 dark:group-hover:text-brand-400'}>
                    {index === 0 && 'Instant GPS locator'}
                    {index === 1 && 'Real-time driver bidding'}
                    {index === 2 && 'Ratings & vehicle model check'}
                    {index === 3 && 'Cash, Card or Wallet'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-life interactive simulated scenario banner */}
        <div className="mt-12 bg-neutral-900 dark:bg-dark-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between border border-neutral-800 dark:border-dark-800">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-2xl bg-brand-500 text-dark-950 flex items-center justify-center font-bold shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-display">
                Negotiate without stress or awkward haggling
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400">
                You and the driver agree on the fare upfront before either party commits. Zero hidden fees, zero surprise multipliers.
              </p>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 rounded-xl bg-white dark:bg-brand-500 text-dark-950 hover:bg-brand-500 dark:hover:bg-brand-400 font-bold text-xs sm:text-sm transition-all whitespace-nowrap"
          >
            Try a Test Route
          </button>
        </div>

      </div>
    </section>
  );
};
