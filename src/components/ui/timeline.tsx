"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLanguage } from '@/components/ui/language-context';

interface TimelineEntry {
  title: string;
  titleColor?: string;
  logo?: React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { t } = useLanguage();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Track which timeline item is in viewport
  const handleScroll = useCallback(() => {
    const viewportCenter = window.innerHeight * 0.4;
    let closestIndex = -1;
    let closestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Check if element is in viewport
      if (rect.top < window.innerHeight * 0.7 && rect.bottom > 100) {
        const dist = Math.abs(rect.top - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-14 px-6 md:px-8 lg:px-10">
        <p className="text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-primary/60 mb-4">{t('Experiência', 'Experience')}</p>
        <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-foreground max-w-4xl leading-[1.2] mb-5">
          {t('Produtos reais, resultados mensuráveis', 'Real products, measurable results')}
        </h2>
        <p className="font-sans text-[17px] md:text-[19px] leading-[1.72] text-foreground/55 max-w-lg">
          {t('Cada case abaixo é um problema de negócio real que resolvi com design estratégico — do discovery à produção, com métricas de impacto.', 'Each case below is a real business problem I solved with strategic design — from discovery to production, with impact metrics.')}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-14">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
            className="flex justify-start pt-8 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-[18px] md:left-3 w-10 rounded-full flex items-center justify-center">
                <div
                  className={`rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? 'h-3 w-3 bg-primary border-2 border-primary/30 shadow-[0_0_8px_rgba(180,130,50,0.25)]'
                      : 'h-4 w-4 bg-foreground/[0.04] border border-foreground/[0.1]'
                  }`}
                />
              </div>
              <div className="hidden md:flex items-center gap-4 md:pl-20">
                {item.logo && (
                  <div className="shrink-0">{item.logo}</div>
                )}
                <h3
                  className={`text-xl md:text-5xl font-bold transition-all duration-500 ${
                    activeIndex === index
                      ? (item.titleColor ? '' : 'text-foreground')
                      : 'text-muted-foreground'
                  }`}
                  style={activeIndex === index && item.titleColor ? { color: item.titleColor } : undefined}
                >
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative pl-16 pr-6 md:pl-4 w-full">
              <div className="md:hidden flex items-center gap-3 mb-4">
                {item.logo && (
                  <div className="shrink-0">{item.logo}</div>
                )}
                <h3
                  className={`text-2xl text-left font-bold transition-all duration-500 ${
                    activeIndex === index
                      ? (item.titleColor ? '' : 'text-foreground')
                      : 'text-muted-foreground'
                  }`}
                  style={activeIndex === index && item.titleColor ? { color: item.titleColor } : undefined}
                >
                  {item.title}
                </h3>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-[22px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/60 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
