import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Smartphone, 
  ArrowRight, 
  Sparkles, 
  FileText,
  Car,
  Headphones,
  Award
} from 'lucide-react';
import { DriverCalculator } from '../components/DriverCalculator';
import { COMPANY_DETAILS } from '../data/mobilityData';
import confetti from 'canvas-confetti';

export const ForDriversPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [driverData, setDriverData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Lagos',
    carMake: '',
    carYear: '2016',
    licenseNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  const steps = [
    {
      num: '01',
      title: 'Sign Up & Submit Documents',
      desc: 'Complete the short driver form below or download the XLDriver app. Upload your valid Nigerian Driver’s License and vehicle papers.'
    },
    {
      num: '02',
      title: 'Fast Verification & Inspection',
      desc: 'Our driver onboarding team verifies your documentation and conducts a rapid physical vehicle safety inspection within 24 hours.'
    },
    {
      num: '03',
      title: 'Fund Wallet & Subscribe (₦2,450)',
      desc: 'Top up your in-app driver wallet with at least ₦2,450. Your daily subscription activates only on the days you choose to drive!'
    },
    {
      num: '04',
      title: 'Accept Bids & Keep 100% Fares',
      desc: 'Go online, receive trip requests from riders, negotiate or accept their offers, and take home 100% of every ride completed.'
    }
  ];

  const requirements = [
    'Valid Nigerian Driver’s License (Original)',
    'Roadworthy vehicle (Sedan, Hatchback, SUV or Van from 2004 or newer)',
    'Valid Vehicle Insurance & Tint Permit (if applicable)',
    'Android (version 8.0+) or iPhone with active internet access',
    'Active Nigerian Bank Account for immediate daily payouts',
    'Minimum age of 21 years with clean driving record'
  ];

  return (
    <div className="pt-28 pb-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      {/* Header / Hero */}
      <div className="bg-dark-950 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>The Fair Driver Proposition</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white leading-tight">
                Keep 100% of your money. <br />
                <span className="text-brand-500">0% Commission. Forever.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
                Tired of other apps taking 20% to 25% of every single trip you complete? With XLDriv, pay a flat daily subscription of just <b className="text-white">₦2,450</b> on your app wallet and take home every single Naira you earn.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#register"
                  className="px-8 py-4 rounded-2xl bg-brand-500 hover:bg-brand-600 text-dark-950 font-extrabold text-sm flex items-center space-x-2 shadow-glow transition-all"
                >
                  <span>Apply to Drive Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_DETAILS.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-2xl bg-dark-900 border border-dark-700 hover:bg-dark-800 text-white font-bold text-sm flex items-center space-x-2 transition-all"
                >
                  <Smartphone className="w-4 h-4 text-brand-400" />
                  <span>Download Driver App</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-dark-900 border border-dark-800 text-white space-y-4">
                <div className="flex items-center justify-between border-b border-dark-800 pb-3">
                  <span className="text-xs font-bold uppercase text-neutral-400">Driver Model</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-brand-500 text-dark-950">Active in Nigeria</span>
                </div>
                <div className="text-3xl font-black text-brand-400 font-display">
                  ₦2,450 <span className="text-sm font-normal text-neutral-400">/ day subscription</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Only debited on days you choose to go online. If you take a day off, rest with your family, or service your car — you pay <b className="text-white">₦0</b>!
                </p>
                <div className="pt-2 border-t border-dark-800 text-xs text-neutral-400 space-y-2">
                  <div className="flex justify-between">
                    <span>Commission on rides:</span>
                    <span className="font-bold text-emerald-400">0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payout schedule:</span>
                    <span className="font-bold text-white">Instant after each trip</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Driver Support:</span>
                    <span className="font-bold text-white">24/7 Phone & WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Driver Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 dark:text-white font-display">
            Calculate Your Extra Monthly Profit
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2">
            Move the slider to match your daily ride goals and see the exact difference compared to commission-taking apps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <DriverCalculator />
        </div>
      </div>

      {/* 4 Steps to Start Earning */}
      <div className="bg-neutral-50 dark:bg-dark-900/60 py-20 border-y border-neutral-200/80 dark:border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-dark-950 dark:text-white font-display">
              How to Start Driving with XLDriv
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              From application to your first ride in 4 transparent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-900 rounded-3xl p-6 border border-neutral-200/80 dark:border-dark-800 shadow-card flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-black font-display text-brand-500 mb-4 block">
                    {s.num}
                  </span>
                  <h3 className="text-base font-bold text-dark-950 dark:text-white mb-2 font-display">
                    {s.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements & Embedded Signup Form */}
      <div id="register" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Requirements column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              <FileText className="w-4 h-4" />
              <span>Eligibility Checklist</span>
            </div>

            <h2 className="text-3xl font-extrabold text-dark-950 dark:text-white font-display">
              Driver & Vehicle Requirements
            </h2>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We uphold high standards of vehicle safety and driver professionalism to ensure every passenger feels confident booking with you.
            </p>

            <div className="space-y-3 pt-2">
              {requirements.map((req, rIdx) => (
                <div key={rIdx} className="flex items-start space-x-3 text-sm text-neutral-800 dark:text-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{req}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
              <p className="font-bold text-dark-950 dark:text-white">Have a Truck, Van, or Motorcycle?</p>
              <p>We also onboard dispatch riders, haulage truck operators, and intercity van drivers into our freight network.</p>
              <div className="pt-1">
                <a href={`tel:${COMPANY_DETAILS.phonePrimary}`} className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
                  Call Logistics Fleet Desk: {COMPANY_DETAILS.phonePrimary}
                </a>
              </div>
            </div>
          </div>

          {/* Registration Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-dark-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-dark-800 shadow-xl">
            <h3 className="text-2xl font-bold font-display text-dark-950 dark:text-white mb-1">
              Apply to Become an XLDriver
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              Fill in your details below and an onboarding officer will reach out to schedule your document verification.
            </p>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Full Legal Name (as on Driver’s License) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Olumide Johnson"
                    value={driverData.fullName}
                    onChange={(e) => setDriverData({ ...driverData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Phone Number (WhatsApp Active) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="080 3456 7890"
                      value={driverData.phone}
                      onChange={(e) => setDriverData({ ...driverData, phone: e.target.value })}
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
                      placeholder="driver@example.com"
                      value={driverData.email}
                      onChange={(e) => setDriverData({ ...driverData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Vehicle Make & Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Toyota Corolla / Honda Civic"
                      value={driverData.carMake}
                      onChange={(e) => setDriverData({ ...driverData, carMake: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Vehicle Year *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2018"
                      value={driverData.carYear}
                      onChange={(e) => setDriverData({ ...driverData, carYear: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Driver's License Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. KJA-123456-01"
                      value={driverData.licenseNumber}
                      onChange={(e) => setDriverData({ ...driverData, licenseNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Primary Operating City *
                    </label>
                    <select
                      value={driverData.city}
                      onChange={(e) => setDriverData({ ...driverData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="Lagos">Lagos State</option>
                      <option value="Abuja">Abuja (FCT)</option>
                      <option value="Ibadan">Ibadan (Oyo)</option>
                      <option value="Benin">Benin City (Edo)</option>
                      <option value="PortHarcourt">Port Harcourt (Rivers)</option>
                      <option value="Other">Other Region</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-dark-950 hover:bg-black text-white dark:bg-brand-500 dark:text-dark-950 dark:hover:bg-brand-400 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-4 h-4 text-brand-500 dark:text-dark-950" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h4 className="text-2xl font-black text-dark-950 dark:text-white font-display">Application Received!</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
                  Thank you, <b>{driverData.fullName}</b>. Our inspection desk at 27, Raji Oba Street, Egbeda, Lagos will verify your vehicle details and contact you via WhatsApp.
                </p>
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-dark-950 border dark:border-dark-800 text-xs text-neutral-700 dark:text-neutral-300 max-w-sm mx-auto">
                  <p>Remember: You enjoy <b>0% commission</b> with a flat ₦2,450 daily subscription.</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
