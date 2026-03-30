import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export const PricingSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">Pricing</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, Transparent Pricing</p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your brand's needs. No hidden fees, cancel anytime.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

              <Link
                to="/get-started"
                className={`block w-full py-4 rounded-xl font-bold text-sm text-center transition-all ${
                  plan.popular
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
