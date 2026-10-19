import React, { useState } from 'react';
import {
  X,
  MapPin,
  Navigation,
  Car,
  ArrowRight,
  Star,
  Check
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialServiceId = 'city-rides' }) => {
  const [step, setStep] = useState<'form' | 'bids' | 'confirmed'>('form');
  const [service, setService] = useState<string>(initialServiceId);
  const [pickup, setPickup] = useState('Murtala Muhammed Int. Airport (LOS)');
  const [destination, setDestination] = useState('Victoria Island (Adeola Odeku)');
  const [fareOffer, setFareOffer] = useState<number>(4500);
  const [selectedVehicle, setSelectedVehicle] = useState<'standard' | 'comfort' | 'xl'>('standard');
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null);

  if (!isOpen) return null;

  // Mock driver bids to demonstrate the negotiation flow
  const mockBids = [
    {
      id: 'driver-1',
      name: 'Adekunle Olawale',
      rating: 4.9,
      trips: 1420,
      car: 'Toyota Corolla 2021 (Silver)',
      eta: '4 mins away',
      bid: fareOffer, // accepted rider's offer!
      isOfferAccepted: true,
      avatar: '/images/handsome-elegant-man-car-salon (1).jpg'
    },
    {
      id: 'driver-2',
      name: 'Chidi Nwosu',
      rating: 4.8,
      trips: 980,
      car: 'Honda Civic 2020 (Black)',
      eta: '6 mins away',
      bid: fareOffer + 400, // slight counter offer
      isOfferAccepted: false,
      avatar: '/images/bc.jpg'
    },
    {
      id: 'driver-3',
      name: 'Ibrahim Danladi',
      rating: 4.95,
      trips: 2150,
      car: 'Toyota Camry XLE 2022 (Dark Grey)',
      eta: '7 mins away',
      bid: fareOffer + 700,
      isOfferAccepted: false,
      avatar: '/images/bb.webp'
    }
  ];

  const handleProposeFare = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('bids');
  };

  const handleSelectDriver = (driverId: string) => {
    setSelectedDriver(driverId);
    setStep('confirmed');
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
  };

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
              <Car className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white font-display">
                {step === 'form' && 'Propose Your Ride & Fare'}
                {step === 'bids' && 'Select Driver & Confirm Bid'}
                {step === 'confirmed' && 'Ride Confirmed!'}
              </h3>
              <p className="text-[11px] text-neutral-400">
                {step === 'form' && 'Set what you pay — direct negotiation with drivers'}
                {step === 'bids' && 'Drivers nearby responded with real offers'}
                {step === 'confirmed' && 'Driver is en route to your pickup spot'}
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
            <form onSubmit={handleProposeFare} className="space-y-4">
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

          {step === 'bids' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 px-4 py-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
                <span className="font-semibold">3 verified drivers responded to your ₦{fareOffer.toLocaleString()} offer:</span>
                <span className="animate-pulse flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              </div>

              <div className="space-y-3">
                {mockBids.map((driver) => (
                  <div
                    key={driver.id}
                    className="p-4 rounded-2xl border border-neutral-200 dark:border-dark-800 hover:border-brand-500 dark:hover:border-brand-500/80 hover:bg-neutral-50/50 dark:hover:bg-dark-800/50 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 dark:bg-dark-800 shrink-0 border border-neutral-300 dark:border-dark-700">
                        <img src={driver.avatar} alt={driver.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-sm text-dark-950 dark:text-white">{driver.name}</h4>
                          <span className="flex items-center text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-0.5" />
                            {driver.rating}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{driver.car}</p>
                        <span className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">{driver.eta} • {driver.trips} trips</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-black text-dark-950 dark:text-brand-400 font-display">
                        ₦{driver.bid.toLocaleString()}
                      </div>
                      {driver.isOfferAccepted ? (
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full inline-block mb-1.5 border border-emerald-300/30">
                          Accepted Your Offer!
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 block mb-1.5">
                          Counter-bid (+₦{(driver.bid - fareOffer).toLocaleString()})
                        </span>
                      )}
                      <button
                        onClick={() => handleSelectDriver(driver.id)}
                        className="px-3.5 py-1.5 rounded-xl bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950 hover:bg-brand-500 dark:hover:bg-brand-400 font-bold text-xs transition-colors"
                      >
                        Accept Driver
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setStep('form')}
                className="w-full py-2.5 text-xs text-neutral-500 dark:text-neutral-400 font-semibold hover:text-dark-950 dark:hover:text-white transition-colors text-center"
              >
                ← Edit Route & Offer
              </button>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300/30">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-dark-950 dark:text-white font-display">
                  Your Ride is Confirmed!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1 max-w-sm mx-auto">
                  Your driver has accepted and is navigating to <b className="text-dark-950 dark:text-white">{pickup}</b>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-dark-950 border border-neutral-200 dark:border-dark-800 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Pickup:</span>
                  <span className="font-semibold text-dark-950 dark:text-white">{pickup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Destination:</span>
                  <span className="font-semibold text-dark-950 dark:text-white">{destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Agreed Fare:</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">₦{fareOffer.toLocaleString()}</span>
                </div>
              </div>

              {/* Direct App Link */}
              <div className="space-y-3 pt-2">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Track live GPS location on your smartphone:
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={COMPANY_DETAILS.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950 font-bold text-xs flex items-center space-x-2"
                  >
                    <span>Open in Play Store</span>
                  </a>
                  <a
                    href={COMPANY_DETAILS.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-dark-700 text-dark-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-dark-800 font-bold text-xs flex items-center space-x-2"
                  >
                    <span>Open in App Store</span>
                  </a>
                </div>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-neutral-400 hover:text-dark-950 dark:hover:text-white font-semibold underline pt-2"
              >
                Close and return to website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
