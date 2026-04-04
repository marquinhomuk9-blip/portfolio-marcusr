'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Zap, Layers, TrendingUp, Clock, Sparkles,
} from 'lucide-react';
import { CaseLayout } from '@/components/case-layout';
import { useLanguage } from '@/components/ui/language-context';
import { fade, t_styles, prose } from '@/components/case-shared';

function IADesignContent() {
  const { t } = useLanguage();

  return (
    <>
      <motion.div {...fade} className="mb-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-violet-500/10 p-3 mb-6">
          <Brain className="h-full w-full text-violet-600" strokeWidth={1.5} />
        </div>
        <p className={t_styles.label}>{t('Especialização', 'Specialisation')}</p>
        <h2 className={t_styles.h2}>
          {t('IA aplicada ao Design de Produtos', 'AI Applied to Product Design')}
        </h2>
        <p className={t_styles.body}>
          {t(
            'Não uso IA como buzzword de LinkedIn. Uso como ferramenta real de produção que muda fundamentalmente o que um designer consegue entregar — e em quanto tempo. Essa é a habilidade que separa o designer de hoje do designer de amanhã.',
            'I don\'t use AI as a LinkedIn buzzword. I use it as a real production tool that fundamentally changes what a designer can deliver — and how fast. This is the skill that separates today\'s designer from tomorrow\'s.'
          )}
        </p>
      </motion.div>

      {/* Tradicional vs IA */}
      <motion.div {...fade} className="my-12 grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-foreground/30" />
            <p className="text-[12px] font-sans font-semibold text-foreground/40 uppercase tracking-[0.12em]">{t('Processo tradicional', 'Traditional process')}</p>
          </div>
          <ul className="space-y-3">
            {t(
              ['Discovery: 2-4 semanas de research manual', 'Ideação: dias para explorar alternativas', 'Prototipagem: semanas de iteração', 'Handoff: documentação extensa e reuniões'],
              ['Discovery: 2-4 weeks of manual research', 'Ideation: days to explore alternatives', 'Prototyping: weeks of iteration', 'Handoff: extensive documentation and meetings']
            ).map((item, i) => (
              <li key={i} className="font-sans text-[14px] leading-[1.6] text-foreground/50">{item}</li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-violet-50/60 dark:bg-violet-950/10 border border-violet-200/40 dark:border-violet-900/20">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-violet-500/60" />
            <p className="text-[12px] font-sans font-semibold text-violet-500 uppercase tracking-[0.12em]">{t('Com IA integrada', 'With integrated AI')}</p>
          </div>
          <ul className="space-y-3">
            {t(
              ['Discovery: análise qualitativa em horas', 'Ideação: dezenas de variações em minutos', 'Prototipagem: validação rápida com variantes', 'Handoff: código gerado direto do design'],
              ['Discovery: qualitative analysis in hours', 'Ideation: dozens of variations in minutes', 'Prototyping: rapid validation with variants', 'Handoff: code generated directly from design']
            ).map((item, i) => (
              <li key={i} className="font-sans text-[14px] leading-[1.6] text-violet-600/70 dark:text-violet-300/70">{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Capacidades */}
      <motion.div {...fade} className="my-12 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-50/40 to-purple-100/30 dark:from-violet-950/10 dark:to-purple-900/5 border border-violet-200/30 dark:border-violet-900/15 p-8">
        <div className="grid md:grid-cols-2 gap-3">
          {t(
            [
              { icon: Zap, title: "Automação de processos", desc: "Tarefas operacionais eliminadas. Mais tempo para decisões estratégicas." },
              { icon: Brain, title: "IA em discovery e research", desc: "Análise qualitativa e quantitativa com velocidade 10x." },
              { icon: Layers, title: "Geração de interfaces", desc: "Variações testáveis em minutos. Feedback em horas, não semanas." },
              { icon: TrendingUp, title: "Design Engineering", desc: "Do Figma ao código com menos fricção e menos handoff." },
            ],
            [
              { icon: Zap, title: "Process automation", desc: "Operational tasks eliminated. More time for strategic decisions." },
              { icon: Brain, title: "AI in discovery & research", desc: "Qualitative and quantitative analysis at 10x speed." },
              { icon: Layers, title: "Interface generation", desc: "Testable variations in minutes. Feedback in hours, not weeks." },
              { icon: TrendingUp, title: "Design Engineering", desc: "From Figma to code with less friction and less handoff." },
            ]
          ).map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-background/60 border border-violet-200/20 dark:border-violet-900/10">
              <item.icon className="h-5 w-5 text-violet-500/30 mt-0.5 shrink-0" />
              <div>
                <p className="font-sans text-[16px] font-semibold text-foreground">{item.title}</p>
                <p className="font-sans text-[14px] text-foreground/50 mt-1 leading-[1.6]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Visao */}
      <motion.div {...fade} className="my-12 py-6 px-7 bg-foreground/[0.025] rounded-2xl border-l-[3px] border-violet-400/25">
        <p className="font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65">
          <strong className="text-foreground font-semibold">{t('Minha visão:', 'My vision:')}</strong>{' '}
          {t(
            'IA não substitui o designer — ela multiplica quem sabe usá-la. O mercado vai se dividir entre designers que usam IA como ferramenta real e designers que ficaram para trás. Eu escolhi o primeiro caminho, e os resultados falam por si: entregas que antes levavam meses agora acontecem em dias.',
            'AI doesn\'t replace the designer — it multiplies those who know how to use it. The market will split between designers who use AI as a real tool and those who fall behind. I chose the first path, and the results speak for themselves: deliveries that used to take months now happen in days.'
          )}
        </p>
      </motion.div>
    </>
  );
}

export default function IADesignPage() {
  return (
    <CaseLayout>
      <IADesignContent />
    </CaseLayout>
  );
}
