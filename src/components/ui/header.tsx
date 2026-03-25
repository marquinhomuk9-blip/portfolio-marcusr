'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useLanguage } from '@/components/ui/language-context';

function MRLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Gradiente dourado para o M */}
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A642" />
          <stop offset="30%" stopColor="#C59A38" />
          <stop offset="50%" stopColor="#E8C45A" />
          <stop offset="70%" stopColor="#B8892E" />
          <stop offset="100%" stopColor="#D4A642" />
        </linearGradient>
        {/* Gradiente prata para o R */}
        <linearGradient id="silver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="30%" stopColor="#B8B8B8" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="70%" stopColor="#A8A8A8" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        {/* Gradiente dourado para a linha */}
        <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A642" stopOpacity="0" />
          <stop offset="20%" stopColor="#D4A642" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#B8B8B8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B8B8B8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* M */}
      <text
        x="10"
        y="62"
        fill="url(#gold)"
        fontSize="72"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="400"
      >
        M
      </text>
      {/* R — sobrepõe ligeiramente o M */}
      <text
        x="75"
        y="62"
        fill="url(#silver)"
        fontSize="72"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="400"
      >
        R
      </text>
      {/* Linha separadora sutil */}
      <rect x="12" y="70" width="130" height="1" fill="url(#goldLine)" rx="0.5" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const { locale, setLocale, t } = useLanguage();

  const projects = [
    { label: 'Agrow.pay', href: '/portfolio-marcusr/agrow', accent: 'bg-emerald-500' },
    { label: 'Riocard Mais', href: '/portfolio-marcusr/riocard', accent: 'bg-orange-500' },
    { label: t('IA + Design', 'AI + Design'), href: '/portfolio-marcusr/ia-design', accent: 'bg-violet-500' },
  ];

  const links = [
    {
      label: t('Meus Projetos', 'My Projects'),
      href: '#projetos',
    },
    {
      label: t('Vamos tomar um café', "Let's have a coffee"),
      href: '#contato',
    },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full border-b bg-foreground text-background md:rounded-md md:border md:transition-all md:duration-300 md:ease-out',
        scrolled && !open
          ? 'border-foreground/80 bg-foreground/95 supports-[backdrop-filter]:bg-foreground/80 backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow-lg'
          : 'border-transparent md:max-w-5xl',
        open && 'bg-foreground',
      )}
    >
      <nav
        className={cn(
          'relative flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          },
        )}
      >
        {/* Left — Logo */}
        <a href="#" className="flex items-center shrink-0">
          <MRLogo className="h-10 w-auto" />
        </a>

        {/* Center — Language Toggle */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <LanguageToggle locale={locale} onChange={setLocale} />
        </div>

        {/* Right — Nav links (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <a
              key={i}
              className="inline-flex items-center justify-center rounded-lg px-4 py-1.5 text-[15px] font-semibold text-background/85 transition-colors hover:bg-background/10 hover:text-background"
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — Hamburger (mobile) */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg border border-background/25 text-background hover:bg-background/10 transition-colors">
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </button>
      </nav>
      <div
        className={cn(
          'bg-foreground fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-background/10 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4',
          )}
        >
          <div className="grid gap-y-1">
            {/* Meus Projetos + subcategorias */}
            <a
              className="inline-flex items-center justify-start rounded-lg px-4 py-2.5 text-[15px] font-semibold text-background/85 transition-colors hover:bg-background/10 hover:text-background"
              href="#projetos"
              onClick={(e) => handleClick(e, '#projetos')}
            >
              {t('Meus Projetos', 'My Projects')}
            </a>
            <div className="ml-4 grid gap-y-0.5 mb-2">
              {projects.map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[14px] text-background/50 font-medium transition-colors hover:bg-background/10 hover:text-background/80 group"
                >
                  <span className={`h-2 w-2 rounded-full ${project.accent} shrink-0 opacity-60 group-hover:opacity-100 transition-opacity`} />
                  {project.label}
                  <ChevronRight className="h-3.5 w-3.5 ml-auto opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>

            {/* Contato */}
            <a
              className="inline-flex items-center justify-start rounded-lg px-4 py-2.5 text-[15px] font-semibold text-background/85 transition-colors hover:bg-background/10 hover:text-background"
              href="#contato"
              onClick={(e) => handleClick(e, '#contato')}
            >
              {t('Vamos tomar um café', "Let's have a coffee")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
