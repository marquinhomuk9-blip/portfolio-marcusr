'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CaseLayout } from '@/components/case-layout';
import { useLanguage } from '@/components/ui/language-context';
import {
  fade, t_styles, ProcessStep,
} from '@/components/case-shared';
import { Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function PixterLogo() {
  return (
    <img src="/pixter-logo.jpg" alt="Pixter" className="h-full w-full rounded-xl object-cover" />
  );
}

function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className ?? ''}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 font-sans text-[15px] md:text-[16px] leading-[1.6] text-foreground/65">
          <span className="text-primary mt-[7px] text-[6px]">&#9679;</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function PixterHero() {
  const { t } = useLanguage();
  return (
    <motion.div {...fade}>
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm p-3 mb-6">
        <PixterLogo />
      </div>
      <p className="text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-white/40 mb-4">Case</p>
      <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-white leading-[1.2] mb-5 max-w-[680px]">
        {t(
          'Riocard — Redesign do aplicativo',
          'Riocard — App redesign'
        )}
      </h2>
      <p className="font-sans text-[16px] md:text-[18px] leading-[1.72] text-white/50 max-w-[680px]">
        {t(
          'Primeiro projeto como UX/UI Designer em um dos maiores sistemas de bilhetagem eletrônica do Estado do Rio de Janeiro.',
          'First project as a UX/UI Designer on one of the largest electronic ticketing systems in the State of Rio de Janeiro.'
        )}
      </p>
    </motion.div>
  );
}

function PixterContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Contexto */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>{t('Contexto', 'Context')}</h3>
        <p className={t_styles.body}>
          {t(
            'A Riocard é responsável por um dos maiores sistemas de bilhetagem eletrônica do Estado do Rio de Janeiro, atendendo milhares de usuários diariamente no transporte público. O aplicativo apresentava problemas de usabilidade: fluxos confusos e interface desatualizada que impactavam diretamente a experiência do usuário.',
            'Riocard runs one of the largest electronic ticketing systems in the State of Rio de Janeiro, serving thousands of users daily on public transport. The app had usability issues: confusing flows and an outdated interface that directly impacted the user experience.'
          )}
        </p>
      </motion.div>

      <div className={t_styles.divider} />

      {/* O problema */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>{t('O problema', 'The problem')}</h3>
        <BulletList
          className="mb-8"
          items={t(
            [
              'Navegação pouco intuitiva com fluxos complexos para tarefas simples',
              'Baixa visibilidade de funcionalidades importantes no app',
              'Interface desatualizada e visualmente inconsistente',
              'Informações críticas, como o saldo, sem destaque adequado',
            ],
            [
              'Unintuitive navigation with complex flows for simple tasks',
              'Low visibility of important features in the app',
              'Outdated and visually inconsistent interface',
              'Critical information, like balance, without proper emphasis',
            ]
          )}
        />
      </motion.div>

      <div className={t_styles.divider} />

      {/* Meu papel */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>{t('Meu papel (UX/UI Designer Junior)', 'My role (Junior UX/UI Designer)')}</h3>
        <p className={t_styles.body}>
          {t(
            'Atuei diretamente no redesign do aplicativo, participando de etapas de discovery até a entrega de interface, com foco em melhorar a experiência e a clareza da jornada do usuário.',
            'I worked directly on the app redesign, participating from discovery to interface delivery, focusing on improving the experience and clarity of the user journey.'
          )}
        </p>
      </motion.div>

      <div className={t_styles.divider} />

      {/* Processo */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>{t('Processo', 'Process')}</h3>

        <div className="space-y-8 mb-8">
          {/* Discovery */}
          <div>
            <p className="font-sans text-[17px] font-semibold text-foreground mb-3">{t('Discovery', 'Discovery')}</p>
            <BulletList items={t(
              [
                'Participação em sessões com o time de UX',
                'Entrevistas presenciais com usuários para levantamento de dores reais',
                'Análise de fluxos existentes para identificação de pontos de atrito',
              ],
              [
                'Participation in sessions with the UX team',
                'In-person interviews with users to identify real pain points',
                'Analysis of existing flows to identify friction points',
              ]
            )} />
          </div>

          {/* Benchmarking */}
          <div>
            <p className="font-sans text-[17px] font-semibold text-foreground mb-3">{t('Benchmarking', 'Benchmarking')}</p>
            <BulletList items={t(
              [
                'Análise de aplicativos similares e referências de mercado',
                'Identificação de padrões de navegação mais eficientes',
              ],
              [
                'Analysis of similar apps and market references',
                'Identification of more efficient navigation patterns',
              ]
            )} />
          </div>

          {/* Organização do ambiente de design */}
          <div>
            <p className="font-sans text-[17px] font-semibold text-foreground mb-3">{t('Organização do ambiente de design', 'Design environment organisation')}</p>
            <BulletList items={t(
              [
                'Reorganização completa do projeto no Figma para melhor visualização e colaboração do time',
                'Padronização de componentes para escalabilidade',
              ],
              [
                'Complete reorganisation of the Figma project for better team visualisation and collaboration',
                'Component standardisation for scalability',
              ]
            )} />
          </div>
        </div>
      </motion.div>

      <div className={t_styles.divider} />

      {/* Soluções */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>{t('Soluções', 'Solutions')}</h3>

        <div className="space-y-8 mb-8">
          {/* Redesign da home */}
          <div>
            <p className="font-sans text-[17px] font-semibold text-foreground mb-3">{t('Redesign da home', 'Home redesign')}</p>
            <BulletList items={t(
              [
                'Recriação completa da tela inicial com nova hierarquia de informação',
                'Destaque para o saldo do usuário — funcionalidade mais crítica do app',
                'Maior visibilidade de funcionalidades estratégicas do produto',
              ],
              [
                'Complete recreation of the home screen with new information hierarchy',
                'Emphasis on user balance — the app\'s most critical feature',
                'Greater visibility of strategic product features',
              ]
            )} />
          </div>

          {/* Simplificação de fluxos */}
          <div>
            <p className="font-sans text-[17px] font-semibold text-foreground mb-3">{t('Simplificação de fluxos', 'Flow simplification')}</p>
            <BulletList items={t(
              [
                'Jornadas complexas simplificadas com menos etapas desnecessárias',
                'Maior clareza nas ações disponíveis para o usuário',
              ],
              [
                'Complex journeys simplified with fewer unnecessary steps',
                'Greater clarity in available user actions',
              ]
            )} />
          </div>
        </div>
      </motion.div>

      <div className={t_styles.divider} />

      {/* Impacto */}
      <motion.div {...fade}>
        <h3 className={t_styles.h3}>{t('Impacto', 'Impact')}</h3>
        <BulletList
          className="mb-8"
          items={t(
            [
              'Melhoria na clareza das informações principais do app',
              'Acesso mais rápido ao saldo — redução do esforço cognitivo na tarefa mais crítica',
              'Interface mais intuitiva e escaneável para o usuário final',
              'Base de design organizada e escalável para o time',
            ],
            [
              'Improved clarity of the app\'s main information',
              'Faster access to balance — reduced cognitive effort on the most critical task',
              'More intuitive and scannable interface for the end user',
              'Organised and scalable design base for the team',
            ]
          )}
        />
      </motion.div>

      {/* Aprendizado chave */}
      <motion.div {...fade} className="mt-12 p-6 rounded-2xl bg-primary/[0.04] border border-primary/15">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-primary/10 shrink-0 mt-0.5">
            <Lightbulb className="h-[18px] w-[18px] text-primary" />
          </div>
          <div>
            <p className="font-sans text-[15px] font-semibold text-foreground mb-1">
              {t('Aprendizado chave', 'Key learning')}
            </p>
            <p className="font-sans text-[15px] leading-[1.68] text-foreground/60">
              {t(
                'A hierarquia visual impacta diretamente a eficiência do usuário. Ao priorizar a exibição do saldo na home, reduzi o tempo de acesso à informação mais crítica — melhorando a percepção de valor do produto.',
                'Visual hierarchy directly impacts user efficiency. By prioritising the balance display on the home screen, I reduced the time to access the most critical information — improving the perceived value of the product.'
              )}
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA para Agrow.pay */}
      <motion.div {...fade} className="mt-16 p-6 md:p-8 rounded-2xl bg-[#5B5891]/[0.04] border border-[#5B5891]/15">
        <p className="font-sans text-[14px] font-medium text-foreground/40 mb-2">
          {t('Próximo projeto na Pixter', 'Next project at Pixter')}
        </p>
        <h4 className="font-heading text-[20px] md:text-[24px] font-semibold text-foreground leading-[1.3] mb-2">
          {t('Agrow.pay — Conta digital para o agronegócio', 'Agrow.pay — Digital banking for agribusiness')}
        </h4>
        <p className="font-sans text-[15px] leading-[1.68] text-foreground/55 mb-5 max-w-[560px]">
          {t(
            'Ainda na Pixter, fui alocado no projeto Agrow.pay — onde construí do zero uma conta digital completa. O impacto foi tão grande que saí de consultor para contratado.',
            'Still at Pixter, I was assigned to the Agrow.pay project — where I built a complete digital banking platform from scratch. The impact was so significant that I went from consultant to full-time hire.'
          )}
        </p>
        <Link
          href="/portfolio-marcusr/agrow"
          className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#5B5891] text-[14px] font-semibold text-white hover:bg-[#4A4780] transition-colors group"
        >
          {t('Ver case Agrow.pay', 'View Agrow.pay case')}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>
    </>
  );
}

export default function PixterPage() {
  return (
    <CaseLayout brandColor="#1a1a1a" hero={<PixterHero />}>
      <PixterContent />
    </CaseLayout>
  );
}
