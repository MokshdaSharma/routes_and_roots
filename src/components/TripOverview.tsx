'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { Trip } from '@/data/trips';

interface TripOverviewProps {
  trip: Trip;
}

export default function TripOverview({ trip }: TripOverviewProps) {
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  return (
    <section
      id="trips"
      className="relative section-padding bg-[#1C120A] overflow-hidden"
      aria-labelledby="overview-heading"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="sand-line w-10" />
          <span className="heading-eyebrow">The Featured Route</span>
        </div>

        {/* Top Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7">
            <h2
              id="overview-heading"
              className="heading-display text-[clamp(2.3rem,4.8vw,4rem)] text-[#FBF4E8] mb-6"
            >
              The Golden City{' '}
              <em className="font-editorial italic sand-gradient-text block">
                Awaits You.
              </em>
            </h2>
            <p className="text-[#FBF4E8]/75 leading-relaxed text-base md:text-lg mb-8 max-w-2xl font-light">
              {trip.description}
            </p>

            {/* Quick Stats Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Destination', value: `${trip.destination}` },
                { label: 'Duration', value: trip.duration },
                { label: 'Package Price', value: `${trip.currencySymbol}${trip.totalPrice.toLocaleString('en-IN')}` },
                { label: 'Seat Deposit', value: `₹${trip.registrationFee} token` },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="editorial-card p-4 rounded-2xl"
                >
                  <p className="text-[0.6rem] uppercase tracking-wider text-[#E5A93C] font-bold mb-1">{stat.label}</p>
                  <p className="text-[#FBF4E8] font-bold text-sm sm:text-base">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden editorial-card p-2 border border-[#E5A93C]/25 shadow-2xl group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {!imgError['overview-hero'] ? (
                  <Image
                    src="/jaisalmer-fort.jpg"
                    alt="The golden sandstone walls of Jaisalmer Fort at sunset"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={() => setImgError((prev) => ({ ...prev, 'overview-hero': true }))}
                  />
                ) : (
                  <div className="w-full h-full bg-[#150D07]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C120A] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-[#150D07]/80 backdrop-blur-md border border-[#E5A93C]/30 text-[#E5A93C] text-[0.62rem] font-bold tracking-widest uppercase mb-2 inline-block">
                    Living Desert Heritage
                  </span>
                  <p className="font-editorial text-xl font-bold text-[#F7F2E8]">
                    Jaisalmer Fort &amp; Desert Dunes
                  </p>
                  <p className="text-xs text-[#F7F2E8]/65 mt-1">
                    4 Days of desert immersion, DJ music, and starlit bonfires
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Curated Moments */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="heading-eyebrow mb-2">Curated Highlights</p>
              <h3 className="heading-display text-2xl sm:text-3xl font-bold text-[#F7F2E8]">
                Why This Trip Hits Different
              </h3>
            </div>
            <p className="text-xs text-[#F7F2E8]/50 max-w-xs">
              Every day is planned for thrill, cultural connection, and genuine friendships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trip.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="editorial-card p-6 rounded-2xl flex flex-col justify-between group hover:border-[#E5A93C]/50 bg-[#24170D] border border-[#E5A93C]/20"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C85B2D]/20 border border-[#C85B2D]/35 flex items-center justify-center text-[#E5A93C] mb-4 group-hover:scale-105 group-hover:bg-[#C85B2D] group-hover:text-white transition-all duration-300">
                    <Sparkles size={18} />
                  </div>
                  <h4 className="font-bold text-base text-[#FBF4E8] mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-[#FBF4E8]/70 leading-relaxed font-light">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
