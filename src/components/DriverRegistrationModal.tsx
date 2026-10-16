import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';
import confetti from 'canvas-confetti';

interface DriverRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DriverRegistrationModal: React.FC<DriverRegistrationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Lagos',
    vehicleMake: '',
    vehicleYear: '2016',
    driversLicenseNumber: '',
    hasSmartPhone: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="bg-white dark:bg-dark-900 rounded-3xl max-w-lg w-full shadow-2xl border border-neutral-100 dark:border-dark-800 overflow-hidden relative transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-dark-950 dark:bg-dark-950 text-white flex items-center justify-between border-b border-dark-800">
          <div>
            <div className="flex items-center space-x-2 text-brand-500 text-xs font-bold uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>0% Commission Driver Onboarding</span>
            </div>
            <h3 className="font-extrabold text-lg text-white font-display">
              Join the XLDriv Fleet
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-dark-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs text-brand-900 dark:text-brand-300 flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-700 dark:text-brand-400 shrink-0 mt-0.5" />
                <span>
                  Flat <b>₦2,450/day</b> subscription. Zero commissions deducted on any trip. Keep 100% of what you earn.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                  Full Legal Name (as on Driver’s License) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Babatunde Adeleke"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-800 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="080 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-800 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Primary Operating City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-800 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Lagos">Lagos State</option>
                    <option value="Abuja">Abuja (FCT)</option>
                    <option value="Ibadan">Ibadan (Oyo)</option>
                    <option value="Benin">Benin City (Edo)</option>
                    <option value="PortHarcourt">Port Harcourt (Rivers)</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Vehicle Model *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Toyota Corolla / Camry"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-800 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Vehicle Year *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2017"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-800 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                  Nigerian Driver's License Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AAA-012345-67"
                  value={formData.driversLicenseNumber}
                  onChange={(e) => setFormData({ ...formData, driversLicenseNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-800 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-dark-950 dark:bg-brand-500 hover:bg-black dark:hover:bg-brand-400 text-white dark:text-dark-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
              >
                <span>Submit Driver Application</span>
                <ArrowRight className="w-4 h-4 text-brand-500 dark:text-dark-950" />
              </button>

              <div className="text-center text-[11px] text-neutral-500 dark:text-neutral-400">
                Driver support hotline: <span className="font-bold text-dark-950 dark:text-brand-400">{COMPANY_DETAILS.phonePrimary}</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-dark-950 dark:text-white font-display">
                  Application Received!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1 max-w-sm mx-auto">
                  Welcome aboard, <b className="text-dark-950 dark:text-white">{formData.fullName}</b>! Our driver verification officer will reach out on WhatsApp/SMS within 2 hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-dark-950 border border-neutral-200 dark:border-dark-800 text-xs text-left max-w-xs mx-auto space-y-1 text-dark-950 dark:text-neutral-200">
                <p><b>City:</b> {formData.city}</p>
                <p><b>Vehicle:</b> {formData.vehicleMake} ({formData.vehicleYear})</p>
                <p><b>Model:</b> 0% Commission (₦2,450/day subscription)</p>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_DETAILS.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950 font-bold text-xs"
                >
                  <span>Download XLDriver App on Google Play</span>
                  <ArrowRight className="w-4 h-4 text-brand-500 dark:text-dark-950" />
                </a>
              </div>

              <button
                onClick={onClose}
                className="block mx-auto text-xs text-neutral-400 hover:text-dark-950 dark:hover:text-white underline pt-2"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
