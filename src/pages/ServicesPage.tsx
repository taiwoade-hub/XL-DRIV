import React, { useState } from 'react';
import {
  Car,
  Compass,
  Users,
  Package,
  Truck,
  CheckCircle2,
  ArrowRight,
  Sliders,
  ShieldCheck,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/mobilityData';

interface ServicesPageProps {
  onOpenBooking: () => void;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking, onSelectServiceForBooking }) => {
  const [logisticsQuote, setLogisticsQuote] = useState({
    serviceType: 'haulage',
    origin: 'Apapa Port, Lagos',
    destination: 'Ikeja Industrial Estate',
    cargoType: 'Container Haulage (40ft)',
    notes: ''
  });
  const [quoteSent, setQuoteSent] = useState(false);

  const clearingGallery = [
    { src: '/images/cl2.png', title: 'Port Clearance Documentation' },
    { src: '/images/cl3.png', title: 'Container Haulage Trucks' },
    { src: '/images/cl4.png', title: 'Heavy Cargo Inspection' },
    { src: '/images/cl5.png', title: 'End-to-End Warehousing' },
    { src: '/images/cl6.png', title: 'Industrial Transport' },
    { src: '/images/cl7.png', title: 'Fleet Logistics Coordination' }
  ];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSent(true);
  };

  return (
    <div className="pt-28 pb-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-neutral-50 dark:bg-dark-900/60 py-16 border-b border-neutral-200/80 dark:border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>Full Mobility & Logistics Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-dark-950 dark:text-white font-display tracking-tight">
            Tailored Services For <br />
            <span className="text-brand-600 dark:text-brand-400">Every Distance & Load</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            From seamless daily city commutes to interstate highway travel, rapid express courier, and industrial freight haulage with customs clearance.
          </p>
        </div>
      </div>

      {/* Main Services In-depth List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {SERVICES.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Media Column */}
              <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-100 dark:border-dark-800 group">
                  <div className="h-72 sm:h-96 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-brand-500 text-dark-950 text-xs font-black uppercase tracking-wider">
                        {service.badge}
                      </span>
                      <p className="text-sm font-semibold mt-1 text-neutral-200">
                        {service.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Description Column */}
              <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  <span>Service 0{index + 1}</span>
                  <span>•</span>
                  <span>{service.tagline}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 dark:text-white font-display">
                  {service.title}
                </h2>

                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-3 text-sm text-neutral-800 dark:text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing / Booking Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => onSelectServiceForBooking(service.id)}
                    className="px-6 py-3.5 rounded-2xl bg-dark-950 hover:bg-black text-white dark:bg-brand-500 dark:text-dark-950 dark:hover:bg-brand-400 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight className="w-4 h-4 text-brand-500 dark:text-dark-950" />
                  </button>

                  <div className="px-4 py-3 rounded-2xl bg-neutral-100 dark:bg-dark-900 dark:border dark:border-dark-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center justify-center space-x-1.5">
                    <Sliders className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    <span>Pricing: {service.startingPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Special Showcase: Clearing, Forwarding & Logistics Section */}
      <section className="bg-neutral-900 text-white py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">
              Industrial Division
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white mt-2">
              XLDriv Clearing, Forwarding & Trucking
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400">
              Sourcing, customs clearing, heavy haulage, end-to-end warehousing, and multi-state distribution services for Nigerian businesses.
            </p>
          </div>

          {/* Clearing Visual Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {clearingGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700/80 shadow-md h-40"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-neutral-200 line-clamp-2 leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Freight Quote Form */}
          <div className="max-w-2xl mx-auto bg-dark-950 rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-2xl">
            <h3 className="text-xl font-bold font-display text-white mb-1">
              Request a Freight or Custom Clearance Quote
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Our freight division handles maritime port clearance, container transport, and interstate industrial delivery.
            </p>

            {!quoteSent ? (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                      Origin / Port
                    </label>
                    <input
                      type="text"
                      required
                      value={logisticsQuote.origin}
                      onChange={(e) => setLogisticsQuote({ ...logisticsQuote, origin: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                      Delivery Destination
                    </label>
                    <input
                      type="text"
                      required
                      value={logisticsQuote.destination}
                      onChange={(e) => setLogisticsQuote({ ...logisticsQuote, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                      Cargo Specification
                    </label>
                    <input
                      type="text"
                      required
                      value={logisticsQuote.cargoType}
                      onChange={(e) => setLogisticsQuote({ ...logisticsQuote, cargoType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                      Service Type
                    </label>
                    <select
                      value={logisticsQuote.serviceType}
                      onChange={(e) => setLogisticsQuote({ ...logisticsQuote, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                    >
                      <option value="haulage">Container & Flatbed Haulage</option>
                      <option value="clearing">Customs Clearing & Documentation</option>
                      <option value="freight">Full Freight & Warehousing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-400 mb-1">
                    Cargo Details / Tonnage / Timeline
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter any additional requirements, container numbers, or expected discharge dates..."
                    value={logisticsQuote.notes}
                    onChange={(e) => setLogisticsQuote({ ...logisticsQuote, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-950 font-bold text-xs flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Submit Logistics RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-lg text-white">Quote Request Received!</h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                  Our freight clearing desk will evaluate your requirements and call back on <b>{COMPANY_DETAILS.phonePrimary}</b> with custom pricing.
                </p>
                <button
                  onClick={() => setQuoteSent(false)}
                  className="text-xs text-brand-400 underline font-semibold pt-2"
                >
                  Send another request
                </button>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
              <span className="flex items-center">
                <PhoneCall className="w-3.5 h-3.5 mr-1 text-brand-500" />
                Direct desk: {COMPANY_DETAILS.phonePrimary}
              </span>
              <span>Apapa • Tin Can • Lagos</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
