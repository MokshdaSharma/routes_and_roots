'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { BRAND_CONFIG } from '@/config/site';

const CINEMATIC_SCENES = [
  {
    src: '/jaisalmer-hero.jpg',
    alt: 'Sam Sand Dunes at golden sunset, Thar Desert',
    location: 'Sam Sand Dunes',
    coordinates: '26.8853° N, 70.5424° E',
    caption: 'The Thar Desert at golden hour',
    kenBurns: 'zoom-in-center',
  },
  {
    src: '/jaisalmer-fort.jpg',
    alt: 'Jaisalmer Fort illuminated at dusk',
    location: 'Jaisalmer Fort',
    coordinates: '26.9124° N, 70.9124° E',
    caption: 'The living golden fort of Rajasthan',
    kenBurns: 'zoom-in-left',
  },
  {
    src: '/sam-dunes.jpg',
    alt: 'Camel caravan on Sam Sand Dunes at dusk',
    location: 'Sam Dunes',
    coordinates: '26.8853° N, 70.5424° E',
    caption: 'Camel silhouettes at twilight',
    kenBurns: 'zoom-in-right',
  },
  {
    src: '/cultural-evening.jpg',
    alt: 'Rajasthani folk dancers around a bonfire at desert camp',
    location: 'Desert Camp',
    coordinates: '26.9157° N, 70.9083° E',
    caption: 'A night of fire, folk music and stars',
    kenBurns: 'zoom-out-center',
  },
  {
    src: '/desert-safari.jpg',
    alt: 'Jeep safari adventure through Thar Desert dunes',
    location: 'Thar Desert',
    coordinates: '26.9157° N, 70.9083° E',
    caption: 'Freedom across the golden dunes',
    kenBurns: 'zoom-in-center',
  },
];

const SCENE_DURATION = 4200;
const TRANSITION_DURATION = 900;
const INTRO_HOLD = 2800;
const AUTO_DISMISS = SCENE_DURATION * CINEMATIC_SCENES.length + 1200;

