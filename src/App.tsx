import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DriverRegistrationModal } from './components/DriverRegistrationModal';
import { ThemeToggleFab } from './components/ThemeToggleFab';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ForDriversPage } from './pages/ForDriversPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { SafetyPage } from './pages/SafetyPage';
import { CookiesPage } from './pages/CookiesPage';
import { DeleteAccountPage } from './pages/DeleteAccountPage';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const MainLayout: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('city-rides');
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

  const handleOpenBooking = (serviceId: string = 'city-rides') => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark-950 text-dark-900 dark:text-neutral-100 selection:bg-brand-500 selection:text-black font-sans antialiased transition-colors duration-300">
      <Navbar 
        onOpenBooking={() => handleOpenBooking('city-rides')}
        onOpenDriverModal={() => setIsDriverModalOpen(true)}
      />

      <div className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenBooking={() => handleOpenBooking('city-rides')}
                onOpenDriverModal={() => setIsDriverModalOpen(true)}
                onSelectServiceForBooking={(id) => handleOpenBooking(id)}
              />
            } 
          />
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onOpenBooking={() => handleOpenBooking('city-rides')}
                onSelectServiceForBooking={(id) => handleOpenBooking(id)}
              />
            } 
          />
          <Route 
            path="/for-drivers" 
            element={<ForDriversPage />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route 
            path="/terms" 
            element={<TermsPage />} 
          />
          <Route 
            path="/privacy" 
            element={<PrivacyPage />} 
          />
          <Route 
            path="/safety" 
            element={<SafetyPage />} 
          />
          <Route 
            path="/cookies" 
            element={<CookiesPage />} 
          />
          <Route 
            path="/delete-account" 
            element={<DeleteAccountPage />} 
          />
        </Routes>
      </div>

      <Footer />

      {/* Global Modals */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceId}
      />

      <DriverRegistrationModal
        isOpen={isDriverModalOpen}
        onClose={() => setIsDriverModalOpen(false)}
      />

      {/* Floating Theme Quick-Toggle */}
      <ThemeToggleFab />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
