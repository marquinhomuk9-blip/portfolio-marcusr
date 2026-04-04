'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/components/ui/language-context';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FloatingChat() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const { t } = useLanguage();

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const distFromBottom = docHeight - scrollY - winHeight;

    const pastHero = scrollY > winHeight * 0.7;
    const nearBottom = distFromBottom < winHeight * 0.6;

    setVisible(pastHero && !nearBottom);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Show nudge label after a delay
  useEffect(() => {
    if (visible && !open) {
      const timer = setTimeout(() => setShowLabel(true), 2500);
      return () => clearTimeout(timer);
    }
    setShowLabel(false);
  }, [visible, open]);

  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);

  const whatsappNumber = '5511996807009';
  const whatsappMessage = encodeURIComponent(
    t('Oi Marcus! Vi seu portfólio e gostaria de conversar.', 'Hi Marcus! I saw your portfolio and would like to chat.')
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Chat expandido */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-[300px] rounded-2xl bg-foreground shadow-2xl shadow-foreground/20 overflow-hidden"
              >
                {/* Header */}
                <div className="relative px-5 pt-5 pb-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 h-7 w-7 rounded-full flex items-center justify-center hover:bg-background/10 transition-colors"
                  >
                    <X className="h-3.5 w-3.5 text-background/40" />
                  </button>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative shrink-0">
                      <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-background/10">
                        <img
                          src="/marcus-photo.png"
                          alt="Marcus Rolim"
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-foreground" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-background leading-tight">Marcus Rolim</p>
                      <p className="text-[12px] text-background/40">Product Designer</p>
                    </div>
                  </div>

                  {/* Mensagem estilo chat */}
                  <div className="bg-background/[0.08] rounded-2xl rounded-tl-md p-3.5">
                    <p className="text-[14px] leading-[1.55] text-background/75">
                      {t(
                        'Oi! Gostou do que viu? Me conta o que você precisa — respondo rápido.',
                        "Hey! Liked what you saw? Tell me what you need — I reply fast."
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 mt-2 ml-1">
                    <Clock className="h-3 w-3 text-background/25" />
                    <span className="text-[11px] text-background/30">
                      {t('Respondo em minutos', 'Replies in minutes')}
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="px-5 pb-5 space-y-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#25D366] text-white text-[14px] font-semibold hover:bg-[#1fba59] transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {t('Chamar no WhatsApp', 'Message on WhatsApp')}
                  </a>

                  <a
                    href="mailto:marcusuixdesigner@gmail.com"
                    className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-background/[0.06] text-background/60 text-[13px] font-medium hover:bg-background/[0.1] hover:text-background/80 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {t('Prefiro e-mail', 'I prefer email')}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB + Nudge label */}
          <div className="flex items-center gap-2.5">
            {/* Label flutuante */}
            <AnimatePresence>
              {showLabel && !open && (
                <motion.div
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="px-3.5 py-2 rounded-xl bg-foreground shadow-lg shadow-foreground/15"
                >
                  <p className="text-[12px] font-medium text-background/80 whitespace-nowrap">
                    {t('Bora conversar?', "Let's talk?")}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botao flutuante */}
            <motion.button
              initial={{ opacity: 0, scale: 0, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={() => { setOpen(!open); setShowLabel(false); }}
              className="relative h-14 w-14 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.12 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="avatar"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="relative"
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-background/15">
                      <img
                        src="/marcus-photo.png"
                        alt="Marcus"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
