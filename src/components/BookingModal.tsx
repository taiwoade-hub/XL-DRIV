import React, { useState } from 'react';
import {
  X,
  MapPin,
  Navigation,
  Car,
  ArrowRight,
  Radio,
  Smartphone,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialServiceId = 'city-rides' }) => {
  const [step, setStep] = useState<'form' | 'redirecting'>('form');
  const [service, setService] = useState<string>(initialServiceId);
  const [pickup, setPickup] = useState('Murtala Muhammed Int. Airport (LOS)');
  const [destination, setDestination] = useState('Victoria Island (Adeola Odeku)');
  const [fareOffer, setFareOffer] = useState<number>(4500);
  const [selectedVehicle, setSelectedVehicle] = useState<'standard' | 'comfort' | 'xl'>('standard');

  if (!isOpen) return null;

  const getAppRedirectUrl = () => {
    if (typeof navigator !== 'undefined') {
      const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
      if (/iPad|iPhone|iPod/.test(ua) && !(window as unknown as { MSStream?: unknown }).MSStream) {
        return COMPANY_DETAILS.appStoreUrl;
      }
      if (/android/i.test(ua)) {
        return COMPANY_DETAILS.playStoreUrl;
      }
    }
    return COMPANY_DETAILS.playStoreUrl;
  };

  const handleBroadcastOffer = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('redirecting');

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    const targetUrl = getAppRedirectUrl();

    // Automatically redirect user to the app
    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 1200);

    return () => clearTimeout(timer);
  };

  const serviceName = service === 'city-rides'
    ? 'City Ride'
    : service === 'city-to-city'
    ? 'City-to-City Interstate'
    : service === 'courier'
    ? 'Courier & Delivery'
    : 'Ride-Sharing';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="bg-white dark:bg-dark-900 rounded-3xl max-w-xl w-full shadow-2xl border border-neutral-100 dark:border-dark-800 overflow-hidden relative transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-neutral-900 dark:bg-dark-950 text-white flex items-center justify-between border-b border-neutral-800 dark:border-dark-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-500 flex items-center justify-center">
              {step === 'form' ? <Car className="w-4 h-4" /> : <Radio className="w-4 h-4 text-brand-500 animate-pulse" />}
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white font-display">
                {step === 'form' ? 'Propose Your Ride & Fare' : 'Offer Broadcasted!'}
              </h3>
              <p className="text-[11px] text-neutral-400">
                {step === 'form'
                  ? 'Set what you pay — direct negotiation with drivers'
                  : 'Connecting you to nearby drivers in the XLDriv app'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 dark:hover:bg-dark-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === 'form' && (
            <form onSubmit={handleBroadcastOffer} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                  Mobility Vertical
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => { setService('city-rides'); setFareOffer(4500); }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${service === 'city-rides'
                        ? 'border-dark-950 dark:border-brand-500 bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950'
                        : 'border-neutral-200 dark:border-dark-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-800'
                      }`}
                  >
                    City Ride
                  </button>
                  <button
                    type="button"
                    onClick={() => { setService('city-to-city'); setFareOffer(18000); }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${service === 'city-to-city'
                        ? 'border-dark-950 dark:border-brand-500 bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950'
                        : 'border-neutral-200 dark:border-dark-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-800'
                      }`}
                  >
                    Interstate
                  </button>
                  <button
                    type="button"
                    onClick={() => { setService('courier'); setFareOffer(3000); }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${service === 'courier'
                        ? 'border-dark-950 dark:border-brand-500 bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950'
                        : 'border-neutral-200 dark:border-dark-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-800'
                      }`}
                  >
                    Courier
                  </button>
                </div>
              </div>

              {/* Pickup & Destination */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <Navigation className="w-4 h-4 text-brand-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-800 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-dark-950 dark:text-brand-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-800 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Class */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                  Vehicle Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div
                    onClick={() => setSelectedVehicle('standard')}
                    className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${selectedVehicle === 'standard'
                        ? 'border-brand-500 bg-brand-500/10'
                        : 'border-neutral-200 dark:border-dark-800 hover:bg-neutral-50 dark:hover:bg-dark-800'
                      }`}
                  >
                    <div className="font-bold text-xs text-dark-950 dark:text-white">Standard</div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">4 Seats • AC</div>
                  </div>
                  <div
                    onClick={() => setSelectedVehicle('comfort')}
                    className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${selectedVehicle === 'comfort'
                        ? 'border-brand-500 bg-brand-500/10'
                        : 'border-neutral-200 dark:border-dark-800 hover:bg-neutral-50 dark:hover:bg-dark-800'
                      }`}
                  >
                    <div className="font-bold text-xs text-dark-950 dark:text-white">Comfort</div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Executive Sedan</div>
                  </div>
                  <div
                    onClick={() => setSelectedVehicle('xl')}
                    className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${selectedVehicle === 'xl'
                        ? 'border-brand-500 bg-brand-500/10'
                        : 'border-neutral-200 dark:border-dark-800 hover:bg-neutral-50 dark:hover:bg-dark-800'
                      }`}
                  >
                    <div className="font-bold text-xs text-dark-950 dark:text-white">XL 6-Seater</div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">SUV / Group</div>
                  </div>
                </div>
              </div>

              {/* Set Proposed Fare */}
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-dark-950 border border-neutral-200 dark:border-dark-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-dark-900 dark:text-white">Your Proposed Fare Offer</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">Market benchmark: ₦5,200</span>
                </div>
                <div className="text-2xl font-black text-dark-950 dark:text-brand-400 font-display mb-2">
                  ₦{fareOffer.toLocaleString()}
                </div>
                <input
                  type="range"
                  min={service === 'city-to-city' ? 12000 : 2500}
                  max={service === 'city-to-city' ? 35000 : 9000}
                  step={200}
                  value={fareOffer}
                  onChange={(e) => setFareOffer(Number(e.target.value))}
                  className="w-full accent-brand-500 h-2 bg-neutral-200 dark:bg-dark-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-dark-950 dark:bg-brand-500 hover:bg-black dark:hover:bg-brand-400 text-white dark:text-dark-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
              >
                <span>Broadcast Offer to Nearby Drivers</span>
                <ArrowRight className="w-4 h-4 text-brand-500 dark:text-dark-950" />
              </button>
            </form>
          )}

          {step === 'redirecting' && (
            <div className="text-center py-4 space-y-5 animate-fade-in">
              {/* Radar Broadcast Pulse */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-brand-500/20 animate-ping" />
                <div className="absolute inset-2 rounded-full bg-brand-500/30 animate-pulse" />
                <div className="relative w-14 h-14 rounded-full bg-brand-500 text-dark-950 flex items-center justify-center shadow-lg">
                  <Radio className="w-7 h-7" />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Offer Live On XLDriv Network</span>
                </div>
                <h3 className="text-2xl font-black text-dark-950 dark:text-white font-display">
                  Connecting to Nearby Drivers...
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1 max-w-sm mx-auto">
                  Redirecting you to the XLDriv app to negotiate directly and track your ride in real-time.
                </p>
              </div>

              {/* Ride Summary Card */}
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-dark-950 border border-neutral-200 dark:border-dark-800 text-left text-xs space-y-2 max-w-md mx-auto shadow-sm">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200/80 dark:border-dark-800">
                  <span className="text-neutral-500 dark:text-neutral-400">Service:</span>
                  <span className="font-bold text-dark-950 dark:text-white uppercase tracking-wider text-[11px] bg-brand-500/20 text-brand-800 dark:text-brand-300 px-2 py-0.5 rounded">
                    {serviceName}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Pickup:</span>
                  <span className="font-semibold text-dark-950 dark:text-white text-right truncate max-w-[240px]">
                    {pickup}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Destination:</span>
                  <span className="font-semibold text-dark-950 dark:text-white text-right truncate max-w-[240px]">
                    {destination}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Vehicle Class:</span>
                  <span className="font-semibold text-dark-950 dark:text-white capitalize">
                    {selectedVehicle}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-neutral-200/80 dark:border-dark-800">
                  <span className="font-bold text-dark-950 dark:text-white">Your Proposed Fare:</span>
                  <span className="font-black text-emerald-700 dark:text-emerald-400 text-base">
                    ₦{fareOffer.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons & Manual Fallbacks */}
              <div className="space-y-2.5 max-w-md mx-auto pt-1">
                <a
                  href={getAppRedirectUrl()}
                  className="w-full py-3.5 rounded-2xl bg-dark-950 dark:bg-brand-500 hover:bg-black dark:hover:bg-brand-400 text-white dark:text-dark-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Open XLDriv App Now</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={COMPANY_DETAILS.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 rounded-xl border border-neutral-300 dark:border-dark-700 text-dark-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-dark-800 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <span>Google Play</span>
                  </a>
                  <a
                    href={COMPANY_DETAILS.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 rounded-xl border border-neutral-300 dark:border-dark-700 text-dark-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-dark-800 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <span>App Store</span>
                  </a>
                </div>

                <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
                  Automatic redirecting... If your app or store doesn’t open, tap the button above.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="text-xs text-neutral-500 hover:text-dark-950 dark:hover:text-white font-medium underline transition-colors"
                  >
                    ← Edit Ride Route or Fare
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
