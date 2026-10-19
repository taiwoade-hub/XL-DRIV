export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  idealFor: string;
  image: string;
  startingPrice: string;
}

export const COMPANY_DETAILS = {
  name: 'XLDriv',
  legalName: 'XL DRIV LIMITED',
  tagline: 'Move on your terms.',
  phonePrimary: '+234 911 564 1088',
  phoneSecondary: '+234 706 814 8526',
  emailInfo: 'info@xldriv.com',
  emailSupport: 'support@xldriv.com',
  address: '27, Raji Oba Street, Egbeda, Lagos State, Nigeria',
  googleMapsUrl: 'https://www.google.com/maps?q=27+raji+oba+street,+Egbeda,+Lagos',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.xldriv.app',
  appStoreUrl: 'https://apps.apple.com/ng/app/xldriv/id6758437305',
  appStoreDirect: 'itms-apps://itunes.apple.com/app/id6758437305',
  driverSubscriptionDaily: 2450, // NGN daily flat subscription
  driverCommissionRate: 0, // 0% commission!
  competitorCommissionRate: 0.22, // 22% average industry commission
};

const base = import.meta.env.BASE_URL || '/';

export const SERVICES: ServiceItem[] = [
  {
    id: 'city-rides',
    title: 'City Rides',
    badge: 'Most Popular',
    tagline: 'Everyday urban trips on your terms',
    description: 'Propose your fare and connect with top-rated drivers nearby. Fast pickups for daily commutes, errands, and nights out with zero surge surprises.',
    features: [
      'Propose your own fare before booking',
      'Select driver by rating, vehicle model & ETA',
      'Live GPS trip sharing with loved ones',
      'Cashless in-app wallet or direct payment'
    ],
    idealFor: 'Daily commute, airport runs, client meetings, leisure',
    image: `${base}images/bb.webp`,
    startingPrice: 'Propose your fare'
  },
  {
    id: 'city-to-city',
    title: 'City-to-City',
    badge: 'Interstate Mobility',
    tagline: 'Comfortable cross-country & intercity journeys',
    description: 'Travel between states across Nigeria without crowded motor parks. Enjoy door-to-door comfort, verified drivers, air-conditioned vehicles, and pre-agreed flat fares.',
    features: [
      'Direct doorstep pickup and drop-off',
      'Verified interstate drivers with highway certification',
      'Spacious luggage capacity for interstate travel',
      'Popular routes: Lagos ↔ Ibadan, Lagos ↔ Benin, Abuja ↔ Kaduna'
    ],
    idealFor: 'Interstate business, family visits, weekend getaways',
    image: `${base}images/handsome-elegant-man-car-salon (1).jpg`,
    startingPrice: 'Negotiate custom interstate rate'
  },
  {
    id: 'ride-sharing',
    title: 'Ride-Sharing',
    badge: 'Eco & Budget Friendly',
    tagline: 'Share the journey, split the cost',
    description: 'Match with commuters heading your way. Cut your commuting costs by up to 50% while reducing carbon emissions and urban traffic gridlock in busy metropolitan corridors.',
    features: [
      'Smart route matching for passengers heading the same way',
      'Split fares automatically through the app',
      'Vetted professional co-riders with profile ratings',
      'Reduced congestion along busy expressways'
    ],
    idealFor: 'Mainland-to-Island daily commuters, cost-conscious riders',
    image: `${base}images/bc.jpg`,
    startingPrice: 'Up to 50% savings'
  },
  {
    id: 'courier',
    title: 'Courier & Parcel Delivery',
    badge: 'Fast Express',
    tagline: 'Rapid doorstep delivery for parcels & documents',
    description: 'From confidential legal briefs and documents to e-commerce merchandise, send items across your city with real-time tracking and verified handover codes.',
    features: [
      'Doorstep pickup within minutes',
      'Digital proof of delivery with secure OTP code',
      'Real-time live package tracking from pickup to drop-off',
      'Motorcycle, car, or van dispatch based on package size'
    ],
    idealFor: 'E-commerce vendors, urgent documents, gifts, medicines',
    image: `${base}images/invest-card1.jpeg`,
    startingPrice: 'Negotiated per distance & parcel weight'
  },
  {
    id: 'trucks-logistics',
    title: 'Trucks, Clearing & Forwarding',
    badge: 'Industrial Logistics',
    tagline: 'Heavy freight, container haulage & custom clearance',
    description: 'Full-spectrum supply chain and logistics solutions. From container haulage at Apapa and Tin Can ports to cross-country industrial freight and custom clearing services.',
    features: [
      'Container haulage, flatbeds, and heavy-duty trucks',
      'Customs clearing and freight forwarding documentation',
      'End-to-end warehousing and distribution support',
      'Dedicated corporate logistics account management'
    ],
    idealFor: 'Importers, manufacturers, distributors, construction firms',
    image: `${base}images/cl2.png`,
    startingPrice: 'Enterprise logistics quotes'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Set Your Route & Offer',
    description: 'Enter your pickup spot and destination. Unlike rigid platforms, you enter the fare you are willing to pay.',
    icon: 'MapPin'
  },
  {
    step: '02',
    title: 'Receive Real Driver Bids',
    description: 'Nearby drivers review your offer. They can accept it directly or suggest a reasonable counter-offer in real time.',
    icon: 'Sliders'
  },
  {
    step: '03',
    title: 'Select Your Preferred Driver',
    description: 'Compare bids based on price, vehicle type, driver rating, and estimated time of arrival. You are always in control.',
    icon: 'ShieldCheck'
  },
  {
    step: '04',
    title: 'Ride Confidently & Securely',
    description: 'Hop in and track your trip with live GPS. Pay smoothly via wallet, card, or cash and rate your experience.',
    icon: 'Car'
  }
];

