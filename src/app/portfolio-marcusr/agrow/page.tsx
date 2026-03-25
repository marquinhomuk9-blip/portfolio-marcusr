'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, Zap, Users, Lightbulb, Shield,
  CheckCircle2, Layers, Smartphone,
} from 'lucide-react';
import { CaseLayout } from '@/components/case-layout';
import { useLanguage } from '@/components/ui/language-context';
import {
  fade, t_styles, prose, MetricCard, ProcessStep, BeforeAfterGrid,
} from '@/components/case-shared';

function AgrowLogo() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle cx="60" cy="60" r="60" fill="#5B5891" />
      <circle cx="60" cy="32" r="6" fill="#E8734A" />
      <text x="60" y="88" textAnchor="middle" fill="white" fontSize="68" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700">A</text>
    </svg>
  );
}

function AgrowContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero do case */}
      <motion.div {...fade} className="mb-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#5B5891]/10 p-3 mb-6">
          <AgrowLogo />
        </div>
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

      {/* Metricas */}
      <motion.div {...fade} className="my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard value="+10k" label={t('Usuarios impactados', 'Users impacted')} sub={t('em producao', 'in production')} />
          <MetricCard value="50%" label={t('Taxa de conversao', 'Conversion rate')} sub={t('cadastros / acessos', 'sign-ups / visits')} />
          <MetricCard value="100%" label={t('Processos digitalizados', 'Digitised processes')} sub={t('antes era tudo manual', 'previously all manual')} />
          <MetricCard value="0→1" label={t('Produto do zero', 'Product from scratch')} sub="app + landing + portal" />
        </div>
      </motion.div>

      {/* Antes / Depois */}
      <BeforeAfterGrid
        t={t}
        beforeItems={t(
          ['Sem produto digital — tudo operava no papel', 'Processos financeiros manuais e burocraticos', 'Zero integracao entre financeiro e campo', 'Dependencia total de ferramentas externas'],
          ['No digital product — everything was on paper', 'Manual and bureaucratic financial processes', 'Zero integration between finance and field', 'Total dependency on external tools']
        )}
        afterItems={t(
          ['Plataforma completa em producao com +10k usuarios', 'PIX, TED, boletos em um unico app', 'Gestao de graos integrada ao financeiro', 'Certificado Digital + NF-e + CPR no mobile'],
          ['Complete platform in production with +10k users', 'PIX, wire transfers, invoices in a single app', 'Grain management integrated with finance', 'Digital Certificate + e-Invoice + CPR on mobile']
        )}
      />

      {/* Papel e Processo */}
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

      {/* Ecossistema */}
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

      {/* Decisao-chave */}
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

      {/* Deep Dive */}
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
    </>
  );
}

export default function AgrowPage() {
  return (
    <CaseLayout>
      <AgrowContent />
    </CaseLayout>
  );
}
