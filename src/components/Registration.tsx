'use client';

import { useState } from 'react';
import Image from 'next/image';
import { REGISTRATION_FORM_URL, BRAND_CONFIG } from '@/config/site';
import { InstagramIcon } from '@/components/icons';
import RegisterButton from '@/components/RegisterButton';
import { ShieldAlert } from 'lucide-react';
import type { Trip } from '@/data/trips';

interface RegistrationProps {
  trip: Trip;
}

export default function Registration({ trip }: RegistrationProps) {
  const [imgError, setImgError] = useState(false);
  const isFormConfigured = Boolean(REGISTRATION_FORM_URL && REGISTRATION_FORM_URL.trim() !== '');

  return (
    <section
      id="register"
      className="relative section-padding overflow-hidden bg-[#1C120A]"
      aria-labelledby="register-heading"
    >
      {/* Background with Ambient Starlit Desert Visual */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {!imgError ? (
          <Image
            src="/night-sky.jpg"
            alt="Milky Way over Thar Desert desert camp"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 brightness-75"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#150D07]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C120A] via-[#1C120A]/85 to-[#1C120A]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="editorial-card rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-[#E5A93C]/25 relative overflow-hidden shadow-2xl">

          {/* Terracotta top decorative bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C85B2D] to-transparent" />

          <div className="max-w-3xl mx-auto text-center">

            {/* Portal Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full editorial-pill mb-8 border border-[#E5A93C]/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isFormConfigured ? 'bg-emerald-400' : 'bg-[#E5A93C]'} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isFormConfigured ? 'bg-emerald-400' : 'bg-[#E5A93C]'}`} />
              </span>
              <span className="text-[0.72rem] font-bold text-[#E5A93C] uppercase tracking-widest">
                {isFormConfigured ? 'Official Registration Portal Open' : 'Registration Portal Opening Soon'}
              </span>
            </div>

            {/* Headline */}
            <h2
              id="register-heading"
              className="heading-display text-[clamp(2.4rem,5.2vw,4rem)] text-[#FBF4E8] mb-6 leading-tight"
            >
              Your Desert Story{' '}
              <em className="font-editorial italic sand-gradient-text block">
                Begins Here.
              </em>
            </h2>

            <p className="text-[#FBF4E8]/75 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto font-light">
              {isFormConfigured
                ? 'Fill out our official Google Form to submit your traveler details. Our team will verify and share the ₹499 token payment link to secure your seat.'
                : "The Jaisalmer registration form will drop on our official Instagram handle. Follow us to get the link first before seats fill up."}
            </p>

            {/* Prominent CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <RegisterButton
                variant="primary"
                label="Register for the Journey"
                sublabel="Opens Google Form in new tab"
                className="py-4 px-9 text-sm shadow-xl"
              />

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-4 px-7 text-xs sm:text-sm"
              >
                <InstagramIcon size={16} />
                <span>Follow {BRAND_CONFIG.instagramHandle}</span>
              </a>
            </div>

            {/* Registration Workflow Step Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-10 pt-8 border-t border-[#E5A93C]/20">
              <div className="p-4 rounded-2xl bg-[#24170D] border border-[#E5A93C]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E5A93C] mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#E5A93C]/20 flex items-center justify-center text-[0.65rem] text-[#E5A93C]">1</span>
                  Submit Google Form
                </div>
                <p className="text-[0.72rem] text-[#FBF4E8]/65 leading-relaxed font-light">
                  Provide your name, contact, pickup location, and emergency contact details.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#24170D] border border-[#E5A93C]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E5A93C] mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#C85B2D]/25 flex items-center justify-center text-[0.65rem] text-[#E5A93C]">2</span>
                  Pay ₹499 Seat Token
                </div>
                <p className="text-[0.72rem] text-[#FBF4E8]/65 leading-relaxed font-light">
                  Transfer the non-refundable ₹499 registration fee to lock your slot.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#24170D] border border-[#E5A93C]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E5A93C] mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[0.65rem] text-emerald-400">3</span>
                  Seat Confirmed
                </div>
                <p className="text-[0.72rem] text-[#FBF4E8]/65 leading-relaxed font-light">
                  Get added to the private WhatsApp group. Pay remaining balance (₹6,500 Quad / ₹6,800 Triple) by 10 Dec 2026.
                </p>
              </div>
            </div>

            {/* Mandatory Verification & Payment Disclaimer */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#C85B2D]/15 border border-[#C85B2D]/35 text-left">
              <ShieldAlert size={18} className="text-[#E5A93C] flex-shrink-0 mt-0.5" />
              <p className="text-[0.75rem] text-[#FBF4E8]/80 leading-relaxed">
                <strong className="text-[#FBF4E8] font-semibold">Important Notice: </strong>
                Submitting the Google Form does not automatically confirm your seat. Registrations are finalized only after our team manually verifies your ₹499 token payment. The ₹499 registration fee is strictly non-refundable and reserves your slot. The remaining balance (₹6,500 for Quad Sharing or ₹6,800 for Triple Sharing) is due before 10 December 2026.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
