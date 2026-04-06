'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, Zap, Users, Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import { CaseLayout } from '@/components/case-layout';
import { useLanguage } from '@/components/ui/language-context';
import {
  fade, t_styles, prose, MetricCard,
} from '@/components/case-shared';

/* ── Logo ────────────────────────────────────────────── */
function AgrowLogo() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle cx="60" cy="60" r="60" fill="#5B5891" />
      <circle cx="60" cy="32" r="6" fill="#E8734A" />
      <text x="60" y="88" textAnchor="middle" fill="white" fontSize="68" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700">A</text>
    </svg>
  );
}

/* ── Tags ────────────────────────────────────────────── */
function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block font-sans text-[12px] font-medium text-white/50 bg-white/[0.08] border border-white/[0.1] rounded-full px-3 py-1">
      {label}
    </span>
  );
}

/* ── Domain card for "Estrutura do produto" ─────────── */
function DomainCard({ icon: Icon, title, items, color }: {
  icon: React.ElementType;
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="p-5 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06]">
      <div className="flex items-center gap-3 mb-3">
        <div className={`flex items-center justify-center h-9 w-9 rounded-xl ${color.split(' ')[1]} shrink-0`}>
          <Icon className={`h-[18px] w-[18px] ${color.split(' ')[0]}`} />
        </div>
        <p className="font-sans text-[16px] font-semibold text-foreground">{title}</p>
      </div>
      <ul className="space-y-1.5 ml-12">
        {items.map((item, i) => (
          <li key={i} className="font-sans text-[14px] text-foreground/50 leading-[1.5]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────── */
function AgrowHero() {
  const { t } = useLanguage();
  return (
    <motion.div {...fade}>
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm p-3 mb-6">
        <AgrowLogo />
      </div>
      <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-white leading-[1.2] mb-5 max-w-[680px]">
        {t(
          'Agrow.pay — Construção do produto',
          'Agrow.pay — Building the product'
        )}
      </h2>
      <p className="font-sans text-[18px] md:text-[20px] leading-[1.72] text-white/60 mb-6 max-w-[680px]">
        {t(
          'Conta digital para o agronegócio, criada do zero — do primeiro fluxo à validação com produtores rurais.',
          'Digital banking for agribusiness, built from scratch — from the first flow to validation with rural producers.'
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        <Tag label="SaaS & Digital Products" />
        <Tag label="Design Systems" />
        <Tag label="B2B" />
        <Tag label="B2C" />
        <Tag label="BaaS" />
      </div>
    </motion.div>
  );
}

/* ── Main content ────────────────────────────────────── */
function AgrowContent() {
  const { t } = useLanguage();

  return (
    <>

      {/* ─── Contexto ─────────────────────────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3} style={{ marginTop: 0 }}>
          {t('Contexto', 'Context')}
        </h3>
        <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-4 ${prose}`}>
          {t(
            'A Agrow.pay nasceu com o objetivo de centralizar serviços financeiros e informações operacionais essenciais para produtores rurais em uma única plataforma. O desafio era criar um produto completo que integrasse serviços financeiros tradicionais com funcionalidades específicas do agronegócio.',
            'Agrow.pay was born with the goal of centralising financial services and essential operational information for rural producers in a single platform. The challenge was to create a complete product that integrated traditional financial services with agribusiness-specific features.'
          )}
        </p>
        <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-8 ${prose}`}>
          {t(
            'Entrei no projeto para consolidar Product e, com a evolução do trabalho, fui contratado definitivamente pela Agrow.pay — prova concreta de confiança e relevância na construção do produto.',
            'I joined the project to consolidate Product and, as the work evolved, I was permanently hired by Agrow.pay — concrete proof of trust and relevance in building the product.'
          )}
        </p>
      </motion.div>

      {/* ─── Meu papel ────────────────────────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('Meu papel', 'My role')}
        </h3>
        <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-6 ${prose}`}>
          {t(
            'Atuei como Product Designer end-to-end, com forte participação em decisões estratégicas.',
            'I worked as an end-to-end Product Designer, with strong participation in strategic decisions.'
          )}
        </p>
        <ul className="space-y-3 mb-8">
          {t(
            [
              'Criação de todos os fluxos do produto do zero',
              'Participação ativa em reuniões de definição com stakeholders e donos de APIs',
              'Tomada de decisão sobre prioridades e features junto ao time',
              'Design do aplicativo e da landing page',
              'Conduzi a participação em testes e entrevistas com usuários em diversas etapas',
              'Aplicação de elementos WCAG na interface de contraste e paleta de cores ao nível, garantindo acessibilidade visual desde a concepção do produto — aplicando em estudo de caso detalhado',
            ],
            [
              'Created all product flows from scratch',
              'Active participation in definition meetings with stakeholders and API owners',
              'Decision-making on priorities and features alongside the team',
              'Design of the app and landing page',
              'Led participation in user tests and interviews at various stages',
              'Applied WCAG elements in contrast interface and colour palette, ensuring visual accessibility from product conception — applied in detailed case study',
            ]
          ).map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-[15px] md:text-[16px] leading-[1.6] text-foreground/60">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ─── Estrutura do produto ─────────────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('Estrutura do produto', 'Product structure')}
        </h3>
        <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-6 ${prose}`}>
          {t(
            'A estrutura é um ecossistema completo, conectado em três domínios principais:',
            'The structure is a complete ecosystem, connected across three main domains:'
          )}
        </p>
        <div className="grid gap-3 mb-8">
          <DomainCard
            icon={BarChart3}
            title={t('Gestão Financeira', 'Financial Management')}
            items={t(
              ['PIX, TED, Saldos, Depósitos'],
              ['PIX, Wire transfers, Balances, Deposits']
            )}
            color="text-emerald-500 bg-emerald-500/10"
          />
          <DomainCard
            icon={Zap}
            title={t('Gestão de Grãos', 'Grain Management')}
            items={t(
              ['Cotas, Contratos, NF-e'],
              ['Quotas, Contracts, e-Invoice']
            )}
            color="text-amber-500 bg-amber-500/10"
          />
          <DomainCard
            icon={Users}
            title={t('Portal de Parceiros (Dashboard)', 'Partner Portal (Dashboard)')}
            items={t(
              ['Relatórios e alertas do sistema'],
              ['Reports and system alerts']
            )}
            color="text-blue-500 bg-blue-500/10"
          />
        </div>
      </motion.div>

      {/* ─── Processo ─────────────────────────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('Processo', 'Process')}
        </h3>
        <ul className="space-y-3 mb-8">
          {t(
            [
              'Discovery contínua com entrevistas e testes ao longo de todo o projeto',
              'Construção colaborativa: workshops, reuniões com stakeholders e donos de APIs',
              'Definição, validação e iteração de fluxos baseada em feedback real',
              'Decisões de design orientadas pelo contexto técnico de cada integração',
            ],
            [
              'Continuous discovery with interviews and tests throughout the entire project',
              'Collaborative building: workshops, meetings with stakeholders and API owners',
              'Definition, validation and iteration of flows based on real feedback',
              'Design decisions guided by the technical context of each integration',
            ]
          ).map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-[15px] md:text-[16px] leading-[1.6] text-foreground/60">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className={t_styles.divider} />

      {/* ─── Visão geral do produto ─────────────────────────── */}
      <motion.div {...fade}>
        <p className={t_styles.label}>
          {t('Visão geral do produto Agrow.pay', 'Agrow.pay product overview')}
        </p>
      </motion.div>

      {/* Fluxograma — imagem substitui o diagrama anterior */}
      <motion.div {...fade} className="my-8">
        <div className="rounded-2xl overflow-hidden bg-foreground/[0.02] border border-foreground/[0.06]">
          <img
            src="/agrow-fluxograma.png"
            alt={t('Fluxograma com a visão geral do produto Agrow.pay', 'Flowchart with the Agrow.pay product overview')}
            className="w-full h-auto block"
          />
        </div>
      </motion.div>

      {/* Nota sobre decisões de API */}
      <motion.div {...fade} className="my-8 py-6 px-7 bg-foreground/[0.025] rounded-2xl border-l-[3px] border-primary/30">
        <div className="flex items-start gap-4">
          <Lightbulb className="h-5 w-5 text-primary/40 mt-[2px] shrink-0" />
          <p className="font-sans text-[15px] md:text-[16px] leading-[1.72] text-foreground/60">
            {t(
              'Em todos os domínios, as decisões de design foram orientadas pelas restrições e possibilidades de cada integração de API — em alguns fluxos fazia mais sentido desacoplar etapas, em outros, fazia mais sentido agrupar e propor melhorias na experiência.',
              'Across all domains, design decisions were guided by the constraints and possibilities of each API integration — in some flows it made more sense to decouple stages, in others, it made more sense to group them and propose experience improvements.'
            )}
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════ */}
      {/* ─── PARTE 2 ─────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════ */}

      {/* ─── Impacto ──────────────────────────────────── */}
      <motion.div {...fade} className="mt-16">
        <h3 className={t_styles.h3}>
          {t('Impacto', 'Impact')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <MetricCard value="+10.000" label={t('usuários impactados', 'users impacted')} />
          <MetricCard value="~5.000" label={t('cadastros realizados', 'sign-ups completed')} />
          <MetricCard value="50%" label={t('taxa de conversão (LP)', 'conversion rate (LP)')} />
          <MetricCard value="100%" label={t('fluxos criados do zero', 'flows created from scratch')} />
        </div>
      </motion.div>

      <div className={t_styles.divider} />

      {/* ─── Deep Dive ────────────────────────────────── */}
      <motion.div {...fade}>
        <p className={t_styles.label}>
          {t('Deep Dive dentro do case Agrow.pay', 'Deep Dive into the Agrow.pay case')}
        </p>
        <h2 className={t_styles.h2}>
          {t(
            'Fluxo crítico: Certificado Digital + NF-e + CPR Digital',
            'Critical flow: Digital Certificate + e-Invoice + Digital CPR'
          )}
        </h2>
        <p className={t_styles.body}>
          {t(
            'Das jornadas que construí na Agrow, esse foi o fluxo de maior complexidade técnica e regulatória — e o que mais exigiu equilíbrio entre UX, conformidade legal e limitações de API.',
            'Of all the journeys I built at Agrow, this was the flow with the highest technical and regulatory complexity — and the one that most required balancing UX, legal compliance, and API limitations.'
          )}
        </p>
      </motion.div>

      {/* ─── O desafio ────────────────────────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('O desafio', 'The challenge')}
        </h3>
        <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-8 ${prose}`}>
          {t(
            'Transformar processos altamente burocráticos — emissão de Nota Fiscal, uso de Certificado Digital e criação de CPR (Cédula de Produto Rural) — em uma experiência clara, segura e executável dentro de um app mobile, para um usuário com baixa familiaridade digital.',
            'Transform highly bureaucratic processes — issuing invoices, using Digital Certificates, and creating CPR (Rural Product Certificate) — into a clear, safe, and executable experience within a mobile app, for users with low digital literacy.'
          )}
        </p>
      </motion.div>

      {/* ─── Principais decisões de design ────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('Principais decisões de design', 'Key design decisions')}
        </h3>
        <div className="rounded-2xl border border-foreground/[0.06] overflow-hidden mb-8">
          {/* Header da tabela */}
          <div className="grid grid-cols-2 bg-foreground/[0.04] border-b border-foreground/[0.06]">
            <div className="px-5 py-3">
              <p className="font-sans text-[13px] font-semibold text-foreground/60 uppercase tracking-wide">
                {t('Desafio', 'Challenge')}
              </p>
            </div>
            <div className="px-5 py-3">
              <p className="font-sans text-[13px] font-semibold text-foreground/60 uppercase tracking-wide">
                {t('Decisão tomada', 'Decision made')}
              </p>
            </div>
          </div>
          {/* Linhas */}
          {t(
            [
              { challenge: 'Restrições das APIs governamentais', decision: 'Fluxos mais guiados e estruturados, reduzindo margem de erro mesmo com menos liberdade de design' },
              { challenge: 'Alto risco de erro com impacto legal/financeiro', decision: 'Validações em tempo real, feedback claro de erros e estrutura passo a passo com progressão visível' },
              { challenge: 'Baixa familiaridade digital do público', decision: 'Simplificação da linguagem, redução de carga cognitiva e uso de padrões previsíveis' },
              { challenge: 'Integração complexa com sistemas externos', decision: 'Abstração da complexidade técnica — o usuário vê o resultado, não a integração' },
            ],
            [
              { challenge: 'Government API restrictions', decision: 'More guided and structured flows, reducing error margin even with less design freedom' },
              { challenge: 'High error risk with legal/financial impact', decision: 'Real-time validations, clear error feedback, and step-by-step structure with visible progression' },
              { challenge: 'Low digital literacy of the audience', decision: 'Simplified language, reduced cognitive load, and use of predictable patterns' },
              { challenge: 'Complex integration with external systems', decision: 'Abstraction of technical complexity — the user sees the result, not the integration' },
            ]
          ).map((row, i) => (
            <div key={i} className={`grid grid-cols-2 ${i < 3 ? 'border-b border-foreground/[0.04]' : ''}`}>
              <div className="px-5 py-4">
                <p className="font-sans text-[14px] md:text-[15px] font-medium text-foreground/75 leading-[1.5]">{row.challenge}</p>
              </div>
              <div className="px-5 py-4">
                <p className="font-sans text-[14px] md:text-[15px] text-foreground/55 leading-[1.6]">{row.decision}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─── Insight ──────────────────────────────────── */}
      <motion.div {...fade} className="my-8 py-6 px-7 bg-emerald-50/60 dark:bg-emerald-950/10 rounded-2xl border-l-[3px] border-emerald-500/30">
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.72] text-foreground/65">
          <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Insight: </strong>
          {t(
            'Projetar fluxos regulatórios exige equilibrar experiência, conformidade legal e limitações técnicas simultaneamente. Esse é o tipo de problema que define Product Designers.',
            'Designing regulatory flows requires balancing experience, legal compliance, and technical limitations simultaneously. This is the kind of problem that defines Product Designers.'
          )}
        </p>
      </motion.div>

      {/* ─── Resultado ────────────────────────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('Resultado', 'Result')}
        </h3>
        <ul className="space-y-3 mb-8">
          {t(
            [
              'Digitalização de processos antes totalmente burocráticos e dependentes de ferramentas externas',
              'Maior autonomia: operações críticas realizadas diretamente no app',
              'Redução de erros por meio de validações inteligentes e fluxo guiado',
              'Integração de operações formais e obrigatórias dentro de uma experiência mobile fluida',
            ],
            [
              'Digitisation of previously fully bureaucratic processes dependent on external tools',
              'Greater autonomy: critical operations performed directly in the app',
              'Error reduction through intelligent validations and guided flow',
              'Integration of formal and mandatory operations within a fluid mobile experience',
            ]
          ).map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-[15px] md:text-[16px] leading-[1.6] text-foreground/60">
              <CheckCircle2 className="h-4 w-4 mt-[3px] text-emerald-500/50 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

export default function AgrowPage() {
  return (
    <CaseLayout brandColor="#5B5891" hero={<AgrowHero />}>
      <AgrowContent />
    </CaseLayout>
  );
}
