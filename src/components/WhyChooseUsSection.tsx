import React from 'react';
import { 
  ShieldCheck, 
  Sliders, 
  Clock, 
  CreditCard, 
  HeartHandshake, 
  Navigation, 
  Sparkles, 
  Check 
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Sliders className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: 'Freedom of Fare Negotiation',
      description: 'Never suffer unexplained surge pricing again. Propose what you want to pay, review driver counter-bids, and agree on a fair price upfront.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: 'Motivated, 100% Earning Drivers',
      description: 'Because XLDriv drivers keep 100% of their fares under our ₦2,450 flat daily subscription, they are happier, punctual, and deliver superior service.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: 'Rigorous Safety & Vetting',
      description: 'Comprehensive background checks, Nigerian driver’s license verification, roadworthiness tests, and continuous driver rating reviews.'
    },
    {
      icon: <Navigation className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: 'Door-to-Door Interstate Trips',
      description: 'Skip noisy bus terminals. Book private or shared interstate trips from Lagos to Ibadan, Abuja, Benin, and beyond with highway-certified drivers.'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: 'Flexible Nigerian Payment Options',
      description: 'Pay your way: in-app wallet, bank transfer, debit card, or cash directly to the driver with immediate digital receipt generation.'
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: '24/7 Real-Time Emergency Support',
      description: 'Live GPS trip tracking shareable with loved ones, in-app SOS button, and a responsive Nigerian customer support team always available.'
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-dark-950 relative border-t border-neutral-200/60 dark:border-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>Why Riders & Drivers Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark-950 dark:text-white font-display tracking-tight">
            "Every Road , Every journey, Africa" <br />
            <span className="text-brand-600 dark:text-brand-500">Engineered for fairness.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            We are not just another ride-hailing app. We are redefining urban mobility with mutual respect, transparent pricing, and zero commissions.
          </p>
        </div>

        {/* 6-Grid Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white dark:bg-dark-900 border border-neutral-200/80 dark:border-dark-800 shadow-card hover:shadow-card-hover hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 dark:bg-dark-800 group-hover:bg-brand-500/10 dark:group-hover:bg-brand-500/20 flex items-center justify-center mb-6 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-dark-950 dark:text-white mb-3 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-dark-800 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Check className="w-4 h-4 mr-1.5" />
                <span>Verified feature</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
