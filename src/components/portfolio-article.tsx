'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target, Users, Layers, Brain, TrendingUp,
} from 'lucide-react';
import { useLanguage } from '@/components/ui/language-context';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.45 },
};

const prose = "max-w-[680px]";

const t_styles = {
  label: "text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-primary/60 mb-4",
  h2: `font-heading text-[28px] md:text-[36px] font-bold text-foreground leading-[1.2] mb-5 ${prose}`,
  h3: `font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-4 mt-14 ${prose}`,
  body: `font-sans text-[18px] md:text-[20px] leading-[1.72] text-foreground/75 mb-8 ${prose}`,
};

export function PortfolioArticle() {
  const { t } = useLanguage();

  return (
    <article className="w-full bg-background">
      <div className="mx-auto max-w-[800px] px-8 md:px-6 pt-14 md:pt-16 pb-20 md:pb-28">

        <motion.div {...fade} className="mb-12 py-6 pl-6 pr-5 md:px-7 bg-foreground/[0.025] rounded-2xl border-l-[3px] border-primary/30">
          <p className="font-serif text-[19px] md:text-[21px] leading-[1.72] text-foreground/65 italic">
            {t(
              '"Design bom nao e o que parece bonito. E o que resolve — para o usuario, para o negocio e para a engenharia. Se nao gerou resultado, nao funcionou."',
              '"Good design isn\'t what looks beautiful. It\'s what solves — for the user, for the business, and for engineering. If it didn\'t generate results, it didn\'t work."'
            )}
          </p>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={`${t_styles.h3} mt-0`}>{t('Por que me contratar', 'Why hire me')}</h3>
          <div className="grid gap-4 mb-8">
            {t(
              [
                { icon: Layers, text: "Construo jornadas complexas do zero — nao herdei, eu criei", color: "text-emerald-500 bg-emerald-500/10" },
                { icon: Users, text: "Colaboro de verdade com engenharia — entendo limitacoes de API e proponho alternativas viaveis", color: "text-blue-500 bg-blue-500/10" },
                { icon: Brain, text: "IA integrada ao meu processo: research, validacao e prototipagem 10x mais rapida", color: "text-violet-500 bg-violet-500/10" },
                { icon: Target, text: "Decisoes baseadas em dados + contexto real: negocio + tecnologia + usuario", color: "text-amber-500 bg-amber-500/10" },
                { icon: TrendingUp, text: "Historico de resultados mensuraveis: conversao, adocao, reducao de fricao", color: "text-rose-500 bg-rose-500/10" },
              ],
              [
                { icon: Layers, text: "I build complex journeys from scratch — I didn't inherit them, I created them", color: "text-emerald-500 bg-emerald-500/10" },
                { icon: Users, text: "I truly collaborate with engineering — I understand API limitations and propose viable alternatives", color: "text-blue-500 bg-blue-500/10" },
                { icon: Brain, text: "AI integrated into my process: research, validation, and prototyping 10x faster", color: "text-violet-500 bg-violet-500/10" },
                { icon: Target, text: "Data-driven decisions + real context: business + technology + user", color: "text-amber-500 bg-amber-500/10" },
                { icon: TrendingUp, text: "Track record of measurable results: conversion, adoption, friction reduction", color: "text-rose-500 bg-rose-500/10" },
              ]
            ).map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-3 px-4 rounded-xl hover:bg-foreground/[0.02] transition-colors">
                <div className={`flex items-center justify-center h-9 w-9 rounded-xl ${item.color.split(' ')[1]} shrink-0 mt-[2px]`}>
                  <item.icon className={`h-[18px] w-[18px] ${item.color.split(' ')[0]}`} />
                </div>
                <span className="font-sans text-[17px] md:text-[18px] leading-[1.65] text-foreground/70">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </article>
  );
}
