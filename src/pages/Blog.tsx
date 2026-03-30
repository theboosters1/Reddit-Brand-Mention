import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';
import { SEO } from '@/src/components/SEO';

const BLOG_POSTS = [
  {
    id: 1,
    title: "How to Optimize for Reddit AEO in 2026",
    excerpt: "Learn the latest strategies for Answer Engine Optimization on Reddit to ensure your brand is cited by AI search engines.",
    date: "March 28, 2026",
    author: "Marketing Team",
    category: "SEO Strategy",
    image: "https://picsum.photos/seed/aeo/800/400"
  },
  {
    id: 2,
    title: "The Rise of GEO: Why Reddit is Your Best Data Source",
    excerpt: "Generative Engine Optimization is changing the search landscape. Discover why Reddit community sentiment is the key to success.",
    date: "March 25, 2026",
    author: "Data Science",
    category: "GEO",
    image: "https://picsum.photos/seed/geo/800/400"
  },
  {
    id: 3,
    title: "Top 10 Subreddits for Brand Monitoring",
    excerpt: "Not all subreddits are created equal. We've compiled a list of the most influential communities for brand reputation.",
    date: "March 20, 2026",
    author: "Community Manager",
    category: "Monitoring",
    image: "https://picsum.photos/seed/subreddits/800/400"
  },
  {
    id: 4,
    title: "Dealing with Negative Brand Mentions on Reddit",
    excerpt: "A step-by-step guide on how to handle criticism and turn negative threads into positive engagement opportunities.",
    date: "March 15, 2026",
    author: "PR Specialist",
    category: "Reputation",
    image: "https://picsum.photos/seed/reputation/800/400"
  },
  {
    id: 5,
    title: "Reddit Marketing vs. Traditional Social Media",
    excerpt: "Why Reddit requires a different approach than Facebook or Twitter, and how to master the 'un-marketing' style.",
    date: "March 10, 2026",
    author: "Strategy Lead",
    category: "Marketing",
    image: "https://picsum.photos/seed/marketing/800/400"
  },
  {
    id: 6,
    title: "Using AI to Analyze Reddit Sentiment",
    excerpt: "How machine learning models are helping brands understand the nuances of human conversation on the front page of the internet.",
    date: "March 5, 2026",
    author: "AI Engineer",
    category: "Technology",
    image: "https://picsum.photos/seed/ai/800/400"
  },
  {
    id: 7,
    title: "The Importance of Authenticity in Reddit Engagement",
    excerpt: "Redditors can smell a corporate shill from a mile away. Learn how to be authentic while representing your brand.",
    date: "March 1, 2026",
    author: "Community Manager",
    category: "Engagement",
    image: "https://picsum.photos/seed/authenticity/800/400"
  },
  {
    id: 8,
    title: "Case Study: How Brand X Grew 300% via Reddit",
    excerpt: "A deep dive into a successful Reddit-first growth strategy that leveraged community trust and AEO.",
    date: "February 25, 2026",
    author: "Growth Team",
    category: "Case Study",
    image: "https://picsum.photos/seed/casestudy/800/400"
  }
];

const POSTS_PER_PAGE = 3;

export const Blog = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = BLOG_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-24 sm:pt-32 sm:pb-32">
      <SEO
        title="Blog - Insights on Reddit Monitoring, AEO & GEO"
        description="Stay updated with the latest trends in Reddit brand management, Answer Engine Optimization, and reputation protection strategies."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Reddit Insights & Strategy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice on navigating the world's most influential community and optimizing for the future of search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {currentPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-orange-600 font-bold text-sm flex items-center group"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                    currentPage === page
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-200'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
