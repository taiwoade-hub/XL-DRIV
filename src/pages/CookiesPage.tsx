import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/mobilityData';

export const CookiesPage: React.FC = () => {
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
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">Website Data</span>
          <h1 className="text-3xl sm:text-4xl font-black text-dark-950 dark:text-white font-display mt-1">
            Cookies Policy
          </h1>
          <p className="text-xs text-neutral-400 mt-2">
            Effective Date: 30-04-2025 • {COMPANY_DETAILS.legalName}
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            This Cookies Policy explains how <b>{COMPANY_DETAILS.legalName}</b> uses cookies and comparable storage technologies when you access our website or web interfaces.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">1. What Are Cookies?</h3>
          <p>
            Cookies are small text records deposited on your device to recall session preferences, preserve logged-in sessions, and measure page performance.
          </p>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">2. Categories of Cookies Employed</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Strictly Necessary Cookies:</b> Essential for security, session verification, and basic navigation.</li>
            <li><b>Performance & Telemetry Cookies:</b> Enable us to identify page load speeds and optimize user interface performance.</li>
            <li><b>Functional Cookies:</b> Remember user preferences such as preferred language and regional presets.</li>
          </ul>

          <h3 className="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">3. Managing Preferences</h3>
          <p>
            You can configure your browser settings to decline or purge cookies at any time. Disabling certain cookies may limit selected interactive functionality on our portal.
          </p>
        </div>

      </div>
    </div>
  );
};
