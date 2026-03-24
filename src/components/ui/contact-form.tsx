'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contato@marcusrolim.com?subject=Contato via Portfólio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

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
          {/* Avatar + status */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-6">
              <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-background/15 shadow-lg">
                <img
                  src="/marcus-photo.png"
                  alt="Marcus Rolim"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-400 border-[3px] border-foreground" />
            </div>

            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-background/35 mb-4">
              Disponivel para novos projetos
            </p>

            <h2 className="font-heading text-[32px] md:text-[44px] font-bold text-background leading-[1.1] text-center mb-3">
              Vamos construir algo<br />
              <span className="text-background/40">juntos?</span>
            </h2>

            <p className="text-[16px] md:text-[17px] leading-[1.65] text-background/50 text-center max-w-sm">
              Me conta sobre o seu projeto. Respondo em até 24h.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-background/45 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-background/[0.06] border border-background/[0.08] text-background placeholder:text-background/25 focus:outline-none focus:bg-background/[0.1] focus:border-background/20 transition-all text-[15px]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-background/45 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-background/[0.06] border border-background/[0.08] text-background placeholder:text-background/25 focus:outline-none focus:bg-background/[0.1] focus:border-background/20 transition-all text-[15px]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[13px] font-medium text-background/45 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Me conte sobre o seu projeto ou oportunidade..."
                className="w-full px-4 py-3 rounded-xl bg-background/[0.06] border border-background/[0.08] text-background placeholder:text-background/25 focus:outline-none focus:bg-background/[0.1] focus:border-background/20 transition-all resize-none text-[15px]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 bg-background text-foreground hover:bg-background/90 rounded-xl h-12 text-[15px] font-semibold"
            >
              Enviar mensagem
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-background/25 text-[13px] mt-10">
            &copy; {new Date().getFullYear()} Marcus Rolim. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
