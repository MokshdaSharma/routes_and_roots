'use client';

import { REGISTRATION_FORM_URL, BRAND_CONFIG } from '@/config/site';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface RegisterButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'sticky' | 'badge';
  label?: string;
  sublabel?: string;
  showIcon?: boolean;
}

export default function RegisterButton({
  className = '',
  variant = 'primary',
  label = 'Register for the Journey',
  sublabel,
  showIcon = true,
}: RegisterButtonProps) {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const isFormConfigured = Boolean(REGISTRATION_FORM_URL && REGISTRATION_FORM_URL.trim() !== '');

  const handleClick = (e: React.MouseEvent) => {
    if (!isFormConfigured) {
      e.preventDefault();
      const registerSection = document.getElementById('register');
      if (registerSection) {
        registerSection.scrollIntoView({ behavior: 'smooth' });
      }
      setShowComingSoonModal(true);
    }
  };

  let variantStyles = 'btn-primary';
  if (variant === 'secondary') {
    variantStyles = 'btn-secondary';
  } else if (variant === 'sticky') {
    variantStyles =
      'w-full py-3 px-5 rounded-full bg-[#C96C43] hover:bg-[#D77B51] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all';
  }

  return (
    <>
      {isFormConfigured ? (
        <a
          href={REGISTRATION_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${variantStyles} ${className}`}
          aria-label={`${label} — Opens official Google Form in a new tab`}
        >
          <span className="flex flex-col items-center leading-tight">
            <span>{label}</span>
            {sublabel && (
              <span className="text-[0.65rem] opacity-80 font-normal tracking-normal lowercase">
                {sublabel}
              </span>
            )}
          </span>
          {showIcon && <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
        </a>
      ) : (
        <button
          onClick={handleClick}
          type="button"
          className={`${variantStyles} ${className}`}
          aria-label={`${label} — Registration opening soon`}
        >
          <span className="flex flex-col items-center leading-tight">
            <span>{label}</span>
            {sublabel && (
              <span className="text-[0.65rem] opacity-80 font-normal tracking-normal lowercase">
                {sublabel}
              </span>
            )}
          </span>
          <span className="text-[0.62rem] px-2 py-0.5 rounded-full bg-black/20 border border-white/20 font-semibold tracking-wider uppercase ml-1">
            Soon
          </span>
        </button>
      )}

      {/* Polite Coming Soon Modal if clicked before URL is supplied */}
      {showComingSoonModal && !isFormConfigured && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
        >
          <div className="relative max-w-md w-full editorial-card p-6 md:p-8 rounded-2xl border border-[#E5A93C]/35 shadow-2xl bg-[#24170D]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] animate-ping" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#E5A93C]">
                Registration Portal
              </p>
            </div>

            <h3 id="modal-heading" className="text-2xl font-editorial text-[#FBF4E8] mb-3">
              Registration Opening Soon
            </h3>

            <p className="text-sm text-[#FBF4E8]/70 leading-relaxed mb-6 font-light">
              Our official Google Form registration portal for the Jaisalmer batch is getting ready.
              Follow <strong className="text-[#E5A93C]">{BRAND_CONFIG.instagramHandle}</strong> on Instagram to be the first to receive the registration drop!
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 justify-center flex-1"
              >
                Follow on Instagram
              </a>
              <button
                onClick={() => setShowComingSoonModal(false)}
                className="btn-secondary text-xs py-2.5 justify-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
