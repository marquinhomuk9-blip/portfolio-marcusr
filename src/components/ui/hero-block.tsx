'use client';
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink, Link2, Mail } from "lucide-react";

export function HeroBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Card transition — blur suave + fade out
  const cardOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0]);
  const cardBlur = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0, 20]);
  const cardScale = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0.96]);
  const cardFilter = useTransform(cardBlur, (v) => `blur(${v}px)`);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative flex items-center overflow-hidden bg-background min-h-screen w-full">
      {/* Background grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── LADO ESQUERDO: Texto ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 text-[13px] font-medium uppercase tracking-[0.15em] text-primary/70"
            >
              Disponivel para novos projetos
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 font-heading text-[36px] md:text-[48px] lg:text-[56px] font-bold text-foreground leading-[1.1]"
            >
              De meses para dias:
              <span className="text-foreground/40"> produtos digitais reais</span>
              {' '}com IA aplicada ao design.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 max-w-lg text-[17px] md:text-[19px] leading-[1.7] text-foreground/55"
            >
              Conecto experiência do usuário, estratégia de negócio e tecnologia para construir
              plataformas que geram resultado — do discovery à implementação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8 flex flex-wrap gap-3"
            >
              <Button size="lg" className="gap-2 h-12 px-6 text-[15px] font-semibold rounded-xl bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:opacity-90 transition-all" onClick={() => handleScroll('#contato')}>
                <Mail className="h-4 w-4" />
                Vamos tomar um café
              </Button>
              <Button size="lg" variant="outline" className="gap-2 h-12 px-6 text-[15px] font-semibold rounded-xl border-foreground/20 hover:bg-foreground hover:text-background transition-all" onClick={() => handleScroll('#projetos')}>
                Ver Projetos
                <ArrowDown className="h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-3"
            >
              {[
                { icon: ExternalLink, href: "#", label: "GitHub" },
                { icon: Link2, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/[0.05] text-foreground/50 transition-colors hover:bg-foreground hover:text-background"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── LADO DIREITO: Card animado pelo scroll ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <motion.div
              style={{
                scale: cardScale,
                opacity: cardOpacity,
                filter: cardFilter,
              }}
              className="relative w-full max-w-md"
            >
              <div className="relative rounded-3xl bg-foreground/[0.03] border border-foreground/[0.08] p-6 md:p-8 overflow-hidden">
                {/* Gradiente decorativo */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-foreground/[0.04] to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-foreground/[0.03] to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

                {/* Foto */}
                <div className="relative mx-auto mb-6 h-72 w-full rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] overflow-hidden">
                  <img
                    src="/marcus-photo.png"
                    alt="Marcus Rolim — Product Designer"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Info */}
                <div className="relative text-center">
                  <h3 className="font-heading text-[22px] font-semibold text-foreground mb-1">
                    Marcus Rolim
                  </h3>
                  <p className="text-[14px] text-foreground/45 mb-4">
                    Product Designer &middot; Design Engineer
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['UX Strategy', 'AI + Design', 'Design Systems', 'End-to-end'].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex px-3 py-1 rounded-full bg-foreground/[0.04] border border-foreground/[0.06] text-[12px] font-medium text-foreground/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 text-foreground/25" />
      </motion.div>
    </section>
  );
}
