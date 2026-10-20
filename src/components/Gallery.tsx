'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import type { Trip, GalleryImage } from '@/data/trips';

interface GalleryProps {
  trip: Trip;
}

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    },
    [onPrev, onNext, onClose]
  );

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label={`Lightbox — ${image.caption ?? image.alt}`}
      tabIndex={0}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 text-[#FBF4E8]/70 hover:text-[#E5A93C] transition-colors z-10 p-2 rounded-full bg-white/10 cursor-pointer"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      {/* Image index counter */}
      <div className="absolute top-6 left-6 text-[#E5A93C] text-xs font-bold tracking-widest z-10 px-3 py-1.5 rounded-full bg-black/60 border border-[#E5A93C]/30">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        className="absolute left-4 md:left-8 text-[#FBF4E8]/60 hover:text-[#E5A93C] transition-colors z-10 p-3 rounded-full bg-black/50 border border-white/10 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Main Image container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full h-[75vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            quality={90}
            sizes="90vw"
          />
        </div>
      </div>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 text-[#FBF4E8]/60 hover:text-[#E5A93C] transition-colors z-10 p-3 rounded-full bg-black/50 border border-white/10 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Caption footer */}
      {image.caption && (
        <div className="absolute bottom-6 inset-x-6 text-center z-10">
          <p className="inline-block text-xs font-medium text-[#FBF4E8] bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#E5A93C]/30 font-editorial">
            {image.caption}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Gallery({ trip }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + trip.gallery.length) % trip.gallery.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % trip.gallery.length);
    }
  };

  return (
    <section
      id="gallery"
      className="relative section-padding bg-[#1C120A] overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="sand-line w-10" />
              <span className="heading-eyebrow">Visual Stories</span>
            </div>
            <h2
              id="gallery-heading"
              className="heading-display text-[clamp(2.3rem,4.8vw,4rem)] text-[#FBF4E8]"
            >
              Through the{' '}
              <em className="font-editorial italic sand-gradient-text block">
                Desert Lens.
              </em>
            </h2>
          </div>
          <p className="text-[#FBF4E8]/70 text-xs sm:text-sm leading-relaxed max-w-md font-light">
            A glimpse into the golden sands, starlit camps, and architectural wonders waiting for you in Rajasthan.
          </p>
        </div>

        {/* Modern Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list" aria-label="Expedition gallery">
          {trip.gallery.map((image, index) => (
            <div
              key={index}
              role="listitem"
              className={`relative group cursor-pointer overflow-hidden rounded-3xl border border-[#E5A93C]/20 hover:border-[#E5A93C]/50 transition-all duration-300 shadow-xl ${
                image.span === 'wide' ? 'sm:col-span-2 h-[280px] sm:h-[320px]' : 'h-[280px]'
              }`}
              onClick={() => openLightbox(index)}
            >
              {!imgErrors[index] ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => setImgErrors((e) => ({ ...e, [index]: true }))}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-[#150D07] flex items-center justify-center">
                  <span className="text-[#FBF4E8]/40 text-xs">Image unavailable</span>
                </div>
              )}

              {/* Cinematic Dark Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-65 group-hover:opacity-80 transition-opacity" />

              {/* Floating Zoom icon badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <div className="bg-[#C85B2D] text-white rounded-full p-2 shadow-lg">
                  <ZoomIn size={14} />
                </div>
              </div>

              {/* Caption pill */}
              {image.caption && (
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[#FBF4E8] text-xs font-semibold drop-shadow-md">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={trip.gallery}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
