import React from 'react';
import {
  Clock,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { DriverCalculator } from './DriverCalculator';

interface DriverSectionProps {
  onOpenDriverModal?: () => void;
}

export const DriverSection: React.FC<DriverSectionProps> = ({ onOpenDriverModal }) => {
  return (
    <section id="for-drivers" className="py-24 bg-white dark:bg-dark-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>Empowering Nigerian Drivers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark-950 dark:text-white font-display tracking-tight leading-tight">
            Stop losing 25% of your money. <br />
            <span className="text-brand-600 dark:text-brand-500">Keep 100% of your fares.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Enjoy 0% commission — simply subscribe for <span className="font-bold text-dark-950 dark:text-white">₦2,450 daily</span> on your XLDriv app wallet and take home every single Naira you earn on the road.
          </p>
        </div>

        {/* 2-Column Grid: Benefits + Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Driver Value Props */}
          <div className="lg:col-span-5 space-y-6">

            {/* Benefit Card 1 */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200/80 dark:border-dark-800 hover:border-brand-500/50 hover:bg-brand-50/20 dark:hover:bg-dark-850 transition-all group">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-500 text-dark-950 flex items-center justify-center shrink-0 mr-4 font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-dark-950 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                    0% Commission & Flat Daily Sub
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    Subscribe for only ₦2,450/day. No percentage deductions, no hidden charges, and complete earnings transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Card 2 */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200/80 dark:border-dark-800 hover:border-brand-500/50 hover:bg-brand-50/20 dark:hover:bg-dark-850 transition-all group">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-dark-950 dark:bg-dark-800 text-white flex items-center justify-center shrink-0 mr-4 font-bold">
                  <Clock className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-dark-950 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                    Instant Payouts After Every Trip
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    Get paid straight into your bank account or wallet immediately upon trip completion. No waiting days or weeks for your money.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Card 3 */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200/80 dark:border-dark-800 hover:border-brand-500/50 hover:bg-brand-50/20 dark:hover:bg-dark-850 transition-all group">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-dark-950 dark:bg-dark-800 text-white flex items-center justify-center shrink-0 mr-4 font-bold">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-dark-950 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                    24/7 Driver Safety & Emergency SOS
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    Riders are verified before ride confirmation. In-app SOS button connects straight to our rapid Nigerian response unit and dispatch.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Card 4 */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200/80 dark:border-dark-800 hover:border-brand-500/50 hover:bg-brand-50/20 dark:hover:bg-dark-850 transition-all group">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-800 dark:text-brand-400 flex items-center justify-center shrink-0 mr-4 font-bold">
                  <Award className="w-5 h-5 text-brand-700 dark:text-brand-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-dark-950 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                    Welcome Bonuses & Referral Rewards
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    Earn performance incentives, fuel voucher giveaways, and cash bonuses when you refer fellow drivers to the XLDriv network.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenDriverModal ? onOpenDriverModal : () => window.location.href = '/for-drivers'}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-dark-950 dark:bg-brand-500 hover:bg-black dark:hover:bg-brand-400 text-white dark:text-dark-950 font-bold text-base flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>Register as an XLDriver</span>
                <ArrowRight className="w-5 h-5 text-brand-500 dark:text-dark-950 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Earnings Calculator */}
          <div className="lg:col-span-7">
            <DriverCalculator />
          </div>

        </div>

      </div>
    </section>
  );
};
