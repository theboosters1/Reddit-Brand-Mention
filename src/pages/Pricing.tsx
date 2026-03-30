import React from 'react';
import { SEO } from '@/src/components/SEO';
import { PricingSection } from '@/src/components/PricingSection';

export const Pricing = () => {
  return (
    <div className="pt-24 pb-24 sm:pt-32 sm:pb-32">
      <SEO
        title="Pricing Plans - Choose Your Reddit Monitoring Strategy"
        description="Affordable pricing for brands of all sizes. From free keyword tracking to enterprise-grade reputation management."
      />

      <PricingSection />
    </div>
  );
};
