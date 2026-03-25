'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.45 },
};

export const prose = "max-w-[680px]";

export const t_styles = {
  label: "text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-primary/60 mb-4",
  h2: `font-heading text-[28px] md:text-[36px] font-bold text-foreground leading-[1.2] mb-5 ${prose}`,
  h3: `font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-4 mt-14 ${prose}`,
  body: `font-sans text-[18px] md:text-[20px] leading-[1.72] text-foreground/75 mb-8 ${prose}`,
  divider: "w-full h-px bg-foreground/[0.06] my-16 md:my-20",
};

export function MetricCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <motion.div {...fade} className="text-center py-8 px-4 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06]">
      <div className="font-heading text-[36px] md:text-[44px] font-bold text-primary leading-none mb-2">{value}</div>
      <div className="font-sans text-[14px] leading-[1.5] text-foreground/55">{label}</div>
      {sub && <div className="font-sans text-[12px] text-foreground/35 mt-1">{sub}</div>}
    </motion.div>
  );
}

export function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/[0.08] border border-primary/15 text-[13px] font-semibold text-primary shrink-0">
        {number}
      </div>
      <div className="pt-0.5">
        <p className="font-sans text-[17px] font-semibold text-foreground mb-1">{title}</p>
        <p className="font-sans text-[15px] leading-[1.6] text-foreground/55">{desc}</p>
      </div>
    </div>
  );
}

export function BeforeAfterGrid({ t, beforeItems, afterItems }: {
  t: <T>(pt: T, en: T) => T;
  beforeItems: string[];
  afterItems: string[];
}) {
  return (
    <motion.div {...fade} className="my-12 grid md:grid-cols-2 gap-4">
      <div className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/10 border border-red-200/40 dark:border-red-900/20">
        <p className="text-[12px] font-sans font-semibold text-red-400 mb-4 uppercase tracking-[0.12em]">{t('Antes', 'Before')}</p>
        <ul className="space-y-3">
          {beforeItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-red-600/70 dark:text-red-300/70">
              <AlertTriangle className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />{item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/10 border border-emerald-200/40 dark:border-emerald-900/20">
        <p className="text-[12px] font-sans font-semibold text-emerald-500 mb-4 uppercase tracking-[0.12em]">{t('Depois', 'After')}</p>
        <ul className="space-y-3">
          {afterItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-emerald-600/70 dark:text-emerald-300/70">
              <CheckCircle2 className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />{item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
