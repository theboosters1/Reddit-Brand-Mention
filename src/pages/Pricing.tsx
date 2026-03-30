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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-24 text-center">
          <p className="text-gray-500 text-sm mb-4 italic">All plans include a 14-day free trial of Professional features.</p>
          <div className="flex justify-center space-x-8 grayscale opacity-50">
            {/* Mock logos for trust */}
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
