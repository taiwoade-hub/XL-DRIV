import React from 'react';
import { Shield, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-xs font-bold text-neutral-500 hover:text-dark-950 dark:hover:text-white">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Title */}
        <div className="border-b border-neutral-200 dark:border-dark-800 pb-8 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">Legal Agreement</span>
          <h1 className="text-3xl sm:text-4xl font-black text-dark-950 dark:text-white font-display mt-1">
            Terms of Use
          </h1>
          <p className="text-xs text-neutral-400 mt-2">
            Effective Date: 30-04-2025 • Governing Law: Federal Republic of Nigeria
          </p>
        </div>

        {/* Legal Text */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to XLDriv, a mobility platform operated by <b>{COMPANY_DETAILS.legalName}</b> connecting riders, drivers, couriers, and logistics partners across Nigeria. These Terms of Use ("Terms") govern your access to and use of our mobile applications, websites, and associated digital services (collectively, the "Platform").
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">1. Acceptance of Terms</h3>
          <p>
            By accessing or creating an account on the XLDriv Platform, you confirm that you are at least 18 years old, possess the legal capacity to enter into a binding contract, and agree to abide strictly by these Terms. If you disagree, do not use the Platform.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">2. Nature of Services</h3>
          <p>
            XLDriv provides a digital technology platform enabling riders to propose fares and negotiate directly with independent drivers, schedule interstate journeys, request courier delivery, or arrange freight transport. <b>XLDriv is a technology platform and not a common carrier or transport provider.</b> Transportation and delivery services are rendered by independent third-party drivers who operate under their own commercial licenses and vehicle roadworthiness certifications.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">3. Fares, Negotiation & Payments</h3>
          <p>
            Riders may accept recommended benchmark fares or propose a custom fare offer. Independent drivers may accept or submit counter-proposals. Once agreed, the fare constitutes the contractual price for the requested journey. Drivers operate on a flat subscription model (currently ₦2,450 daily) with 0% commission deducted on individual trips.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">4. Driver & Vehicle Requirements</h3>
          <p>
            All registered drivers must hold an authentic Nigerian driver’s license, legally registered and roadworthy vehicles with valid third-party or comprehensive insurance, and undergo regular identity and safety vetting.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">5. Governing Law & Dispute Resolution</h3>
          <p>
            These Terms are governed by and construed under the laws of the Federal Republic of Nigeria. In the event of a dispute, parties agree to first seek amicable mediation. If unresolved, disputes shall be submitted to binding arbitration in Lagos State in accordance with the <b>Arbitration and Conciliation Act (Cap A18, Laws of the Federation of Nigeria, 2004)</b>.
          </p>

          <div className="p-5 rounded-2xl bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 text-xs text-neutral-600 dark:text-neutral-400 mt-8">
            <p className="font-bold text-dark-950 dark:text-white mb-1">Corporate Legal Office:</p>
            <p>{COMPANY_DETAILS.legalName}</p>
            <p>{COMPANY_DETAILS.address}</p>
            <p>Email: {COMPANY_DETAILS.emailSupport} | Phone: {COMPANY_DETAILS.phonePrimary}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
