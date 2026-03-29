import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { content } from '@/lib/content';

const links = [
  { href: '/',        label: 'Home'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Lockup Carpentry',
  'Cladding Services',
  'Fixing',
  'EzyJamb Doors',
  'Shadow Line Doors',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const phone = content.business.phone || '';
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;
  const email = content.pages.contact.email;

  return (
    <footer style={{ backgroundColor: 'var(--color-surface)' }} className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p
              className="text-white font-bold text-xl mb-3 uppercase"
              style={{ fontFamily: 'var(--font-barlow, system-ui)', letterSpacing: '0.05em' }}
            >
              Dynamic<span style={{ color: 'var(--color-accent)' }}>.</span>
            </p>
            <p style={{ color: 'var(--color-muted)' }} className="text-sm leading-relaxed max-w-xs">
              {content.business.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Navigate</p>
            <ul className="flex flex-col gap-2">
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    style={{ color: 'var(--color-muted)' }}
                    className="text-sm hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Services</p>
            <ul className="flex flex-col gap-2">
              {services.map(s => (
                <li key={s}>
                  <span style={{ color: 'var(--color-muted)' }} className="text-sm">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href={phoneHref}
                className="flex items-center gap-2 text-sm hover:text-white transition-colors duration-200"
                style={{ color: 'var(--color-accent)' }}
              >
                <Phone size={14} />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                style={{ color: 'var(--color-muted)' }}
                className="flex items-center gap-2 text-sm hover:text-white transition-colors duration-200"
              >
                <Mail size={14} />
                {email}
              </a>
              <span
                style={{ color: 'var(--color-muted)' }}
                className="flex items-center gap-2 text-sm"
              >
                <MapPin size={14} />
                {content.business.location}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: 'var(--color-muted)' }} className="text-xs">
            &copy; {year} {content.business.name}. All rights reserved.
          </p>
          <p style={{ color: 'var(--color-muted)' }} className="text-xs">
            Built by{' '}
            <a href="https://webbaura.com" className="hover:text-white transition-colors">
              Webbaura
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
