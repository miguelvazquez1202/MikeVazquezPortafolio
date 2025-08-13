import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

export default function SEOHead({
  title,
  description,
  keywords,
  image = "https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_1200,h_630,g_center,q_auto,f_auto/v1753763272/WEB-03_a3iisf.jpg",
  url = window.location.href,
  type = "website",
  structuredData
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);

    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        (script as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(script);
      }
      (script as HTMLScriptElement).textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to restore defaults when component unmounts
    return () => {
      document.title = "Mike Vázquez - Fotógrafo y Cineasta Profesional | Hello Hi Producciones";
    };
  }, [title, description, keywords, image, url, type, structuredData]);

  return null; // This component doesn't render anything
}