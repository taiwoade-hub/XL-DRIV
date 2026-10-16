import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Car, 
  Package, 
  Compass, 
  ArrowRight, 
  Sliders, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { POPULAR_LOCATIONS } from '../data/mobilityData';

interface BookingCardProps {
  onProceedToBooking?: (bookingData: any) => void;
  className?: string;
}

export const BookingCard: React.FC<BookingCardProps> = ({ onProceedToBooking, className = '' }) => {
  const [serviceType, setServiceType] = useState<'city' | 'interstate' | 'courier'>('city');
  const [pickup, setPickup] = useState('Murtala Muhammed Int. Airport (LOS)');
  const [destination, setDestination] = useState('Victoria Island (Adeola Odeku)');
  const [proposedFare, setProposedFare] = useState<number>(4500);
  const benchmarkFare = 5200; // Estimated market benchmark

  const discountPercentage = Math.round(((benchmarkFare - proposedFare) / benchmarkFare) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onProceedToBooking) {
      onProceedToBooking({
        serviceType,
        pickup,
        destination,
        proposedFare,
        benchmarkFare
      });
    }
  };

  return (
    <div className={`bg-white dark:bg-dark-900/95 rounded-3xl shadow-2xl border border-neutral-100 dark:border-dark-800 p-6 md:p-7 relative z-20 backdrop-blur-xl transition-colors duration-300 ${className}`}>
      {/* Category Tabs */}
      <div className="flex p-1 bg-neutral-100 dark:bg-dark-950 rounded-2xl mb-6">
        <button
          type="button"
          onClick={() => {
            setServiceType('city');
            setProposedFare(4500);
          }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-1.5 transition-all ${
            serviceType === 'city'
              ? 'bg-white dark:bg-dark-850 text-dark-950 dark:text-white shadow-sm'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-dark-950 dark:hover:text-white'
          }`}
        >
          <Car className="w-4 h-4 text-brand-500" />
          <span>City Ride</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setServiceType('interstate');
            setProposedFare(18000);
          }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-1.5 transition-all ${
            serviceType === 'interstate'
              ? 'bg-white dark:bg-dark-850 text-dark-950 dark:text-white shadow-sm'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-dark-950 dark:hover:text-white'
          }`}
        >
          <Compass className="w-4 h-4 text-brand-500" />
          <span>Intercity</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setServiceType('courier');
            setProposedFare(2800);
          }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-1.5 transition-all ${
            serviceType === 'courier'
              ? 'bg-white dark:bg-dark-850 text-dark-950 dark:text-white shadow-sm'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-dark-950 dark:hover:text-white'
          }`}
        >
          <Package className="w-4 h-4 text-brand-500" />
          <span>Courier</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-400 mb-1.5">
            Pickup Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-500">
              <Navigation className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup address or landmark"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 dark:bg-dark-950 border border-neutral-200 dark:border-dark-800 text-sm font-semibold text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-dark-950 transition-all"
              required
            />
          </div>
        </div>

        {/* Destination Input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-400 mb-1.5">
            Destination
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-dark-900 dark:text-brand-500">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where are you heading to?"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 dark:bg-dark-950 border border-neutral-200 dark:border-dark-800 text-sm font-semibold text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-dark-950 transition-all"
              required
            />
          </div>
        </div>

        {/* Quick Location Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
          <span className="text-neutral-400 dark:text-neutral-500 font-medium whitespace-nowrap">Suggested:</span>
          {POPULAR_LOCATIONS.slice(0, 3).map((loc, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setDestination(loc.name)}
              className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-dark-800 hover:bg-neutral-200 dark:hover:bg-dark-700 text-neutral-700 dark:text-neutral-300 whitespace-nowrap transition-colors font-medium"
            >
              {loc.name.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Distinctive Selling Point: Set Your Offer Slider */}
        <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-dark-950 border border-neutral-200/80 dark:border-dark-800">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-1.5">
              <Sliders className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-dark-900 dark:text-white">
                Your Proposed Fare
              </span>
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Est. benchmark: <span className="line-through">₦{benchmarkFare.toLocaleString()}</span>
            </span>
          </div>

          <div className="flex items-baseline justify-between mb-3">
            <div className="text-2xl font-extrabold text-dark-950 dark:text-brand-400 font-display">
              ₦{proposedFare.toLocaleString()}
            </div>
            {discountPercentage > 0 ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300/30">
                <Sparkles className="w-3 h-3 mr-1" />
                {discountPercentage}% below market
              </span>
            ) : (
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Standard rate</span>
            )}
          </div>

          <input
            type="range"
            min={serviceType === 'interstate' ? 12000 : 2500}
            max={serviceType === 'interstate' ? 35000 : 9000}
            step={200}
            value={proposedFare}
            onChange={(e) => setProposedFare(Number(e.target.value))}
            className="w-full accent-brand-500 h-2 bg-neutral-200 dark:bg-dark-800 rounded-lg cursor-pointer"
          />

          <div className="flex justify-between text-[11px] text-neutral-400 dark:text-neutral-500 mt-1 font-medium">
            <span>Budget offer</span>
            <span>Recommended</span>
            <span>Express priority</span>
          </div>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-dark-950 dark:bg-brand-500 hover:bg-black dark:hover:bg-brand-400 text-white dark:text-dark-950 font-bold text-base flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all group"
        >
          <span>Find Drivers & Propose Fare</span>
          <ArrowRight className="w-5 h-5 text-brand-500 dark:text-dark-950 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Trust Badges */}
        <div className="pt-2 flex items-center justify-around text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-dark-800">
          <span className="flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>0% hidden surge</span>
          </span>
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Verified XL drivers</span>
          </span>
        </div>
      </form>
    </div>
  );
};
