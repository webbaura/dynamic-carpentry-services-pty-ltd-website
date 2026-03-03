import Link from 'next/link';
import { content } from '@/lib/content';

const links = [
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)' }} className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="text-white font-black text-lg mb-3">{content.business.name}</p>
            <p style={{ color: 'var(--color-muted)' }} className="text-sm leading-relaxed max-w-xs">
              {content.business.tagline}
            </p>
          </div>

          {/* Links */}
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

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
            <a href={`mailto:${content.pages.contact.email}`}
              style={{ color: 'var(--color-muted)' }}
              className="text-sm hover:text-white transition-colors duration-200 block mb-2">
              {content.pages.contact.email}
            </a>
            {content.business.location && (
              <p style={{ color: 'var(--color-muted)' }} className="text-sm">
                {content.business.location}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: 'var(--color-muted)' }} className="text-xs">
            © {year} {content.business.name}. All rights reserved.
          </p>
          <p style={{ color: 'var(--color-muted)' }} className="text-xs">
            Built by <a href="https://webbaura.com" className="hover:text-white transition-colors">Webbaura</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
