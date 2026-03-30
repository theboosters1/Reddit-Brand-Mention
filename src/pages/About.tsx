import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { Users, Target, Heart, Shield } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-24 pb-24 sm:pt-32 sm:pb-32">
      <SEO
        title="About Us - Our Mission to Protect Your Brand"
        description="Learn about the team behind RedditBrandMention and why we are dedicated to helping brands navigate the complex world of Reddit."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">We're on a mission to make Reddit safer for brands.</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Reddit is the front page of the internet, but for brands, it can be a wild west. We built RedditBrandMention to give companies the tools they need to listen, learn, and engage authentically with their communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the standard for community-first brand management, where engagement is based on value and authenticity rather than just advertising.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Heart className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in transparency, community respect, and data integrity. We build tools that empower brands to be helpful members of the subreddits they monitor.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale">
             <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">TECHCORP</div>
             <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">SAASLY</div>
             <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">BRANDIFY</div>
             <div className="h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">MARKETGO</div>
          </div>
        </div>
      </div>
    </div>
  );
};
