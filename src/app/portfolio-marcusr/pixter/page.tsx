'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CaseLayout } from '@/components/case-layout';
import { useLanguage } from '@/components/ui/language-context';
import {
  fade, t_styles, BeforeAfterGrid, ProcessStep,
} from '@/components/case-shared';

function PixterLogo() {
  return (
    <img src="/pixter-logo.jpg" alt="Pixter" className="h-full w-full rounded-xl object-cover" />
  );
}

function PixterContent() {
  const { t } = useLanguage();

  return (
    <>
      <motion.div {...fade} className="mb-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#0088CC]/10 p-3 mb-6">
          <PixterLogo />
        </div>
        <p className={t_styles.label}>Case</p>
        <h2 className={t_styles.h2}>
          {t('Pixter Mais: redesign de um app com milhoes de usuarios', 'Pixter Mais: redesign of an app with millions of users')}
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

export default function PixterPage() {
  return (
    <CaseLayout>
      <PixterContent />
    </CaseLayout>
  );
}
