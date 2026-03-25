'use client';
import React from 'react';
import { Header } from '@/components/ui/header';
import { HeroBlock } from '@/components/ui/hero-block';
import { Timeline } from '@/components/ui/timeline';
import { PortfolioArticle } from '@/components/portfolio-article';
import { ContactForm } from '@/components/ui/contact-form';
import { FloatingChat } from '@/components/ui/floating-chat';
import { LanguageProvider, useLanguage } from '@/components/ui/language-context';
import { Brain } from 'lucide-react';

/* ── Logo SVG da Agrow.pay ── */
function AgrowLogo() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle cx="60" cy="60" r="60" fill="#5B5891" />
      <circle cx="60" cy="32" r="6" fill="#E8734A" />
      <text
        x="60"
        y="88"
        textAnchor="middle"
        fill="white"
        fontSize="68"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
      >
        A
      </text>
    </svg>
  );
}

/* ── Logo SVG do Riocard Mais (fundo azul, texto branco) ── */
function RiocardLogo() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="120" height="120" rx="24" fill="#0088CC" />
      <text
        x="12"
        y="68"
        fill="white"
        fontSize="30"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        riocard
      </text>
      {/* + symbols */}
      <g fill="white">
        <rect x="96" y="18" width="5" height="16" rx="1.5" />
        <rect x="90" y="23" width="16" height="5" rx="1.5" />
        <rect x="108" y="12" width="4" height="12" rx="1.5" />
        <rect x="104" y="16" width="12" height="4" rx="1.5" />
      </g>
      {/* "mais" box */}
      <rect x="30" y="78" width="52" height="22" rx="3" fill="white" />
      <text
        x="35"
        y="95"
        fill="#0088CC"
        fontSize="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        letterSpacing="1"
      >
        mais
      </text>
    </svg>
  );
}

/* ── Logo container padronizado ── */
function LogoBadge({ children, bgClass }: { children: React.ReactNode; bgClass: string }) {
  return (
    <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${bgClass} p-2.5 mb-5`}>
      {children}
    </div>
  );
}

/* ── Timeline card com conteúdo ── */
function TimelineContent({
  description,
  highlights,
  accentColor,
  logo,
}: {
  description: string;
  highlights: string[];
  accentColor: string;
  logo?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-foreground/[0.02] border border-foreground/[0.06] p-6 md:p-8">
      {logo}
      <p className="font-sans text-[16px] md:text-[18px] leading-[1.72] text-foreground/65 mb-6">
        {description}
      </p>
      <div className="space-y-2.5">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 items-start font-sans text-[15px] md:text-[16px] leading-[1.6] text-foreground/55"
          >
            <span className={`${accentColor} mt-[7px] text-[6px]`}>&#9679;</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function useTimelineData() {
  const { t } = useLanguage();
  return [
    {
      title: 'Agrow.pay',
      content: (
        <TimelineContent
          logo={<LogoBadge bgClass="bg-[#5B5891]/10"><AgrowLogo /></LogoBadge>}
          description={t(
            "Entrei como consultor. Saí contratado. Desenhei do zero uma conta digital completa para o agronegócio — app, landing page e portal do parceiro. O produto não existia: conduzi discovery, estruturei jornadas, alinhei stakeholders e entreguei um ecossistema financeiro em produção.",
            "Joined as a consultant. Got hired full-time. Designed from scratch a complete digital banking platform for agribusiness — app, landing page, and partner portal. The product didn't exist: I led discovery, structured journeys, aligned stakeholders, and delivered a financial ecosystem in production."
          )}
          highlights={t(
            [
              '+10.000 usuários impactados — ~5.000 cadastros (50% de conversão)',
              'PIX, TED, boletos e gestão de grãos em uma única plataforma',
              'Certificado Digital + NF-e + CPR Digital no mobile',
              'De consultoria → contratação direta (prova de valor real)',
              'Produto inteiro do zero: discovery → design → produção',
            ],
            [
              '+10,000 users impacted — ~5,000 sign-ups (50% conversion rate)',
              'PIX, wire transfers, invoices and grain management in a single platform',
              'Digital Certificate + e-Invoice + Digital CPR on mobile',
              'From consulting → direct hire (real proof of value)',
              'Entire product from scratch: discovery → design → production',
            ]
          )}
          accentColor="text-emerald-500"
        />
      ),
    },
    {
      title: 'Riocard',
      content: (
        <TimelineContent
          logo={<LogoBadge bgClass="bg-[#0088CC]/10"><RiocardLogo /></LogoBadge>}
          description={t(
            "Redesign de um dos maiores apps de bilhetagem do Rio de Janeiro — milhões de usuários, interface defasada, navegação confusa. Conduzi entrevistas presenciais com usuários reais, reorganizei a arquitetura de informação e redesenhei a experiência completa.",
            "Redesign of one of Rio de Janeiro's largest transit card apps — millions of users, outdated interface, confusing navigation. I conducted in-person interviews with real users, restructured the information architecture, and redesigned the entire experience."
          )}
          highlights={t(
            [
              'Saldo do cartão como 1º elemento da home (antes estava escondido)',
              'Redução significativa da fricção na navegação principal',
              'Hierarquia de informação reestruturada e escaneável',
              'Research presencial com usuários reais no campo',
              'Modernização visual sem perder familiaridade',
            ],
            [
              'Card balance as the 1st element on home (previously hidden)',
              'Significant reduction of friction in main navigation',
              'Restructured and scannable information hierarchy',
              'In-person research with real users in the field',
              'Visual modernisation without losing familiarity',
            ]
          )}
          accentColor="text-orange-500"
        />
      ),
    },
    {
      title: t('IA + Design', 'AI + Design'),
      content: (
        <TimelineContent
          logo={<LogoBadge bgClass="bg-violet-500/10"><Brain className="h-full w-full text-violet-600" strokeWidth={1.5} /></LogoBadge>}
          description={t(
            "Minha especialização atual: usar IA como ferramenta real de produção, não como buzzword. Reduzo o ciclo discovery → implementação de meses para dias, automatizo tarefas repetitivas e integro design com engenharia de forma nativa.",
            "My current specialisation: using AI as a real production tool, not a buzzword. I compress the discovery → implementation cycle from months to days, automate repetitive tasks, and natively integrate design with engineering."
          )}
          highlights={t(
            [
              'Research e análise qualitativa 10x mais rápido com IA',
              'Geração e validação de interfaces em minutos, não semanas',
              'Automação de tarefas operacionais de design',
              'Design Engineering: do Figma ao código com menos handoff',
              'Ciclos de entrega comprimidos de meses → dias',
            ],
            [
              'Research and qualitative analysis 10x faster with AI',
              'Interface generation and validation in minutes, not weeks',
              'Automation of operational design tasks',
              'Design Engineering: from Figma to code with less handoff',
              'Delivery cycles compressed from months → days',
            ]
          )}
          accentColor="text-violet-500"
        />
      ),
    },
  ];
}

function PageContent() {
  const timelineData = useTimelineData();
  return (
    <div className="relative">
      <Header />

      <main className="relative z-10 bg-background rounded-b-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] pb-1">
        <HeroBlock />

        {/* Timeline — fundo sutil para quebrar o branco puro */}
        <section id="projetos" className="bg-foreground/[0.015]">
          <Timeline data={timelineData} />
        </section>

        <PortfolioArticle />
      </main>

      <ContactForm />

      {/* Chat flutuante — aparece quando o card do hero some */}
      <FloatingChat />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
