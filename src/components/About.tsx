'use client';

import Image from 'next/image';
import { ArrowRight, Compass, Shield, Users } from 'lucide-react';
import { InstagramIcon } from '@/components/icons';
import { BRAND_CONFIG } from '@/config/site';
import { useState } from 'react';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="relative section-padding bg-[#150D07] overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Collage with Floating Stat Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden editorial-card p-2 border border-[#E5A93C]/30 shadow-2xl bg-[#24170D]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {!imgError ? (
                  <Image
                    src="/cultural-evening.jpg"
                    alt="Rajasthani cultural evening around bonfire — Routes & Roots trip"
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1C120A]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#150D07] via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Editorial Stat Card */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-6 editorial-card p-5 rounded-2xl border-2 border-[#E5A93C]/40 shadow-2xl max-w-[210px] bg-[#24170D]">
              <p className="text-3xl font-extrabold text-[#E5A93C] font-editorial" aria-label="First destination">01</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FBF4E8] mt-0.5">
                First Chapter
              </p>
              <p className="text-[0.7rem] text-[#FBF4E8]/65 mt-1">
                Jaisalmer Desert Odyssey • Rajasthan
              </p>
            </div>
          </div>

          {/* Right: Brand Ethos & Mission (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="sand-line w-10" />
              <span className="heading-eyebrow">Our Philosophy</span>
            </div>

            <h2
              id="about-heading"
              className="heading-display text-[clamp(2.3rem,4.8vw,4rem)] text-[#FBF4E8] mb-6"
            >
              We Curate Journeys,{' '}
              <em className="font-editorial italic sand-gradient-text block">
                Not Packages.
              </em>
            </h2>

            <div className="space-y-4 text-[#FBF4E8]/75 text-sm sm:text-base leading-relaxed mb-8 font-light">
              <p>
                <strong className="text-[#FBF4E8] font-semibold">{BRAND_CONFIG.name}</strong> was born from a simple belief: the best travel
                experiences happen in genuine company. We organize small-group, experiential
                trips for college students, young professionals, and spirited wanderers who
                believe the world is better explored together.
              </p>
              <p>
                Our first chapter begins deep in the Thar Desert at Jaisalmer — where ancient
                golden sandstone forts glow at dusk and campfires bring strangers together under
                a universe of stars.
              </p>
            </div>

            {/* Core Values Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-4 rounded-2xl editorial-card bg-[#24170D] border border-[#E5A93C]/20">
                <Users size={18} className="text-[#E5A93C] mb-2" />
                <h4 className="text-xs font-bold text-[#FBF4E8] mb-1">Curated Groups</h4>
                <p className="text-[0.68rem] text-[#FBF4E8]/65">Like-minded travelers, solo friendly, equal gender comfort.</p>
              </div>

              <div className="p-4 rounded-2xl editorial-card bg-[#24170D] border border-[#E5A93C]/20">
                <Shield size={18} className="text-[#C85B2D] mb-2" />
                <h4 className="text-xs font-bold text-[#FBF4E8] mb-1">Safety First</h4>
                <p className="text-[0.68rem] text-[#FBF4E8]/65">Experienced trip leads, female coordinators, verified stays.</p>
              </div>

              <div className="p-4 rounded-2xl editorial-card bg-[#24170D] border border-[#E5A93C]/20">
                <Compass size={18} className="text-[#E5A93C] mb-2" />
                <h4 className="text-xs font-bold text-[#FBF4E8] mb-1">Real Experience</h4>
                <p className="text-[0.68rem] text-[#FBF4E8]/65">Dune safaris, local legends, music nights, cultural warmth.</p>
              </div>
            </div>

            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex py-3.5 px-7 text-xs"
              aria-label="Follow Routes & Roots on Instagram"
            >
              <InstagramIcon size={16} />
              <span>Follow {BRAND_CONFIG.instagramHandle}</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
