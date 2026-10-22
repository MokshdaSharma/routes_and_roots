'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/icons';
import { BRAND_CONFIG } from '@/config/site';
import RegisterButton from '@/components/RegisterButton';
import type { Trip } from '@/data/trips';

interface FooterProps {
  trip: Trip;
}

const footerNavLinks = [
  { label: 'Overview', href: '#trips' },
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About Us', href: '#about' },
];

export default function Footer({ trip }: FooterProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  const year = 2026;

  return (
    <footer className="bg-[#150D07] border-t border-[#E5A93C]/20 pb-28 md:pb-12" role="contentinfo">

      {/* Instagram CTA Banner */}
      <div className="border-b border-[#E5A93C]/15">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <p className="heading-eyebrow mb-2">Connect With The Tribe</p>
              <h3 className="heading-display text-[clamp(1.8rem,3.2vw,2.6rem)] text-[#FBF4E8]">
                Follow the Desert Journey
              </h3>
              <p className="text-xs sm:text-sm text-[#FBF4E8]/60 mt-1">
                Trip announcements, live reels, traveler stories, and batch dates drop first on Instagram.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3.5 px-6 text-xs"
              >
                <InstagramIcon size={16} />
                <span>Follow {BRAND_CONFIG.instagramHandle}</span>
              </a>

              <RegisterButton
                variant="secondary"
                label="Register for Journey"
                className="py-3.5 px-6 text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Brand Column with Logo (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E5A93C]/40 bg-[#FBF4E8] flex-shrink-0 flex items-center justify-center p-0.5">
                <Image
                  src={BRAND_CONFIG.logoUrl}
                  alt="Routes & Roots Logo"
                  width={38}
                  height={38}
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-sm font-bold tracking-[0.16em] uppercase text-[#FBF4E8]">
                  {BRAND_CONFIG.wordmark}
                </span>
                <span className="text-[0.6rem] text-[#E5A93C] tracking-[0.16em] uppercase font-semibold">
                  {BRAND_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FBF4E8]/60 leading-relaxed max-w-sm mb-4 font-light">
              Crafting authentic, community-led group journeys for college students and youth explorers. First stop: the Golden City of Jaisalmer.
            </p>

            <p className="text-[0.72rem] text-[#E5A93C]">
              Instagram: <a href={BRAND_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{BRAND_CONFIG.instagramHandle}</a>
            </p>
          </div>

          {/* Quick Nav (4 cols) */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase font-bold tracking-widest text-[#FBF4E8] mb-4">
              Expedition Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs text-[#FBF4E8]/65 hover:text-[#E5A93C] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Info (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase font-bold tracking-widest text-[#FBF4E8] mb-4">
              Pricing Summary
            </p>
            <div className="editorial-card p-4 rounded-xl border border-[#E5A93C]/20 bg-[#24170D] text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#FBF4E8]/50">Quad Sharing:</span>
                <span className="font-bold text-[#FBF4E8]">₹6,999 / person</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#FBF4E8]/50">Triple Sharing:</span>
                <span className="font-bold text-[#E5A93C]">₹7,299 / person</span>
              </div>
              <div className="flex justify-between pt-1.5 border-t border-[#E5A93C]/10">
                <span className="text-[#FBF4E8]/50">Seat Token:</span>
                <span className="font-bold text-[#E5A93C]">₹999 (non-refundable)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#FBF4E8]/50">Balance Due:</span>
                <span className="font-medium text-[#FBF4E8]/70">By 10 Dec 2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-6 border-t border-[#E5A93C]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.68rem] text-[#FBF4E8]/40">
          <p>© {year} {BRAND_CONFIG.name}. All rights reserved.</p>
          <p className="max-w-md text-center sm:text-right">
            Registrations are processed via Google Forms. Seat allocation is confirmed only upon manual payment verification of the ₹999 non-refundable fee.
          </p>
        </div>

      </div>

    </footer>
  );
}
