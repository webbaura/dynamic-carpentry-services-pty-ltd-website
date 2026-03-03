export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: 'var(--color-accent)' }}
       className="text-xs font-bold uppercase tracking-[0.2em] mb-4">
      {children}
    </p>
  );
}
export default SectionLabel;
