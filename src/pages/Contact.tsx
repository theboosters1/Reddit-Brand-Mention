import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 pb-24 sm:pt-32 sm:pb-32">
      <SEO
        title="Contact Us - Get in Touch with Our Team"
        description="Have questions about RedditBrandMention? Contact our support or sales team for assistance."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">Let's talk about your brand.</h1>
            <p className="text-lg text-gray-600 mb-12">
              Whether you're a small startup or a global enterprise, we can help you navigate Reddit effectively.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Mail className="text-orange-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">hello@redditbrandmention.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <MessageSquare className="text-orange-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Live Chat</h4>
                  <p className="text-gray-600">Available Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="text-orange-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Office</h4>
                  <p className="text-gray-600">123 Reddit Way, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-sm hover:bg-orange-700 transition-all flex items-center justify-center">
                Send Message <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
