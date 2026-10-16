import React from 'react';
import { ShieldCheck, PhoneCall, AlertTriangle, CheckCircle2, ArrowLeft, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const SafetyPage: React.FC = () => {
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
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">Zero Tolerance</span>
          <h1 className="text-3xl sm:text-4xl font-black text-dark-950 dark:text-white font-display mt-1">
            Safety Policy & Standards
          </h1>
          <p className="text-xs text-neutral-400 mt-2">
            Effective Date: 30-04-2025 • Dedicated Emergency Response Unit
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            At <b>{COMPANY_DETAILS.legalName}</b>, the physical safety and peace of mind of our riders, drivers, and the wider Nigerian public is our paramount priority. This Safety Policy establishes the mandatory standards and operating protocols governing every journey facilitated through our Platform.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">1. Driver Safety Standards</h3>
          <p>Every driver operating on XLDriv must:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Hold an original, authenticated Nigerian driver’s license.</li>
            <li>Operate a vehicle that passes periodic mechanical inspections for brakes, tires, lighting, and air conditioning.</li>
            <li>Maintain zero-tolerance adherence against alcohol, narcotics, or fatigue-impaired operation.</li>
            <li>Complete mandatory customer service and conflict resolution onboarding.</li>
          </ul>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">2. Rider Safety Expectations</h3>
          <p>Passengers using the service are required to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Always verify the driver’s face, name, vehicle make, and license plate number against the in-app confirmation before entering the car.</li>
            <li>Wear seatbelts at all times throughout the trip.</li>
            <li>Treat drivers and their vehicles with dignity and mutual respect.</li>
            <li>Share live trip tracking with a trusted contact via the in-app sharing function.</li>
          </ul>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">3. Built-In In-App Safety Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800">
              <h4 className="font-bold text-sm text-dark-950 dark:text-white mb-1 flex items-center">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 mr-2" />
                Live GPS Trip Sharing
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Share a live tracking link with family or friends so they can see your real-time location and ETA.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800">
              <h4 className="font-bold text-sm text-dark-950 dark:text-white mb-1 flex items-center">
                <AlertTriangle className="w-4 h-4 text-rose-600 mr-2" />
                Emergency In-App SOS
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Instantly trigger an emergency alert transmitting your precise coordinates to our rapid response unit and local law enforcement.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">4. Strict Zero-Tolerance Conduct</h3>
          <p>
            XLDriv maintains zero tolerance for physical violence, verbal abuse, sexual harassment, drunk driving, or discrimination based on gender, ethnicity, or religion. Violations result in permanent deactivation and criminal referral to the Nigerian Police Force.
          </p>

          <div className="p-5 rounded-2xl bg-neutral-900 dark:bg-dark-900 border border-neutral-800 dark:border-dark-800 text-white mt-8 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <p className="font-bold text-base text-white">Emergency Incident Desk</p>
              <p className="text-xs text-neutral-400">Available 24 hours a day, 7 days a week.</p>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
              className="mt-3 sm:mt-0 px-5 py-2.5 rounded-xl bg-brand-500 text-dark-950 font-bold text-xs hover:bg-brand-400 transition-colors"
            >
              Call {COMPANY_DETAILS.phonePrimary}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
