'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { InstagramIcon } from '@/components/icons';
import RegisterButton from '@/components/RegisterButton';
import { BRAND_CONFIG } from '@/config/site';

const navLinks = [
  { label: 'Overview', href: '#trips' },
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-[#150D07]/95 border-b border-[#E5A93C]/20 shadow-lg'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-[1400px] w-full mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group"
            aria-label="Routes & Roots — Home"
          >
            <div className="w-[44px] h-[44px] rounded-full overflow-hidden flex-shrink-0 border border-[#E5A93C]/40 shadow-md bg-[#FBF4E8] flex items-center justify-center p-0.5">
              <Image
                src={BRAND_CONFIG.logoUrl}
                alt="Routes & Roots Logo"
                width={42}
                height={42}
                priority
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-editorial text-sm sm:text-base font-bold tracking-[0.16em] uppercase text-[#FBF4E8] group-hover:text-[#E5A93C] transition-colors">
                {BRAND_CONFIG.wordmark}
              </span>
              <span className="text-[0.62rem] text-[#E5A93C] tracking-[0.18em] uppercase font-semibold">
                {BRAND_CONFIG.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-desktop-links items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-[0.76rem] font-bold tracking-[0.1em] uppercase text-[#FBF4E8]/75 hover:text-[#E5A93C] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Right CTAs */}
          <div className="nav-desktop-cta items-center gap-4">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Routes & Roots on Instagram"
              className="w-10 h-10 rounded-full bg-white/[0.05] border border-[#E5A93C]/25 flex items-center justify-center text-[#FBF4E8]/80 hover:text-[#E5A93C] hover:border-[#E5A93C] transition-all"
            >
              <InstagramIcon size={17} />
            </a>

            <RegisterButton
              variant="primary"
              label="Register"
              showIcon={true}
              className="py-2.5 px-6 text-xs font-bold"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="nav-mobile-btn text-[#FBF4E8] hover:text-[#E5A93C] p-2 transition-colors cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        aria-hidden={!menuOpen}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(6px)',
          }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '85%',
            maxWidth: '360px',
            backgroundColor: '#150D07',
            borderLeft: '1px solid rgba(229, 169, 60, 0.25)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.85)',
          }}
        >
          <div>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E5A93C]/15">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#E5A93C]/40 bg-[#FBF4E8]">
                  <Image
                    src={BRAND_CONFIG.logoUrl}
                    alt="Routes & Roots Logo"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-editorial text-xs font-bold tracking-widest text-[#FBF4E8] uppercase">
                    {BRAND_CONFIG.wordmark}
                  </span>
                  <span className="text-[0.55rem] text-[#E5A93C] tracking-wider uppercase font-semibold">
                    {BRAND_CONFIG.tagline}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#FBF4E8]/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="space-y-4" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-left w-full text-base font-semibold text-[#FBF4E8]/80 hover:text-[#E5A93C] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-[#E5A93C]/15 space-y-4">
            <RegisterButton
              variant="primary"
              label="Register for the Journey"
              className="w-full py-3.5 text-xs text-center justify-center"
            />
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-[#FBF4E8]/70 hover:text-[#E5A93C]"
            >
              <InstagramIcon size={14} />
              <span>Follow {BRAND_CONFIG.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .nav-desktop-links {
          display: none !important;
        }
        .nav-desktop-cta {
          display: none !important;
        }
        .nav-mobile-btn {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          color: #FBF4E8 !important;
          cursor: pointer;
          padding: 8px;
        }
        @media (min-width: 1024px) {
          .nav-desktop-links {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 2rem !important;
            list-style: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .nav-desktop-cta {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 1rem !important;
          }
          .nav-mobile-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
