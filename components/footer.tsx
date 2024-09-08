import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-200 dark:bg-stone-900 text-stone-600 dark:text-stone-400 py-8 border-t shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">                Rexplore</h3>
            <p className="text-sm">Discover your next great read with AI-powered recommendations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-stone-800 dark:hover:text-stone-200">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-stone-800 dark:hover:text-stone-200">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-stone-800 dark:hover:text-stone-200">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-stone-800 dark:hover:text-stone-200">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-stone-800 dark:hover:text-stone-200">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-800 dark:hover:text-stone-200">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-800 dark:hover:text-stone-200">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-800 dark:hover:text-stone-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-300 dark:border-stone-700 text-center">
          <p>&copy; {new Date().getFullYear()} Rexplore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;