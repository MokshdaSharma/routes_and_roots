// ============================================================
// ROUTES & ROOTS — CENTRALIZED TRIP CONFIGURATION
// ============================================================
// Add new trips here. Each trip drives all UI components
// automatically. Do NOT hardcode destination text in components.
// ============================================================

import { REGISTRATION_FORM_URL } from '@/config/site';

export type BookingStatus = 'coming_soon' | 'open' | 'closed' | 'sold_out';

export interface ItineraryActivity {
  time?: string;
  activity: string;
  note?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  activities: ItineraryActivity[];
  note?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  span?: 'normal' | 'wide' | 'tall';
}

export interface TripHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface TripExperience {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface TripFAQ {
  question: string;
  answer: string;
}

export interface TripTheme {
  primaryColor: string;
  accentColor: string;
  bgColor: string;
  textColor: string;
  cardBg: string;
  borderColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface RoomSharingOption {
  type: 'quad' | 'triple';
  label: string;
  roomCapacity: string;
  price: number;
  registrationFee: number;
  balanceAmount: number;
  popular?: boolean;
  description: string;
  highlights: string[];
}

export interface Trip {
  id: string;
  slug: string;
  status: BookingStatus;
  featured: boolean;

  // Identity
  destination: string;
  region: string;
  title: string;
  tagline: string;
  description: string;
  shortDescription: string;

  // Hero
  heroImage: string;
  heroImageAlt: string;

  // Schedule
  departureDateLabel: string;
  returnDateLabel: string;
  duration: string;
  departureCity: string;
  departureCityNote?: string;

  // Pricing
  totalPrice: number;
  quadPrice: number;
  triplePrice: number;
  currency: string;
  currencySymbol: string;
  registrationFee: number;
  balanceAmount: number;
  accommodationType: string;
  registrationDeadline: string;
  balancePaymentDeadline: string;
  registrationFeeNote: string;
  roomSharingOptions: RoomSharingOption[];

  // Inclusions / Exclusions
  inclusions: string[];
  exclusions: string[];

  // Booking
  registrationPortalUrl?: string;
  contactLink: string;

  // Theme
  theme: TripTheme;

