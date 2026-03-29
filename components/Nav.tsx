'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { content } from '@/lib/content';

const links = [
  { href: '/',        label: 'Home'     },
  { href: '/about',   label: 'About'    },
  { href: '/contact', label: 'Contact'  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const phone = content.business.phone || '';
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity uppercase"
          style={{ fontFamily: 'var(--font-barlow, system-ui)', letterSpacing: '0.05em' }}
        >
          Dynamic<span style={{ color: 'var(--color-accent)' }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — phone number */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={phoneHref}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
          >
            <Phone size={15} strokeWidth={2.5} />
            <span>{phone}</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '400px' : '0',
          backgroundColor: 'rgba(10,10,10,0.98)',
        }}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white text-base font-medium transition-colors block py-1">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={phoneHref}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity mt-2"
              style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
            >
              <Phone size={15} strokeWidth={2.5} />
              Call {phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
