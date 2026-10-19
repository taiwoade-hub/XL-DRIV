import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Compass, 
  Users, 
  Package, 
  Truck, 
  ArrowRight, 
  Check, 
  Sparkles,
  Sliders
} from 'lucide-react';
import { SERVICES } from '../data/mobilityData';

interface ServicesSectionProps {
  onSelectServiceForBooking?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'city-rides': return <Car className="w-5 h-5" />;
      case 'city-to-city': return <Compass className="w-5 h-5" />;
      case 'ride-sharing': return <Users className="w-5 h-5" />;
      case 'courier': return <Package className="w-5 h-5" />;
      case 'trucks-logistics': return <Truck className="w-5 h-5" />;
      default: return <Car className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-dark-950 relative border-t border-neutral-200/60 dark:border-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Comprehensive Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark-950 dark:text-white font-display tracking-tight">
              One brand for every <br />
              <span className="text-brand-600 dark:text-brand-500">journey and delivery.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Whether commuting across town, traveling between states, sending urgent packages, or clearing industrial freight at the port — XLDriv powers your movement.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              to="/services"
              className="inline-flex items-center font-bold text-sm text-dark-950 dark:text-brand-400 hover:text-brand-600 dark:hover:text-brand-300 transition-colors group"
            >
              <span>Explore all services in detail</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white dark:bg-dark-900 rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-dark-800 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-dark-950/90 text-dark-950 dark:text-white backdrop-blur-md shadow-sm">
                      {service.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-500 text-dark-950 flex items-center justify-center shadow-lg">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase font-bold tracking-wider text-brand-400 mb-1">
                      {service.tagline}
                    </p>
                    <h3 className="text-2xl font-extrabold text-white font-display">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 mr-2" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0 border-t border-neutral-100 dark:border-dark-800 flex items-center justify-between mt-auto">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Pricing Model
                  </span>
                  <span className="text-sm font-bold text-dark-950 dark:text-white flex items-center">
                    <Sliders className="w-3.5 h-3.5 mr-1 text-brand-600 dark:text-brand-400" />
                    {service.startingPrice}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking && onSelectServiceForBooking(service.id)}
                  className="px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-dark-800 hover:bg-dark-950 dark:hover:bg-brand-500 hover:text-white dark:hover:text-dark-950 text-dark-950 dark:text-white font-bold text-xs flex items-center space-x-1.5 transition-all group-hover:bg-brand-500 group-hover:text-dark-950"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
