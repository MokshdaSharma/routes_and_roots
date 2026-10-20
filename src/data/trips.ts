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
  registrationFee: 499,
  balanceAmount: 6500,
  accommodationType: 'Quad & Triple Sharing (Luxury Camp & Resort)',
  registrationDeadline: '30 November 2026',
  balancePaymentDeadline: '10 December 2026',
  registrationFeeNote:
    'The initial registration fee of ₹499 is strictly non-refundable and reserves your seat. The remaining balance (₹6,500 for Quad Sharing or ₹6,800 for Triple Sharing) is due by 10 December 2026.',

  roomSharingOptions: [
    {
      type: 'quad',
      label: 'Quad Sharing',
      roomCapacity: '4 Persons per Room / Swiss Tent',
      price: 6999,
      registrationFee: 499,
      balanceAmount: 6500,
      popular: true,
      description: 'The preferred choice for college squads, friend circles, and budget travelers seeking maximum vibes.',
      highlights: [
        '4 travelers per luxury Swiss tent at Sam Sand Dunes',
        '4 travelers per spacious room at Jaisalmer Heritage Hotel',
        'Attached private western washrooms with running hot water',
        'Most popular & energetic group sharing format',
      ],
    },
    {
      type: 'triple',
      label: 'Triple Sharing',
      roomCapacity: '3 Persons per Room / Swiss Tent',
      price: 7299,
      registrationFee: 499,
      balanceAmount: 6800,
      popular: false,
      description: 'Upgraded rooming with extra space and privacy for trios, small groups, or solo travelers wanting more comfort.',
      highlights: [
        '3 travelers per luxury Swiss tent at Sam Sand Dunes',
        '3 travelers per premium room at Jaisalmer Heritage Hotel',
        'More personal space and luggage storage comfort',
        'Attached private western washrooms with running hot water',
      ],
    },
  ],

  inclusions: [
    'Complete road transit in AC Deluxe Pushback coach from Punjab and back',
    '1 Night Luxury Desert Camping at Sam Sand Dunes in Swiss tents (Quad / Triple Sharing)',
    '2 Nights Resort stay in Jaisalmer (Quad / Triple Sharing basis)',
    'Thar Desert Jeep Safari & Dune Bashing session',
    'Rajasthani Folk Dance & Cultural Performance with Bonfire',
    '2 Nights of DJ Parties under the desert stars',
    'Daily Breakfasts and Royal Desert Camp Buffet Dinners',
    'Guided visits to Jaisalmer Fort, Kuldhara Ghost Village & Bikaner Fort',
    'Dedicated on-ground Routes & Roots Trip Captains',
  ],

  exclusions: [
    'Meals during highway transit stops (Dhabas / Highway eateries)',
    'Monument entrance tickets & camera fees (approx ₹50–₹100)',
    'Personal shopping, drinks, or optional activities (Quad biking, Parasailing)',
    'Anything not explicitly mentioned in the inclusions list',
  ],

  registrationPortalUrl: REGISTRATION_FORM_URL || undefined,
  contactLink: 'https://www.instagram.com/routes_and.routes',

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
    { icon: 'Jeep', title: 'Desert Safari', description: 'An exhilarating jeep safari across undulating dunes, kicking up clouds of golden sand.' },
    { icon: 'Culture', title: 'Cultural Evening', description: 'Rajasthani folk music, vibrant dance performances, and an unforgettable bonfire under the stars.' },
    { icon: 'Music', title: 'DJ Nights', description: 'Two nights of music and celebration in the desert, blending modern beats with desert magic.' },
    { icon: 'History', title: 'Kuldhara Ghost Town', description: 'Explore the mysterious abandoned village of Kuldhara — a 200-year-old cursed ghost town.' },
    { icon: 'Fort', title: 'Jaisalmer Fort Views', description: 'Wander through the living fort city of Jaisalmer — golden walls, carved havelis, and desert vistas.' },
    { icon: 'Shopping', title: 'Local Bazaars', description: "Discover handcrafted Rajasthani textiles, camel leather goods, and spices in Jaisalmer's markets." },
    { icon: 'Castle', title: 'Bikaner Junagarh Fort', description: 'On the return journey, explore the magnificent Junagarh Fort of Bikaner — a Rajput masterpiece.' },
  ],

  itinerary: [
    {
      day: 1,
      title: 'The Road to Rajasthan',
      subtitle: 'Day 1 — Evening Departure',
      summary: 'Evening departure, dinner stop and the start of the adventure.',
      image: '/road-to-rajasthan.jpg',
      note: 'All timings are approximate. The confirmed boarding schedule and bus details will be shared on our WhatsApp group before departure.',
      activities: [
        { time: '~6:00 PM', activity: 'Boarding begins from Punjab (Chandigarh / Mohali hub)', note: 'En-route pickups available at designated points.' },
        { time: '~10:00 PM', activity: 'Highway dinner stop at Patiala Haveli' },
        { time: 'Overnight', activity: 'Scenic overnight journey across Rajasthan towards Jaisalmer' },
      ],
    },
    {
      day: 2,
      title: 'Desert After Dark',
      subtitle: 'Day 2 — The Golden Heart',
      summary: 'Sam dunes, desert safari, cultural evening and DJ night.',
      image: '/sam-dunes.jpg',
      note: 'Carry light woolens for the desert night as temperatures dip after sunset.',
      activities: [
        { time: '~8:00 AM', activity: 'Arrival in Jaisalmer, welcome refreshments & breakfast' },
        { time: '~12:00 PM', activity: 'Check-in to Luxury Desert Camp at Sam Sand Dunes' },
        { time: '~1:30 PM', activity: 'Traditional Rajasthani lunch and rest' },
        { time: '~3:30 PM', activity: 'Thar Desert Jeep Safari & sunset dune photography' },
        { time: '~7:00 PM', activity: 'Folk music, Kalbelia dance performance & desert bonfire' },
        { time: '~9:00 PM', activity: 'Grand Royal Buffet Dinner' },
        { time: '~10:00 PM', activity: 'DJ Night & stargazing under the desert sky' },
      ],
    },
    {
      day: 3,
      title: 'Golden City Stories',
      subtitle: 'Day 3 — The Living Fort',
      summary: 'Kuldhara, Jaisalmer Fort views, local markets and resort fun.',
      image: '/kuldhara.jpg',
      note: 'Wear comfortable walking shoes for the fort walking tour.',
      activities: [
        { time: '~8:00 AM', activity: 'Morning chai and sunrise breakfast at camp' },
        { time: '~10:00 AM', activity: 'Check-out from camp and head to Kuldhara Ghost Village' },
        { time: '~11:30 AM', activity: 'Explore the 200-year-old abandoned ruins of Kuldhara' },
        { time: '~1:30 PM', activity: 'Check-in to Jaisalmer Heritage Hotel & lunch' },
        { time: '~3:30 PM', activity: 'Explore Jaisalmer Golden Fort & scenic city sunset points' },
        { time: '~6:30 PM', activity: 'Free time to explore local craft and textile bazaars' },
        { time: '~9:00 PM', activity: 'Dinner, second DJ night & community games' },
      ],
    },
    {
      day: 4,
      title: 'Bikaner & Beyond',
      subtitle: 'Day 4 — Return via the Rose City',
      summary: 'Junagarh Fort exploration, authentic Rajasthani food walk, and the scenic journey back home.',
      image: '/bikaner-fort.jpg',
      note: 'All timings are approximate subject to highway traffic.',
      activities: [
        { time: '~8:00 AM', activity: 'Breakfast and check-out from hotel' },
        { time: '~9:00 AM', activity: 'Scenic drive to Bikaner' },
        { time: '~2:30 PM', activity: 'Visit the magnificent Junagarh Fort & local Bikaner food walk' },
        { time: '~7:00 PM', activity: 'Dinner in Bikaner' },
        { time: 'Overnight', activity: 'Return drive back to Punjab with memories of a lifetime' },
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
    { icon: 'Dune', title: 'Desert Adventure', description: 'Feel the thrill of dune bashing, camel rides, and endless golden sand at Sam Sand Dunes.', image: '/desert-safari.jpg' },
    { icon: 'Culture', title: 'Cultural Immersion', description: 'Rajasthani folk performances, Kalbelia music, and authentic cuisine around a crackling bonfire.', image: '/cultural-evening.jpg' },
    { icon: 'Fort', title: 'Living Heritage', description: 'Ancient forts, golden sandstone architecture, and haunted legends in Jaisalmer and Kuldhara.', image: '/jaisalmer-fort.jpg' },
    { icon: 'Stars', title: 'Desert Nights & Music', description: 'A crystal-clear canopy of stars, 2 DJ parties, and campfire stories with fellow travelers.', image: '/night-sky.jpg' },
    { icon: 'Camp', title: 'Glamping & Resort', description: 'Comfortable Swiss tents in the dunes and heritage resort in the city (Quad & Triple sharing options).', image: '/desert-camp.jpg' },
    { icon: 'Friends', title: 'A Curated Tribe', description: "Travel with like-minded students and young professionals. Leave as strangers, return as lifelong friends.", image: '/sam-dunes.jpg' },
  ],

  faqs: [
    { question: 'What is the total trip price and payment schedule?', answer: 'Pricing depends on your room sharing choice: ₹6,999 per person for Quad Sharing (4 in a room) and ₹7,299 per person for Triple Sharing (3 in a room). In both options, you only pay an initial non-refundable registration fee of ₹499 upfront to reserve your seat. The remaining balance (₹6,500 for Quad or ₹6,800 for Triple) is due by 10 December 2026.' },
    { question: 'What is the difference between Quad Sharing and Triple Sharing?', answer: 'In Quad Sharing (₹6,999/person), 4 travelers share a spacious Swiss camp tent and resort room — perfect for squads and social trippers looking for maximum vibes. In Triple Sharing (₹7,299/person), 3 travelers share a room/tent for additional comfort and personal space. Both options include all amenities, luxury bedding, and attached private western washrooms.' },
    { question: 'How do I register using the Google Form?', answer: 'Click "Register for the Journey" on this page to open our official Google Form in a new tab. Enter your basic contact details, emergency contact, and select your preferred room sharing format (Quad or Triple). Once submitted, our team will reach out with payment instructions for the ₹499 token registration fee.' },
    { question: 'Is clicking the registration button or filling the form a confirmed booking?', answer: 'No. Submitting the Google Form initiates your registration request. Your seat is confirmed only after our team manually verifies your ₹499 token registration fee.' },
    { question: 'Is the ₹499 registration fee refundable?', answer: 'No. The ₹499 registration fee is strictly non-refundable and goes directly towards booking camp slots and private coach reservations. Please ensure you are fully committed before registering.' },
    { question: 'Can I travel solo? What about rooming and female safety?', answer: 'Yes! Over 40% of our travelers join solo. Solo travelers are paired with same-gender roommates according to their chosen rooming tier (Quad or Triple). We have dedicated female trip coordinators on board to ensure a safe, inclusive, and welcoming environment.' },
    { question: 'What type of transport is provided from Punjab?', answer: 'We travel together in a sanitized, comfortable AC Deluxe coach with push-back seats, professional drivers, and ample luggage space, accompanied by our trip leads.' },
    { question: 'What meals are included in the package?', answer: 'All breakfasts and royal buffet dinners at the desert camp and hotel are included. Highway meals during travel (such as dhabas on Day 1 and Day 4) are self-paid so travelers can choose what they prefer.' },
    { question: 'How can I reach the organizers directly?', answer: 'You can DM us anytime on Instagram @routes_and.routes or reach out through the official contact options on this website.' },
  ],
};

export const trips: Trip[] = [jaisalmerTrip];

export const featuredTrip: Trip = trips.find((t) => t.featured) ?? trips[0];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}
