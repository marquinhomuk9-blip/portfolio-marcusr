'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

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

  const links = [
    {
      label: 'Meus Projetos',
      href: '#projetos',
    },
    {
      label: 'Vamos tomar um café',
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
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          },
        )}
      >
        <a href="#" className="flex items-center">
          <MRLogo className="h-10 w-auto" />
        </a>
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
        <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden border-background/30 text-background hover:bg-background/10 hover:text-background">
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
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
          <div className="grid gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                className="inline-flex items-center justify-start rounded-lg px-4 py-2.5 text-[15px] font-semibold text-background/85 transition-colors hover:bg-background/10 hover:text-background"
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
