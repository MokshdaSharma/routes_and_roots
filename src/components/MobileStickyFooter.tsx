'use client';

import RegisterButton from '@/components/RegisterButton';
import type { Trip } from '@/data/trips';

interface MobileStickyFooterProps {
  trip: Trip;
}

export default function MobileStickyFooter({ trip }: MobileStickyFooterProps) {
  return (
    <aside
      aria-label="Quick Registration Bar"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden px-4 py-3 bg-[#150D07]/95 backdrop-blur-md border-t border-[#E5A93C]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-[#FBF4E8]/60 font-light">From</span>
            <span className="text-lg font-bold text-[#FBF4E8] font-editorial tracking-tight">
              {trip.currencySymbol}{trip.totalPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-[0.62rem] text-[#E5A93C] font-semibold tracking-wide">
            Quad ₹6,999 | Triple ₹7,299
          </span>
        </div>

        <div className="flex-1 max-w-[210px]">
          <RegisterButton
            variant="sticky"
            label="Register"
            showIcon={true}
          />
        </div>
      </div>
    </aside>
  );
}
