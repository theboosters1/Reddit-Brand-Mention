import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

export const GetStarted = () => {
  const phoneNumber = "+923029626015";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="pt-24 pb-24 sm:pt-32 sm:pb-32">
      <SEO
        title="Get Started - Contact Us on WhatsApp"
        description="Ready to start monitoring Reddit? Contact us directly via WhatsApp for a quick setup and personalized demo."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="text-green-600 w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">Get Started with RedditBrandMention</h1>
          <p className="text-lg text-gray-600 mb-12">
            To provide the best personalized experience and quick setup, we handle all new registrations directly via WhatsApp. Message us now to get your account ready in minutes!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-6 h-6" />
              Message on WhatsApp
            </a>
            <a
              href={callUrl}
              className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
            >
              <Phone className="w-6 h-6" />
              Call Us Directly
            </a>
          </div>

          <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100 text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h3>
            <ul className="space-y-4">
              {[
                "We'll discuss your specific monitoring needs.",
                "Our team will help you select the best keywords for your brand.",
                "We'll set up your dashboard and alert integrations.",
                "You'll get a personalized walkthrough of the platform."
              ].map((step, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    <span className="text-orange-600 text-xs font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-gray-600">{step}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 text-gray-500 text-sm">
            Prefer email? Reach us at <a href="mailto:uaefreelancer2014@gmail.com" className="text-orange-600 hover:underline">uaefreelancer2014@gmail.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
