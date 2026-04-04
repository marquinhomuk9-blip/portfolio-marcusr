'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/language-context';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactForm() {
  const { t } = useLanguage();

  const whatsappUrl = 'https://wa.me/5511996807009?text=' + encodeURIComponent(
    t(
      'Oi Marcus! Vi seu portfólio e gostaria de conversar sobre um projeto.',
      'Hi Marcus! I saw your portfolio and would like to talk about a project.'
    )
  );

  return (
    <div id="contato" className="sticky bottom-0 z-0">
      <div className="bg-foreground text-background min-h-screen flex items-center justify-center px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full max-w-lg mx-auto"
        >
          <div className="flex flex-col items-center">
            {/* Foto */}
            <div className="relative mb-6">
              <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-background/15 shadow-lg">
                <img src="/marcus-photo.png" alt="Marcus Rolim" className="h-full w-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-400 border-[3px] border-foreground" />
            </div>

            {/* Disponibilidade */}
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-emerald-400/80 mb-4">
              {t('Disponível para novos projetos', 'Available for new projects')}
            </p>

            {/* Headline */}
            <h2 className="font-heading text-[32px] md:text-[44px] font-bold text-background leading-[1.1] text-center mb-3">
              {t(
                <>Vamos construir algo<br /><span className="text-background/40">juntos?</span></>,
                <>Let&apos;s build something<br /><span className="text-background/40">together?</span></>
              )}
            </h2>

            {/* Subtexto */}
            <p className="text-[16px] md:text-[17px] leading-[1.65] text-background/50 text-center max-w-sm mb-10">
              {t(
                'Me chama no WhatsApp. Respondo rápido e a gente resolve direto.',
                'Message me on WhatsApp. I reply fast and we get things done.'
              )}
            </p>

            {/* CTA WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full h-14 rounded-xl bg-[#25D366] text-white text-[16px] font-semibold shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t('Chamar no WhatsApp', 'Message on WhatsApp')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Email alternativo */}
            <p className="text-background/30 text-[14px] mt-6 text-center">
              {t('Ou se preferir: ', 'Or if you prefer: ')}
              <a
                href="mailto:marcusuixdesigner@gmail.com"
                className="text-background/50 underline underline-offset-2 hover:text-background/70 transition-colors"
              >
                marcusuixdesigner@gmail.com
              </a>
            </p>
          </div>

          <p className="text-center text-background/25 text-[13px] mt-16">
            &copy; {new Date().getFullYear()} Marcus Rolim. {t('Todos os direitos reservados.', 'All rights reserved.')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
