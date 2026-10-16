import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-dark-950 transition-colors duration-300">
      {/* Hero Header */}
      <div className="bg-neutral-50 dark:bg-dark-900/60 py-16 sm:py-20 border-b border-neutral-200/80 dark:border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>The XLDriv Ethos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-dark-950 dark:text-white font-display tracking-tight leading-tight">
            Redefining urban mobility <br />
            <span className="text-brand-600 dark:text-brand-400">with a people-first heart.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Founded with a bold Nigerian vision, XLDriv combines cutting-edge mobile technology with honest, equitable economics for both riders and drivers.
          </p>
        </div>
      </div>

      {/* Main Narrative with Photography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-950 dark:text-white font-display">
              More than a ride app — a fairer, more connected way to move.
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                XLDRIV is more than just a ride-hailing and ride-sharing service—it’s a smarter, more connected way to move. Founded with a bold vision to revolutionize Nigerian urban mobility, XLDRIV combines cutting-edge technology with a people-first approach to provide a seamless, safe, and affordable transportation experience for everyone.
              </p>
              <p>
                At XLDRIV, we believe that movement should be effortless, accessible, and empowering. Whether you're a passenger looking to commute between the Mainland and the Island, an executive heading to the airport, or a driver seeking meaningful income opportunities with complete flexibility, XLDRIV is designed to meet your needs.
              </p>
              <p>
                We are committed to safety, transparency, and innovation. Our platform integrates rigorous safety protocols, real-time GPS tracking, thorough driver and vehicle verification, and customer support that truly listens.
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-6 text-dark-950 dark:text-neutral-200 font-bold text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>CAC Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>NDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>100% Local Presence</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-dark-800">
              <img
                src="/images/handsome-elegant-man-car-salon (1).jpg"
                alt="XLDriv Premium Driver & Vehicle"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="px-3 py-1 rounded-full bg-brand-500 text-dark-950 text-xs font-black uppercase tracking-wider">
                    Our Promise
                  </span>
                  <p className="text-lg font-bold mt-2">
                    "Every journey should be dignified, punctual, and reasonably priced."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500 text-dark-950 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black font-display text-white">
                Our <span className="text-brand-500">Vision</span>
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                To become the most trusted and innovative ride-hailing and logistics platform in Africa and beyond—redefining urban mobility through excellence, inclusivity, and an unwavering commitment to shaping smarter, greener, and fairer cities.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-dark-950 flex items-center justify-center font-bold">
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-black font-display text-white">
                Our <span className="text-brand-500">Mission</span>
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                At XLDRIV, our mission is to empower seamless, safe, and accessible transportation by connecting people through smart technology and reliable service. We strive to enhance everyday mobility, support drivers with sustainable 0% commission earning opportunities, and create positive, lasting impact in the communities we serve.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-dark-950 dark:text-white font-display">
            The Principles That Guide Us
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Every product feature, pricing decision, and driver agreement is anchored in four core values.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800">
            <h4 className="text-base font-bold text-dark-950 dark:text-white mb-2 font-display">Fare Transparency</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              No arbitrary surge algorithms. Riders propose prices, drivers bid openly, and consensus rules.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800">
            <h4 className="text-base font-bold text-dark-950 dark:text-white mb-2 font-display">Driver Dignity</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Drivers are entrepreneurs, not exploitable labour. Flat ₦2,450 daily subscription lets drivers keep 100% of their earnings.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800">
            <h4 className="text-base font-bold text-dark-950 dark:text-white mb-2 font-display">Uncompromising Safety</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              From continuous GPS telemetry to panic buttons and driver vetting, safety is never optional.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800">
            <h4 className="text-base font-bold text-dark-950 dark:text-white mb-2 font-display">National Accessibility</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Connecting urban metropolises to interstate corridors and maritime port logistics with local reliability.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-neutral-100 dark:bg-dark-900 rounded-3xl p-8 text-center max-w-3xl mx-auto border border-neutral-200 dark:border-dark-800">
          <h3 className="text-2xl font-bold font-display text-dark-950 dark:text-white mb-2">
            Ready to experience the future of African mobility?
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 max-w-lg mx-auto">
            Book your first ride on your terms, or register your vehicle to keep 100% of every fare you earn.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950 font-bold text-xs sm:text-sm hover:bg-black dark:hover:bg-brand-400 transition-all"
            >
              Explore Services
            </Link>
            <Link
              to="/for-drivers"
              className="px-6 py-3 rounded-xl border border-dark-950 dark:border-neutral-700 text-dark-950 dark:text-white font-bold text-xs sm:text-sm hover:bg-white dark:hover:bg-dark-800 transition-all"
            >
              Drive with XLDriv
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
