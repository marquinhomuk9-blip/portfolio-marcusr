'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Zap, Layers, TrendingUp, Clock, Sparkles,
  Rocket, Users, MessageCircle, Shuffle, BookOpen, Target, Lightbulb, FlaskConical,
  Search, Palette, BarChart3, CheckCircle2, Eye, Image as ImageIcon, Quote, ArrowRight,
} from 'lucide-react';
import { CaseLayout } from '@/components/case-layout';
import { useLanguage } from '@/components/ui/language-context';
import { fade } from '@/components/case-shared';

function IADesignHero() {
  const { t } = useLanguage();
  return (
    <motion.div {...fade}>
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm p-3 mb-6">
        <Brain className="h-full w-full text-white/80" strokeWidth={1.5} />
      </div>
      <p className="text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-white/40 mb-4">{t('Especialização', 'Specialisation')}</p>
      <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-white leading-[1.2] mb-5 max-w-[680px]">
        {t('IA aplicada ao Design de Produtos', 'AI Applied to Product Design')}
      </h2>
      <p className="font-sans text-[18px] md:text-[20px] leading-[1.72] text-white/60 max-w-[680px]">
        {t(
          'Não uso IA como buzzword de LinkedIn. Uso como ferramenta real de produção que muda fundamentalmente o que um designer consegue entregar, e em quanto tempo. Essa é a habilidade que separa o designer de hoje do designer de amanhã.',
          'I don\'t use AI as a LinkedIn buzzword. I use it as a real production tool that fundamentally changes what a designer can deliver — and how fast. This is the skill that separates today\'s designer from tomorrow\'s.'
        )}
      </p>
    </motion.div>
  );
}

function FlowNode({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'start' | 'decision' | 'end' | 'success' | 'fail' }) {
  const tones: Record<string, string> = {
    default: 'bg-foreground/[0.03] border-foreground/15 text-foreground/80',
    start: 'bg-violet-500/[0.10] border-violet-400/40 text-violet-600 dark:text-violet-300 font-semibold',
    decision: 'bg-amber-500/[0.10] border-amber-400/40 text-amber-700 dark:text-amber-300 font-semibold',
    end: 'bg-emerald-500/[0.10] border-emerald-400/40 text-emerald-700 dark:text-emerald-300 font-semibold',
    success: 'bg-emerald-500/[0.08] border-emerald-400/35 text-emerald-700 dark:text-emerald-300',
    fail: 'bg-red-500/[0.08] border-red-400/35 text-red-600 dark:text-red-300',
  };
  return (
    <div className={`px-2.5 py-1.5 rounded-lg border text-[11px] md:text-[12px] font-sans text-center leading-[1.3] ${tones[tone]}`}>
      {children}
    </div>
  );
}

function ColArrow() {
  return (
    <div className="flex flex-col items-center my-0.5">
      <div className="h-3 w-px bg-foreground/20" />
      <svg width="8" height="5" viewBox="0 0 10 6" className="text-foreground/35"><path d="M0 0 L5 6 L10 0" fill="currentColor" /></svg>
    </div>
  );
}

