'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type Locale = 'pt' | 'en';

interface LanguageToggleProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
  className?: string;
}

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <rect width="640" height="480" fill="#009B3A" />
      <polygon points="320,52 608,240 320,428 32,240" fill="#FEDF00" />
      <circle cx="320" cy="240" r="90" fill="#002776" />
      <path d="M196,238 Q320,180 444,254" fill="none" stroke="#fff" strokeWidth="12" />
    </svg>
  );
}

function UKFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <rect width="640" height="480" fill="#012169" />
      <path d="M0,0 L640,480 M640,0 L0,480" stroke="#fff" strokeWidth="60" />
      <path d="M0,0 L640,480 M640,0 L0,480" stroke="#C8102E" strokeWidth="40" clipPath="url(#ukclip)" />
      <clipPath id="ukclip">
        <path d="M320,0 L640,0 L640,240 Z M320,480 L0,480 L0,240 Z M0,0 L320,240 L0,480 Z M640,0 L320,240 L640,480 Z" />
      </clipPath>
      <path d="M320,0 V480 M0,240 H640" stroke="#fff" strokeWidth="80" />
      <path d="M320,0 V480 M0,240 H640" stroke="#C8102E" strokeWidth="48" />
    </svg>
  );
}

export function LanguageToggle({ locale, onChange, className }: LanguageToggleProps) {
  const isEn = locale === 'en';

  return (
    <button
      onClick={() => onChange(isEn ? 'pt' : 'en')}
      className={cn(
        'relative flex items-center h-8 w-[68px] rounded-full bg-background/[0.08] border border-background/[0.12] p-[3px] cursor-pointer transition-colors hover:bg-background/[0.12]',
        className
      )}
      aria-label={`Switch to ${isEn ? 'Portuguese' : 'English'}`}
    >
      {/* Sliding indicator */}
      <motion.div
        className="absolute h-[26px] w-[30px] rounded-full bg-background/[0.15] shadow-sm"
        animate={{ x: isEn ? 32 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* PT option */}
      <div className={cn(
        'relative z-10 flex items-center justify-center h-[26px] w-[30px] rounded-full transition-opacity duration-200',
        !isEn ? 'opacity-100' : 'opacity-50'
      )}>
        <BrazilFlag className="h-4 w-4 rounded-full object-cover" />
      </div>

      {/* EN option */}
      <div className={cn(
        'relative z-10 flex items-center justify-center h-[26px] w-[30px] rounded-full transition-opacity duration-200',
        isEn ? 'opacity-100' : 'opacity-50'
      )}>
        <UKFlag className="h-4 w-4 rounded-full object-cover" />
      </div>
    </button>
  );
}
