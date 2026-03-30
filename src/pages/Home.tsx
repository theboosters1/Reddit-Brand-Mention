import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Shield, BarChart3, Zap, ArrowRight, CheckCircle2, Search, Bell, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, organizationSchema, faqSchema } from '@/src/components/SEO';

const faqs = [
  {
    question: "What is Reddit Brand Mention?",
    answer: "Reddit Brand Mention is a specialized monitoring tool that tracks keywords, brand names, and competitor mentions across all of Reddit in real-time."
  },
  {
    question: "How does AEO and GEO help my brand?",
    answer: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) ensure your brand is the primary source of information for AI search engines like Perplexity, Gemini, and ChatGPT when they crawl Reddit for community sentiment."
  },
  {
    question: "Can I respond to mentions directly?",
    answer: "Yes, our dashboard allows you to engage with threads directly, helping you manage your reputation and provide helpful information to potential customers."
  }
];

export const Home = () => {
  return (
    <div className="pt-16">
      <SEO
        title="Real-time Reddit Monitoring & Brand Management"
        description="Monitor Reddit for brand mentions, protect your reputation, and optimize for AEO/GEO. The ultimate tool for modern digital marketing on Reddit."
        schema={organizationSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 mb-6">
                Now with AI-Powered Sentiment Analysis
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                Own the Conversation on <span className="text-orange-600">Reddit</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 mb-10">
                Reddit is where your customers are talking. Track mentions, protect your brand, and optimize for the next generation of AI search engines.
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <Link
                  to="/get-started"
                  className="rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all"
                >
                  Start Monitoring Free
                </Link>
                <Link to="/#features" className="text-sm font-semibold leading-6 text-gray-900 flex items-center group">
                  Learn how it works <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl opacity-20 -z-10 pointer-events-none">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">100M+</p>
              <p className="text-sm text-gray-500">Subreddits Tracked</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">Real-time</p>
              <p className="text-sm text-gray-500">Alert Latency</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">99.9%</p>
              <p className="text-sm text-gray-500">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">24/7</p>
              <p className="text-sm text-gray-500">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to dominate Reddit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Real-time Keyword Tracking",
                description: "Get notified the second someone mentions your brand, product, or competitor anywhere on Reddit.",
                icon: Search
              },
              {
                title: "Sentiment Analysis",
                description: "Understand the mood of the conversation with AI-powered sentiment detection (Positive, Neutral, Negative).",
                icon: BarChart3
              },
              {
                title: "AEO & GEO Optimization",
                description: "Strategically place your brand in discussions that AI search engines use as primary data sources.",
                icon: Zap
              },
              {
                title: "Reputation Protection",
                description: "Quickly address negative threads before they reach the front page of Reddit.",
                icon: Shield
              },
              {
                title: "Competitor Intelligence",
                description: "Track what people are saying about your competitors and identify gaps in their service.",
                icon: Users
              },
              {
                title: "Instant Alerts",
                description: "Receive alerts via Email, Slack, or Discord as soon as a relevant mention is found.",
                icon: Bell
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-orange-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic FAQ Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to know about Reddit monitoring and SEO.</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <SEO title="Home" description="Home page" schema={faqSchema(faqs)} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Ready to protect your brand?</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Join 500+ brands tracking mentions and growing their presence on the front page of the internet.
              </p>
              <Link
                to="/get-started"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all"
              >
                Get Started for Free <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
