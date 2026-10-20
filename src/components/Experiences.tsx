'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Trip } from '@/data/trips';

interface ExperiencesProps {
  trip: Trip;
}

export default function Experiences({ trip }: ExperiencesProps) {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section
      id="experiences"
      className="relative section-padding bg-[#150D07] overflow-hidden"
      aria-labelledby="experiences-heading"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="sand-line w-10" />
              <span className="heading-eyebrow">Signature Experiences</span>
            </div>
            <h2
              id="experiences-heading"
              className="heading-display text-[clamp(2.3rem,4.8vw,4rem)] text-[#FBF4E8]"
            >
              Moments That Turn{' '}
              <em className="font-editorial italic sand-gradient-text block">
                Into Memories.
              </em>
            </h2>
          </div>
          <p className="text-[#FBF4E8]/70 text-xs sm:text-sm leading-relaxed max-w-md font-light">
            Every element of the Jaisalmer route is curated for college students and young professionals seeking thrill, culture, and community.
          </p>
        </div>

        {/* Experiences Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trip.experiences.map((experience, i) => (
            <div
              key={i}
              className="editorial-card group relative rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#E5A93C]/50 bg-[#24170D] border border-[#E5A93C]/20 shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative h-[230px] overflow-hidden bg-[#1C120A]">
                {!imgErrors[i] ? (
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                  />
                ) : (
                  <div className="w-full h-full bg-[#1C120A]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24170D] via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#1C120A]/90 backdrop-blur-md border border-[#E5A93C]/35 text-[0.62rem] font-bold text-[#E5A93C] uppercase tracking-wider">
                    Signature #{i + 1}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6">
                <h3 className="font-editorial font-bold text-lg sm:text-xl text-[#FBF4E8] mb-2 group-hover:text-[#E5A93C] transition-colors">
                  {experience.title}
                </h3>
                <p className="text-xs text-[#FBF4E8]/70 leading-relaxed font-light">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
