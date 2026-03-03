import brandJson from '@/brand.json';

export interface DesignSpec {
  hero_style?:      string;
  services_style?:  string;
  gallery_style?:   string | null;
  cta_style?:       string;
  nav_style?:       string;
  mood?:            string;
  colour_scheme?:   string;
  heading_style?:   string;
  visual_weight?:   string;
  uses_animation?:  boolean;
  uses_gradient?:   boolean;
}

export interface BrandConfig {
  primary?:     string;
  secondary?:   string;
  accent?:      string;
  accentHover?: string;
  background?:  string;
  surface?:     string;
  border?:      string;
  muted?:       string;
  text?:        string;
  textMuted?:   string;
  tagline?:     string;
  design?:      DesignSpec;
  [key: string]: unknown;
}

export const brand = brandJson as unknown as BrandConfig;

export function getBrand(): BrandConfig { return brand; }
export function getCSSVariables(): Record<string, string> {
  return {
    '--color-primary':    brand.primary    || '#1a1a2e',
    '--color-accent':     brand.accent     || '#e94560',
    '--color-background': brand.background || '#0f0f1a',
    '--color-surface':    brand.surface    || '#1a1a2e',
    '--color-text':       brand.text       || '#f0f0f0',
    '--color-text-muted': brand.textMuted  || 'rgba(240,240,240,0.55)',
    '--color-border':     brand.border     || 'rgba(255,255,255,0.08)',
  };
}
