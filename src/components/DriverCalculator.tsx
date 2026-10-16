import React, { useState } from 'react';
import { Sliders, Sparkles, TrendingUp, DollarSign, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const DriverCalculator: React.FC = () => {
  const [dailyEarnings, setDailyEarnings] = useState<number>(38000);
  const [drivingDaysPerMonth, setDrivingDaysPerMonth] = useState<number>(24);

  // Competitor commission (22% average)
  const competitorFeeDaily = Math.round(dailyEarnings * COMPANY_DETAILS.competitorCommissionRate);
  const xldrivFeeDaily = COMPANY_DETAILS.driverSubscriptionDaily;

  const dailySavings = Math.max(0, competitorFeeDaily - xldrivFeeDaily);
  const monthlySavings = dailySavings * drivingDaysPerMonth;
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="bg-dark-950 text-white rounded-3xl p-6 sm:p-8 border border-dark-800 shadow-2xl relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center space-x-2 text-brand-500 text-xs font-bold uppercase tracking-wider mb-2">
        <Sparkles className="w-4 h-4" />
        <span>Earnings Comparison Calculator</span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-2 text-white">
        See how much more you earn with <span className="text-brand-500">0% Commission</span>
      </h3>
      <p className="text-sm text-neutral-400 mb-6 max-w-lg">
        Other apps charge 20% to 25% on every trip you complete. With XLDriv, pay only a flat <b className="text-white">₦2,450/day</b> subscription and keep 100% of your earnings.
      </p>

      {/* Sliders */}
      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Estimated Daily Trip Fares
            </label>
            <span className="text-lg font-black text-brand-400 font-display">
              ₦{dailyEarnings.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={15000}
            max={90000}
            step={1000}
            value={dailyEarnings}
            onChange={(e) => setDailyEarnings(Number(e.target.value))}
            className="w-full accent-brand-500 h-2 bg-dark-800 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
            <span>₦15,000 (Part-time)</span>
            <span>₦45,000 (Full-time)</span>
            <span>₦90,000 (Highway / XL)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Driving Days per Month
            </label>
            <span className="text-lg font-black text-white font-display">
              {drivingDaysPerMonth} days
            </span>
          </div>
          <input
            type="range"
            min={10}
            max={30}
            step={1}
            value={drivingDaysPerMonth}
            onChange={(e) => setDrivingDaysPerMonth(Number(e.target.value))}
            className="w-full accent-brand-500 h-2 bg-dark-800 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      {/* Side-by-side comparison cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Other Apps */}
        <div className="bg-dark-900/90 rounded-2xl p-5 border border-dark-800">
          <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
            Other Apps (22% Commission)
          </div>
          <div className="text-2xl font-black text-neutral-200 font-display">
            ₦{competitorFeeDaily.toLocaleString()} <span className="text-xs font-normal text-neutral-500">/ day taken</span>
          </div>
          <p className="text-xs text-neutral-400 mt-2">
            You lose <b>₦{(competitorFeeDaily * drivingDaysPerMonth).toLocaleString()}</b> every month just in commissions.
          </p>
        </div>

        {/* XLDriv Model */}
        <div className="bg-gradient-to-br from-brand-500/20 to-brand-500/5 rounded-2xl p-5 border border-brand-500/30">
          <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1 flex items-center">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
            XLDriv (Flat ₦2,450/day)
          </div>
          <div className="text-2xl font-black text-white font-display">
            ₦{xldrivFeeDaily.toLocaleString()} <span className="text-xs font-normal text-neutral-400">/ day fixed sub</span>
          </div>
          <p className="text-xs text-neutral-300 mt-2">
            Keep <b className="text-brand-400">100% of all ride fares</b> above the subscription fee.
          </p>
        </div>
      </div>

      {/* Monthly extra profit banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-dark-950 flex flex-col sm:flex-row items-center justify-between shadow-glow">
        <div className="mb-3 sm:mb-0 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-wider text-dark-950/80">
            Extra Money In Your Pocket Every Month
          </span>
          <div className="text-3xl sm:text-4xl font-black font-display text-dark-950">
            +₦{monthlySavings.toLocaleString()}
          </div>
        </div>
        <div className="text-center sm:text-right">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-dark-950 text-white text-xs font-bold">
            <TrendingUp className="w-3.5 h-3.5 mr-1 text-brand-400" />
            +₦{yearlySavings.toLocaleString()}/yr extra
          </span>
        </div>
      </div>
    </div>
  );
};
