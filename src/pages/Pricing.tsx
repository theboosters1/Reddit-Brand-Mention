import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '@/src/components/SEO';

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals and small projects.",
    features: [
      "3 Keywords Tracked",
      "Daily Email Digest",
      "Basic Sentiment Analysis",
      "Community Support",
      "1 User Seat"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$49",
    period: "/mo",
    description: "Ideal for growing brands and agencies.",
    features: [
      "25 Keywords Tracked",
      "Instant Alerts (Slack/Discord)",
      "Advanced Sentiment Analysis",
      "AEO/GEO Optimization Tools",
      "5 User Seats",
      "Priority Support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs.",
    features: [
      "Unlimited Keywords",
      "API Access",
      "White-label Reports",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA Guarantee"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <div className="pt-24 pb-24 sm:pt-32 sm:pb-32">
      <SEO
        title="Pricing Plans - Choose Your Reddit Monitoring Strategy"
        description="Affordable pricing for brands of all sizes. From free keyword tracking to enterprise-grade reputation management."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your brand's needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular ? 'border-orange-600 shadow-xl ring-1 ring-orange-600' : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                  plan.popular
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

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
