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
              '"Como Product Designer, transformo complexidade em soluções claras, úteis e alinhadas com os objetivos do produto."',
              '"As a Product Designer, I turn complexity into clear, useful solutions aligned with the product\'s goals."'
            )}
          </p>
        </motion.div>

        <motion.div {...fade}>
          <p className={t_styles.label}>{t('Por que me contratar', 'Why hire me')}</p>
          <h3 className={`${t_styles.h2} mt-0`}>
            {t(
              'O que eu trago para o time',
              'What I bring to the team'
            )}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {t(
              [
                { icon: Layers, title: "Jornadas do zero", text: "Construo fluxos complexos desde o discovery até a produção", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
                { icon: Users, title: "Parceiro da engenharia", text: "Entendo limitações de API e proponho alternativas viáveis", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
                { icon: Brain, title: "IA no processo", text: "Research, validação e prototipagem 10x mais rápida", color: "text-violet-500 bg-violet-500/10 border-violet-500/20" },
                { icon: Target, title: "Decisões com contexto", text: "Dados + negócio + tecnologia + usuário", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
                { icon: TrendingUp, title: "Resultados mensuráveis", text: "Conversão, adoção e redução de fricção comprovados", color: "text-rose-500 bg-rose-500/10 border-rose-500/20" },
              ],
              [
                { icon: Layers, title: "Journeys from scratch", text: "I build complex flows from discovery to production", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
                { icon: Users, title: "Engineering partner", text: "I understand API limitations and propose viable alternatives", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
                { icon: Brain, title: "AI in the process", text: "Research, validation, and prototyping 10x faster", color: "text-violet-500 bg-violet-500/10 border-violet-500/20" },
                { icon: Target, title: "Contextual decisions", text: "Data + business + technology + user", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
                { icon: TrendingUp, title: "Measurable results", text: "Proven conversion, adoption, and friction reduction", color: "text-rose-500 bg-rose-500/10 border-rose-500/20" },
              ]
            ).map((item, i) => {
              const [textColor, bgColor, borderColor] = item.color.split(' ');
              return (
                <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl bg-foreground/[0.02] border ${borderColor} hover:bg-foreground/[0.04] transition-colors`}>
                  <div className={`flex items-center justify-center h-10 w-10 rounded-xl ${bgColor} shrink-0`}>
                    <item.icon className={`h-5 w-5 ${textColor}`} />
                  </div>
                  <div>
                    <p className={`font-heading text-[16px] md:text-[17px] font-semibold leading-[1.3] ${textColor} mb-1`}>{item.title}</p>
                    <p className="font-sans text-[14px] md:text-[15px] leading-[1.6] text-foreground/55">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </article>
  );
}
