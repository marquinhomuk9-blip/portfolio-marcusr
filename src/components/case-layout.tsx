'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/ui/header';
import { ContactForm } from '@/components/ui/contact-form';
import { FloatingChat } from '@/components/ui/floating-chat';
import { LanguageProvider, useLanguage } from '@/components/ui/language-context';

function BackButton() {
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
        className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground/45 hover:text-foreground/70 transition-colors group cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
        {t('Voltar ao portfolio', 'Back to portfolio')}
      </button>
    </motion.div>
  );
}

function CaseContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Header />
      <main className="relative z-10 bg-background rounded-b-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] pb-1">
        <article className="w-full bg-background">
          <div className="mx-auto max-w-[800px] px-6 py-20 md:py-28">
            <BackButton />
            {children}
          </div>
        </article>
      </main>
      <ContactForm />
      <FloatingChat />
    </div>
  );
}

export function CaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CaseContent>{children}</CaseContent>
    </LanguageProvider>
  );
}