export const POPULAR_LOCATIONS = [
  { name: 'Murtala Muhammed Int. Airport (LOS)', type: 'Airport', zone: 'Ikeja' },
  { name: 'Victoria Island (Adeola Odeku)', type: 'Business Hub', zone: 'Island' },
  { name: 'Lekki Phase 1 (Admiralty Way)', type: 'Residential & Commercial', zone: 'Island' },
  { name: 'Ikeja City Mall (Alausa)', type: 'Shopping & Leisure', zone: 'Mainland' },
  { name: 'Egbeda / Alimosho Central', type: 'Residential Hub', zone: 'Mainland' },
  { name: 'Yaba Tech / Sabo Silicon Hub', type: 'Tech & Academic', zone: 'Mainland' },
  { name: 'Ibadan City Center', type: 'Interstate', zone: 'Oyo State' },
  { name: 'Abuja Central Business District', type: 'Interstate', zone: 'FCT' },
];

export const FAQS = [
  {
    category: 'Booking & Fares',
    question: 'How does fare negotiation work on XLDriv?',
    answer: 'When you enter your pickup and drop-off locations, XLDriv displays a recommended fare benchmark based on distance and traffic. You have full liberty to propose that amount or enter your own custom offer. Nearby drivers see your offer and can accept it instantly or send a counter-bid. You choose whichever driver and price fits your budget!'
  },
  {
    category: 'For Drivers',
    question: 'How does the 0% commission model work for drivers?',
    answer: 'Traditional ride-hailing apps deduct 20% to 25% from every single trip you complete. At XLDriv, we operate on a flat daily subscription of just ₦2,450 debited from your in-app driver wallet. Once subscribed, you keep 100% of all fares earned that day. If you earn ₦45,000 in fares, you take home the full ₦45,000!'
  },
  {
    category: 'Safety',
    question: 'How does XLDriv verify drivers and ensure passenger safety?',
    answer: 'Every driver must submit a verified Nigerian driver’s license, national identity documentation, comprehensive vehicle registration and roadworthiness certificates, and undergo mandatory background screening. All trips are tracked with real-time GPS, and the app features an emergency SOS button and 24/7 support response.'
  },
  {
    category: 'Services',
    question: 'Can I book long-distance or interstate (City-to-City) trips?',
    answer: 'Yes! XLDriv offers dedicated City-to-City trips. Instead of traveling to crowded bus terminals, you can schedule a comfortable, private or shared interstate journey directly from your doorstep with experienced highway-certified drivers.'
  },
  {
    category: 'Services',
    question: 'How does the Courier and Freight Trucking service operate?',
    answer: 'For small packages and documents, choose Courier in the app for immediate on-demand pickup and trackable delivery. For container haulage, bulk freight, and customs clearing, our logistics division coordinates specialized flatbeds, heavy trucks, and customs clearance with end-to-end manifests.'
  },
  {
    category: 'Payments',
    question: 'What payment methods does XLDriv accept?',
    answer: 'You can pay using your secure in-app XLDriv wallet (topped up via debit card, USSD, or direct bank transfer) or directly in cash to the driver upon trip completion.'
  },
  {
    category: 'Account',
    question: 'How can I request the deletion of my account or personal data?',
    answer: 'You can initiate account deletion right inside the app under Profile > Security & Account > Delete My Account, or visit our dedicated Web Account Deletion page or email support@xldriv.com. In compliance with NDPR laws, all personal data is deleted within 30 days.'
  }
];
