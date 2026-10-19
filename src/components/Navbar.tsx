import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Car,
  Truck,
  Package,
  ChevronDown,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mobilityData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenDriverModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenDriverModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar for phone & corporate badge */}
      <div className="bg-dark-950 text-neutral-300 text-xs border-b border-dark-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 text-neutral-300 hover:text-brand-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span className="font-medium">{COMPANY_DETAILS.phonePrimary}</span>
            </a>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">Head Office: {COMPANY_DETAILS.address}</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-500 border border-brand-500/20">
              <Sparkles className="w-3 h-3 mr-1" />
              0% Commission for Drivers
            </span>
            <span className="text-neutral-400 text-xs">Nigeria • English</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${isScrolled
            ? 'bg-white/95 dark:bg-dark-950/95 backdrop-blur-md shadow-md py-3 border-b border-neutral-100 dark:border-dark-800'
            : 'bg-white dark:bg-dark-950 py-4 border-b border-neutral-100 dark:border-dark-800'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-neutral-200/80 dark:border-dark-700 flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="XL Driv Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-2xl font-extrabold tracking-tight text-dark-950 dark:text-white font-display">
                  XL<span className="text-brand-500">Driv</span>
                </span>
                <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-black dark:bg-brand-500 text-white dark:text-dark-950 rounded">
                  NG
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-400 font-semibold -mt-1 hidden sm:block">
                Mobility & Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${isActive('/')
                  ? 'text-black dark:text-white bg-neutral-100 dark:bg-dark-800'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-dark-900'
                }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseLeave={() => setServicesDropdown(false)}>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                onMouseEnter={() => setServicesDropdown(true)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold inline-flex items-center space-x-1 transition-all ${isActive('/services') || servicesDropdown
                    ? 'text-black dark:text-white bg-neutral-100 dark:bg-dark-800'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-dark-900'
                  }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-brand-500' : ''}`} />
              </button>

              {servicesDropdown && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-white dark:bg-dark-900 rounded-2xl shadow-2xl border border-neutral-100 dark:border-dark-800 p-2 z-50 animate-fade-in"
                  onMouseEnter={() => setServicesDropdown(true)}
                >
                  <Link
                    to="/services#city-rides"
                    className="flex items-start p-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-dark-800 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-brand-500 group-hover:text-black transition-colors">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-900 dark:text-white group-hover:text-brand-600 transition-colors">City Rides</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Everyday rides with negotiated fares</p>
                    </div>
                  </Link>

                  <Link
                    to="/services#city-to-city"
                    className="flex items-start p-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-dark-800 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-dark-800 text-dark-900 dark:text-white flex items-center justify-center mr-3 mt-0.5 group-hover:bg-dark-950 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-900 dark:text-white group-hover:text-brand-600 transition-colors">City-to-City</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Door-to-door interstate travel</p>
                    </div>
                  </Link>

                  <Link
                    to="/services#courier"
                    className="flex items-start p-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-dark-800 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-dark-800 text-dark-900 dark:text-white flex items-center justify-center mr-3 mt-0.5 group-hover:bg-dark-950 group-hover:text-white transition-colors">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-900 dark:text-white group-hover:text-brand-600 transition-colors">Courier Delivery</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Doorstep express parcels with OTP</p>
                    </div>
                  </Link>

                  <Link
                    to="/services#trucks-logistics"
                    className="flex items-start p-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-dark-800 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-dark-800 text-dark-900 dark:text-white flex items-center justify-center mr-3 mt-0.5 group-hover:bg-dark-950 group-hover:text-white transition-colors">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-900 dark:text-white group-hover:text-brand-600 transition-colors">Trucks & Forwarding</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Port clearing & heavy freight</p>
                    </div>
                  </Link>

                  <div className="border-t border-neutral-100 dark:border-dark-800 mt-1 pt-1">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-xs font-semibold text-center text-brand-600 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-dark-800 rounded-lg transition-colors"
                    >
                      View All 5 Services & Pricing →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/for-drivers"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${isActive('/for-drivers')
                  ? 'text-black dark:text-white bg-neutral-100 dark:bg-dark-800'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-dark-900'
                }`}
            >
              <span>For Drivers</span>
              <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold uppercase bg-brand-500/20 text-brand-700 dark:text-brand-400 rounded-full">
                0% Fee
              </span>
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${isActive('/about')
                  ? 'text-black dark:text-white bg-neutral-100 dark:bg-dark-800'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-dark-900'
                }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${isActive('/contact')
                  ? 'text-black dark:text-white bg-neutral-100 dark:bg-dark-800'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-dark-900'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Action CTAs + Dark Mode Toggle */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl border border-neutral-200 dark:border-dark-800 bg-neutral-100/90 dark:bg-dark-900 text-dark-950 dark:text-brand-400 hover:border-brand-500/50 hover:bg-neutral-200/60 dark:hover:bg-dark-850 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold shadow-sm"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-brand-400 shrink-0" />
                  <span className="hidden xl:inline text-neutral-300">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-dark-950 shrink-0" />
                  <span className="hidden xl:inline text-dark-900">Dark Mode</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenDriverModal ? onOpenDriverModal : () => window.location.href = '/for-drivers'}
              className="text-sm font-bold text-dark-900 dark:text-neutral-200 hover:text-brand-600 dark:hover:text-brand-400 px-3 py-2 rounded-xl transition-colors"
            >
              Drive with XLDriv
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950 hover:bg-black dark:hover:bg-brand-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md hover:shadow-lg group"
            >
              <span>Book a Ride</span>
              <ArrowRight className="w-4 h-4 ml-2 text-brand-500 dark:text-dark-950 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-xl border border-neutral-200 dark:border-dark-800 bg-neutral-100 dark:bg-dark-900 text-dark-950 dark:text-brand-400 shadow-sm"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-brand-400" /> : <Moon className="w-4 h-4 text-dark-950" />}
            </button>

            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-dark-950 dark:text-white hover:bg-neutral-100 dark:hover:bg-dark-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-dark-950 border-b border-neutral-200 dark:border-dark-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
            {/* Theme Appearance Selector inside Mobile Drawer */}
            <div className="p-3 rounded-2xl bg-neutral-100/90 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Theme Appearance
                </span>
                <span className="text-xs font-extrabold text-brand-600 dark:text-brand-400">
                  {theme === 'dark' ? 'Dark Mode Active' : 'Light Mode Active'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (theme !== 'light') toggleTheme();
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${theme === 'light'
                      ? 'bg-white text-dark-950 shadow-md border border-neutral-200'
                      : 'text-neutral-500 hover:text-white hover:bg-dark-800'
                    }`}
                >
                  <Sun className="w-4 h-4 text-brand-500" />
                  <span>Light Mode</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (theme !== 'dark') toggleTheme();
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${theme === 'dark'
                      ? 'bg-dark-800 text-white shadow-md border border-dark-700'
                      : 'text-neutral-600 hover:text-dark-950 hover:bg-neutral-200'
                    }`}
                >
                  <Moon className="w-4 h-4 text-brand-400" />
                  <span>Dark Mode</span>
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${isActive('/') ? 'bg-neutral-100 dark:bg-dark-800 text-black dark:text-white' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-900'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${isActive('/services') ? 'bg-neutral-100 dark:bg-dark-800 text-black dark:text-white' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-900'
                  }`}
              >
                Our Services (City, Interstate, Courier, Trucks)
              </Link>
              <Link
                to="/for-drivers"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold flex items-center justify-between ${isActive('/for-drivers') ? 'bg-neutral-100 dark:bg-dark-800 text-black dark:text-white' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-900'
                  }`}
              >
                <span>For Drivers</span>
                <span className="px-2 py-0.5 text-xs font-bold bg-brand-500 text-black rounded-full">
                  0% Commission
                </span>
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${isActive('/about') ? 'bg-neutral-100 dark:bg-dark-800 text-black dark:text-white' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-900'
                  }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${isActive('/contact') ? 'bg-neutral-100 dark:bg-dark-800 text-black dark:text-white' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-dark-900'
                  }`}
              >
                Contact & Support
              </Link>
            </div>

            <div className="pt-3 border-t border-neutral-100 dark:border-dark-800 flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-bold text-center bg-dark-950 dark:bg-brand-500 text-white dark:text-dark-950 hover:bg-black dark:hover:bg-brand-400 transition-all flex items-center justify-center space-x-2"
              >
                <span>Book a Ride Now</span>
                <ArrowRight className="w-4 h-4 text-brand-500 dark:text-dark-950" />
              </button>

              <Link
                to="/for-drivers"
                className="w-full py-2.5 rounded-xl font-bold text-center border-2 border-dark-950 dark:border-brand-500 text-dark-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-dark-900 transition-all block"
              >
                Drive & Earn with XLDriv
              </Link>
            </div>

            <div className="pt-2 text-center text-xs text-neutral-500 dark:text-neutral-400">
              Direct hotline: <a href={`tel:${COMPANY_DETAILS.phonePrimary}`} className="font-semibold text-black dark:text-brand-400">{COMPANY_DETAILS.phonePrimary}</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
