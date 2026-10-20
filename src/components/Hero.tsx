'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, Calendar, MapPin, Sparkles, Users } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import { BRAND_CONFIG } from '@/config/site';
import type { Trip } from '@/data/trips';

interface HeroProps {
  trip: Trip;
}

export default function Hero({ trip }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.22;
        bgRef.current.style.transform = `translateY(${offset}px) scale(1.04)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToItinerary = () => {
    document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pb-14 pt-28"
      aria-label="Hero — Routes & Roots Jaisalmer Expedition"
    >
      {/* Background Image with Cinematic Parallax & Jaisalmer Golden Sandstone Warmth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={bgRef}
          className="relative w-full h-full scale-105 transition-transform duration-100 ease-out"
        >
          <Image
            src={trip.heroImage}
            alt={trip.heroImageAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center brightness-[0.88] saturate-[1.1]"
          />
        </div>

        {/* Deep Desert Sandstone Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#150D07] via-[#150D07]/45 to-[#150D07]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#150D07]/85 via-transparent to-[#150D07]/60" />

        {/* Radiant Golden Horizon Glow */}
        <div className="absolute bottom-0 inset-x-0 h-[260px] bg-gradient-to-t from-[#150D07] via-[#150D07]/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="max-w-3xl">

          {/* Jaisalmer Destination Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full editorial-pill mb-6 border border-[#E5A93C]/35 shadow-[0_0_20px_rgba(229,169,60,0.15)] reveal-up">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-goldRing" />
            <span className="text-[0.7rem] font-bold text-[#E5A93C] uppercase tracking-[0.2em]">
              The Golden City • Jaisalmer Edition
            </span>
          </div>

          {/* Editorial Display Headline */}
          <h1 className="heading-display text-[clamp(2.5rem,6.2vw,5.2rem)] text-[#FBF4E8] mb-6 leading-[1.08] reveal-up reveal-up-delay-1">
            Somewhere between the dunes and{' '}
            <em className="font-editorial italic sand-gradient-text block">
              the stars.
            </em>
          </h1>

          {/* Narrative Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#FBF4E8]/80 font-light leading-relaxed max-w-2xl mb-8 reveal-up reveal-up-delay-2">
            A curated desert expedition to the living golden fort of Jaisalmer, haunted ruins of Kuldhara, and starlit cultural nights for spirited college travelers.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 reveal-up reveal-up-delay-3">
            <RegisterButton
              variant="primary"
              label="Register for the Journey"
              sublabel="Starts with ₹499 token"
              className="py-4 px-8 text-sm shadow-[0_0_30px_rgba(229,169,60,0.3)]"
            />

            <button
              onClick={scrollToItinerary}
              type="button"
              className="btn-secondary py-4 px-7 text-sm"
            >
              <span>Explore 4-Day Plan</span>
              <ArrowDown size={16} className="text-[#E5A93C]" />
            </button>
          </div>

          {/* Editorial Jaisalmer Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 hero-meta-grid gap-3 p-3.5 rounded-2xl editorial-pill max-w-3xl border border-[#E5A93C]/25 shadow-xl reveal-up reveal-up-delay-4">
            <div className="flex items-center gap-3 px-3 py-2">
              <Calendar size={18} className="text-[#E5A93C] flex-shrink-0" />
              <div>
                <p className="text-[0.6rem] uppercase tracking-wider text-[#FBF4E8]/50 font-bold">Duration</p>
                <p className="text-xs sm:text-sm font-bold text-[#FBF4E8]">{trip.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border-l border-[#E5A93C]/20">
              <MapPin size={18} className="text-[#E5A93C] flex-shrink-0" />
              <div>
                <p className="text-[0.6rem] uppercase tracking-wider text-[#FBF4E8]/50 font-bold">Boarding Hub</p>
                <p className="text-xs sm:text-sm font-bold text-[#FBF4E8]">Punjab / Tri-City</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border-l border-[#E5A93C]/20">
              <Users size={18} className="text-[#E5A93C] flex-shrink-0" />
              <div>
                <p className="text-[0.6rem] uppercase tracking-wider text-[#FBF4E8]/50 font-bold">Accommodation</p>
                <p className="text-xs sm:text-sm font-bold text-[#FBF4E8]">Camp &amp; Resort</p>
                <p className="text-[0.58rem] text-[#E5A93C] font-semibold">Quad &amp; Triple Options</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border-l border-[#E5A93C]/20 bg-[#E5A93C]/10 rounded-xl animate-goldRing">
              <Sparkles size={18} className="text-[#E5A93C] flex-shrink-0" />
              <div>
                <p className="text-[0.6rem] uppercase tracking-wider text-[#E5A93C] font-bold">Total Package</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#FBF4E8]">From ₹6,999</p>
                <p className="text-[0.58rem] text-[#E5A93C] font-semibold">Quad ₹6,999 | Triple ₹7,299</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
