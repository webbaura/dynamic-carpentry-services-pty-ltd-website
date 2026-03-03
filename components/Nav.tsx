'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { content } from '@/lib/content';

const links = [
  { href: '/',        label: 'Home'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--color-primary)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-black text-lg tracking-tight hover:opacity-80 transition-opacity">
          {content.business.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact"
            style={{ backgroundColor: 'var(--color-accent)' }}
            className="px-5 py-2 rounded-lg text-white text-sm font-bold hover:opacity-90 transition-opacity">
            Get in Touch
          </Link>
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
          backgroundColor: 'var(--color-primary)',
        }}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white text-base font-medium transition-colors block py-1">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}
              style={{ backgroundColor: 'var(--color-accent)' }}
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-white text-sm font-bold hover:opacity-90 transition-opacity mt-2">
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