function MimicaUserFlow({ t }: { t: <T,>(pt: T, en: T) => T }) {
  return (
    <motion.div {...fade} className="my-10">
      <p className="text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-foreground/35 mb-4">
        {t('Imagem · Fluxograma do usuário', 'Image · User flow')}
      </p>
      <div className="relative rounded-2xl border border-foreground/[0.08] bg-gradient-to-br from-violet-500/[0.04] via-violet-500/[0.02] to-transparent p-5 md:p-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-violet-400/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-violet-500/[0.07] blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 items-start">
          {/* Coluna 1 — Setup */}
          <div>
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500/70 mb-2 text-center">{t('1 · Setup', '1 · Setup')}</p>
            <FlowNode tone="start">{t('Abrir app (desktop / mobile)', 'Open app (desktop / mobile)')}</FlowNode>
            <ColArrow />
            <FlowNode>{t('Começar jogo', 'Start game')}</FlowNode>
            <ColArrow />
            <FlowNode>{t('Configurar partida', 'Configure match')}</FlowNode>
            <ColArrow />
            <FlowNode>{t('Escolher categoria', 'Choose category')}</FlowNode>
            <ColArrow />
            <FlowNode>{t('Começar rodada', 'Start round')}</FlowNode>
          </div>

          {/* Coluna 2 — Loop por time */}
          <div className="relative md:border-l md:border-r md:border-dashed md:border-violet-400/20 md:px-4">
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500/70 mb-2 text-center">
              {t('2 · Rodada (×2 times)', '2 · Round (×2 teams)')}
            </p>
            <FlowNode>{t('Mostrar palavra (só pro mímico)', 'Show word (mime only)')}</FlowNode>
            <ColArrow />
            <FlowNode>{t('Timer inicia automaticamente', 'Timer starts automatically')}</FlowNode>
            <ColArrow />
            <FlowNode>{t('Grupo tenta adivinhar', 'Group tries to guess')}</FlowNode>
            <ColArrow />
            <FlowNode tone="decision">{t('Acertou?', 'Correct?')}</FlowNode>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-emerald-600/70 dark:text-emerald-400/70">{t('Sim', 'Yes')}</span>
                <svg width="8" height="5" viewBox="0 0 10 6" className="text-emerald-500/50 mb-0.5"><path d="M0 0 L5 6 L10 0" fill="currentColor" /></svg>
                <FlowNode tone="success">{t('+1 ponto', '+1 point')}</FlowNode>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.1em] text-red-500/70 dark:text-red-400/70">{t('Não', 'No')}</span>
                <svg width="8" height="5" viewBox="0 0 10 6" className="text-red-500/50 mb-0.5"><path d="M0 0 L5 6 L10 0" fill="currentColor" /></svg>
                <FlowNode tone="fail">{t('Sem ponto', 'No point')}</FlowNode>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-sans uppercase tracking-[0.1em] text-violet-500/60">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9"/><path d="M3 4v5h5"/></svg>
              {t('repete p/ próximo time', 'repeats for next team')}
            </div>
          </div>

          {/* Coluna 3 — Fim */}
          <div>
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500/70 mb-2 text-center">{t('3 · Final', '3 · End')}</p>
            <FlowNode tone="decision">{t('Final do jogo', 'End of game')}</FlowNode>
            <ColArrow />
            <FlowNode>{t('Mostrar pontuação', 'Show score')}</FlowNode>
            <ColArrow />
            <FlowNode>{t('Empate → desempate', 'Tie → tiebreaker')}</FlowNode>
            <ColArrow />
            <FlowNode tone="end">{t('"Jogar novamente"', '"Play again"')}</FlowNode>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function IADesignContent() {
  const { t } = useLanguage();

  return (
    <>
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
            'IA não substitui o designer: ela multiplica quem sabe usá-la. O mercado vai se dividir entre designers que usam IA como ferramenta real e designers que ficaram para trás. Eu escolhi o primeiro caminho, e os resultados falam por si: entregas que antes levavam meses agora acontecem em dias.',
            'AI doesn\'t replace the designer — it multiplies those who know how to use it. The market will split between designers who use AI as a real tool and those who fall behind. I chose the first path, and the results speak for themselves: deliveries that used to take months now happen in days.'
          )}
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════
          PRIMEIRO PROJETO · MIMICANDO SIMPLES
          ═══════════════════════════════════════════════════════════ */}

      {/* Divisor visual entre especialização e case */}
      <motion.div {...fade} className="mt-24 mb-14">
        <div className="h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent" />
      </motion.div>

      {/* ──── Header do case ──── */}
      <motion.div {...fade} className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-violet-500/10">
            <Rocket className="h-4 w-4 text-violet-500" strokeWidth={2} />
          </div>
          <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.14em] text-violet-500">
            {t('Case em construção · Primeiro projeto com IA', 'Case in progress · First project with AI')}
          </p>
        </div>
        <h3 className="font-heading text-[32px] md:text-[42px] font-bold text-foreground leading-[1.1] mb-4">
          {t('Mimicando Simples', 'Mimicando Simples')}
        </h3>
        <p className="font-sans text-[18px] md:text-[20px] leading-[1.6] text-foreground/70 max-w-[720px]">
          {t(
            'Criando uma experiência de mímica rápida, fluida e social com apoio de IA, do discovery ao MVP em produção.',
            'Building a fast, fluid and social charades experience with AI support — from discovery to MVP in production.'
          )}
        </p>

        {/* Meta chips — meu papel, duração, status */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { label: t('Product Designer (solo)', 'Product Designer (solo)') },
            { label: t('Discovery → MVP', 'Discovery → MVP') },
            { label: t('IA em todas as etapas', 'AI across all stages') },
            { label: t('Publicado em produção', 'Shipped to production') },
          ].map((chip, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-foreground/12 bg-foreground/[0.03] px-3 py-1 text-[12px] font-medium text-foreground/60"
            >
              {chip.label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ──── 1. Contexto ──── */}
      <motion.div {...fade} className="mt-14 mb-6">
        <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500 mb-2">
          {t('01 · Contexto', '01 · Context')}
        </p>
        <h4 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-3">
          {t('O projeto nasceu de uma necessidade real', 'The project was born from a real need')}
        </h4>
        <p className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-foreground/65 max-w-[720px]">
          {t(
            'Um amigo (stakeholder inicial) queria jogar mímica com o grupo dele, mas sempre esbarrava nos mesmos problemas: apps pagos, excesso de anúncios, interfaces confusas e dificuldade para começar a jogar rapidamente. A partir disso, veio a pergunta que guiou tudo:',
            'A friend (initial stakeholder) wanted to play charades with his group, but always hit the same problems: paid apps, too many ads, confusing interfaces and difficulty to start quickly. From this came the question that guided everything:'
          )}
        </p>
        <p className="mt-5 font-heading italic text-[19px] md:text-[22px] leading-[1.4] text-foreground/85 max-w-[720px]">
          {t(
            '“Como facilitar partidas de mímica de forma simples, rápida e divertida?”',
            '"How do we make charades games simple, fast and fun?"'
          )}
        </p>
        <p className="mt-5 font-sans text-[15px] leading-[1.7] text-foreground/55 max-w-[720px]">
          {t(
            'Esse foi o ponto de partida do Mimicando Simples, um produto digital pensado para apoiar a experiência social, não competir com ela.',
            'That was the starting point of Mimicando Simples — a digital product designed to support the social experience, not compete with it.'
          )}
        </p>
      </motion.div>

      {/* ──── 2. Objetivo do produto ──── */}
      <motion.div {...fade} className="my-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-violet-50/60 to-transparent dark:from-violet-950/10 dark:to-transparent border border-violet-200/30 dark:border-violet-900/15">
        <div className="flex items-center gap-2 mb-3">
          <Target className="h-4 w-4 text-violet-500/70" />
          <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500">
            {t('02 · Objetivo do produto', '02 · Product goal')}
          </p>
        </div>
        <p className="font-sans text-[17px] md:text-[18px] leading-[1.6] text-foreground/75 mb-5 max-w-[720px]">
          {t(
            'Facilitar partidas de mímica entre amigos de forma rápida, simples e divertida, apoiando a dinâmica presencial.',
            'Make charades between friends fast, simple and fun, supporting the in-person dynamic.'
          )}
        </p>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
          {t(
            ['Organização das rodadas', 'Variedade de palavras', 'Fluidez na experiência', 'Mínima fricção para começar'],
            ['Round organization', 'Word variety', 'Smooth experience', 'Minimal friction to start']
          ).map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-sans text-[14px] text-foreground/60">
              <CheckCircle2 className="h-4 w-4 text-violet-500/60 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ──── 3. Discovery & Pesquisa ──── */}
      <motion.div {...fade} className="mt-14 mb-6">
        <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500 mb-2">
          {t('03 · Discovery & Pesquisa', '03 · Discovery & Research')}
        </p>
        <h4 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-3">
          {t('Entender antes de desenhar', 'Understand before designing')}
        </h4>
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-foreground/60 max-w-[720px]">
          {t(
            'Combinei uma abordagem tradicional de discovery com o apoio de IA para acelerar síntese e análise.',
            'I combined a traditional discovery approach with AI support to accelerate synthesis and analysis.'
          )}
        </p>
      </motion.div>

      <motion.div {...fade} className="my-8 grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-violet-500/60" />
            <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-foreground/50">{t('Métodos utilizados', 'Methods used')}</p>
          </div>
          <ul className="space-y-2">
            {t(
              [
                'Análise de apps existentes',
                'Leitura de avaliações de usuários',
                'Observação de comportamento em jogos sociais',
                'Levantamento de frustrações recorrentes',
              ],
              [
                'Analysis of existing apps',
                'Reading user reviews',
                'Behavior observation in social games',
                'Mapping recurring frustrations',
              ]
            ).map((item, i) => (
              <li key={i} className="flex gap-2 font-sans text-[14px] leading-[1.6] text-foreground/55">
                <span className="text-violet-400/60 mt-[7px] text-[5px]">&#9679;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-4 w-4 text-violet-500/60" />
            <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-foreground/50">{t('Problemas identificados', 'Problems identified')}</p>
          </div>
          <ul className="space-y-2">
            {t(
              [
                'Dificuldade para iniciar o jogo rapidamente',
                'Excesso de etapas antes da primeira rodada',
                'Interrupções, principalmente anúncios',
                'Falta de organização durante o jogo',
                'Pouca variedade de palavras',
                'Ausência de feedback claro durante a rodada',
              ],
              [
                'Hard to start a match quickly',
                'Too many steps before the first round',
                'Interruptions — mainly ads',
                'Lack of organization during the game',
                'Few word options',
                'No clear feedback during the round',
              ]
            ).map((item, i) => (
              <li key={i} className="flex gap-2 font-sans text-[14px] leading-[1.6] text-foreground/55">
                <span className="text-violet-400/60 mt-[7px] text-[5px]">&#9679;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* ──── 4. Design Principles ──── */}
      <motion.div {...fade} className="mt-14 mb-6">
        <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500 mb-2">
          {t('04 · Design Principles', '04 · Design Principles')}
        </p>
        <h4 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-3">
          {t('Princípios que guiaram cada decisão', 'Principles that guided every decision')}
        </h4>
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-foreground/60 max-w-[720px]">
          {t(
            'Transformei os insights do discovery em 5 princípios de design: o guia de decisão do produto, do fluxo à interface.',
            'I turned discovery insights into 5 design principles — the product\'s decision guide, from flow to interface.'
          )}
        </p>
      </motion.div>

      <motion.div {...fade} className="my-8 grid md:grid-cols-2 gap-4">
        {t(
          [
            {
              icon: Zap,
              number: '01',
              title: 'Começar a jogar em segundos',
              explanation: 'Jogos entre amigos surgem de forma espontânea. Muitos passos matam o impulso inicial.',
              impact: ['Fluxo direto, sem cadastro', 'Configuração mínima antes da 1ª rodada', 'Interface direta e intuitiva'],
            },
            {
              icon: Users,
              number: '02',
              title: 'Priorizar a interação entre jogadores',
              explanation: 'O foco é a brincadeira, não a tela. O app apoia a dinâmica, não compete com ela.',
              impact: ['Interface simples e discreta', 'Poucos elementos durante a rodada', 'Foco na dinâmica do jogo'],
            },
            {
              icon: MessageCircle,
              number: '03',
              title: 'Reduzir interrupções',
              explanation: 'Interrupções quebram o ritmo da partida e prejudicam a experiência coletiva.',
              impact: ['Sem anúncios intrusivos', 'Transições rápidas entre rodadas', 'Experiência contínua durante o jogo'],
            },
            {
              icon: Shuffle,
              number: '04',
              title: 'Estimular criatividade',
              explanation: 'Sem variedade, o jogo repete e perde a graça rápido.',
              impact: ['Categorias de palavras', 'Variedade de desafios', 'Renovação constante das rodadas'],
            },
            {
              icon: BookOpen,
              number: '05',
              title: 'Regras claras para todos',
              explanation: 'Inclusivo até para quem nunca jogou antes.',
              impact: ['Explicações rápidas', 'Mecânicas simples', 'Onboarding leve'],
            },
          ],
          [
            {
              icon: Zap,
              number: '01',
              title: 'Start playing in seconds',
              explanation: 'Games between friends are spontaneous. Many steps kill the initial momentum.',
              impact: ['Direct flow, no sign-up', 'Minimal setup before 1st round', 'Direct, intuitive interface'],
            },
            {
              icon: Users,
              number: '02',
              title: 'Prioritize player interaction',
              explanation: 'The focus is the fun, not the screen. The app supports the dynamic — it doesn\'t compete with it.',
              impact: ['Simple, discreet interface', 'Few elements during the round', 'Focus on game dynamics'],
            },
            {
              icon: MessageCircle,
              number: '03',
              title: 'Reduce interruptions',
              explanation: 'Interruptions break the match rhythm and hurt the collective experience.',
              impact: ['No intrusive ads', 'Fast transitions between rounds', 'Continuous experience during play'],
            },
            {
              icon: Shuffle,
              number: '04',
              title: 'Encourage creativity',
              explanation: 'Without variety, the game repeats and loses its charm fast.',
              impact: ['Word categories', 'Variety of challenges', 'Constant renewal of rounds'],
            },
            {
              icon: BookOpen,
              number: '05',
              title: 'Clear rules for everyone',
              explanation: 'Inclusive even for first-time players.',
              impact: ['Quick explanations', 'Simple mechanics', 'Light onboarding'],
            },
          ]
        ).map((principle, i) => {
          const Icon = principle.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-violet-50/50 to-transparent dark:from-violet-950/10 dark:to-transparent border border-violet-200/30 dark:border-violet-900/15"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-violet-500/10">
                  <Icon className="h-4 w-4 text-violet-500" strokeWidth={2} />
                </div>
                <span className="font-heading text-[22px] font-bold text-violet-400/40">{principle.number}</span>
              </div>
              <h5 className="font-heading text-[18px] md:text-[19px] font-semibold text-foreground leading-[1.3] mb-2">
                {principle.title}
              </h5>
              <p className="font-sans text-[14px] leading-[1.65] text-foreground/55 mb-4">
                {principle.explanation}
              </p>
              <ul className="space-y-1.5 pt-3 border-t border-violet-200/30 dark:border-violet-900/15">
                {principle.impact.map((item, j) => (
                  <li key={j} className="flex gap-2 font-sans text-[13px] leading-[1.55] text-foreground/50">
                    <span className="text-violet-400/60 mt-[6px] text-[5px]">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.div>

      {/* ──── 5. Direção de solução + Fluxo ──── */}
      <motion.div {...fade} className="mt-14 mb-6">
        <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500 mb-2">
          {t('05 · Direção de solução & Fluxo', '05 · Solution direction & Flow')}
        </p>
        <h4 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-3">
          {t('Do problema à estrutura do produto', 'From problem to product structure')}
        </h4>
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-foreground/60 max-w-[720px]">
          {t(
            'Com os problemas mapeados e os princípios no lugar, estruturei as direções de solução e desenhei o fluxo completo antes de partir para a interface.',
            'With problems mapped and principles in place, I structured the solution directions and designed the full flow before jumping into the interface.'
          )}
        </p>
      </motion.div>

      <motion.div {...fade} className="my-8 p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="h-4 w-4 text-violet-500/60" />
          <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-foreground/50">{t('Direções de solução', 'Solution directions')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
          {t(
            [
              'Fluxo simplificado para iniciar partidas',
              'Sistema automático de rodadas e timer',
              'Categorias de palavras',
              'Feedback visual claro (acerto/erro)',
              'Interface limpa e intuitiva',
              'Dinâmica de turnos clara',
            ],
            [
              'Simplified flow to start matches',
              'Automatic rounds and timer system',
              'Word categories',
              'Clear visual feedback (hit/miss)',
              'Clean, intuitive interface',
              'Clear turn dynamics',
            ]
          ).map((item, i) => (
            <div key={i} className="flex items-start gap-2 font-sans text-[14px] leading-[1.6] text-foreground/60">
              <ArrowRight className="h-3.5 w-3.5 text-violet-500/50 mt-[4px] shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fluxograma do usuário */}
      <MimicaUserFlow t={t} />


      {/* ──── 6. MVP & Execução ──── */}
      <motion.div {...fade} className="mt-14 mb-6">
        <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500 mb-2">
          {t('06 · MVP & Execução', '06 · MVP & Execution')}
        </p>
        <h4 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-3">
          {t('Do Figma ao ambiente real em dias', 'From Figma to production in days')}
        </h4>
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-foreground/60 max-w-[720px]">
          {t(
            'Com o fluxo validado, parti para o MVP: site responsivo (desktop + mobile), publicado em ambiente real (Vercel) e pronto para testes com usuários. O foco foi validar rapidamente clareza do fluxo, facilidade de uso e ritmo do jogo.',
            'With the validated flow, I moved to the MVP: responsive site (desktop + mobile), published in a real environment (Vercel) and ready for user testing. The focus was to quickly validate flow clarity, ease of use and game pace.'
          )}
        </p>
      </motion.div>

      {/* Mockups Mímica — desktop + mobile no estilo showcase */}
      <motion.div {...fade} className="relative mt-2 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-violet-500/[0.07] via-violet-500/[0.04] to-violet-500/[0.02] p-6 md:p-10 overflow-hidden border border-foreground/[0.06]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-400/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/[0.08] blur-3xl" />

          <div className="relative grid md:grid-cols-[1.45fr_1fr] gap-6 md:gap-8 items-center">
            {/* Desktop com janela falsa */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-foreground/[0.03] border border-foreground/10 shadow-[0_30px_60px_-25px_rgba(124,58,237,0.35)]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-foreground/[0.04] border-b border-foreground/[0.06]">
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                </div>
                <img
                  src="/mimica-desktop.jpg"
                  alt={t('Mockup desktop do jogo Mímica', 'Desktop mockup of the Mimica game')}
                  className="block w-full h-auto"
                />
              </div>
              <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.12em] text-foreground/45 text-center md:text-left">
                {t('Versão Desktop', 'Desktop version')}
              </p>
            </div>

            {/* Mobile com frame de telefone */}
            <div className="relative flex flex-col items-center">
              <div className="relative rounded-[2.2rem] p-[6px] bg-foreground/80 border border-foreground/15 shadow-[0_30px_60px_-25px_rgba(124,58,237,0.4)]">
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 h-[18px] w-[90px] rounded-full bg-foreground z-10" />
                <div className="rounded-[1.8rem] overflow-hidden bg-foreground">
                  <img
                    src="/mimica-mobile.jpg"
                    alt={t('Mockup mobile do jogo Mímica', 'Mobile mockup of the Mimica game')}
                    className="block w-auto max-h-[360px] md:max-h-[420px] h-auto"
                  />
                </div>
              </div>
              <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.12em] text-foreground/45 text-center">
                {t('Versão Mobile', 'Mobile version')}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ──── 7. Uso de IA no projeto (highlight) ──── */}
      <motion.div {...fade} className="my-14 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-violet-500/[0.08] via-violet-400/[0.04] to-transparent border border-violet-400/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="h-4 w-4 text-violet-500" />
            <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500">
              {t('07 · Uso de IA no projeto', '07 · Use of AI in the project')}
            </p>
          </div>
          <h4 className="font-heading text-[24px] md:text-[30px] font-semibold text-foreground leading-[1.25] mb-4 max-w-[680px]">
            {t(
              'IA como alavanca, não como substituto',
              'AI as leverage — not replacement'
            )}
          </h4>
          <p className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-foreground/70 max-w-[680px] mb-6">
            {t(
              'Usei IA como apoio estratégico em todas as etapas. Ela não substituiu decisões de design. Potencializou velocidade de exploração, síntese de dados e aceleração do MVP.',
              'I used AI as strategic support across every stage. It didn\'t replace design decisions — it amplified exploration speed, data synthesis and MVP acceleration.'
            )}
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {t(
              [
                { icon: Lightbulb, title: 'Geração de ideias', desc: 'Exploração rápida de soluções e alternativas' },
                { icon: Layers, title: 'Apoio na definição de fluxos', desc: 'Estruturação de jornadas e validação lógica' },
                { icon: Rocket, title: 'Aceleração do MVP', desc: 'Do design ao código em uma fração do tempo' },
                { icon: FlaskConical, title: 'Validação de hipóteses', desc: 'Testes iniciais e síntese de feedback' },
              ],
              [
                { icon: Lightbulb, title: 'Idea generation', desc: 'Fast exploration of solutions and alternatives' },
                { icon: Layers, title: 'Flow definition support', desc: 'Journey structuring and logical validation' },
                { icon: Rocket, title: 'MVP acceleration', desc: 'From design to code in a fraction of the time' },
                { icon: FlaskConical, title: 'Hypothesis validation', desc: 'Initial testing and feedback synthesis' },
              ]
            ).map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background/60 border border-violet-200/25 dark:border-violet-900/15">
                  <Icon className="h-4 w-4 text-violet-500/70 mt-0.5 shrink-0" strokeWidth={2} />
                  <div>
                    <p className="font-sans text-[14px] font-semibold text-foreground">{item.title}</p>
                    <p className="font-sans text-[13px] text-foreground/50 mt-0.5 leading-[1.55]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ──── 8. Testes & Iterações ──── */}
      <motion.div {...fade} className="mt-14 mb-6">
        <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500 mb-2">
          {t('08 · Testes & Iterações', '08 · Testing & Iterations')}
        </p>
        <h4 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-3">
          {t('Produto em uso real, aprendendo com ele', 'Product in real use, learning from it')}
        </h4>
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-foreground/60 max-w-[720px]">
          {t(
            'O produto foi colocado em uso real para coletar feedbacks diretos, observar partidas e conduzir testes de usabilidade. Os aprendizados alimentam melhorias contínuas, principalmente em tempo de interação, clareza das ações e fluidez entre rodadas.',
            'The product was placed in real use to collect direct feedback, observe matches and run usability tests. The learnings feed continuous improvements — mainly in interaction time, action clarity and inter-round fluidity.'
          )}
        </p>
      </motion.div>

      <motion.div {...fade} className="my-8 grid md:grid-cols-3 gap-3">
        {t(
          [
            { icon: MessageCircle, title: 'Feedback direto', desc: 'Conversa com jogadores após partidas reais' },
            { icon: Eye, title: 'Observação de partidas', desc: 'Identificação de fricções no comportamento real' },
            { icon: FlaskConical, title: 'Testes de usabilidade', desc: 'Validação de tarefas e fluxos-chave' },
          ],
          [
            { icon: MessageCircle, title: 'Direct feedback', desc: 'Talks with players after real matches' },
            { icon: Eye, title: 'Match observation', desc: 'Friction mapping in real behavior' },
            { icon: FlaskConical, title: 'Usability testing', desc: 'Validation of key tasks and flows' },
          ]
        ).map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="p-5 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
              <Icon className="h-4 w-4 text-violet-500/60 mb-3" strokeWidth={2} />
              <p className="font-sans text-[14px] font-semibold text-foreground mb-1">{item.title}</p>
              <p className="font-sans text-[13px] text-foreground/50 leading-[1.55]">{item.desc}</p>
            </div>
          );
        })}
      </motion.div>

      {/* ──── 9. Diferencial: Personagem 3D ──── */}
      <motion.div {...fade} className="mt-14 mb-6">
        <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500 mb-2">
          {t('09 · Diferencial · Do digital ao físico', '09 · Differentiator · From digital to physical')}
        </p>
        <h4 className="font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-3">
          {t('A experiência que saiu da tela', 'The experience that left the screen')}
        </h4>
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-foreground/60 max-w-[720px]">
          {t(
            'Além do digital, explorei o lado físico e de marca: criei um personagem 3D do produto, imprimi e pintei à mão o avatar. Isso reforça a identidade do produto, cria conexão emocional e abre potencial de marca futura.',
            'Beyond digital, I explored the physical and brand side: I created a 3D character for the product, printed and hand-painted the avatar. This reinforces product identity, creates emotional connection and opens future brand potential.'
          )}
        </p>
      </motion.div>

      <motion.div {...fade} className="my-8 grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-foreground/35 mb-3">
            {t('Imagem · Render 3D', 'Image · 3D render')}
          </p>
          <div className="aspect-square rounded-2xl border border-dashed border-foreground/15 bg-foreground/[0.02] flex flex-col items-center justify-center gap-2">
            <Palette className="h-7 w-7 text-foreground/20" strokeWidth={1.5} />
            <p className="font-sans text-[13px] text-foreground/35">
              {t('Personagem 3D (render)', '3D character (render)')}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-foreground/35 mb-3">
            {t('Imagem · Peça impressa e pintada', 'Image · Printed & painted piece')}
          </p>
          <div className="aspect-square rounded-2xl border border-dashed border-foreground/15 bg-foreground/[0.02] flex flex-col items-center justify-center gap-2">
            <ImageIcon className="h-7 w-7 text-foreground/20" strokeWidth={1.5} />
            <p className="font-sans text-[13px] text-foreground/35">
              {t('Personagem impresso + pintado', 'Printed + painted character')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ──── 10. Resultados Esperados + Próximos Passos ──── */}
      <motion.div {...fade} className="mt-14 mb-6">
        <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500 mb-2">
          {t('10 · Resultados & Próximos passos', '10 · Results & Next steps')}
        </p>
      </motion.div>

      <motion.div {...fade} className="my-8 grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-4 w-4 text-violet-500/60" />
            <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-foreground/50">{t('Resultados esperados', 'Expected results')}</p>
          </div>
          <ul className="space-y-2">
            {t(
              [
                'Reduzir o tempo para iniciar partidas',
                'Aumentar o engajamento entre jogadores',
                'Tornar a experiência mais fluida e contínua',
                'Eliminar fricções comuns em apps similares',
              ],
              [
                'Reduce time to start matches',
                'Increase engagement between players',
                'Make the experience more fluid and continuous',
                'Eliminate common frictions in similar apps',
              ]
            ).map((item, i) => (
              <li key={i} className="flex gap-2 font-sans text-[14px] leading-[1.6] text-foreground/55">
                <CheckCircle2 className="h-3.5 w-3.5 text-violet-500/50 mt-[4px] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-violet-50/60 dark:bg-violet-950/10 border border-violet-200/40 dark:border-violet-900/20">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-4 w-4 text-violet-500/60" />
            <p className="text-[12px] font-sans font-semibold uppercase tracking-[0.12em] text-violet-500">{t('Próximos passos', 'Next steps')}</p>
          </div>
          <ul className="space-y-2">
            {t(
              [
                'Expansão do banco de palavras',
                'Novas categorias e modos de jogo',
                'Melhorias baseadas em analytics',
                'Evolução da experiência multiplayer',
                'Refinamento da identidade visual',
              ],
              [
                'Word bank expansion',
                'New categories and game modes',
                'Improvements based on analytics',
                'Multiplayer experience evolution',
                'Visual identity refinement',
              ]
            ).map((item, i) => (
              <li key={i} className="flex gap-2 font-sans text-[14px] leading-[1.6] text-violet-600/70 dark:text-violet-300/70">
                <ArrowRight className="h-3.5 w-3.5 text-violet-500/60 mt-[4px] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* ──── 11. Reflexão Final (pull quote) ──── */}
      <motion.div {...fade} className="my-14 p-8 md:p-10 rounded-3xl bg-foreground/[0.03] border border-foreground/[0.06]">
        <Quote className="h-6 w-6 text-violet-500/40 mb-4" strokeWidth={2} />
        <p className="font-heading text-[20px] md:text-[24px] leading-[1.4] text-foreground/85 mb-4 max-w-[720px]">
          {t(
            'O Mimicando Simples não foi criado para ser “mais um app de mímica”. Foi pensado como um facilitador de momentos sociais: menos interface, mais interação humana.',
            '"Mimicando Simples" wasn\'t created to be "just another charades app". It was designed as a facilitator of social moments — less interface, more human interaction.'
          )}
        </p>
        <div className="mt-6 pt-6 border-t border-foreground/[0.08]">
          <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-foreground/60 max-w-[720px]">
            {t(
              'Esse projeto reforça minha abordagem como Product Designer: entender o contexto real do usuário, reduzir fricções e criar soluções que se encaixam naturalmente no comportamento das pessoas.',
              'This project reinforces my approach as a Product Designer: understand the real user context, reduce frictions and create solutions that naturally fit into people\'s behavior.'
            )}
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default function IADesignPage() {
  return (
    <CaseLayout brandColor="#7C3AED" hero={<IADesignHero />}>
      <IADesignContent />
    </CaseLayout>
  );
}
