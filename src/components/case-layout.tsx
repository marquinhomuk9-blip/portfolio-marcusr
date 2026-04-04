'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/ui/header';
import { ContactForm } from '@/components/ui/contact-form';
import { FloatingChat } from '@/components/ui/floating-chat';
import { LanguageProvider, useLanguage } from '@/components/ui/language-context';

function BackButton({ light }: { light?: boolean }) {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="mb-10"
    >
      <button
        onClick={() => router.back()}
        className={`inline-flex items-center gap-2 text-[14px] font-medium transition-colors group cursor-pointer ${
          light
            ? 'text-white/50 hover:text-white/80'
            : 'text-foreground/45 hover:text-foreground/70'
        }`}
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
        {t('Voltar ao portfólio', 'Back to portfolio')}
      </button>
    </motion.div>
  );
}

function CaseContent({ children, hero, brandColor }: { children: React.ReactNode; hero?: React.ReactNode; brandColor?: string }) {
  return (
    <div className="relative">
      <Header />
      <main className="relative z-10 bg-background rounded-b-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] pb-1 overflow-hidden">
        {/* Hero com fundo colorido */}
        {brandColor && hero ? (
          <div
            className="rounded-b-[3rem]"
            style={{
              background: `linear-gradient(180deg, ${brandColor} 0%, ${brandColor}e6 100%)`,
            }}
          >
            <div className="mx-auto max-w-[800px] px-6 pt-20 md:pt-28 pb-14 md:pb-16">
              <BackButton light />
              {hero}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-[800px] px-6 pt-20 md:pt-28">
            <BackButton />
          </div>
        )}

        {/* Conteúdo principal */}
        <article className="w-full">
          <div className={`mx-auto max-w-[800px] px-6 ${brandColor && hero ? 'pt-12 md:pt-16' : ''} pb-20 md:pb-28`}>
            {children}
          </div>
        </article>
      </main>
      <ContactForm />
      <FloatingChat />
    </div>
  );
}

export function CaseLayout({ children, hero, brandColor }: { children: React.ReactNode; hero?: React.ReactNode; brandColor?: string }) {
  return (
    <LanguageProvider>
      <CaseContent hero={hero} brandColor={brandColor}>{children}</CaseContent>
    </LanguageProvider>
  );
}