export default function VisualOpening() {
  const [phase, setPhase] = useState<'cinematic' | 'fading-out' | 'gone'>('cinematic');
  const [sceneIndex, setSceneIndex] = useState(0);
  const [sceneTransitioning, setSceneTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const progressRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sceneRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const dismissOpening = () => {
    if (sceneRef.current) clearInterval(sceneRef.current);
    if (progressRef.current) clearTimeout(progressRef.current);
    setPhase('fading-out');
    setTimeout(() => setPhase('gone'), 900);
  };

  useEffect(() => {
    const startIntro = setTimeout(() => setTextVisible(true), INTRO_HOLD);

    const cycleScene = () => {
      setSceneTransitioning(true);
      setTimeout(() => {
        setSceneIndex((prev) => (prev + 1) % CINEMATIC_SCENES.length);
        setSceneTransitioning(false);
      }, TRANSITION_DURATION);
    };

    sceneRef.current = setInterval(cycleScene, SCENE_DURATION);
    const autoDismiss = setTimeout(() => dismissOpening(), AUTO_DISMISS);

    return () => {
      clearTimeout(startIntro);
      clearTimeout(autoDismiss);
      if (sceneRef.current) clearInterval(sceneRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / AUTO_DISMISS) * 100, 100);
      setProgressWidth(pct);
      if (pct < 100) {
        progressRef.current = setTimeout(updateProgress, 32);
      }
    };
    progressRef.current = setTimeout(updateProgress, 32);
    return () => {
      if (progressRef.current) clearTimeout(progressRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === 'gone') return null;

  const currentScene = CINEMATIC_SCENES[sceneIndex];

  return (
    <aside
      onClick={dismissOpening}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        cursor: 'pointer',
        userSelect: 'none',
        overflow: 'hidden',
        transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: phase === 'fading-out' ? 0 : 1,
        pointerEvents: phase === 'fading-out' ? 'none' : 'auto',
        backgroundColor: '#0A0604',
      }}
      role="banner"
      aria-label="Welcome to Routes and Roots Jaisalmer Expedition Opening"
    >
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {CINEMATIC_SCENES.map((scene, idx) => (
          <div
            key={idx}
            className="absolute inset-0"
            style={{
              opacity: idx === sceneIndex && !sceneTransitioning ? 1 : 0,
              transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
            }}
          >
            <Image
              src={scene.src}
              alt={scene.alt}
              fill
              priority={idx === 0}
              quality={85}
              sizes="100vw"
              className={`object-cover brightness-[0.72] saturate-[1.15] vo-kb-${scene.kenBurns}`}
            />
          </div>
        ))}
      </div>

      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none z-10 vo-overlay-top" />
      <div className="absolute inset-0 pointer-events-none z-10 vo-overlay-bottom" />
      <div className="absolute inset-0 pointer-events-none z-10 vo-overlay-vignette" />
      <div className="absolute inset-0 pointer-events-none z-10 vo-overlay-sides" />
      <div className="absolute inset-0 pointer-events-none z-10 vo-overlay-gold" />
      <div className="vo-grain pointer-events-none z-20" />

      {/* MAIN CONTENT */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6">

        {/* Logo */}
        <div
          className="mb-6 relative vo-reveal-logo"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
          }}
        >
          <div className="vo-logo-ring">
            <Image
              src={BRAND_CONFIG.logoUrl}
              alt="Routes and Roots"
              width={88}
              height={88}
              className="object-contain rounded-full"
              priority
              unoptimized
            />
          </div>
          <div className="vo-orbit-ring" />
        </div>

        {/* GPS Pill */}
        <div
          className="mb-5"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}
        >
          <div className="vo-gps-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C] animate-ping flex-shrink-0" style={{ animationDuration: '1.5s' }} />
            <span className="text-[0.65rem] font-bold tracking-[0.24em] uppercase" style={{ color: '#E5A93C' }}>
              {currentScene.coordinates} &bull; {currentScene.location}
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ textAlign: 'center', width: '100%', maxWidth: '900px', marginBottom: '8px', overflow: 'hidden' }}>
          <h1
            className="font-editorial vo-headline"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
              textAlign: 'center',
              display: 'block',
              width: '100%',
            }}
          >
            Routes &amp; Roots
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center overflow-hidden mb-8">
          <p
            className="font-editorial italic vo-subtitle"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Jaisalmer &bull; The Golden Odyssey
          </p>
        </div>

        {/* Scene Caption */}
        <div style={{ opacity: textVisible ? 1 : 0, transition: 'opacity 0.6s ease 0.9s' }}>
          <p className="text-center text-xs tracking-[0.18em] uppercase font-medium vo-caption-text">
            {currentScene.caption}
          </p>
        </div>
      </div>

      {/* BOTTOM HUD */}
      <div className="absolute bottom-0 inset-x-0 z-40 px-6 pb-8 sm:pb-10 flex flex-col items-center gap-4">
        {/* Scene dots */}
        <div
          className="flex items-center gap-2"
          style={{ opacity: textVisible ? 1 : 0, transition: 'opacity 0.6s ease 1.1s' }}
        >
          {CINEMATIC_SCENES.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setSceneTransitioning(true);
                setTimeout(() => { setSceneIndex(idx); setSceneTransitioning(false); }, 300);
              }}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: idx === sceneIndex ? '24px' : '6px',
                height: '6px',
                background: idx === sceneIndex ? '#E5A93C' : 'rgba(251,244,232,0.35)',
                boxShadow: idx === sceneIndex ? '0 0 12px rgba(229,169,60,0.6)' : 'none',
              }}
              aria-label={`Go to scene ${idx + 1}: ${CINEMATIC_SCENES[idx].location}`}
            />
          ))}
        </div>

        {/* Progress + skip */}
        <div className="w-full max-w-xs flex flex-col items-center gap-2.5">
          <div className="vo-progress-track w-full">
            <div
              className="vo-progress-fill h-full rounded-full"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          <p
            className="text-[0.6rem] tracking-[0.22em] uppercase font-semibold"
            style={{ color: 'rgba(251,244,232,0.4)', opacity: textVisible ? 1 : 0, transition: 'opacity 0.6s ease 1.3s' }}
          >
            Tap anywhere to enter expedition
          </p>
        </div>
      </div>

      {/* TOP-RIGHT SCENE COUNTER */}
      <div
        className="absolute top-6 right-6 z-40"
        style={{ opacity: textVisible ? 1 : 0, transition: 'opacity 0.6s ease 1s' }}
      >
        <div className="vo-hud-pill flex items-center gap-1.5">
          <span className="text-[0.6rem] font-bold tracking-widest" style={{ color: '#E5A93C' }}>
            {String(sceneIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-[0.6rem]" style={{ color: 'rgba(251,244,232,0.3)' }}>/</span>
          <span className="text-[0.6rem]" style={{ color: 'rgba(251,244,232,0.3)' }}>
            {String(CINEMATIC_SCENES.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* TOP-LEFT BRAND TAG */}
      <div
        className="absolute top-6 left-6 z-40"
        style={{ opacity: textVisible ? 1 : 0, transition: 'opacity 0.6s ease 1s' }}
      >
        <div className="vo-hud-pill">
          <span className="text-[0.58rem] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(251,244,232,0.5)' }}>
            Rajasthan, India — Dec 2026
          </span>
        </div>
      </div>

      <style>{`
        .vo-overlay-top {
          height: 10vh;
          top: 0;
          background: linear-gradient(to bottom, #000 0%, transparent 100%);
          position: absolute;
          inset-inline: 0;
        }
        .vo-overlay-bottom {
          height: 10vh;
          bottom: 0;
          background: linear-gradient(to top, #000 0%, transparent 100%);
          position: absolute;
          inset-inline: 0;
        }
        .vo-overlay-vignette {
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%);
        }
        .vo-overlay-sides {
          background: linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.5) 100%);
        }
        .vo-overlay-gold {
          background: radial-gradient(ellipse at 50% 70%, rgba(229,169,60,0.08) 0%, transparent 65%);
        }
        .vo-grain {
          position: absolute;
          top: -50px; left: -50px;
          width: calc(100% + 100px);
          height: calc(100% + 100px);
          opacity: 0.055;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
          animation: voGrain 0.38s steps(1) infinite;
        }
        @keyframes voGrain {
          0%  { transform: translate(0,0); }
          10% { transform: translate(-2%,-2%); }
          20% { transform: translate(2%,3%); }
          30% { transform: translate(-3%,1%); }
          40% { transform: translate(2%,-3%); }
          50% { transform: translate(-1%,2%); }
          60% { transform: translate(3%,-1%); }
          70% { transform: translate(-2%,3%); }
          80% { transform: translate(1%,-2%); }
          90% { transform: translate(-3%,2%); }
        }
        .vo-kb-zoom-in-center { animation: vokbZoomIn 5100ms ease-out both; }
        .vo-kb-zoom-in-left   { animation: vokbZoomInLeft 5100ms ease-out both; }
        .vo-kb-zoom-in-right  { animation: vokbZoomInRight 5100ms ease-out both; }
        .vo-kb-zoom-out-center{ animation: vokbZoomOut 5100ms ease-out both; }
        @keyframes vokbZoomIn     { from { transform: scale(1.00); } to { transform: scale(1.14); } }
        @keyframes vokbZoomInLeft { from { transform: scale(1.05) translateX(0); } to { transform: scale(1.18) translateX(-20px); } }
        @keyframes vokbZoomInRight{ from { transform: scale(1.05) translateX(0); } to { transform: scale(1.18) translateX(20px); } }
        @keyframes vokbZoomOut    { from { transform: scale(1.16) translateY(0); } to { transform: scale(1.04) translateY(-10px); } }
        .vo-logo-ring {
          width: 88px; height: 88px;
          border-radius: 9999px;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid rgba(229,169,60,0.7);
          box-shadow: 0 0 0 4px rgba(229,169,60,0.12), 0 0 40px rgba(229,169,60,0.35), 0 0 80px rgba(229,169,60,0.15);
          background: rgba(251,244,232,0.96);
          padding: 3px;
        }
        @media (min-width: 640px) {
          .vo-logo-ring { width: 104px; height: 104px; }
        }
        .vo-orbit-ring {
          position: absolute;
          inset: -8px;
          border-radius: 9999px;
          border: 1px solid transparent;
          border-top-color: rgba(229,169,60,0.5);
          border-right-color: rgba(229,169,60,0.2);
          animation: voOrbit 5s linear infinite;
          pointer-events: none;
        }
        @keyframes voOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .vo-reveal-logo {
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }
        .vo-gps-pill {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(18,9,4,0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(229,169,60,0.3);
          box-shadow: 0 0 20px rgba(229,169,60,0.12);
        }
        .vo-headline {
          font-size: clamp(2rem, 6vw, 4.2rem);
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.05;
          text-transform: uppercase;
          text-align: center;
          color: #FBF4E8;
          text-shadow: 0 2px 40px rgba(0,0,0,0.6), 0 0 80px rgba(229,169,60,0.15);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
        }
        .vo-subtitle {
          font-size: clamp(1rem, 2.8vw, 1.6rem);
          color: #E5A93C;
          letter-spacing: 0.08em;
          text-align: center;
          text-shadow: 0 0 30px rgba(229,169,60,0.4);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
        }
        .vo-caption-text { color: rgba(251,244,232,0.55); }
        .vo-hud-pill {
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(18,9,4,0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(229,169,60,0.2);
        }
        .vo-progress-track {
          height: 2px;
          border-radius: 9999px;
          overflow: hidden;
          background: rgba(229,169,60,0.15);
          border: 1px solid rgba(229,169,60,0.1);
        }
        .vo-progress-fill {
          background: linear-gradient(90deg, rgba(229,169,60,0.6) 0%, #E5A93C 60%, #F3C469 100%);
          box-shadow: 0 0 8px rgba(229,169,60,0.5);
          transition: width 32ms linear;
        }
      `}</style>
    </aside>
  );
}
