'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Users,
  Zap,
  TrendingUp,
  Lightbulb,
  Smartphone,
  Brain,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Shield,
  Layers,
  Clock,
  Sparkles,
} from 'lucide-react';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.45 },
};

/* Largura de leitura para texto corrido */
const prose = "max-w-[680px]";

const t = {
  label: "text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-foreground/45 mb-4",
  h2: `font-heading text-[28px] md:text-[36px] font-bold text-foreground leading-[1.2] mb-5 ${prose}`,
  h3: `font-heading text-[22px] md:text-[26px] font-semibold text-foreground leading-[1.3] mb-4 mt-14 ${prose}`,
  body: `font-sans text-[18px] md:text-[20px] leading-[1.72] text-foreground/75 mb-8 ${prose}`,
  divider: "w-full h-px bg-foreground/[0.06] my-16 md:my-20",
};

function MetricCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <motion.div {...fade} className="text-center py-8 px-4 rounded-2xl bg-foreground/[0.025] border border-foreground/[0.06]">
      <div className="font-heading text-[36px] md:text-[44px] font-bold text-foreground leading-none mb-2">{value}</div>
      <div className="font-sans text-[14px] leading-[1.5] text-foreground/55">{label}</div>
      {sub && <div className="font-sans text-[12px] text-foreground/35 mt-1">{sub}</div>}
    </motion.div>
  );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex items-center justify-center h-9 w-9 rounded-full bg-foreground/[0.05] border border-foreground/[0.08] text-[13px] font-semibold text-foreground/50 shrink-0">
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
  return (
    <article className="w-full bg-background">
      <div className="mx-auto max-w-[800px] px-6 py-20 md:py-28">

        {/* ═══════════════ SOBRE MIM ═══════════════ */}
        <motion.div {...fade}>
          <p className={t.label}>Quem sou</p>
          <h2 className={t.h2}>
            Product Designer que entrega<br />produto, não só tela
          </h2>
          <p className={t.body}>
            Atuo end-to-end em produtos digitais complexos. Minha diferenca?{' '}
            <strong className="text-foreground font-semibold">Nao paro no Figma.</strong>{' '}
            Participo de decisoes tecnicas, negocio com APIs, alinho com stakeholders
            e entrego solucoes que funcionam em producao — nao so no prototipo.
            Minha atuacao recente combina design estrategico com IA aplicada
            para comprimir ciclos de entrega de meses para dias.
          </p>
        </motion.div>

        <motion.div {...fade} className="my-12 py-6 px-7 bg-foreground/[0.025] rounded-2xl border-l-[3px] border-foreground/15">
          <p className="font-serif text-[19px] md:text-[21px] leading-[1.72] text-foreground/65 italic">
            &ldquo;Design bom nao e o que parece bonito. E o que resolve — para o usuario,
            para o negocio e para a engenharia. Se nao gerou resultado, nao funcionou.&rdquo;
          </p>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t.h3}>Por que me contratar</h3>
          <div className="grid gap-4 mb-8">
            {[
              { icon: Layers, text: "Construo jornadas complexas do zero — nao herdei, eu criei", color: "text-emerald-500 bg-emerald-500/10" },
              { icon: Users, text: "Colaboro de verdade com engenharia — entendo limitacoes de API e proponho alternativas viaveis", color: "text-blue-500 bg-blue-500/10" },
              { icon: Brain, text: "IA integrada ao meu processo: research, validacao e prototipagem 10x mais rapida", color: "text-violet-500 bg-violet-500/10" },
              { icon: Target, text: "Decisoes baseadas em dados + contexto real: negocio + tecnologia + usuario", color: "text-amber-500 bg-amber-500/10" },
              { icon: TrendingUp, text: "Historico de resultados mensuraveis: conversao, adocao, reducao de fricao", color: "text-rose-500 bg-rose-500/10" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-3 px-4 rounded-xl hover:bg-foreground/[0.02] transition-colors">
                <div className={`flex items-center justify-center h-9 w-9 rounded-xl ${item.color.split(' ')[1]} shrink-0 mt-[2px]`}>
                  <item.icon className={`h-[18px] w-[18px] ${item.color.split(' ')[0]}`} />
                </div>
                <span className="font-sans text-[17px] md:text-[18px] leading-[1.65] text-foreground/70">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className={t.divider} />

        {/* ═══════════════ CASE AGROW.PAY ═══════════════ */}
        <motion.div {...fade}>
          <p className={t.label}>Case Principal</p>
          <h2 className={t.h2}>
            Agrow.pay: conta digital do zero ao produto em producao
          </h2>
          <p className={t.body}>
            Entrei como consultor externo. Tres meses depois, fui contratado direto pela empresa.
            Esse e o tipo de resultado que acontece quando o design entrega valor de verdade
            desde o primeiro sprint.
          </p>
        </motion.div>

        {/* Metricas */}
        <motion.div {...fade} className="my-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard value="+10k" label="Usuarios impactados" sub="em producao" />
            <MetricCard value="50%" label="Taxa de conversao" sub="cadastros / acessos" />
            <MetricCard value="100%" label="Processos digitalizados" sub="antes era tudo manual" />
            <MetricCard value="0→1" label="Produto do zero" sub="app + landing + portal" />
          </div>
        </motion.div>

        {/* Antes / Depois */}
        <motion.div {...fade} className="my-12 grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/10 border border-red-200/40 dark:border-red-900/20">
            <p className="text-[12px] font-sans font-semibold text-red-400 mb-4 uppercase tracking-[0.12em]">Antes</p>
            <ul className="space-y-3">
              {[
                "Sem produto digital — tudo operava no papel",
                "Processos financeiros manuais e burocraticos",
                "Zero integracao entre financeiro e campo",
                "Dependencia total de ferramentas externas",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-red-600/70 dark:text-red-300/70">
                  <AlertTriangle className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/10 border border-emerald-200/40 dark:border-emerald-900/20">
            <p className="text-[12px] font-sans font-semibold text-emerald-500 mb-4 uppercase tracking-[0.12em]">Depois</p>
            <ul className="space-y-3">
              {[
                "Plataforma completa em producao com +10k usuarios",
                "PIX, TED, boletos em um unico app",
                "Gestao de graos integrada ao financeiro",
                "Certificado Digital + NF-e + CPR no mobile",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-emerald-600/70 dark:text-emerald-300/70">
                  <CheckCircle2 className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t.h3}>Meu papel e processo</h3>
          <p className={`font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65 mb-8 ${prose}`}>
            Product Designer end-to-end. Nao herdei o produto — criei tudo do zero:
          </p>
          <div className="space-y-6 mb-8">
            <ProcessStep number="01" title="Discovery e estrategia" desc="Mapeei o mercado de agrofintechs, conduzi entrevistas com produtores rurais e alinhei com stakeholders as prioridades de negocio." />
            <ProcessStep number="02" title="Arquitetura e jornadas" desc="Estruturei o ecossistema conectando financeiro, gestao de graos e portal do parceiro — tres dominios que operavam isolados." />
            <ProcessStep number="03" title="Design e validacao" desc="Desenhei todos os fluxos no Figma, validei com usuarios reais e iterei com o time de engenharia sobre limitacoes de API." />
            <ProcessStep number="04" title="Implementacao e acompanhamento" desc="Acompanhei a entrega tecnica, ajustei fluxos em producao e monitorei metricas de conversao e adocao." />
          </div>
        </motion.div>

        {/* Ecossistema */}
        <motion.div {...fade}>
          <h3 className={t.h3}>Ecossistema que estruturei</h3>
          <div className="grid gap-3 mb-8">
            {[
              { icon: BarChart3, title: "Gestao Financeira", desc: "PIX, TED, boletos — tudo centralizado em um unico app", color: "text-emerald-500 bg-emerald-500/10" },
              { icon: Zap, title: "Gestao de Graos", desc: "Cotacao, saldo e operacoes agricolas integradas ao financeiro", color: "text-amber-500 bg-amber-500/10" },
              { icon: Users, title: "Portal do Parceiro", desc: "Gestao de relacionamento B2B com visao unificada", color: "text-blue-500 bg-blue-500/10" },
            ].map((item, i) => (
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

        <motion.div {...fade} className="my-12 py-6 px-7 bg-foreground/[0.025] rounded-2xl border-l-[3px] border-foreground/15">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-5 w-5 text-foreground/20 mt-[2px] shrink-0" />
            <p className="font-sans text-[17px] md:text-[18px] leading-[1.72] text-foreground/65">
              <strong className="text-foreground font-semibold">Decisao-chave:</strong> Grande parte dos fluxos foram moldados
              por restricoes de API e regras regulatorias. O equilibrio entre UX ideal e viabilidade tecnica
              foi o que garantiu um produto que realmente funcionou em producao — nao so no prototipo.
            </p>
          </div>
        </motion.div>

        <div className={t.divider} />

        {/* ═══════════════ DEEP DIVE ═══════════════ */}
        <motion.div {...fade}>
          <p className={t.label}>Deep Dive</p>
          <h2 className={t.h2}>
            Certificado Digital + NF-e + CPR Digital
          </h2>
          <p className={t.body}>
            A jornada mais complexa do produto. Processos burocraticos com impacto financeiro e legal
            direto — transformados em uma experiencia guiada dentro de um app mobile.
          </p>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t.h3}>O problema</h3>
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {[
              { problem: "Alto risco de erro", impact: "Impacto financeiro e legal direto em caso de falha na emissao" },
              { problem: "Processos burocraticos", impact: "Regulamentacao complexa que muda frequentemente entre estados" },
              { problem: "Baixa familiaridade digital", impact: "Produtores rurais que nunca usaram app financeiro antes" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.05]">
                <p className="font-sans text-[15px] font-semibold text-foreground/80 mb-1">{item.problem}</p>
                <p className="font-sans text-[14px] leading-[1.6] text-foreground/50">{item.impact}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t.h3}>Como resolvi</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {[
              {
                icon: Shield,
                title: "Fluxo progressivo e guiado",
                desc: "Dividi processos complexos em steps claros — o usuario nunca se perde",
              },
              {
                icon: CheckCircle2,
                title: "Validacoes em tempo real",
                desc: "Feedback imediato a cada etapa, prevenindo erros antes que acontecam",
              },
              {
                icon: Layers,
                title: "Abstracao da complexidade",
                desc: "Regulamentacao invisivel para o usuario — linguagem simples, a API cuida do resto",
              },
              {
                icon: Smartphone,
                title: "Zero ferramentas externas",
                desc: "Certificado, NF-e e CPR emitidos pelo celular — sem computador, sem contador",
              },
            ].map((item, i) => (
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

        <div className={t.divider} />

        {/* ═══════════════ CASE RIOCARD ═══════════════ */}
        <motion.div {...fade}>
          <p className={t.label}>Case</p>
          <h2 className={t.h2}>
            Riocard Mais: redesign de um app com milhoes de usuarios
          </h2>
          <p className={t.body}>
            Um dos maiores sistemas de bilhetagem do Rio de Janeiro. Interface defasada,
            navegacao confusa e informacoes criticas escondidas. Conduzi o redesign completo
            com base em research presencial com usuarios reais.
          </p>
        </motion.div>

        {/* Antes / Depois */}
        <motion.div {...fade} className="my-12 grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/10 border border-red-200/40 dark:border-red-900/20">
            <p className="text-[12px] font-sans font-semibold text-red-400 mb-4 uppercase tracking-[0.12em]">Antes</p>
            <ul className="space-y-3">
              {[
                "Saldo escondido — usuario nao achava a informacao principal",
                "Hierarquia de informacao confusa e poluida",
                "Navegacao com alta friccao entre telas",
                "Interface visualmente datada",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-red-600/70 dark:text-red-300/70">
                  <AlertTriangle className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/10 border border-emerald-200/40 dark:border-emerald-900/20">
            <p className="text-[12px] font-sans font-semibold text-emerald-500 mb-4 uppercase tracking-[0.12em]">Depois</p>
            <ul className="space-y-3">
              {[
                "Saldo visivel como 1o elemento da home",
                "Hierarquia clara, limpa e escaneavel",
                "Navegacao simplificada com menos taps",
                "Interface moderna sem perder familiaridade",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-emerald-600/70 dark:text-emerald-300/70">
                  <CheckCircle2 className="h-3.5 w-3.5 mt-[4px] shrink-0 opacity-50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fade}>
          <h3 className={t.h3}>Processo</h3>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-6 mb-8">
            <ProcessStep number="01" title="Research presencial" desc="Entrevistei usuarios reais em pontos de recarga. Observei comportamentos e frustraccoes que nao aparecem em analytics." />
            <ProcessStep number="02" title="Benchmarking e analise" desc="Mapeei concorrentes e apps de referencia. Identifiquei padroes que funcionam e oportunidades inexploradas." />
            <ProcessStep number="03" title="Reestruturacao da IA" desc="Reorganizei a arquitetura de informacao. Saldo virou o 1o elemento, navegacao simplificada, ruido removido." />
            <ProcessStep number="04" title="Redesign e entrega" desc="Redesenhei home, navegacao e fluxos criticos no Figma. Especificacoes detalhadas para engenharia." />
          </div>
        </motion.div>

        <div className={t.divider} />

        {/* ═══════════════ IA + DESIGN ═══════════════ */}
        <motion.div {...fade}>
          <p className={t.label}>Especializacao</p>
          <h2 className={t.h2}>
            IA aplicada ao Design de Produtos
          </h2>
          <p className={t.body}>
            Nao uso IA como buzzword de LinkedIn. Uso como ferramenta real de producao
            que muda fundamentalmente o que um designer consegue entregar — e em quanto tempo.
            Essa e a habilidade que separa o designer de hoje do designer de amanha.
          </p>
        </motion.div>

        {/* Antes IA / Depois IA */}
        <motion.div {...fade} className="my-12 grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06]">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-foreground/30" />
              <p className="text-[12px] font-sans font-semibold text-foreground/40 uppercase tracking-[0.12em]">Processo tradicional</p>
            </div>
            <ul className="space-y-3">
              {[
                "Discovery: 2-4 semanas de research manual",
                "Ideacao: dias para explorar alternativas",
                "Prototipagem: semanas de iteracao",
                "Handoff: documentacao extensa e reunioes",
              ].map((item, i) => (
                <li key={i} className="font-sans text-[14px] leading-[1.6] text-foreground/50">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-violet-50/60 dark:bg-violet-950/10 border border-violet-200/40 dark:border-violet-900/20">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-violet-500/60" />
              <p className="text-[12px] font-sans font-semibold text-violet-500 uppercase tracking-[0.12em]">Com IA integrada</p>
            </div>
            <ul className="space-y-3">
              {[
                "Discovery: analise qualitativa em horas",
                "Ideacao: dezenas de variacoes em minutos",
                "Prototipagem: validacao rapida com variantes",
                "Handoff: codigo gerado direto do design",
              ].map((item, i) => (
                <li key={i} className="font-sans text-[14px] leading-[1.6] text-violet-600/70 dark:text-violet-300/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fade} className="my-12 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-50/40 to-purple-100/30 dark:from-violet-950/10 dark:to-purple-900/5 border border-violet-200/30 dark:border-violet-900/15 p-8">
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: Zap, title: "Automacao de processos", desc: "Tarefas operacionais eliminadas. Mais tempo para decisoes estrategicas." },
              { icon: Brain, title: "IA em discovery e research", desc: "Analise qualitativa e quantitativa com velocidade 10x." },
              { icon: Layers, title: "Geracao de interfaces", desc: "Variacoes testaveis em minutos. Feedback em horas, nao semanas." },
              { icon: TrendingUp, title: "Design Engineering", desc: "Do Figma ao codigo com menos friccao e menos handoff." },
            ].map((item, i) => (
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
            <strong className="text-foreground font-semibold">Minha visao:</strong> IA nao substitui o designer — ela multiplica quem sabe
            usa-la. O mercado vai se dividir entre designers que usam IA como ferramenta real
            e designers que ficaram para tras. Eu escolhi o primeiro caminho, e os resultados
            falam por si: entregas que antes levavam meses agora acontecem em dias.
          </p>
        </motion.div>

      </div>
    </article>
  );
}