  // Content
  highlights: TripHighlight[];
  itinerary: ItineraryDay[];
  gallery: GalleryImage[];
  experiences: TripExperience[];
  faqs: TripFAQ[];
}

const jaisalmerTrip: Trip = {
  id: 'jaisalmer-2026',
  slug: 'jaisalmer',
  status: REGISTRATION_FORM_URL ? 'open' : 'coming_soon',
  featured: true,

  destination: 'Jaisalmer',
  region: 'Rajasthan',
  title: 'The Golden Odyssey',
  tagline: 'Somewhere Between the Dunes and the Stars',
  description:
    "Deep in the heart of the Thar Desert lies a city made of gold. Jaisalmer — where ancient sandstone forts glow like embers at dusk, where camels trace long shadows across rippling dunes, and where the night sky reveals a canopy of stars you never knew existed. This is not just a trip. It's a story you'll tell for years.",
  shortDescription: 'Your gateway to the Golden City of Rajasthan.',

  heroImage: '/jaisalmer-hero.jpg',
  heroImageAlt: 'Cinematic aerial view of Sam Sand Dunes at golden sunset, Jaisalmer, Rajasthan',

  departureDateLabel: 'Upcoming Batch — Dates Dropping Soon',
  returnDateLabel: '4 Days Expedition',
  duration: '4 Days / 3 Nights',
  departureCity: 'Punjab (Chandigarh / Mohali Hub)',
  departureCityNote: 'Central pickup point with en-route boarding options in Patiala & Bathinda.',

  totalPrice: 6999,
  quadPrice: 6999,
  triplePrice: 7299,
  currency: 'INR',
  currencySymbol: '₹',
  registrationFee: 999,
  balanceAmount: 6000,
  accommodationType: 'Quad & Triple Sharing (1N Camp, 1N Resort, 1N Travel Transit)',
  registrationDeadline: '30 November 2026',
  balancePaymentDeadline: '10 December 2026',
  registrationFeeNote:
    'The initial registration fee of ₹999 is strictly non-refundable and reserves your seat. The remaining balance (₹6,000 for Quad Sharing or ₹6,300 for Triple Sharing) is due by 10 December 2026.',

  roomSharingOptions: [
    {
      type: 'quad',
      label: 'Quad Sharing',
      roomCapacity: '4 Persons per Room / Swiss Tent',
      price: 6999,
      registrationFee: 999,
      balanceAmount: 6000,
      popular: true,
      description: 'The preferred choice for college squads, friend circles, and budget travelers seeking maximum vibes.',
      highlights: [
        '4 travelers per luxury Swiss tent at Sam Sand Dunes',
        '4 travelers per spacious room at Jaisalmer Luxury Resort',
        'Attached private western washrooms with running hot water',
        '₹999 non-refundable token + ₹6,000 balance before departure',
      ],
    },
    {
      type: 'triple',
      label: 'Triple Sharing',
      roomCapacity: '3 Persons per Room / Swiss Tent',
      price: 7299,
      registrationFee: 999,
      balanceAmount: 6300,
      popular: false,
      description: 'Upgraded rooming with extra space and privacy for trios, small groups, or solo travelers wanting more comfort.',
      highlights: [
        '3 travelers per luxury Swiss tent at Sam Sand Dunes',
        '3 travelers per premium room at Jaisalmer Luxury Resort',
        'More personal space and luggage storage comfort',
        '₹999 non-refundable token + ₹6,300 balance before departure',
      ],
    },
  ],

  inclusions: [
    'Complete road transit in AC Deluxe Pushback coach from Punjab and back (Night 1 Travel Night)',
    '1 Night Luxury Desert Camping at Sam Sand Dunes in Swiss tents (Quad / Triple Sharing)',
    '1 Night Luxury Resort / Heritage stay in Jaisalmer (Quad / Triple Sharing)',
    'All Meals Included: Daily Breakfasts, Lunches & Dinners (Except only the final highway dinner on Day 4)',
    'Thar Desert Jeep Safari (Dune Bashing) & Camel Safari across Sam Sand Dunes included',
    'All Fort & Monument Entry Tickets included (Jaisalmer Fort, Kuldhara Village, Junagarh Fort Bikaner)',
    'Rajasthani Folk Dance & Cultural Performance with Desert Bonfire',
    'High-Energy DJ Nights in Desert Camp & Day 4 Celebration',
    'Dedicated on-ground Routes & Roots Trip Captains throughout the journey',
  ],

  exclusions: [
    'Final dinner during return transit on Day 4 (Highway stop is self-paid)',
    'Optional adventure sports if chosen (Quad Biking, Parasailing, Dune Buggies are self-paid)',
    'Personal shopping, souvenirs, or personal beverage expenses',
    'Anything not explicitly mentioned in the inclusions list',
  ],

  registrationPortalUrl: REGISTRATION_FORM_URL || undefined,
  contactLink: 'https://www.instagram.com/routes_and.roots/',

  theme: {
    primaryColor: '#E5B869',
    accentColor: '#C25E38',
    bgColor: '#140C07',
    textColor: '#FAF6F0',
    cardBg: '#1A0F09',
    borderColor: '#3D2A1E',
    gradientFrom: '#172C2A',
    gradientTo: '#2C1B12',
  },

  highlights: [
    { icon: 'Dune', title: 'Sam Sand Dunes', description: 'Walk the golden ridges of the Thar at the iconic Sam Sand Dunes — the heartbeat of the desert.' },
    { icon: 'Jeep', title: 'Jeep & Camel Safari Included', description: 'Both thrilling jeep dune bashing and authentic camel safari across the golden dunes are included.' },
    { icon: 'Culture', title: 'Cultural Evening & Bonfire', description: 'Rajasthani folk music, Kalbelia dance performances, and an unforgettable bonfire under the stars.' },
    { icon: 'Music', title: 'DJ Nights & Parties', description: 'High-energy DJ parties including desert camp DJ night and Day 4 celebration bash!' },
    { icon: 'History', title: 'Kuldhara & Fort Tickets Included', description: 'Explore the 200-year-old haunted Kuldhara village and living Jaisalmer Fort with entry included.' },
    { icon: 'Food', title: 'All Meals Covered', description: 'All breakfasts, lunches, and lavish buffet dinners are paid and included (except only the last dinner).' },
    { icon: 'Shopping', title: 'Local Bazaars', description: "Discover handcrafted Rajasthani textiles, camel leather goods, and spices in Jaisalmer's markets." },
    { icon: 'Castle', title: 'Bikaner Junagarh Fort', description: 'On the return journey, explore the magnificent Junagarh Fort of Bikaner with entry tickets included.' },
  ],

  itinerary: [
    {
      day: 1,
      title: 'The Road to Rajasthan',
      subtitle: 'Day 1 — Evening Departure (Night 1: Travel Transit)',
      summary: 'Evening departure from Punjab, highway dinner stop, and overnight scenic transit.',
      image: '/road-to-rajasthan.jpg',
      note: 'All timings are approximate. The confirmed boarding schedule and bus details will be shared on our WhatsApp group before departure.',
      activities: [
        { time: '~6:00 PM', activity: 'Boarding begins from Punjab (Chandigarh / Mohali hub)', note: 'En-route pickups available at designated points.' },
        { time: '~10:00 PM', activity: 'Highway dinner stop at Patiala Haveli (Included)' },
        { time: 'Overnight', activity: 'Night 1 — Scenic overnight road journey across Rajasthan towards Jaisalmer in AC Deluxe Coach' },
      ],
    },
    {
      day: 2,
      title: 'Desert After Dark',
      subtitle: 'Day 2 — Sam Sand Dunes & Glamping (Night 2: Desert Camp)',
      summary: 'Arrival & breakfast, Sam dunes check-in, jeep & camel safari, cultural folk night and DJ bash.',
      image: '/sam-dunes.jpg',
      note: 'Carry light woolens for the desert night as temperatures dip after sunset.',
      activities: [
        { time: '~8:00 AM – 9:00 AM', activity: 'Arrival in Jaisalmer, freshen up & morning breakfast (Included)' },
        { time: '~12:00 PM', activity: 'Check-in to Luxury Desert Camp at Sam Sand Dunes (Swiss Tents with attached bath)' },
        { time: '~1:30 PM', activity: 'Traditional Rajasthani buffet lunch & rest (Included)' },
        { time: '~3:30 PM', activity: 'Thar Desert Jeep Safari & Camel Safari sunset ride across dunes (Included)' },
        { time: '~7:00 PM', activity: 'Rajasthani folk music, Kalbelia dance performance & desert bonfire' },
        { time: '~9:00 PM', activity: 'Grand Royal Rajasthani Buffet Dinner (Included)' },
        { time: '~10:00 PM', activity: 'Desert Camp DJ Night & stargazing under the clear desert sky' },
      ],
    },
    {
      day: 3,
      title: 'Golden City & Resort Life',
      subtitle: 'Day 3 — Living Fort & Resort Stay (Night 3: Luxury Resort)',
      summary: 'Kuldhara ghost village, Jaisalmer Golden Fort, resort stay, local markets and second DJ night.',
      image: '/kuldhara.jpg',
      note: 'Wear comfortable walking shoes for the fort walking tour.',
      activities: [
        { time: '~8:00 AM', activity: 'Morning tea and sunrise buffet breakfast at camp (Included)' },
        { time: '~10:00 AM', activity: 'Check-out from camp and head to Kuldhara Fort village' },
        { time: '~11:30 AM', activity: 'Explore the 200-year-old abandoned ruins of Kuldhara (Entry tickets included)' },
        { time: '~1:30 PM', activity: 'Check-in to Jaisalmer Luxury Resort / Heritage Hotel & delicious lunch (Included)' },
        { time: '~3:30 PM', activity: 'Guided tour of Jaisalmer Golden Fort (Entry tickets included) & sunset view points' },
        { time: '~6:30 PM', activity: 'Free time to explore local craft and textile bazaars' },
        { time: '~9:00 PM', activity: 'Sumptuous resort dinner & energetic DJ night party (Included)' },
      ],
    },
    {
      day: 4,
      title: 'Bikaner, DJ Celebration & Return',
      subtitle: 'Day 4 — Junagarh Fort, DJ Night & Journey Back',
      summary: 'Junagarh Fort exploration, Rajasthani lunch, evening DJ celebration bash, and scenic journey back home.',
      image: '/bikaner-fort.jpg',
      note: 'All timings are approximate subject to highway traffic. Only the final return dinner is self-paid.',
      activities: [
        { time: '~8:00 AM', activity: 'Breakfast and smooth check-out from resort (Included)' },
        { time: '~9:00 AM', activity: 'Scenic morning drive towards Bikaner' },
        { time: '~2:30 PM', activity: 'Explore the magnificent Junagarh Fort (Entry tickets included) & authentic lunch (Included)' },
        { time: '~6:30 PM – 8:00 PM', activity: 'Evening DJ Night & farewell celebration party before heading on the highway!' },
        { time: '~8:30 PM', activity: 'Final highway dinner stop (Self-paid)' },
        { time: 'Overnight', activity: 'Overnight return drive back to Punjab with memories of a lifetime' },
      ],
    },
  ],

  gallery: [
    { src: '/jaisalmer-hero.jpg', alt: 'Aerial view of Sam Sand Dunes at golden sunset', caption: 'Sam Sand Dunes at golden hour', span: 'wide' },
    { src: '/jaisalmer-fort.jpg', alt: 'Jaisalmer Fort illuminated at dusk', caption: 'The living Jaisalmer Fort' },
    { src: '/cultural-evening.jpg', alt: 'Rajasthani folk dancers performing around a bonfire at desert camp', caption: 'Cultural evening at the desert camp', span: 'tall' },
    { src: '/desert-safari.jpg', alt: 'Group of travelers on a jeep safari through Thar Desert dunes', caption: 'Desert safari adventure', span: 'wide' },
    { src: '/night-sky.jpg', alt: 'Milky Way galaxy over Thar Desert sand dunes at night', caption: 'Desert skies — a universe revealed' },
    { src: '/kuldhara.jpg', alt: 'Ancient ruins of Kuldhara abandoned village at sunset', caption: 'Kuldhara — the ghost town' },
    { src: '/desert-camp.jpg', alt: 'Luxury desert glamping camp at sunset', caption: 'The desert camp experience' },
    { src: '/sam-dunes.jpg', alt: 'Camel caravan on Sam Sand Dunes at dusk', caption: 'Golden dunes of Sam', span: 'normal' },
    { src: '/bikaner-fort.jpg', alt: 'Junagarh Fort Bikaner at golden hour', caption: 'Junagarh Fort, Bikaner' },
  ],

  experiences: [
    { icon: 'Dune', title: 'Jeep & Camel Safaris Included', description: 'Feel the adrenaline of Thar jeep dune bashing and gentle camel rides across Sam Sand Dunes with all costs included.', image: '/desert-safari.jpg' },
    { icon: 'Food', title: 'All Meals Paid (Except Last Dinner)', description: 'Relish daily breakfasts, traditional lunches, and royal buffet dinners throughout the expedition.', image: '/cultural-evening.jpg' },
    { icon: 'Fort', title: 'Living Heritage & Fort Entry Included', description: 'Ancient forts, golden sandstone architecture, and haunted legends in Jaisalmer and Kuldhara with all entry tickets paid.', image: '/jaisalmer-fort.jpg' },
    { icon: 'Stars', title: 'Desert Nights & Multiple DJ Parties', description: 'A crystal-clear canopy of stars, high-energy DJ parties including Day 4 farewell bash, and campfire tales.', image: '/night-sky.jpg' },
    { icon: 'Camp', title: '1N Camp + 1N Resort + 1N Travel', description: 'Swiss tents in the dunes and luxury resort in the city (Quad & Triple sharing options), plus AC coach travel night.', image: '/desert-camp.jpg' },
    { icon: 'Friends', title: 'A Curated Tribe', description: "Travel with like-minded students and young professionals. Leave as strangers, return as lifelong friends.", image: '/sam-dunes.jpg' },
  ],

  faqs: [
    { question: 'What is the total trip price and payment schedule?', answer: 'Pricing depends on your room sharing choice: ₹6,999 per person for Quad Sharing (4 in a room) and ₹7,299 per person for Triple Sharing (3 in a room). In both options, you only pay an initial non-refundable registration fee of ₹999 upfront to reserve your seat. The remaining balance (₹6,000 for Quad or ₹6,300 for Triple) is due before 10 December 2026.' },
    { question: 'How is the 4 Days / 3 Nights stay divided?', answer: 'Night 1 is the travel night (overnight scenic transit in our AC Deluxe Pushback coach from Punjab). Night 2 is spent in luxury Swiss Tents at Sam Sand Dunes. Night 3 is spent in a premium luxury resort in Jaisalmer city. You return to Punjab on Day 4 night.' },
    { question: 'Is the ₹999 registration fee refundable?', answer: 'No. The ₹999 registration fee is strictly NON-REFUNDABLE under any circumstances as it immediately locks your bus seat, desert camp tent, and resort inventory. Please ensure your availability before registering.' },
    { question: 'What meals are included in the package?', answer: 'All meals throughout the journey are included and paid: daily breakfasts, lunches, and royal buffet dinners (including Day 1 dinner at Patiala Haveli and meals in Jaisalmer & Bikaner). Only the final return dinner on the highway on Day 4 is self-paid.' },
    { question: 'Are fort entry tickets and desert safaris included?', answer: 'YES! Entry tickets for Jaisalmer Fort, Kuldhara Ghost Village, and Junagarh Fort Bikaner are fully included. Both the Thar Desert Jeep Safari (Dune Bashing) and Camel Safari are also included. Only optional adventure sports (such as quad biking, parasailing, or dune buggies if you choose to take them) are self-paid.' },
    { question: 'What is the difference between Quad Sharing and Triple Sharing?', answer: 'In Quad Sharing (₹6,999/person), 4 travelers share a spacious Swiss camp tent and resort room — perfect for squads and social trippers looking for maximum vibes. In Triple Sharing (₹7,299/person), 3 travelers share a room/tent for additional comfort and personal space. Both options include all amenities, luxury bedding, and attached private western washrooms with running hot water.' },
    { question: 'How do I register using the Google Form?', answer: 'Click "Register for the Journey" on this page to open our official Google Form in a new tab. Enter your basic contact details, emergency contact, and select your preferred room sharing format (Quad or Triple). Once submitted, our team will reach out with payment instructions for the ₹999 non-refundable token registration fee.' },
    { question: 'Is clicking the registration button or filling the form a confirmed booking?', answer: 'No. Submitting the Google Form initiates your registration request. Your seat is confirmed only after our team manually verifies your ₹999 non-refundable token registration fee.' },
    { question: 'Can I travel solo? What about rooming and female safety?', answer: 'Yes! Over 40% of our travelers join solo. Solo travelers are paired with same-gender roommates according to their chosen rooming tier (Quad or Triple). We have dedicated female trip coordinators on board to ensure a safe, inclusive, and welcoming environment.' },
    { question: 'What type of transport is provided from Punjab?', answer: 'We travel together in a sanitized, comfortable AC Deluxe coach with push-back seats, professional drivers, and ample luggage space, accompanied by our trip leads.' },
    { question: 'How can I reach the organizers directly?', answer: 'You can DM us anytime on Instagram @routes_and.roots (https://www.instagram.com/routes_and.roots/) or reach out through the official contact options on this website.' },
  ],
};

export const trips: Trip[] = [jaisalmerTrip];

export const featuredTrip: Trip = trips.find((t) => t.featured) ?? trips[0];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}
