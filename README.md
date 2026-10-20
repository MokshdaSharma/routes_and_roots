# Routes & Roots — Premium Group Travel Website

A production-ready, ultra-aesthetic, new-generation travel website built for **Routes & Roots** — organizing curated youth group travel experiences starting with the **Jaisalmer Desert Odyssey** in Rajasthan.

---

## 🌟 Key Features

- **New-Generation Aesthetics:** Deep desert obsidian tones, ambient gold glow, glassmorphism, editorial typography (`Syne`, `Playfair Display`, `Cormorant Garamond`, `Plus Jakarta Sans`).
- **Google Forms Registration Integration:** Centralized configuration variable (`REGISTRATION_FORM_URL`) driving all registration CTAs.
- **Prominent CTAs:** "Register for the Journey" buttons in the Hero, Pricing section, Registration section, Navbar, and Mobile Sticky Footer.
- **Graceful "Coming Soon" State:** When no Google Form URL is set, the site automatically displays a polite "Coming Soon" state directing visitors to Instagram without linking to any fake form.
- **Transparent Pricing Architecture:** 
  - Total trip price: **₹6,999** per person
  - Non-refundable initial registration fee: **₹499** (secures seat)
  - Remaining balance: **₹6,500** due by **10 December 2026**
- **Mobile Sticky Footer:** Fixed, high-converting bottom registration bar for mobile travelers.
- **Data-Driven Trips Architecture:** Centralized trip configuration in `src/data/trips.ts`.
- **Production-Ready for Vercel:** Zero external backend, database, or payment gateway required.

---

## 🔗 How to Connect Your Google Form

You can configure your Google Form URL in **either of two ways**:

### Option A: Edit the Config File (Quickest)
1. Open [`src/config/site.ts`](file:///src/config/site.ts).
2. Set `REGISTRATION_FORM_URL` to your actual Google Form URL:
   ```ts
   export const REGISTRATION_FORM_URL: string =
     'https://forms.gle/YOUR_ACTUAL_GOOGLE_FORM_LINK';
   ```
3. Save the file. All "Register for the Journey" buttons across the entire website will immediately open your Google Form in a new browser tab.

### Option B: Use Environment Variables (Best for Vercel Deployment)
1. In your local project, create or edit `.env.local`:
   ```bash
   NEXT_PUBLIC_REGISTRATION_FORM_URL=https://forms.gle/YOUR_ACTUAL_GOOGLE_FORM_LINK
   ```
2. When deploying to **Vercel**, add `NEXT_PUBLIC_REGISTRATION_FORM_URL` in your Vercel Project Settings > **Environment Variables**.
3. Redeploy — no code changes needed!

> **Note:** Until you provide a valid URL (when it is left empty `''`), the website will keep the portal marked **"Coming Soon"** and will not redirect travelers to any fake or broken link.

---

## 🗺️ How to Publish a New Trip

All trip details are centralized in [`src/data/trips.ts`](file:///src/data/trips.ts). You never have to edit HTML or components to add a destination.

### Step 1: Add Trip Images
Place your optimized high-resolution images in the `public/` folder (e.g., `public/spiti-hero.jpg`).

### Step 2: Define the Trip in `src/data/trips.ts`
Add a new trip object to the `trips` array in [`src/data/trips.ts`](file:///src/data/trips.ts):

```ts
const spitiTrip: Trip = {
  id: 'spiti-2026',
  slug: 'spiti-valley',
  status: 'coming_soon', // 'open' | 'coming_soon' | 'sold_out'
  featured: false,

  destination: 'Spiti Valley',
  region: 'Himachal Pradesh',
  title: 'The Middle Land Expedition',
  tagline: 'High Passes, Ancient Monasteries & Starlit Valleys',
  description: 'Your narrative description here...',
  shortDescription: 'Explore the rugged high-altitude desert of Spiti.',

  heroImage: '/spiti-hero.jpg',
  heroImageAlt: 'Spiti Valley monastery and snowy peaks',

  departureDateLabel: 'May 2026 Departures',
  returnDateLabel: '7 Days / 6 Nights',
  duration: '7 Days / 6 Nights',
  departureCity: 'Delhi / Chandigarh',

  totalPrice: 14999,
  currency: 'INR',
  currencySymbol: '₹',
  registrationFee: 999,
  balanceAmount: 14000,
  accommodationType: 'Homestays & Boutique Stays',
  registrationDeadline: '15 April 2026',
  balancePaymentDeadline: '1 May 2026',
  registrationFeeNote: 'Initial registration fee is non-refundable.',

  inclusions: [ ... ],
  exclusions: [ ... ],

  registrationPortalUrl: REGISTRATION_FORM_URL || undefined,
  contactLink: 'https://www.instagram.com/routes_and.routes',

  theme: { ... },
  highlights: [ ... ],
  itinerary: [ ... ],
  gallery: [ ... ],
  experiences: [ ... ],
  faqs: [ ... ],
};

// Add to the exported trips list:
export const trips: Trip[] = [jaisalmerTrip, spitiTrip];
```

### Step 3: Access the New Trip
- The dynamic route `/trips/spiti-valley` is automatically generated with all pages, SEO tags, gallery, and pricing.
- To make it the homepage featured trip, set `featured: true` on the new trip and `featured: false` on Jaisalmer.

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 🚢 Deploying to Vercel

1. Push your code to a GitHub / GitLab / Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. (Optional) In **Environment Variables**, add:
   - Key: `NEXT_PUBLIC_REGISTRATION_FORM_URL`
   - Value: `https://forms.gle/YOUR_GOOGLE_FORM_LINK`
5. Click **Deploy**. Vercel will build and launch your production site with automated SSL and global CDN.

---

## 🔒 Verification & Payment Policy
- Submitting the Google Form records traveler details.
- Seat allocation is **strictly confirmed only upon manual verification of the ₹499 registration fee** by the Routes & Roots team.
- The ₹499 fee is strictly non-refundable. The remaining ₹6,500 balance is due by 10 December 2026.
