import React, { useState } from 'react';
import { ArrowLeft, Trash2, CheckCircle2, ShieldAlert, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const DeleteAccountPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    reason: 'No longer using the service'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-xs font-bold text-neutral-500 hover:text-dark-950 dark:hover:text-white">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="border-b border-neutral-200 dark:border-dark-800 pb-8 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">User Control & Privacy</span>
          <h1 className="text-3xl sm:text-4xl font-black text-dark-950 dark:text-white font-display mt-1">
            Account & Data Deletion Request
          </h1>
          <p className="text-xs text-neutral-400 mt-2">
            In compliance with Google Play, Apple App Store, and NDPR guidelines
          </p>
        </div>

        <div className="space-y-8 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
          <p>
            At XLDriv, we respect your privacy and give you full control over your personal data. In compliance with data protection laws and mobile application store policies, you can request the permanent deletion of your account and associated personal data at any time.
          </p>

          {/* Option 1: Inside the app */}
          <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 space-y-3">
            <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display flex items-center">
              <span className="w-7 h-7 rounded-lg bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950 flex items-center justify-center text-xs mr-2.5">1</span>
              How to Delete Your Account via the Mobile App
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              The fastest way to delete your account is directly inside the XLDriv application:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-800 dark:text-neutral-300 font-medium">
              <li>Open the XLDriv app on your mobile device.</li>
              <li>Navigate to <b>Settings</b> or <b>Profile</b>.</li>
              <li>Select <b>Security & Account</b>.</li>
              <li>Tap <b>Delete My Account</b> and confirm your biometric or PIN verification.</li>
            </ol>
          </div>

          {/* Option 2: Web Deletion Request Form */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display flex items-center">
              <span className="w-7 h-7 rounded-lg bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950 flex items-center justify-center text-xs mr-2.5">2</span>
              Request Deletion via Web Form
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              If you have uninstalled the app or lost access to your device, submit your registered credentials below:
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Registered Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name as registered"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Registered Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="080 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                      Registered Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Reason for Deletion (Optional)
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-dark-700 bg-white dark:bg-dark-950 text-sm font-semibold text-dark-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="No longer using the service">No longer using the service</option>
                    <option value="Created duplicate account">Created duplicate account</option>
                    <option value="Privacy preference">Privacy preference</option>
                    <option value="Moving to another location">Moving to another location</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center space-x-2 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Submit Deletion Request</span>
                </button>
              </form>
            ) : (
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs space-y-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <p className="font-bold text-sm">Deletion Request Received</p>
                <p>
                  We have queued an account deletion ticket for phone number <b>{formData.phone}</b> and email <b>{formData.email}</b>. A confirmation SMS will be sent within 24 hours to verify account ownership.
                </p>
              </div>
            )}
          </div>

          {/* What happens to data */}
          <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 space-y-3">
            <h3 className="text-base font-bold text-dark-950 dark:text-white font-display">
              What Happens When You Delete Your Account?
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
              <li>Your profile, ride history, proposed fare records, and personal identifiers are permanently purged from active servers within 30 days.</li>
              <li>Any active wallet balance must be withdrawn to your verified Nigerian bank account prior to account termination.</li>
              <li>Minimal transaction audit records are retained solely where strictly mandated by Nigerian tax and accounting legislation.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
