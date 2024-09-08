"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Sparkles, Users, TrendingUp } from 'lucide-react';
import Footer from '@/components/footer';
import ComparisonTable from '@/components/comparissionTable';
import ImageCarousel from '@/components/imageCarousel';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="flex justify-between items-center">
          <nav>
          </nav>
        </header>

        <main>
          
          <section className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-10">
          <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full">
            <BookOpen size={20} />
          </div>
            <span className="text-2xl font-bold">Rexplore</span>
          </div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover Your Next Great Read
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-stone-600 dark:text-stone-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI-powered book recommendations tailored just for you
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/dashboard" className='w-full flex items-center justify-center'>
                <button className="bg-stone-800 text-stone-100 dark:bg-stone-200 dark:text-stone-800 px-8 py-3 rounded-md font-semibold hover:bg-stone-700 dark:hover:bg-stone-300 transition duration-300 flex items-center">
                  Get Started for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </section>

          <section id="features" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Rexplore?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI-Powered Recommendations"
                description="Get personalized book suggestions based on your reading preferences and history."
              />
              <FeatureCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="Stay on Trend"
                description="Discover the latest bestsellers and rising stars in the literary world."
              />
              <FeatureCard
                icon={<Users className="w-6 h-6" />}
                title="Community Insights"
                description="Connect with fellow readers and share your thoughts on your favorite books."
              />
            </div>
          </section>
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience it in action</h2>
            <ImageCarousel />
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Rexplore and others</h2>
            <ComparisonTable/>
          </section>
          
        </main>
      </div>
      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-md"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-stone-700 dark:text-stone-300 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-stone-600 dark:text-stone-400">{description}</p>
    </motion.div>
  );
};

export default LandingPage;