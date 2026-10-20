'use client';

import { useState } from 'react';
import { AlertCircle, BedDouble, CheckCircle2, Clock, IndianRupee, ShieldCheck, Sparkles, Users, XCircle } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import type { Trip } from '@/data/trips';

interface PricingProps {
  trip: Trip;
}

export default function Pricing({ trip }: PricingProps) {
  const [selectedTier, setSelectedTier] = useState<'quad' | 'triple'>('quad');

  const currentPrice = selectedTier === 'quad' ? (trip.quadPrice || 6999) : (trip.triplePrice || 7299);
  const registrationFee = trip.registrationFee || 499;
  const currentBalance = currentPrice - registrationFee;
  const currentCapacity = selectedTier === 'quad' ? '4 Persons / Room & Swiss Tent' : '3 Persons / Room & Swiss Tent';

  return (
    <section
      id="pricing"
      className="relative section-padding bg-[#150D07] overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="sand-line w-8" />
            <span className="heading-eyebrow">Honest &amp; Transparent</span>
            <div className="sand-line w-8" />
          </div>
          <h2
            id="pricing-heading"
            className="heading-display text-[clamp(2.3rem,4.8vw,3.8rem)] text-[#FBF4E8] mb-4"
          >
            Choose Your Rooming Format.
          </h2>
          <p className="text-[#FBF4E8]/70 text-sm sm:text-base leading-relaxed">
            Standard Quad Sharing at <span className="text-[#E5A93C] font-semibold">₹6,999</span> or upgraded Triple Sharing at <span className="text-[#E5A93C] font-semibold">₹7,299</span>. Reserve any slot with just an upfront ₹499 token.
          </p>
        </div>

        {/* Main Grid: Ticket Card + Inclusions/Exclusions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Luxury Boarding Pass / Ticket Card (5 Cols) */}
          <div className="lg:col-span-5 editorial-card rounded-3xl p-6 sm:p-8 relative border-2 border-[#E5A93C]/35 shadow-2xl bg-[#24170D]">
            {/* Top Pass Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[#E5A93C]/20">
              <div>
                <p className="text-[0.62rem] uppercase tracking-widest text-[#E5A93C] font-bold">
                  Expedition Pass
                </p>
                <h3 className="font-editorial text-xl font-bold text-[#FBF4E8]">
                  Jaisalmer Desert Ticket
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#E5A93C]/15 border border-[#E5A93C]/30 text-[0.65rem] font-bold text-[#E5A93C] tracking-wider uppercase">
                All-Inclusive
              </span>
            </div>

            {/* Room Sharing Tier Selector */}
            <div className="pt-5 pb-3">
              <label className="text-[0.65rem] uppercase tracking-widest text-[#E5A93C] font-bold block mb-2">
                Select Room Sharing Preference:
              </label>
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-black/40 border border-[#E5A93C]/25">
                <button
                  type="button"
                  onClick={() => setSelectedTier('quad')}
                  className={`py-3 px-2 rounded-xl text-center transition-all cursor-pointer ${
                    selectedTier === 'quad'
                      ? 'bg-gradient-to-r from-[#E5A93C] to-[#D89430] text-[#150D07] font-bold shadow-lg shadow-[#E5A93C]/25'
                      : 'text-[#FBF4E8]/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="block text-xs font-bold uppercase tracking-wider">Quad Sharing</span>
                  <span className={`block text-[0.74rem] font-extrabold mt-0.5 ${selectedTier === 'quad' ? 'text-[#150D07]' : 'text-[#E5A93C]'}`}>
                    ₹6,999 / person
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTier('triple')}
                  className={`py-3 px-2 rounded-xl text-center transition-all cursor-pointer ${
                    selectedTier === 'triple'
                      ? 'bg-gradient-to-r from-[#E5A93C] to-[#D89430] text-[#150D07] font-bold shadow-lg shadow-[#E5A93C]/25'
                      : 'text-[#FBF4E8]/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="block text-xs font-bold uppercase tracking-wider">Triple Sharing</span>
                  <span className={`block text-[0.74rem] font-extrabold mt-0.5 ${selectedTier === 'triple' ? 'text-[#150D07]' : 'text-[#E5A93C]'}`}>
                    ₹7,299 / person
                  </span>
                </button>
              </div>
            </div>

            {/* Total Price Hero */}
            <div className="py-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase tracking-widest text-[#FBF4E8]/60 font-semibold">
                  {selectedTier === 'quad' ? 'Quad Sharing Package' : 'Triple Sharing Package'}
                </span>
                <span className="text-[0.62rem] font-bold uppercase px-2 py-0.5 rounded bg-[#E5A93C]/10 text-[#E5A93C] border border-[#E5A93C]/20">
                  {selectedTier === 'quad' ? 'Most Popular' : 'Extra Space'}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#FBF4E8] tracking-tight">
                  ₹{currentPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-[#FBF4E8]/60 font-light">
                  / traveler
                </span>
              </div>
              <p className="text-[0.72rem] text-[#E5A93C]/90 mt-1 font-medium">
                {currentCapacity}
              </p>
            </div>

            {/* Dashed Ticket Divider */}
            <div className="ticket-divider" />

            {/* Two-Stage Payment Breakdown */}
            <div className="space-y-3.5 my-5">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-[#E5A93C]/25">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#E5A93C] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#C85B2D]" /> Step 1: Initial Seat Token
                  </span>
                  <span className="text-base font-bold text-[#FBF4E8]">
                    ₹{registrationFee}
                  </span>
                </div>
                <p className="text-[0.72rem] text-[#FBF4E8]/65 leading-relaxed">
                  Locks your expedition seat immediately upon registration. Strictly non-refundable.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#FBF4E8]/75 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock size={13} className="text-[#E5A93C]" /> Step 2: Remaining Balance ({selectedTier === 'quad' ? 'Quad' : 'Triple'})
                  </span>
                  <span className="text-base font-bold text-[#FBF4E8]">
                    ₹{currentBalance.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[0.72rem] text-[#F7F2E8]/55 leading-relaxed">
                  Due before departure by <strong className="text-[#F7F2E8] font-semibold">{trip.balancePaymentDeadline}</strong>.
                </p>
              </div>
            </div>

            {/* Room description notice */}
            <div className="p-3 rounded-xl bg-[#C96C43]/15 border border-[#C96C43]/35 mb-5 flex items-start gap-2.5">
              <AlertCircle size={15} className="text-[#C96C43] flex-shrink-0 mt-0.5" />
              <p className="text-[0.72rem] text-[#F7F2E8]/85 leading-relaxed">
                {selectedTier === 'quad'
                  ? 'Quad Sharing (₹6,999/person): 4 persons per luxury Swiss camp tent & hotel room. Balance of ₹6,500 due before 10 Dec 2026.'
                  : 'Triple Sharing (₹7,299/person): 3 persons per luxury Swiss camp tent & hotel room for extra comfort. Balance of ₹6,800 due before 10 Dec 2026.'}
              </p>
            </div>

            {/* Prominent CTA */}
            <RegisterButton
              variant="primary"
              label={`Register for ${selectedTier === 'quad' ? 'Quad' : 'Triple'} Sharing`}
              sublabel="Secure with ₹499 token"
              className="w-full py-4 text-center justify-center text-sm shadow-xl"
            />

            <div className="mt-3.5 flex items-center justify-center gap-1.5 text-[0.68rem] text-[#FBF4E8]/50">
              <ShieldCheck size={14} className="text-[#E5A93C]" />
              <span>Manual payment verification by Routes &amp; Roots team</span>
            </div>
          </div>

          {/* Right: Room Comparison, Inclusions & Exclusions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Room Sharing Comparison Cards */}
            <div className="editorial-card rounded-3xl p-6 sm:p-7 bg-[#24170D] border border-[#E5A93C]/25">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#E5A93C]/15 border border-[#E5A93C]/30 flex items-center justify-center text-[#E5A93C]">
                  <BedDouble size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#FBF4E8]">
                    Room Sharing Options Compared
                  </h3>
                  <p className="text-xs text-[#FBF4E8]/55">
                    Select your preferred accommodation format based on comfort and group size
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Quad Sharing Comparison Card */}
                <div
                  onClick={() => setSelectedTier('quad')}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    selectedTier === 'quad'
                      ? 'bg-[#E5A93C]/10 border-[#E5A93C] shadow-lg shadow-[#E5A93C]/10'
                      : 'bg-white/[0.02] border-[#E5A93C]/15 hover:border-[#E5A93C]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#E5A93C] uppercase tracking-wider">
                      Quad Sharing
                    </span>
                    <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full bg-[#E5A93C]/20 text-[#E5A93C]">
                      Most Popular
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="font-editorial text-2xl font-bold text-[#FBF4E8]">₹6,999</span>
                    <span className="text-xs text-[#FBF4E8]/50">/ person</span>
                  </div>
                  <p className="text-[0.72rem] text-[#FBF4E8]/70 leading-relaxed mb-3">
                    4 travelers per luxury Swiss tent at Sam Dunes &amp; heritage hotel room.
                  </p>
                  <ul className="text-[0.7rem] text-[#FBF4E8]/75 space-y-1.5">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#E5A93C] flex-shrink-0" />
                      <span>₹499 token + ₹6,500 balance</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#E5A93C] flex-shrink-0" />
                      <span>Attached private western bathroom</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#E5A93C] flex-shrink-0" />
                      <span>Best for friend squads &amp; college groups</span>
                    </li>
                  </ul>
                </div>

                {/* Triple Sharing Comparison Card */}
                <div
                  onClick={() => setSelectedTier('triple')}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    selectedTier === 'triple'
                      ? 'bg-[#E5A93C]/10 border-[#E5A93C] shadow-lg shadow-[#E5A93C]/10'
                      : 'bg-white/[0.02] border-[#E5A93C]/15 hover:border-[#E5A93C]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#E5A93C] uppercase tracking-wider">
                      Triple Sharing
                    </span>
                    <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full bg-white/10 text-[#FBF4E8]">
                      Extra Space
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="font-editorial text-2xl font-bold text-[#FBF4E8]">₹7,299</span>
                    <span className="text-xs text-[#FBF4E8]/50">/ person</span>
                  </div>
                  <p className="text-[0.72rem] text-[#FBF4E8]/70 leading-relaxed mb-3">
                    3 travelers per luxury Swiss tent at Sam Dunes &amp; heritage hotel room.
                  </p>
                  <ul className="text-[0.7rem] text-[#FBF4E8]/75 space-y-1.5">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#E5A93C] flex-shrink-0" />
                      <span>₹499 token + ₹6,800 balance</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#E5A93C] flex-shrink-0" />
                      <span>More personal space &amp; luggage comfort</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#E5A93C] flex-shrink-0" />
                      <span>Ideal for trios or solo travelers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Inclusions Card */}
            <div className="editorial-card rounded-3xl p-6 sm:p-8 bg-[#24170D] border border-[#E5A93C]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#FBF4E8]">
                    What&apos;s Included in Your Package
                  </h3>
                  <p className="text-xs text-[#FBF4E8]/55">
                    Everything you need for a comfortable, thrilling experience
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {trip.inclusions.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-[#E5A93C]/10"
                  >
                    <CheckCircle2 size={15} className="text-[#E5A93C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#FBF4E8]/85 leading-snug font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions & Transparency Card */}
            <div className="editorial-card rounded-3xl p-6 sm:p-8 bg-[#24170D] border border-[#E5A93C]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#C85B2D]/15 border border-[#C85B2D]/35 flex items-center justify-center text-[#C85B2D]">
                  <XCircle size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#FBF4E8]">
                    What&apos;s Not Included (Self-Sponsored)
                  </h3>
                  <p className="text-xs text-[#FBF4E8]/55">
                    Full clarity upfront so you can budget accurately
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {trip.exclusions.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <XCircle size={15} className="text-[#FBF4E8]/40 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#FBF4E8]/70 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Milestone Timeline */}
            <div className="p-5 rounded-2xl editorial-pill flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#24170D] border border-[#E5A93C]/20">
              <div className="flex items-center gap-3">
                <IndianRupee size={22} className="text-[#E5A93C]" />
                <div>
                  <p className="text-xs font-bold text-[#FBF4E8]">Registration Closes</p>
                  <p className="text-xs text-[#FBF4E8]/55">{trip.registrationDeadline}</p>
                </div>
              </div>
              <div className="h-[1px] sm:h-8 w-full sm:w-[1px] bg-[#E5A93C]/20" />
              <div className="flex items-center gap-3">
                <Clock size={22} className="text-[#E5A93C]" />
                <div>
                  <p className="text-xs font-bold text-[#FBF4E8]">Balance Due Date</p>
                  <p className="text-xs text-[#FBF4E8]/55">{trip.balancePaymentDeadline}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
