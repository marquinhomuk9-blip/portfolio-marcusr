'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const localeConfig = {
  pt: { flag: BrazilFlag, label: 'PT-BR' },
  en: { flag: UKFlag, label: 'EN-UK' },
};

export function LanguageToggle({ locale, onChange, className }: LanguageToggleProps) {
  const next: Locale = locale === 'pt' ? 'en' : 'pt';
  const current = localeConfig[locale];
  const Flag = current.flag;

  return (
    <button
      onClick={() => onChange(next)}
      className={cn(
        'relative flex items-center gap-2 h-8 rounded-full bg-background/[0.08] border border-background/[0.12] px-3 cursor-pointer transition-colors hover:bg-background/[0.15]',
        className
      )}
      aria-label={`Switch to ${next === 'pt' ? 'Portuguese' : 'English'}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={locale}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="h-[18px] w-[18px] rounded-full overflow-hidden border border-background/20 shrink-0">
            <Flag className="h-full w-full" />
          </div>
          <span className="text-[12px] font-semibold text-background/80 tracking-wide">
            {current.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
