'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Clock, Sparkles } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import type { Trip } from '@/data/trips';

interface ItineraryProps {
  trip: Trip;
}

export default function Itinerary({ trip }: ItineraryProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const toggleDayDetails = (dayNumber: number) => {
    setExpandedDay(expandedDay === dayNumber ? null : dayNumber);
  };

  return (
    <section
      id="itinerary"
      className="relative section-padding bg-[#1C120A] overflow-hidden"
      aria-labelledby="itinerary-heading"
    >
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10">

        {/* Section Header matching user reference */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="sand-line w-8" />
            <span className="heading-eyebrow">The 4-Day Journey</span>
          </div>
          <h2
            id="itinerary-heading"
            className="heading-display text-[clamp(2.4rem,5.2vw,4rem)] text-[#FBF4E8] leading-tight"
          >
            Four days.{' '}
            <em className="font-editorial italic sand-gradient-text block sm:inline">
              A thousand stories.
            </em>
          </h2>
          <p className="text-[#FBF4E8]/75 text-sm sm:text-base leading-relaxed mt-4 font-light">
            Every day is thoughtfully planned to balance high-energy desert adventures, rich heritage walks, and starlit celebrations.
          </p>
        </div>

        {/* 2-Column Card Grid (matching user's reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {trip.itinerary.map((day) => {
            const isExpanded = expandedDay === day.day;
            const dayFormatted = String(day.day).padStart(2, '0');

            return (
              <div
                key={day.day}
                className="editorial-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-[#E5A93C]/20 hover:border-[#E5A93C]/50 transition-all duration-300 shadow-xl group bg-[#24170D]"
              >
                <div>
                  {/* Card Image at Top */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 bg-[#121D23] border border-white/[0.06]">
                    {!imgErrors[day.day] ? (
                      <Image
                        src={day.image}
                        alt={`${day.title} - Day ${day.day} of Jaisalmer trip`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={() => setImgErrors((prev) => ({ ...prev, [day.day]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#121D23] flex items-center justify-center">
                        <span className="text-xs text-[#F7F2E8]/40">Image preview</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  </div>

                  {/* Day Eyebrow */}
                  <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#E5A93C] mb-1.5">
                    DAY {dayFormatted}
                  </p>

                  {/* Day Title */}
                  <h3 className="font-editorial font-bold text-xl sm:text-2xl text-[#FBF4E8] mb-2.5 group-hover:text-[#E5A93C] transition-colors">
                    {day.title}
                  </h3>

                  {/* Short Summary matching screenshot */}
                  <p className="text-xs sm:text-sm text-[#FBF4E8]/75 leading-relaxed font-light mb-4">
                    {day.summary}
                  </p>
                </div>

                {/* Interactive Hourly Timeline Expansion */}
                <div className="pt-3 border-t border-[#E5A93C]/15">
                  <button
                    onClick={() => toggleDayDetails(day.day)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#E5A93C] uppercase tracking-wider py-1.5 hover:text-[#FBF4E8] transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Schedule' : 'View Full Schedule'}</span>
                    <div className={`w-6 h-6 rounded-full bg-[#E5A93C]/10 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#E5A93C] text-[#1C120A]' : 'text-[#E5A93C]'}`}>
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-[#E5A93C]/10 space-y-3 animate-fadeIn">
                      {day.activities.map((act, actIdx) => (
                        <div
                          key={actIdx}
                          className="flex items-start gap-2.5 text-xs text-[#FBF4E8]/85 leading-snug"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C85B2D] mt-1.5 flex-shrink-0" />
                          <div>
                            {act.time && (
                              <span className="font-bold text-[#E5A93C] mr-2">
                                {act.time}
                              </span>
                            )}
                            <span className="font-medium text-[#FBF4E8]">{act.activity}</span>
                            {act.note && (
                              <p className="text-[0.68rem] text-[#FBF4E8]/50 mt-0.5">
                                {act.note}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}

                      {day.note && (
                        <p className="text-[0.68rem] text-[#FBF4E8]/45 italic mt-3 pt-2 border-t border-[#E5A93C]/10">
                          Note: {day.note}
                        </p>
                      )}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl editorial-card border border-[#E5A93C]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl bg-[#24170D]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A93C] mb-1">
              <Sparkles size={14} />
              <span>Limited Batch Size</span>
            </div>
            <h4 className="font-editorial font-bold text-lg sm:text-xl text-[#FBF4E8]">
              Ready to embark on this 4-day desert odyssey?
            </h4>
            <p className="text-xs text-[#FBF4E8]/65 mt-1">
              Initial registration fee is only ₹999 (strictly non-refundable) to reserve your seat.
            </p>
          </div>

          <RegisterButton
            variant="primary"
            label="Register for the Journey"
            className="py-3.5 px-8 text-xs font-bold flex-shrink-0"
          />
        </div>

      </div>
    </section>
  );
}
