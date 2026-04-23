'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  CheckCircle2, Smartphone, Building2, Plug,
  Sparkles, ArrowRight,
} from 'lucide-react';
import { CaseLayout } from '@/components/case-layout';
import { useLanguage } from '@/components/ui/language-context';
import {
  fade, t_styles, prose, BeforeAfterGrid,
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

/* ── Hero Metrics (versão clara, destaque no hero roxo) */
function HeroMetric({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group relative text-center py-7 px-3 rounded-2xl bg-white/[0.10] border border-white/[0.18] backdrop-blur-sm overflow-hidden min-w-0 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E8734A] to-transparent opacity-80" />
      {/* Soft glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

      <div className="relative font-heading text-[30px] md:text-[38px] font-bold text-white leading-[1] mb-2 whitespace-nowrap tracking-tight tabular-nums drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
        {value}
      </div>
      <div className="relative font-sans text-[12px] md:text-[13px] leading-[1.45] text-white/75 uppercase tracking-[0.06em] font-medium">
        {label}
      </div>
    </motion.div>
  );
}

function HeroMetrics() {
  const { t } = useLanguage();
  const items = [
    { value: '+10.000', label: t('usuários impactados', 'users impacted') },
    { value: '+6.000', label: t('cadastros realizados', 'sign-ups completed') },
    { value: '60%', label: t('taxa de conversão da LP', 'LP conversion rate') },
    {
      value: '3',
      label: t(
        'produtos do zero: App, LP, Dashboard',
        'products from scratch — App, LP, Dashboard'
      ),
    },
  ];
  return (
    <div className="mt-10">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="font-sans text-[11px] md:text-[12px] font-semibold text-white/55 uppercase tracking-[0.16em] mb-4"
      >
        {t('Impacto em números', 'Impact in numbers')}
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {items.map((m, i) => (
          <HeroMetric key={i} value={m.value} label={m.label} delay={0.15 + i * 0.08} />
        ))}
      </div>
    </div>
  );
}

/* ── Showcase: App + Desktop LP ──────────────────────── */
function AgrowShowcase({
  desktopSrc,
  desktopLabel,
  desktopAlt,
  mobileSrc,
  mobileLabel,
  mobileAlt,
}: {
  desktopSrc: string;
  desktopLabel: string;
  desktopAlt: string;
  mobileSrc: string;
  mobileLabel: string;
  mobileAlt: string;
}) {
  return (
    <motion.div {...fade} className="relative mt-2 mb-12">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#5B5891]/[0.07] via-[#5B5891]/[0.04] to-[#5B5891]/[0.02] p-6 md:p-10 overflow-hidden border border-foreground/[0.06]">
        {/* Glow decorativo sutil */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#E8734A]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#5B5891]/[0.08] blur-3xl" />

        <div className="relative grid md:grid-cols-[1.45fr_1fr] gap-6 md:gap-8 items-center">
          {/* Desktop LP */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-foreground/[0.03] border border-foreground/10 shadow-[0_30px_60px_-25px_rgba(91,88,145,0.35)]">
              {/* Barra de janela falsa */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-foreground/[0.04] border-b border-foreground/[0.06]">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              </div>
              <img src={desktopSrc} alt={desktopAlt} className="block w-full h-auto" />
            </div>
            <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.12em] text-foreground/45 text-center md:text-left">
              {desktopLabel}
            </p>
          </div>

          {/* App Mobile */}
          <div className="relative flex flex-col items-center">
            <div className="relative rounded-[2.2rem] p-[6px] bg-foreground/80 border border-foreground/15 shadow-[0_30px_60px_-25px_rgba(91,88,145,0.4)]">
              {/* Notch */}
              <div className="absolute top-[10px] left-1/2 -translate-x-1/2 h-[18px] w-[90px] rounded-full bg-foreground z-10" />
              <div className="rounded-[1.8rem] overflow-hidden bg-foreground">
                <img
                  src={mobileSrc}
                  alt={mobileAlt}
                  className="block w-auto max-h-[360px] md:max-h-[420px] h-auto"
                />
              </div>
            </div>
            <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.12em] text-foreground/45 text-center">
              {mobileLabel}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Wow Highlights (scan em 3 segundos) ─────────────── */
function WowHighlights() {
  const { t } = useLanguage();
  const items = [
    {
      icon: Smartphone,
      title: t('Burocracia → Mobile', 'Bureaucracy → Mobile'),
      desc: t(
        'Transformei processos regulatórios (NF-e, CPR, Certificado Digital) em fluxos mobile guiados.',
        'Turned regulatory processes (e-Invoice, CPR, Digital Certificate) into guided mobile flows.'
      ),
    },
    {
      icon: Building2,
      title: t('Presencial → App', 'In-person → App'),
      desc: t(
        'Operações que exigiam visita à filial (como cotação de grãos) passaram a acontecer dentro do app.',
        'Operations that used to require a branch visit — like grain pricing — now happen inside the app.'
      ),
    },
    {
      icon: Plug,
      title: t('APIs complexas → UX simples', 'Complex APIs → Simple UX'),
      desc: t(
        'Traduzi APIs governamentais e do agro (clima, combustível, financeiro) em experiências claras para baixa familiaridade digital.',
        'Translated government and agribusiness APIs (weather, fuel, financial) into clear experiences for low digital literacy.'
      ),
    },
  ];

  return (
    <motion.div {...fade} className="grid md:grid-cols-3 gap-3 mb-12">
      {items.map((it, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06] hover:border-primary/20 transition-colors"
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-primary/10 mb-4">
            <it.icon className="h-[19px] w-[19px] text-primary/80" />
          </div>
          <p className="font-heading text-[17px] md:text-[18px] font-semibold text-foreground leading-[1.3] mb-2">
            {it.title}
          </p>
          <p className="font-sans text-[14px] leading-[1.6] text-foreground/55">
            {it.desc}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

/* ── Trajetória (executor → estratégico → liderança) ── */
function Trajetoria() {
  const { t } = useLanguage();
  const phases = [
    {
      tag: t('CAP. 1: CONSULTORIA', 'CH. 1 — CONSULTANCY'),
      title: t('Entrada como executor', 'Joined as executor'),
      desc: t(
        'Cheguei via consultoria para construir base do produto: design system, fluxos financeiros (PIX, TED, boletos) e identidade visual do app + landing page.',
        'Joined via consultancy to build the product foundation: design system, financial flows (PIX, wire, slips) and visual identity for app + landing page.'
      ),
    },
    {
      tag: t('CAP. 2: TRANSIÇÃO PARA CLT', 'CH. 2 — HIRED FULL-TIME'),
      title: t('Convidado a continuar', 'Invited to stay'),
      desc: t(
        'Após sair da consultoria, fui contratado pela Agrow.pay como CLT, virada concreta de executor para alguém que ajudava a definir o produto.',
        'After leaving the consultancy, I was hired full-time by Agrow.pay — a real shift from executor to someone helping define the product.'
      ),
    },
    {
      tag: t('CAP. 3: PRODUCT DESIGNER', 'CH. 3 — PRODUCT DESIGNER'),
      title: t('Referência de UX/UI e liderança', 'UX/UI reference and leadership'),
      desc: t(
        'Assumi fluxos críticos, prioridades e decisões com stakeholders e devs. Apoiei a contratação e o desenvolvimento de uma UX/UI Designer Junior.',
        'Took on critical flows, prioritisation and decisions with stakeholders and devs. Supported the hiring and growth of a Junior UX/UI Designer.'
      ),
    },
  ];

  return (
    <motion.div {...fade} className="mb-8">
      <div className="grid md:grid-cols-3 gap-3">
        {phases.map((p, i) => (
          <div
            key={i}
            className="relative p-5 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06]"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 border border-primary/20 text-[12px] font-semibold text-primary">
                {i + 1}
              </span>
              <p className="font-sans text-[11px] font-semibold text-primary/70 uppercase tracking-[0.1em]">
                {p.tag}
              </p>
            </div>
            <p className="font-heading text-[16px] font-semibold text-foreground leading-[1.3] mb-2">
              {p.title}
            </p>
            <p className="font-sans text-[14px] leading-[1.6] text-foreground/55">
              {p.desc}
            </p>
            {i < phases.length - 1 && (
              <ArrowRight className="hidden md:block absolute -right-[14px] top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30 z-10" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
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
          'Agrow.pay: Construção do produto',
          'Agrow.pay — Building the product'
        )}
      </h2>
      <p className="font-sans text-[18px] md:text-[20px] leading-[1.72] text-white/60 mb-6 max-w-[680px]">
        {t(
          'Conta digital para o agronegócio, criada do zero, do primeiro fluxo à validação com produtores rurais.',
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
      <HeroMetrics />
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
            'Entrei no projeto para consolidar Product e, com a evolução do trabalho, fui contratado definitivamente pela Agrow.pay, prova concreta de confiança e relevância na construção do produto.',
            'I joined the project to consolidate Product and, as the work evolved, I was permanently hired by Agrow.pay — concrete proof of trust and relevance in building the product.'
          )}
        </p>
      </motion.div>

      {/* ─── Showcase: App + LP Desktop ──────────────── */}
      <AgrowShowcase
        desktopSrc="/agrow-lp-desktop.jpg"
        desktopAlt={t('Landing page Agrow.pay em desktop', 'Agrow.pay landing page on desktop')}
        desktopLabel={t('Landing Page: Desktop', 'Landing Page — Desktop')}
        mobileSrc="/agrow-app-mobile.jpg"
        mobileAlt={t('Aplicativo Agrow.pay, tela de login', 'Agrow.pay app — login screen')}
        mobileLabel={t('Aplicativo: Login', 'App — Login')}
      />

      {/* ─── Wow Highlights (3 cards de impacto qualitativo) ─ */}
      <WowHighlights />

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
              'Aplicação de elementos WCAG na interface de contraste e paleta de cores ao nível, garantindo acessibilidade visual desde a concepção do produto, aplicando em estudo de caso detalhado',
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

      {/* ─── Trajetória (3 capítulos) ─────────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('Trajetória', 'Journey')}
        </h3>
        <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-6 ${prose}`}>
          {t(
            'De executor a co-definidor do produto, em três capítulos.',
            'From executor to product co-definer — in three chapters.'
          )}
        </p>
      </motion.div>
      <Trajetoria />

      <div className={t_styles.divider} />

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
              'Em todos os domínios, as decisões de design foram orientadas pelas restrições e possibilidades de cada integração de API: em alguns fluxos fazia mais sentido desacoplar etapas, em outros, fazia mais sentido agrupar e propor melhorias na experiência.',
              'Across all domains, design decisions were guided by the constraints and possibilities of each API integration — in some flows it made more sense to decouple stages, in others, it made more sense to group them and propose experience improvements.'
            )}
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════ */}
      {/* ─── PARTE 2 ─────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════ */}

      {/* ─── Mini-case Antes/Depois: Cotação de Grãos ── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('Mini-case: Cotação de Grãos', 'Mini-case: Grain Pricing')}
        </h3>
        <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-2 ${prose}`}>
          {t(
            'Uma das transformações mais concretas: tirar uma operação presencial e dar autonomia ao produtor.',
            'One of the most concrete transformations: removing an in-person operation and giving the producer autonomy.'
          )}
        </p>
      </motion.div>
      <BeforeAfterGrid
        t={t}
        beforeItems={t(
          [
            'Dependência da filial para cotar preço',
            'Visita presencial obrigatória',
            'Sem visibilidade do saldo de grãos em tempo real',
          ],
          [
            'Dependent on the branch to get prices',
            'Mandatory in-person visits',
            'No real-time visibility of grain balance',
          ]
        )}
        afterItems={t(
          [
            'Consulta e decisão direto no app',
            'Fixação de preço no momento desejado',
            'Saldo de grãos visível remotamente',
          ],
          [
            'Check and decide directly in the app',
            'Lock the price whenever desired',
            'Grain balance visible remotely',
          ]
        )}
      />

      <div className={t_styles.divider} />

      {/* ─── Showcase 2: Home do app + Portal Parceiro ─ */}
      <AgrowShowcase
        desktopSrc="/agrow-portal-parceiro.jpg"
        desktopAlt={t('Portal do Parceiro Agrow.pay em desktop', 'Agrow.pay Partner Portal on desktop')}
        desktopLabel={t('Portal Web: Parceiros', 'Web Portal — Partners')}
        mobileSrc="/agrow-app-home.jpg"
        mobileAlt={t('Aplicativo Agrow.pay, home do produtor', 'Agrow.pay app — producer home')}
        mobileLabel={t('Aplicativo: Home do produtor', 'App — Producer home')}
      />

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
            'Das jornadas que construí na Agrow, esse foi o fluxo de maior complexidade técnica e regulatória, e o que mais exigiu equilíbrio entre UX, conformidade legal e limitações de API.',
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
            'Transformar processos altamente burocráticos, como emissão de Nota Fiscal, uso de Certificado Digital e criação de CPR (Cédula de Produto Rural), em uma experiência clara, segura e executável dentro de um app mobile, para um usuário com baixa familiaridade digital.',
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
              { challenge: 'Integração complexa com sistemas externos', decision: 'Abstração da complexidade técnica: o usuário vê o resultado, não a integração' },
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

      {/* ─── Aprendizados ─────────────────────────────── */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>
          {t('Aprendizados', 'Learnings')}
        </h3>
        <div className="grid md:grid-cols-2 gap-3 mb-8">
          {t(
            [
              'Projetar para baixa familiaridade digital exige simplificação extrema.',
              'UX precisa adaptar-se a limitações técnicas reais, não só ao ideal.',
              'Produto = negócio + tecnologia + contexto. Os três pesam.',
              'Fluxos regulatórios pedem precisão e clareza absolutas.',
            ],
            [
              'Designing for low digital literacy requires extreme simplification.',
              'UX must adapt to real technical limitations — not just the ideal.',
              'Product = business + technology + context. All three matter.',
              'Regulatory flows demand absolute precision and clarity.',
            ]
          ).map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06]"
            >
              <Sparkles className="h-4 w-4 mt-[3px] text-primary/60 shrink-0" />
              <p className="font-sans text-[14px] md:text-[15px] leading-[1.6] text-foreground/65">
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─── Fechamento ───────────────────────────────── */}
      <motion.div {...fade} className="my-10 py-7 px-7 rounded-2xl bg-primary/[0.04] border border-primary/15">
        <p className="font-heading text-[18px] md:text-[20px] font-semibold text-foreground leading-[1.4] mb-2">
          {t('Fechamento', 'Closing')}
        </p>
        <p className="font-sans text-[15px] md:text-[16px] leading-[1.72] text-foreground/65">
          {t(
            'Minha jornada na Agrow.pay foi marcada por evolução constante: de construir interfaces a ajudar a definir o produto, equilibrando experiência do usuário, limitações técnicas e impacto no negócio.',
            'My journey at Agrow.pay was marked by constant evolution — from building interfaces to helping define the product, balancing user experience, technical limitations, and business impact.'
          )}
        </p>
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
