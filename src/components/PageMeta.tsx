import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  schema?: Record<string, unknown>;
}

export default function PageMeta({ title, description, keywords, image, schema }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    if (image) setMeta('og:image', image, 'property');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    if (image) setMeta('twitter:image', image, 'name');

    document.querySelectorAll('script[data-page-schema]').forEach((el) => el.remove());
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, image, schema]);

  return null;
}
