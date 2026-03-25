'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target, Users, Zap, TrendingUp, Lightbulb, Smartphone,
  Brain, CheckCircle2, AlertTriangle, BarChart3, Shield,
  Layers, Clock, Sparkles,
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
  divider: "w-full h-px bg-foreground/[0.06] my-16 md:my-20",
};

function MetricCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <motion.div {...fade} className="text-center py-8 px-4 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06]">
      <div className="font-heading text-[36px] md:text-[44px] font-bold text-primary leading-none mb-2">{value}</div>
      <div className="font-sans text-[14px] leading-[1.5] text-foreground/55">{label}</div>
      {sub && <div className="font-sans text-[12px] text-foreground/35 mt-1">{sub}</div>}
    </motion.div>
  );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
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

export function PortfolioArticle() {
  const { t } = useLanguage();

  return (
    <article className="w-full bg-background">
      <div className="mx-auto max-w-[800px] px-6 py-20 md:py-28">

        {/* ═══════════════ SOBRE MIM ═══════════════ */}
        <motion.div {...fade}>
          <p className={t_styles.label}>{t('Quem sou', 'About me')}</p>
          <h2 className={t_styles.h2}>
            {t(
              <>Product Designer que entrega<br />produto, não só tela</>,
              <>Product Designer who delivers<br />products, not just screens</>
            )}
          </h2>
          <p className={t_styles.body}>
            {t(
              <>Atuo end-to-end em produtos digitais complexos. Minha diferenca?{' '}<strong className="text-foreground font-semibold">Nao paro no Figma.</strong>{' '}Participo de decisoes tecnicas, negocio com APIs, alinho com stakeholders e entrego solucoes que funcionam em producao — nao so no prototipo. Minha atuacao recente combina design estrategico com IA aplicada para comprimir ciclos de entrega de meses para dias.</>,
              <>I work end-to-end on complex digital products. My difference?{' '}<strong className="text-foreground font-semibold">I don't stop at Figma.</strong>{' '}I participate in technical decisions, negotiate with APIs, align with stakeholders, and deliver solutions that work in production — not just in prototypes. My recent work combines strategic design with applied AI to compress delivery cycles from months to days.</>
            )}
          </p>
        </motion.div>

        <motion.div {...fade} className="my-12 py-6 px-7 bg-foreground/[0.025] rounded-2xl border-l-[3px] border-primary/30">
          <p className="font-serif text-[19px] md:text-[21px] leading-[1.72] text-foreground/65 italic">
            {t(
              '"Design bom nao e o que parece bonito. E o que resolve — para o usuario, para o negocio e para a engenharia. Se nao gerou resultado, nao funcionou."',
              '"Good design isn\'t what looks beautiful. It\'s what solves — for the user, for the business, and for engineering. If it didn\'t generate results, it didn\'t work."'
            )}
          </p>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t_styles.h3}>{t('Por que me contratar', 'Why hire me')}</h3>
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

        <div className={t_styles.divider} />

        {/* ═══════════════ CASE AGROW.PAY ═══════════════ */}
        <motion.div {...fade}>
          <p className={t_styles.label}>{t('Case Principal', 'Main Case')}</p>
          <h2 className={t_styles.h2}>
            {t('Agrow.pay: conta digital do zero ao produto em producao', 'Agrow.pay: digital banking from zero to production')}
          </h2>
          <p className={t_styles.body}>
            {t(
              'Entrei como consultor externo. Tres meses depois, fui contratado direto pela empresa. Esse e o tipo de resultado que acontece quando o design entrega valor de verdade desde o primeiro sprint.',
              'I joined as an external consultant. Three months later, I was hired directly by the company. This is the kind of result that happens when design delivers real value from the first sprint.'
            )}
          </p>
        </motion.div>

        <motion.div {...fade} className="my-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard value="+10k" label={t('Usuarios impactados', 'Users impacted')} sub={t('em producao', 'in production')} />
            <MetricCard value="50%" label={t('Taxa de conversao', 'Conversion rate')} sub={t('cadastros / acessos', 'sign-ups / visits')} />
            <MetricCard value="100%" label={t('Processos digitalizados', 'Digitised processes')} sub={t('antes era tudo manual', 'previously all manual')} />
            <MetricCard value="0→1" label={t('Produto do zero', 'Product from scratch')} sub="app + landing + portal" />
          </div>
        </motion.div>

        {/* Antes / Depois */}
        <motion.div {...fade} className="my-12 grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/10 border border-red-200/40 dark:border-red-900/20">
            <p className="text-[12px] font-sans font-semibold text-red-400 mb-4 uppercase tracking-[0.12em]">{t('Antes', 'Before')}</p>
            <ul className="space-y-3">
              {t(
                ['Sem produto digital — tudo operava no papel', 'Processos financeiros manuais e burocraticos', 'Zero integracao entre financeiro e campo', 'Dependencia total de ferramentas externas'],
                ['No digital product — everything was on paper', 'Manual and bureaucratic financial processes', 'Zero integration between finance and field', 'Total dependency on external tools']
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-red-600/70 dark:text-red-300/70">
                  <AlertTriangle className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/10 border border-emerald-200/40 dark:border-emerald-900/20">
            <p className="text-[12px] font-sans font-semibold text-emerald-500 mb-4 uppercase tracking-[0.12em]">{t('Depois', 'After')}</p>
            <ul className="space-y-3">
              {t(
                ['Plataforma completa em producao com +10k usuarios', 'PIX, TED, boletos em um unico app', 'Gestao de graos integrada ao financeiro', 'Certificado Digital + NF-e + CPR no mobile'],
                ['Complete platform in production with +10k users', 'PIX, wire transfers, invoices in a single app', 'Grain management integrated with finance', 'Digital Certificate + e-Invoice + CPR on mobile']
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-emerald-600/70 dark:text-emerald-300/70">
                  <CheckCircle2 className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />{item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t_styles.h3}>{t('Meu papel e processo', 'My role and process')}</h3>
          <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-8 ${prose}`}>
            {t('Product Designer end-to-end. Nao herdei o produto — criei tudo do zero:', 'End-to-end Product Designer. I didn\'t inherit the product — I built everything from scratch:')}
          </p>
          <div className="space-y-6 mb-8">
            <ProcessStep number="01" title={t('Discovery e estrategia', 'Discovery & strategy')} desc={t('Mapeei o mercado de agrofintechs, conduzi entrevistas com produtores rurais e alinhei com stakeholders as prioridades de negocio.', 'Mapped the agrofintech market, conducted interviews with rural producers, and aligned business priorities with stakeholders.')} />
            <ProcessStep number="02" title={t('Arquitetura e jornadas', 'Architecture & journeys')} desc={t('Estruturei o ecossistema conectando financeiro, gestao de graos e portal do parceiro — tres dominios que operavam isolados.', 'Structured the ecosystem connecting finance, grain management, and partner portal — three domains that operated in isolation.')} />
            <ProcessStep number="03" title={t('Design e validacao', 'Design & validation')} desc={t('Desenhei todos os fluxos no Figma, validei com usuarios reais e iterei com o time de engenharia sobre limitacoes de API.', 'Designed all flows in Figma, validated with real users, and iterated with the engineering team on API limitations.')} />
            <ProcessStep number="04" title={t('Implementacao e acompanhamento', 'Implementation & monitoring')} desc={t('Acompanhei a entrega tecnica, ajustei fluxos em producao e monitorei metricas de conversao e adocao.', 'Followed technical delivery, adjusted flows in production, and monitored conversion and adoption metrics.')} />
          </div>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t_styles.h3}>{t('Ecossistema que estruturei', 'Ecosystem I structured')}</h3>
          <div className="grid gap-3 mb-8">
            {t(
              [
                { icon: BarChart3, title: "Gestao Financeira", desc: "PIX, TED, boletos — tudo centralizado em um unico app", color: "text-emerald-500 bg-emerald-500/10" },
                { icon: Zap, title: "Gestao de Graos", desc: "Cotacao, saldo e operacoes agricolas integradas ao financeiro", color: "text-amber-500 bg-amber-500/10" },
                { icon: Users, title: "Portal do Parceiro", desc: "Gestao de relacionamento B2B com visao unificada", color: "text-blue-500 bg-blue-500/10" },
              ],
              [
                { icon: BarChart3, title: "Financial Management", desc: "PIX, wire transfers, invoices — all centralised in one app", color: "text-emerald-500 bg-emerald-500/10" },
                { icon: Zap, title: "Grain Management", desc: "Quotes, balances, and agricultural operations integrated with finance", color: "text-amber-500 bg-amber-500/10" },
                { icon: Users, title: "Partner Portal", desc: "B2B relationship management with unified view", color: "text-blue-500 bg-blue-500/10" },
              ]
            ).map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06]">
                <div className={`flex items-center justify-center h-9 w-9 rounded-xl ${item.color.split(' ')[1]} shrink-0`}>
                  <item.icon className={`h-[18px] w-[18px] ${item.color.split(' ')[0]}`} />
                </div>
                <div>
                  <p className="font-sans text-[16px] font-semibold text-foreground">{item.title}</p>
                  <p className="font-sans text-[14px] text-foreground/50 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade} className="my-12 py-6 px-7 bg-foreground/[0.025] rounded-2xl border-l-[3px] border-primary/30">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-5 w-5 text-primary/40 mt-[2px] shrink-0" />
            <p className="font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65">
              <strong className="text-foreground font-semibold">{t('Decisao-chave:', 'Key decision:')}</strong>{' '}
              {t(
                'Grande parte dos fluxos foram moldados por restricoes de API e regras regulatorias. O equilibrio entre UX ideal e viabilidade tecnica foi o que garantiu um produto que realmente funcionou em producao — nao so no prototipo.',
                'Most flows were shaped by API constraints and regulatory rules. The balance between ideal UX and technical feasibility is what ensured a product that actually worked in production — not just in the prototype.'
              )}
            </p>
          </div>
        </motion.div>

        <div className={t_styles.divider} />

        {/* ═══════════════ DEEP DIVE ═══════════════ */}
        <motion.div {...fade}>
          <p className={t_styles.label}>Deep Dive</p>
          <h2 className={t_styles.h2}>
            {t('Certificado Digital + NF-e + CPR Digital', 'Digital Certificate + e-Invoice + Digital CPR')}
          </h2>
          <p className={t_styles.body}>
            {t(
              'A jornada mais complexa do produto. Processos burocraticos com impacto financeiro e legal direto — transformados em uma experiencia guiada dentro de um app mobile.',
              'The most complex journey in the product. Bureaucratic processes with direct financial and legal impact — transformed into a guided experience within a mobile app.'
            )}
          </p>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t_styles.h3}>{t('O problema', 'The problem')}</h3>
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {t(
              [
                { problem: "Alto risco de erro", impact: "Impacto financeiro e legal direto em caso de falha na emissao" },
                { problem: "Processos burocraticos", impact: "Regulamentacao complexa que muda frequentemente entre estados" },
                { problem: "Baixa familiaridade digital", impact: "Produtores rurais que nunca usaram app financeiro antes" },
              ],
              [
                { problem: "High error risk", impact: "Direct financial and legal impact in case of issuance failure" },
                { problem: "Bureaucratic processes", impact: "Complex regulation that changes frequently between states" },
                { problem: "Low digital literacy", impact: "Rural producers who never used a financial app before" },
              ]
            ).map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.05]">
                <p className="font-sans text-[15px] font-semibold text-foreground/80 mb-1">{item.problem}</p>
                <p className="font-sans text-[14px] leading-[1.6] text-foreground/50">{item.impact}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t_styles.h3}>{t('Como resolvi', 'How I solved it')}</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {t(
              [
                { icon: Shield, title: "Fluxo progressivo e guiado", desc: "Dividi processos complexos em steps claros — o usuario nunca se perde" },
                { icon: CheckCircle2, title: "Validacoes em tempo real", desc: "Feedback imediato a cada etapa, prevenindo erros antes que acontecam" },
                { icon: Layers, title: "Abstracao da complexidade", desc: "Regulamentacao invisivel para o usuario — linguagem simples, a API cuida do resto" },
                { icon: Smartphone, title: "Zero ferramentas externas", desc: "Certificado, NF-e e CPR emitidos pelo celular — sem computador, sem contador" },
              ],
              [
                { icon: Shield, title: "Progressive guided flow", desc: "Split complex processes into clear steps — the user never gets lost" },
                { icon: CheckCircle2, title: "Real-time validations", desc: "Immediate feedback at each step, preventing errors before they happen" },
                { icon: Layers, title: "Complexity abstraction", desc: "Regulation invisible to the user — simple language, the API handles the rest" },
                { icon: Smartphone, title: "Zero external tools", desc: "Certificate, e-Invoice and CPR issued on mobile — no computer, no accountant" },
              ]
            ).map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06]">
                <item.icon className="h-5 w-5 text-foreground/25 mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-[16px] font-semibold text-foreground">{item.title}</p>
                  <p className="font-sans text-[14px] text-foreground/50 mt-1 leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className={t_styles.divider} />

        {/* ═══════════════ CASE RIOCARD ═══════════════ */}
        <motion.div {...fade}>
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

        <motion.div {...fade} className="my-12 grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/10 border border-red-200/40 dark:border-red-900/20">
            <p className="text-[12px] font-sans font-semibold text-red-400 mb-4 uppercase tracking-[0.12em]">{t('Antes', 'Before')}</p>
            <ul className="space-y-3">
              {t(
                ['Saldo escondido — usuario nao achava a informacao principal', 'Hierarquia de informacao confusa e poluida', 'Navegacao com alta friccao entre telas', 'Interface visualmente datada'],
                ['Hidden balance — user couldn\'t find the main information', 'Confusing and cluttered information hierarchy', 'Navigation with high friction between screens', 'Visually dated interface']
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-red-600/70 dark:text-red-300/70">
                  <AlertTriangle className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/10 border border-emerald-200/40 dark:border-emerald-900/20">
            <p className="text-[12px] font-sans font-semibold text-emerald-500 mb-4 uppercase tracking-[0.12em]">{t('Depois', 'After')}</p>
            <ul className="space-y-3">
              {t(
                ['Saldo visivel como 1o elemento da home', 'Hierarquia clara, limpa e escaneavel', 'Navegacao simplificada com menos taps', 'Interface moderna sem perder familiaridade'],
                ['Balance visible as 1st element on home', 'Clear, clean, and scannable hierarchy', 'Simplified navigation with fewer taps', 'Modern interface without losing familiarity']
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-emerald-600/70 dark:text-emerald-300/70">
                  <CheckCircle2 className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />{item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t_styles.h3}>{t('Processo', 'Process')}</h3>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-6 mb-8">
            <ProcessStep number="01" title={t('Research presencial', 'In-person research')} desc={t('Entrevistei usuarios reais em pontos de recarga. Observei comportamentos e frustraccoes que nao aparecem em analytics.', 'Interviewed real users at recharge points. Observed behaviours and frustrations that don\'t show up in analytics.')} />
            <ProcessStep number="02" title={t('Benchmarking e analise', 'Benchmarking & analysis')} desc={t('Mapeei concorrentes e apps de referencia. Identifiquei padroes que funcionam e oportunidades inexploradas.', 'Mapped competitors and reference apps. Identified patterns that work and unexplored opportunities.')} />
            <ProcessStep number="03" title={t('Reestruturacao da IA', 'IA restructuring')} desc={t('Reorganizei a arquitetura de informacao. Saldo virou o 1o elemento, navegacao simplificada, ruido removido.', 'Reorganised the information architecture. Balance became the 1st element, simplified navigation, noise removed.')} />
            <ProcessStep number="04" title={t('Redesign e entrega', 'Redesign & delivery')} desc={t('Redesenhei home, navegacao e fluxos criticos no Figma. Especificacoes detalhadas para engenharia.', 'Redesigned home, navigation, and critical flows in Figma. Detailed specifications for engineering.')} />
          </div>
        </motion.div>

        <div className={t_styles.divider} />

        {/* ═══════════════ IA + DESIGN ═══════════════ */}
        <motion.div {...fade}>
          <p className={t_styles.label}>{t('Especializacao', 'Specialisation')}</p>
          <h2 className={t_styles.h2}>
            {t('IA aplicada ao Design de Produtos', 'AI Applied to Product Design')}
          </h2>
          <p className={t_styles.body}>
            {t(
              'Nao uso IA como buzzword de LinkedIn. Uso como ferramenta real de producao que muda fundamentalmente o que um designer consegue entregar — e em quanto tempo. Essa e a habilidade que separa o designer de hoje do designer de amanha.',
              'I don\'t use AI as a LinkedIn buzzword. I use it as a real production tool that fundamentally changes what a designer can deliver — and how fast. This is the skill that separates today\'s designer from tomorrow\'s.'
            )}
          </p>
        </motion.div>

        <motion.div {...fade} className="my-12 grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-foreground/30" />
              <p className="text-[12px] font-sans font-semibold text-foreground/40 uppercase tracking-[0.12em]">{t('Processo tradicional', 'Traditional process')}</p>
            </div>
            <ul className="space-y-3">
              {t(
                ['Discovery: 2-4 semanas de research manual', 'Ideacao: dias para explorar alternativas', 'Prototipagem: semanas de iteracao', 'Handoff: documentacao extensa e reunioes'],
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
                ['Discovery: analise qualitativa em horas', 'Ideacao: dezenas de variacoes em minutos', 'Prototipagem: validacao rapida com variantes', 'Handoff: codigo gerado direto do design'],
                ['Discovery: qualitative analysis in hours', 'Ideation: dozens of variations in minutes', 'Prototyping: rapid validation with variants', 'Handoff: code generated directly from design']
              ).map((item, i) => (
                <li key={i} className="font-sans text-[14px] leading-[1.6] text-violet-600/70 dark:text-violet-300/70">{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fade} className="my-12 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-50/40 to-purple-100/30 dark:from-violet-950/10 dark:to-purple-900/5 border border-violet-200/30 dark:border-violet-900/15 p-8">
          <div className="grid md:grid-cols-2 gap-3">
            {t(
              [
                { icon: Zap, title: "Automacao de processos", desc: "Tarefas operacionais eliminadas. Mais tempo para decisoes estrategicas." },
                { icon: Brain, title: "IA em discovery e research", desc: "Analise qualitativa e quantitativa com velocidade 10x." },
                { icon: Layers, title: "Geracao de interfaces", desc: "Variacoes testaveis em minutos. Feedback em horas, nao semanas." },
                { icon: TrendingUp, title: "Design Engineering", desc: "Do Figma ao codigo com menos friccao e menos handoff." },
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

        <motion.div {...fade} className="my-12 py-6 px-7 bg-foreground/[0.025] rounded-2xl border-l-[3px] border-violet-400/25">
          <p className="font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65">
            <strong className="text-foreground font-semibold">{t('Minha visao:', 'My vision:')}</strong>{' '}
            {t(
              'IA nao substitui o designer — ela multiplica quem sabe usa-la. O mercado vai se dividir entre designers que usam IA como ferramenta real e designers que ficaram para tras. Eu escolhi o primeiro caminho, e os resultados falam por si: entregas que antes levavam meses agora acontecem em dias.',
              'AI doesn\'t replace the designer — it multiplies those who know how to use it. The market will split between designers who use AI as a real tool and those who fall behind. I chose the first path, and the results speak for themselves: deliveries that used to take months now happen in days.'
            )}
          </p>
        </motion.div>

      </div>
    </article>
  );
}
