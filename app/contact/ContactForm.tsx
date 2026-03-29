'use client';

export default function ContactForm() {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white/60 mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3.5 rounded-lg border text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'rgba(255,255,255,0.08)',
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/60 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3.5 rounded-lg border text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'rgba(255,255,255,0.08)',
            }}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/60 mb-2">
          Phone <span className="text-white/25">(optional)</span>
        </label>
        <input
          type="tel"
          placeholder="Your phone number"
          className="w-full px-4 py-3.5 rounded-lg border text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/60 mb-2">
          Tell us about your project
        </label>
        <textarea
          rows={6}
          placeholder="What are you building? What carpentry do you need?"
          className="w-full px-4 py-3.5 rounded-lg border text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none transition-all"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-lg text-white font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        Send Message
      </button>
    </form>
  );
}
