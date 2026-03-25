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
      <path d="M320,0 V480 M0,240 H640" stroke="#fff" strokeWidth="80" />
      <path d="M320,0 V480 M0,240 H640" stroke="#C8102E" strokeWidth="48" />
    </svg>
  );
}

const options: { value: Locale; flag: React.FC<{ className?: string }>; label: string }[] = [
  { value: 'pt', flag: BrazilFlag, label: 'PT' },
  { value: 'en', flag: UKFlag, label: 'EN' },
];

export function LanguageToggle({ locale, onChange, className }: LanguageToggleProps) {
  return (
    <div
      className={cn(
        'relative flex items-center h-8 rounded-full bg-background/[0.08] border border-background/[0.10] p-[3px]',
        className
      )}
    >
      {/* Sliding pill indicator */}
      <motion.div
        className="absolute h-[26px] rounded-full bg-background/[0.15]"
        animate={{
          left: locale === 'pt' ? '3px' : 'calc(50%)',
          width: 'calc(50% - 3px)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />

      {options.map((opt) => {
        const Flag = opt.flag;
        const isActive = locale === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={cn(
              'relative z-10 flex items-center gap-1.5 h-[26px] px-3 rounded-full transition-opacity duration-200 cursor-pointer',
              isActive ? 'opacity-100' : 'opacity-45 hover:opacity-70'
            )}
            aria-label={`Switch to ${opt.label}`}
          >
            <div className="h-[14px] w-[14px] rounded-full overflow-hidden border border-background/20 shrink-0">
              <Flag className="h-full w-full" />
            </div>
            <span className="text-[11px] font-semibold text-background tracking-wide leading-none">
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
