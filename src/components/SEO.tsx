import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, schema }) => {
  React.useEffect(() => {
    document.title = `${title} | Reddit Brand Mention`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, schema]);

  return null;
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reddit Brand Mention",
  "url": "https://redditbrandmention.com",
  "logo": "https://redditbrandmention.com/logo.png",
  "sameAs": [
    "https://twitter.com/redditbrandmention",
    "https://linkedin.com/company/redditbrandmention"
  ]
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
