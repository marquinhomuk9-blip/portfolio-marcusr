'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { useLanguage } from '@/components/ui/language-context';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
      label: t('Sobre mim', 'About me'),
      href: '#sobre',
    },
    {
      label: t('Meus Projetos', 'My Projects'),
      href: '#projetos',
    },
    {
      label: t('Falar comigo', 'Get in touch'),
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
    if (href === '#contato') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      return;
    }
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

        {/* Center — Language Toggle (mobile only centered, desktop flows with nav) */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <LanguageToggle locale={locale} onChange={setLocale} />
        </div>

        {/* Right — Nav links (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle locale={locale} onChange={setLocale} />
          {links.slice(0, -1).map((link, i) => (
            <a
              key={i}
              className="inline-flex items-center justify-center rounded-lg px-4 py-1.5 text-[15px] font-semibold text-background/85 transition-colors hover:bg-background/10 hover:text-background"
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="inline-flex items-center gap-2 justify-center rounded-lg px-4 py-1.5 text-[15px] font-semibold bg-primary text-foreground transition-colors hover:bg-primary/85"
            href={links[links.length - 1].href}
            onClick={(e) => handleClick(e, links[links.length - 1].href)}
          >
            <WhatsAppIcon className="h-4 w-4" />
            {links[links.length - 1].label}
          </a>
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
            {/* Sobre mim */}
            <a
              className="inline-flex items-center justify-start rounded-lg px-4 py-2.5 text-[15px] font-semibold text-background/85 transition-colors hover:bg-background/10 hover:text-background"
              href="#sobre"
              onClick={(e) => handleClick(e, '#sobre')}
            >
              {t('Sobre mim', 'About me')}
            </a>

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
              className="inline-flex items-center gap-2 justify-center rounded-lg px-4 py-2.5 text-[15px] font-semibold bg-primary text-foreground transition-colors hover:bg-primary/85 mx-4 mt-2"
              href="#contato"
              onClick={(e) => handleClick(e, '#contato')}
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t('Falar comigo', 'Get in touch')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
