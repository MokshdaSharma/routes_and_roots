'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/site';
import type { Trip } from '@/data/trips';

interface FAQProps {
  trip: Trip;
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const id = `faq-${index}`;
  const contentId = `faq-content-${index}`;

  return (
    <div className="editorial-card rounded-2xl mb-3 overflow-hidden border border-[#E5A93C]/20 bg-[#24170D] transition-all">
      <button
        id={id}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-[#E5A93C]' : 'text-[#FBF4E8] group-hover:text-[#E5A93C]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? 'bg-[#E5A93C] text-[#1C120A] rotate-180' : 'bg-white/5 text-[#FBF4E8]/50'}`}>
          <ChevronDown size={16} />
        </div>
      </button>

      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={id}
          className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#FBF4E8]/75 leading-relaxed font-light border-t border-white/[0.04]"
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ({ trip }: FAQProps) {
  return (
    <section
      id="faq"
      className="relative section-padding bg-[#1C120A] overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (Sticky 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="sand-line w-10" />
              <span className="heading-eyebrow">Clear Answers</span>
            </div>

            <h2
              id="faq-heading"
              className="heading-display text-[clamp(2.3rem,4.8vw,4rem)] text-[#FBF4E8] mb-6"
            >
              Frequently Asked{' '}
              <em className="font-editorial italic sand-gradient-text block">
                Questions.
              </em>
            </h2>

            <p className="text-sm text-[#FBF4E8]/70 leading-relaxed mb-8 font-light">
              Complete transparency is our policy. If you have any specific query regarding rooms, bus boarding, or safety, our team is always available.
            </p>

            <div className="p-6 rounded-3xl editorial-card border border-[#E5A93C]/25 bg-[#24170D]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#E5A93C]/15 flex items-center justify-center text-[#E5A93C]">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#FBF4E8]">Still have a question?</h3>
                  <p className="text-[0.68rem] text-[#FBF4E8]/50">Directly message our trip coordinators</p>
                </div>
              </div>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-3 text-xs justify-center"
              >
                DM Us on Instagram
              </a>
            </div>
          </div>

          {/* Right Column (FAQ items 7 cols) */}
          <div className="lg:col-span-7">
            {trip.faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
