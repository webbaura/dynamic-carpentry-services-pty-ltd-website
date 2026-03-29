import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { content } from '@/lib/content';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Get a Free Quote',
  description: `Contact ${content.business.name} for a free carpentry quote in Melbourne. Call ${content.business.phone} or send us a message.`,
};

export default function Contact() {
  const { headline, subheadline, email } = content.pages.contact;
  const phone = content.business.phone || '';
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  return (
    <div>
      <section style={{ backgroundColor: 'var(--color-primary)' }} className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p
            style={{ color: 'var(--color-accent)' }}
            className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Contact
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-barlow, system-ui)' }}
          >
            {headline}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">{subheadline}</p>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-background)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-barlow, system-ui)' }}
              >
                Get in touch directly
              </h2>

              <div className="space-y-6">
                <a
                  href={phoneHref}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-surface)' }}
                  >
                    <Phone size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 mb-0.5">Phone</p>
                    <p className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors">
                      {phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-surface)' }}
                  >
                    <Mail size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 mb-0.5">Email</p>
                    <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                      {email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-surface)' }}
                  >
                    <MapPin size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 mb-0.5">Location</p>
                    <p className="text-white font-semibold">
                      {content.business.location}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mt-10 p-6 rounded-xl"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p className="text-white font-semibold mb-2">Prefer to call?</p>
                <p className="text-white/40 text-sm mb-4">
                  We pick up the phone. No call centres, no runaround.
                </p>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
                >
                  <Phone size={15} strokeWidth={2.5} />
                  Call {phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
