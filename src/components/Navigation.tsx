import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, MessageSquare, Shield, BarChart3, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">RedditBrandMention</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-orange-600",
                    isActive ? "text-orange-600" : "text-gray-600"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/get-started"
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-600 hover:text-orange-600"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/get-started"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-orange-600 text-white px-4 py-3 rounded-xl text-base font-medium"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center">
                <MessageSquare className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-gray-900 text-nowrap">RedditBrandMention</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The ultimate tool for tracking brand mentions on Reddit. Protect your reputation and engage with your community effectively.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/#features" className="text-gray-600 hover:text-orange-600 text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-orange-600 text-sm">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-orange-600 text-sm">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-600 hover:text-orange-600 text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-orange-600 text-sm">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-orange-600 text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-gray-600 hover:text-orange-600 text-sm">Blog</Link></li>
              <li><Link to="/docs" className="text-gray-600 hover:text-orange-600 text-sm">Documentation</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-orange-600 text-sm">Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            © 2026 RedditBrandMention. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477 4.072 4.072 0 01-1.859-.513v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
