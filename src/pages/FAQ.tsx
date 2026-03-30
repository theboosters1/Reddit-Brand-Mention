import React from 'react';
import { motion } from 'motion/react';
import { SEO, faqSchema } from '@/src/components/SEO';

const faqs = [
  {
    question: "How does RedditBrandMention track keywords?",
    answer: "We use high-frequency API polling and stream processing to monitor every new post and comment across Reddit. Our system matches your keywords against this stream in milliseconds."
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer: "GEO is the practice of optimizing your brand's presence for AI-driven search engines like Perplexity or ChatGPT. Since these engines use Reddit as a high-authority data source for community sentiment, having positive, authentic mentions on Reddit is crucial for how AI describes your brand."
  },
  {
    question: "Can I track my competitors?",
    answer: "Absolutely. Many of our users track competitor names to identify customer pain points and offer their own product as a solution in the same thread."
  },
  {
    question: "Is it safe to use for my Reddit account?",
    answer: "Yes. We use official Reddit API protocols and never ask for your Reddit password. We only monitor public data."
  },
  {
    question: "How do instant alerts work?",
    answer: "You can configure alerts to be sent to your Slack workspace, Discord server, or Email. You can set filters so you only get notified for high-karma posts or specific subreddits."
  },
  {
    question: "What is AEO?",
    answer: "Answer Engine Optimization (AEO) focuses on providing direct, concise answers that search engines (and AI engines) can easily extract to answer user queries directly on the results page."
  }
];

export const FAQPage = () => {
  return (
    <div className="pt-24 pb-24 sm:pt-32 sm:pb-32">
      <SEO
        title="FAQ - Everything About Reddit Monitoring, AEO & GEO"
        description="Find answers to common questions about Reddit brand tracking, reputation management, and modern SEO strategies."
        schema={faqSchema(faqs)}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Learn more about how Reddit monitoring can transform your digital marketing strategy.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-orange-50 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">Our team is here to help you get the most out of RedditBrandMention.</p>
          <a
            href="mailto:support@redditbrandmention.com"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};
