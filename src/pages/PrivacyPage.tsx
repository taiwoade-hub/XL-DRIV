import React from 'react';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const PrivacyPage: React.FC = () => {
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
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">Compliance & Trust</span>
          <h1 className="text-3xl sm:text-4xl font-black text-dark-950 dark:text-white font-display mt-1">
            Privacy Policy (NDPR)
          </h1>
          <p className="text-xs text-neutral-400 mt-2">
            Effective Date: 30-04-2025 • Compliant with Nigeria Data Protection Regulation (NDPR)
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            At <b>{COMPANY_DETAILS.legalName}</b> ("XLDriv", "we", "our"), your privacy is paramount. This Privacy Policy details our data collection, processing, and protection practices across our website, mobile applications, and logistics platform.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">1. Information We Collect</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Personal Identity:</b> Full name, verified mobile phone number, email address, profile photo, and government-issued ID for driver vetting.</li>
            <li><b>Location & Geolocation Telemetry:</b> Real-time GPS coordinate telemetry while the application is in foreground or background during an active trip.</li>
            <li><b>Financial & Transactional Records:</b> In-app wallet ledger, bank account details for driver disbursements, trip receipts, and payment method tokens (we never store raw card numbers; processing is handled by licensed PCI-DSS gateways).</li>
            <li><b>Device & Technical Telemetry:</b> IP address, device model, mobile OS version, application crash reports, and system diagnostics.</li>
          </ul>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">2. How Your Data Is Used</h3>
          <p>
            We process your personal data strictly to match riders with drivers, execute trip negotiations, process payments, ensure in-ride physical safety, prevent fraud, and comply with Nigerian transport and regulatory requirements. <b>We never sell or monetise your personal information to third parties.</b>
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">3. Data Subject Rights Under NDPR</h3>
          <p>
            As a data subject under Nigerian law, you possess the inalienable right to request access to your stored personal records, rectify inaccuracies, withdraw consent, or request permanent deletion of your profile and data history.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">4. Account Deletion</h3>
          <p>
            You can delete your account directly through the mobile application (Settings &gt; Security & Account &gt; Delete My Account) or via our <Link to="/delete-account" className="text-brand-600 dark:text-brand-400 font-bold underline">Account Deletion Request Page</Link>.
          </p>

          <div className="p-5 rounded-2xl bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 text-xs text-neutral-600 dark:text-neutral-400 mt-8">
            <p className="font-bold text-dark-950 dark:text-white mb-1">Data Protection Officer:</p>
            <p>Email: {COMPANY_DETAILS.emailSupport}</p>
            <p>Address: {COMPANY_DETAILS.address}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
