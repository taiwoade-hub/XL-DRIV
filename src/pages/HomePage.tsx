import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { DriverSection } from '../components/DriverSection';
import { AppDownloadSection } from '../components/AppDownloadSection';
import { FaqSection } from '../components/FaqSection';

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenDriverModal: () => void;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenDriverModal,
  onSelectServiceForBooking
}) => {
  return (
    <main>
      <Hero 
        onOpenBooking={onOpenBooking} 
        onOpenDriverModal={onOpenDriverModal} 
      />
      
      <ServicesSection 
        onSelectServiceForBooking={onSelectServiceForBooking} 
      />
      
      <HowItWorksSection />
      
      <WhyChooseUsSection />
      
      <DriverSection 
        onOpenDriverModal={onOpenDriverModal} 
      />
      
      <AppDownloadSection />
      
      <FaqSection />
    </main>
  );
};
