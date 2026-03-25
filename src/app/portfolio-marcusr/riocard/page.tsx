'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CaseLayout } from '@/components/case-layout';
import { useLanguage } from '@/components/ui/language-context';
import {
  fade, t_styles, BeforeAfterGrid, ProcessStep,
} from '@/components/case-shared';

function RiocardLogo() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="120" height="120" rx="24" fill="#0088CC" />
      <text x="12" y="68" fill="white" fontSize="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" letterSpacing="-0.5">riocard</text>
      <g fill="white">
        <rect x="96" y="18" width="5" height="16" rx="1.5" />
        <rect x="90" y="23" width="16" height="5" rx="1.5" />
        <rect x="108" y="12" width="4" height="12" rx="1.5" />
        <rect x="104" y="16" width="12" height="4" rx="1.5" />
      </g>
      <rect x="30" y="78" width="52" height="22" rx="3" fill="white" />
      <text x="35" y="95" fill="#0088CC" fontSize="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" letterSpacing="1">mais</text>
    </svg>
  );
}

function RiocardContent() {
  const { t } = useLanguage();

  return (
    <>
      <motion.div {...fade} className="mb-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#0088CC]/10 p-3 mb-6">
          <RiocardLogo />
        </div>
        <p className={t_styles.label}>Case</p>
        <h2 className={t_styles.h2}>
          {t('Riocard Mais: redesign de um app com milhoes de usuarios', 'Riocard Mais: redesign of an app with millions of users')}
        </h2>
        <p className={t_styles.body}>
          {t(
            'Um dos maiores sistemas de bilhetagem do Rio de Janeiro. Interface defasada, navegacao confusa e informacoes criticas escondidas. Conduzi o redesign completo com base em research presencial com usuarios reais.',
            'One of Rio de Janeiro\'s largest transit ticketing systems. Outdated interface, confusing navigation, and hidden critical information. I led the complete redesign based on in-person research with real users.'
          )}
        </p>
      </motion.div>

      {/* Antes / Depois */}
      <BeforeAfterGrid
        t={t}
        beforeItems={t(
          ['Saldo escondido — usuario nao achava a informacao principal', 'Hierarquia de informacao confusa e poluida', 'Navegacao com alta friccao entre telas', 'Interface visualmente datada'],
          ['Hidden balance — user couldn\'t find the main information', 'Confusing and cluttered information hierarchy', 'Navigation with high friction between screens', 'Visually dated interface']
        )}
        afterItems={t(
          ['Saldo visivel como 1o elemento da home', 'Hierarquia clara, limpa e escaneavel', 'Navegacao simplificada com menos taps', 'Interface moderna sem perder familiaridade'],
          ['Balance visible as 1st element on home', 'Clear, clean, and scannable hierarchy', 'Simplified navigation with fewer taps', 'Modern interface without losing familiarity']
        )}
      />

      {/* Processo */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>{t('Processo', 'Process')}</h3>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-6 mb-8">
          <ProcessStep number="01" title={t('Research presencial', 'In-person research')} desc={t('Entrevistei usuarios reais em pontos de recarga. Observei comportamentos e frustraccoes que nao aparecem em analytics.', 'Interviewed real users at recharge points. Observed behaviours and frustrations that don\'t show up in analytics.')} />
          <ProcessStep number="02" title={t('Benchmarking e analise', 'Benchmarking & analysis')} desc={t('Mapeei concorrentes e apps de referencia. Identifiquei padroes que funcionam e oportunidades inexploradas.', 'Mapped competitors and reference apps. Identified patterns that work and unexplored opportunities.')} />
          <ProcessStep number="03" title={t('Reestruturacao da IA', 'IA restructuring')} desc={t('Reorganizei a arquitetura de informacao. Saldo virou o 1o elemento, navegacao simplificada, ruido removido.', 'Reorganised the information architecture. Balance became the 1st element, simplified navigation, noise removed.')} />
          <ProcessStep number="04" title={t('Redesign e entrega', 'Redesign & delivery')} desc={t('Redesenhei home, navegacao e fluxos criticos no Figma. Especificacoes detalhadas para engenharia.', 'Redesigned home, navigation, and critical flows in Figma. Detailed specifications for engineering.')} />
        </div>
      </motion.div>
    </>
  );
}

export default function RiocardPage() {
  return (
    <CaseLayout>
      <RiocardContent />
    </CaseLayout>
  );
}
