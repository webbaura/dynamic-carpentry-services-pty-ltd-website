'use client';

import { content } from '@/lib/content';

export default function Contact() {
  const { headline, subheadline, email } = content.pages.contact;

  return (
    <div>
      <section style={{ backgroundColor: 'var(--color-primary)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ color: 'var(--color-accent)' }} className="text-sm font-semibold uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-5xl font-black text-white mb-4">{headline}</h1>
          <p className="text-slate-300 text-xl max-w-2xl">{subheadline}</p>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-background)' }} className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label style={{ color: 'var(--color-primary)' }} className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ borderColor: 'var(--color-border)' }}
                />
              </div>
              <div>
                <label style={{ color: 'var(--color-primary)' }} className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ borderColor: 'var(--color-border)' }}
                />
              </div>
            </div>

            <div>
              <label style={{ color: 'var(--color-primary)' }} className="block text-sm font-semibold mb-2">
                Tell us about your project
              </label>
              <textarea
                rows={6}
                placeholder="What are you building?"
                className="w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                style={{ borderColor: 'var(--color-border)' }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              Send Message →
            </button>
          </form>

          <p style={{ color: 'var(--color-muted)' }} className="text-center text-sm mt-8">
            Or email us directly at{' '}
            <a href={`mailto:${email}`} style={{ color: 'var(--color-accent)' }} className="font-semibold">
              {email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
