import contentJson from '@/content.json';

export interface ServiceItem   { title: string; description: string; price?: string; icon?: string; detail?: string; }
export interface PortfolioItem { title: string; description: string; url: string; image?: string; }
export interface Value         { title: string; body: string; }
export interface Stat          { value: string; label: string; }

export interface Content {
  business: {
    name:        string;
    tagline:     string;
    description: string;
    industry?:   string;
    location?:   string;
    phone?:      string;
    address?:    { street?: string; city?: string; state?: string; country?: string; };
  };
  philosophy?:   string;
  services?:     ServiceItem[];
  seo?: {
    siteUrl?:  string;
    keywords?: string[];
  };
  social?: {
    instagram?: string;
    linkedin?:  string;
    facebook?:  string;
    twitter?:   string;
  };
  pages: {
    home: {
      hero: {
        headline:     string;
        subheadline?: string;
        value_prop?:  string;
        tagline?:     string;
        descriptor?:  string;
        trust_line?:  string;
        cta_primary?: string;
        cta_secondary?:string;
        cta?:         string;   // legacy
        image_alt?:   string;
      };
      stats?:           Stat[];
      services_section?:{ label?: string; heading?: string; subheading?: string; };
      cta?:             { heading?: string; subheading?: string; cta_primary?: string; cta_secondary?: string; };
      sections?:        unknown[];
    };
    about:     { title?: string; headline: string; content: string; values?: Value[]; };
    services:  { headline: string; subheadline?: string; items?: ServiceItem[]; };
    portfolio: { headline: string; subheadline?: string; items?: PortfolioItem[]; };
    contact:   { headline: string; subheadline?: string; email: string; cta?: string; };
  };
}

export const content = contentJson as unknown as Content;

export type SiteContent = Content;
export function getContent(): Content { return content; }
