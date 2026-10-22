// ============================================================
// ROUTES & ROOTS — SITE & REGISTRATION CONFIGURATION
// ============================================================
// To connect your Google Form:
// 1. Paste your Google Form URL below in REGISTRATION_FORM_URL
//    (or set the NEXT_PUBLIC_REGISTRATION_FORM_URL environment variable).
// 2. Until you provide a valid URL (when it's empty ''), the website
//    will automatically display "Coming Soon" and notify visitors
//    to follow Instagram for the launch announcement.
// 3. When a URL is provided, all "Register for the Journey" CTAs
//    across the Hero, Pricing, Registration Section, and Mobile
//    Sticky Footer will open the Google Form in a new tab.
// ============================================================

export const REGISTRATION_FORM_URL: string =
  process.env.NEXT_PUBLIC_REGISTRATION_FORM_URL || 'https://forms.gle/cytMzQNv25wHFJBF7';

export const BRAND_CONFIG = {
  name: 'Routes & Roots',
  wordmark: 'ROUTES AND ROOTS',
  tagline: 'College Trips • Bigger Stories',
  secondaryTagline: 'Somewhere Between the Dunes and the Stars',
  logoUrl: '/logo.png',
  instagramHandle: '@routes_and.roots',
  instagramUrl: 'https://www.instagram.com/routes_and.roots/',
  supportEmail: 'contact@routesandroots.com',
  featuredTripSlug: 'jaisalmer',
};
