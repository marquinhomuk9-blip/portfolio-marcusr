'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/language-context';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.45 },
};

export function AboutSection() {
  const { t } = useLanguage();

  const competencias = t(
    [
      'Product Thinking',
      'Discovery & Research',
      'Fluxos end-to-end',
      'Testes de usabilidade',
      'Colaboração com times técnicos',
      'Design orientado a negócio',
      'Figma',
      'Metodologias ágeis',
    ],
    [
      'Product Thinking',
      'Discovery & Research',
      'End-to-end flows',
      'Usability testing',
      'Collaboration with tech teams',
      'Business-oriented design',
      'Figma',
      'Agile methodologies',
    ]
  );

  const emFormacao = t(
    ['IA aplicada ao UX/UI/Product Design', 'Design Engineering'],
    ['AI applied to UX/UI/Product Design', 'Design Engineering']
  );

  return (
    <section id="sobre" className="w-full bg-background">
      <div className="mx-auto max-w-[800px] px-8 md:px-6 pt-20 md:pt-28 pb-0">

        {/* Label */}
        <motion.div {...fade}>
          <p className="text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-primary/60 mb-5">
            {t('Sobre mim', 'About me')}
          </p>
        </motion.div>

        {/* Two-column grid */}
        <motion.div {...fade}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 md:gap-16">

            {/* ── Coluna esquerda: Bio ── */}
            <div className="border-l-[3px] border-foreground/10 pl-6 md:pl-8 space-y-6">
              <p className="font-sans text-[17px] md:text-[18px] leading-[1.75] text-foreground/70">
                {t(
                  'Sou Product Designer com experiência na construção de produtos digitais do zero e na evolução de sistemas existentes.',
                  'I am a Product Designer with experience building digital products from scratch and evolving existing systems.'
                )}
              </p>

              <p className="font-sans text-[17px] md:text-[18px] leading-[1.75] text-foreground/70">
                {t(
                  'Minha abordagem vai além da interface: busco entender o problema em profundidade para entregar soluções que realmente geram impacto, equilibrando experiência do usuário, regras de negócio e limitações técnicas.',
                  'My approach goes beyond the interface: I seek to deeply understand the problem to deliver solutions that truly generate impact — balancing user experience, business rules, and technical constraints.'
                )}
              </p>

              <p className="font-sans text-[17px] md:text-[18px] leading-[1.75] text-foreground/70">
                {t(
                  'Atuei como ponte entre negócio, tecnologia e UX em projetos de escala real, com participação ativa em todas as etapas, da concepção à validação com usuários.',
                  'I acted as a bridge between business, technology, and UX in real-scale projects, with active participation in every stage — from conception to user validation.'
                )}
              </p>

              <p className="font-sans text-[17px] md:text-[18px] leading-[1.75] text-primary font-semibold">
                {t(
                  'Atualmente me especializando em IA aplicada ao design de produtos e Design Engineering.',
                  'Currently specialising in AI applied to product design and Design Engineering.'
                )}
              </p>
            </div>

            {/* ── Coluna direita: Competencias ── */}
            <div className="space-y-10">

              {/* Competencias principais */}
              <div>
                <p className="text-[14px] font-sans font-semibold text-foreground/85 tracking-wide mb-5 pb-3 border-b border-foreground/10">
                  {t('Competências principais', 'Core competencies')}
                </p>
                <ul className="space-y-3">
                  {competencias.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-sans text-[15px] text-foreground/60 leading-snug">
                      <span className="h-[5px] w-[5px] rounded-full bg-foreground/20 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Em formacao */}
              <div>
                <p className="text-[14px] font-sans font-semibold text-primary/80 tracking-wide mb-5 pb-3 border-b border-primary/15">
                  {t('Em formação', 'In progress')}
                </p>
                <ul className="space-y-3">
                  {emFormacao.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-sans text-[15px] text-foreground/60 leading-snug">
                      <span className="h-[5px] w-[5px] rounded-full bg-primary/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
