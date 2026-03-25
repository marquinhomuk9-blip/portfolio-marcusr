'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/components/ui/language-context';

export function FloatingChat() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const distFromBottom = docHeight - scrollY - winHeight;

    // Show after hero, hide when reaching the contact footer
    const pastHero = scrollY > winHeight * 0.7;
    const nearBottom = distFromBottom < winHeight * 0.6;

    setVisible(pastHero && !nearBottom);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Close chat when returning to top
  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);

  const whatsappNumber = '5511996807009';
  const whatsappMessage = encodeURIComponent(t('Oi Marcus! Vi seu portfólio e gostaria de conversar.', 'Hi Marcus! I saw your portfolio and would like to chat.'));
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Chat bubble expandido */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-72 rounded-2xl bg-foreground text-background shadow-2xl overflow-hidden"
              >
                {/* Header com foto */}
                <div className="flex items-center gap-3 p-4 border-b border-background/10">
                  <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-background/20 shrink-0">
                    <img
                      src="/marcus-photo.png"
                      alt="Marcus Rolim"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-background leading-tight">Marcus Rolim</p>
                    <p className="text-[12px] text-background/50">Product Designer</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-background/10 transition-colors"
                  >
                    <X className="h-4 w-4 text-background/50" />
                  </button>
                </div>

                {/* Mensagem */}
                <div className="p-4">
                  <div className="bg-background/10 rounded-2xl rounded-tl-sm p-3 mb-4">
                    <p className="text-[14px] leading-[1.5] text-background/80">
                      {t('Oi! Quer conversar sobre um projeto ou oportunidade? Me chama no WhatsApp 👋', 'Hi! Want to chat about a project or opportunity? Reach me on WhatsApp 👋')}
                    </p>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] text-white text-[14px] font-semibold hover:bg-[#20BD5A] transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {t('Abrir WhatsApp', 'Open WhatsApp')}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão flutuante */}
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setOpen(!open)}
            className="relative h-14 w-14 rounded-full bg-foreground text-background shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="relative"
                >
                  {/* Mini foto dentro do botão */}
                  <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-background/20">
                    <img
                      src="/marcus-photo.png"
                      alt="Marcus"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  {/* Indicador verde online */}
                  <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-[#25D366] border-2 border-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
