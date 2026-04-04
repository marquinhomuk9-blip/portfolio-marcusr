'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/ui/language-context';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function HeroBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.55], [1, 1, 0]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.3, 0.55], [0, 0, 16]);
  const contentFilter = useTransform(contentBlur, (v) => `blur(${v}px)`);
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, -40]);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative flex items-center overflow-hidden bg-background min-h-screen w-full">
      {/* Grid sutil de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div
        style={{ opacity: contentOpacity, filter: contentFilter, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-10 py-24 md:py-0"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Foto + badge de disponibilidade */}
          <motion.div variants={fadeUp} className="relative mb-8">
            <div className="h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-2 border-foreground/[0.06] shadow-lg">
              <img
                src="/marcus-photo.png"
                alt="Marcus Rolim — Product Designer"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Availability tag */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.12]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-medium text-emerald-600 dark:text-emerald-400 tracking-wide">
                {t('Disponível para novos projetos', 'Available for new projects')}
              </span>
            </span>
          </motion.div>

          {/* Headline principal */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 font-heading text-[34px] md:text-[52px] lg:text-[60px] font-bold text-foreground leading-[1.08] max-w-3xl tracking-tight"
          >
            {t(
              <>De meses para dias:<span className="text-foreground/30"> produtos digitais reais</span> com IA aplicada ao design.</>,
              <>From months to days:<span className="text-foreground/30"> real digital products</span> with AI-driven design.</>
            )}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="mb-5 max-w-xl text-[17px] md:text-[19px] leading-[1.72] text-foreground/50"
          >
            {t(
              'Conecto experiência do usuário, estratégia de negócio e tecnologia para construir plataformas que geram resultado — do discovery à implementação.',
              'I connect user experience, business strategy, and technology to build platforms that deliver results — from discovery to implementation.'
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
            <Button
              size="lg"
              className="gap-2 h-12 px-7 text-[15px] font-semibold rounded-xl bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:opacity-90 transition-all"
              onClick={() => handleScroll('#contato')}
            >
              <Mail className="h-4 w-4" />
              {t('Falar comigo', 'Get in touch')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 px-7 text-[15px] font-semibold rounded-xl border-foreground/15 hover:bg-foreground hover:text-background transition-all"
              onClick={() => handleScroll('#projetos')}
            >
              {t('Ver cases', 'View cases')}
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            {[
              { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/marcusvrfh/', label: 'LinkedIn' },
              { icon: WhatsAppIcon, href: 'https://wa.me/5511996807009', label: 'WhatsApp' },
              { icon: Mail, href: 'mailto:marcusuixdesigner@gmail.com', label: 'Email' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/[0.04] text-foreground/35 transition-colors hover:bg-foreground hover:text-background"
              >
                <social.icon className="h-[15px] w-[15px]" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 text-foreground/20" />
      </motion.div>
    </section>
  );
}
