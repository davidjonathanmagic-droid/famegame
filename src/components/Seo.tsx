import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  structuredData?: Record<string, any>;
}

const ensureTag = (selector: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

export const Seo = ({ title, description, canonicalPath, image, structuredData }: SeoProps) => {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalHref = origin + canonicalPath;

    document.title = title;

    const setMeta = (selector: string, create: () => HTMLElement, set: (el: HTMLElement) => void) => {
      const el = ensureTag(selector, create);
      set(el);
    };

    setMeta('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    }, (el) => el.setAttribute('content', description));

    setMeta('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }, (el) => el.setAttribute('href', canonicalHref));

    setMeta('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      return m;
    }, (el) => el.setAttribute('content', title));

    setMeta('meta[property="og:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:description');
      return m;
    }, (el) => el.setAttribute('content', description));

    setMeta('meta[property="og:type"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:type');
      return m;
    }, (el) => el.setAttribute('content', 'website'));

    setMeta('meta[property="og:image"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:image');
      return m;
    }, (el) => el.setAttribute('content', image || canonicalHref + '/opengraph.jpg'));

    setMeta('meta[name="twitter:card"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'twitter:card');
      return m;
    }, (el) => el.setAttribute('content', 'summary_large_image'));

    if (image) {
      setMeta('meta[name="twitter:image"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'twitter:image');
        return m;
      }, (el) => el.setAttribute('content', image));
    }

    // JSON-LD structured data
    const scriptId = `ldjson-${canonicalPath.replace(/\W/g, '')}`;
    let ld = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = scriptId;
      document.head.appendChild(ld);
    }
    if (structuredData) {
      ld.text = JSON.stringify(structuredData);
    }

    return () => {
      // Keep canonical/meta persistent; do not remove on unmount to avoid flicker in SPA navigation.
    };
  }, [title, description, canonicalPath, image, structuredData]);

  return null;
};

export default Seo;
