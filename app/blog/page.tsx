"use client";
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { FaSearch, FaTags } from 'react-icons/fa';
import { useState } from 'react';

const posts = [
  {
    title: 'সবার জন্য শিক্ষা সংস্কার',
    excerpt: 'গ্রামীণ অঞ্চল জুড়ে আধুনিক শিক্ষার প্রবেশাধিকার প্রসারিত করছি।',
    date: 'নভেম্বর ১, ২০২৫',
    author: 'অ্যাডমিন',
    category: 'শিক্ষা',
    href: '/blog/education-reform',
  },
  {
    title: 'কৃষিকে ক্ষমতায়ন',
    excerpt: 'কৃষকদের জন্য স্মার্ট সেচ এবং সমবায় মডেল।',
    date: 'অক্টোবর ২৫, ২০২৫',
    author: 'অ্যাডমিন',
    category: 'কৃষি',
    href: '/blog/agriculture',
  },
  {
    title: 'শিল্প ও সংস্কৃতি উদ্যোগ',
    excerpt: 'ঐতিহ্য উদযাপন এবং তরুণ সৃজনশীলদের ক্ষমতায়ন।',
    date: 'অক্টোবর ১০, ২০২৫',
    author: 'অ্যাডমিন',
    category: 'সংস্কৃতি',
    href: '/blog/arts-culture',
  },
  {
    title: 'শক্তিশালী সম্প্রদায় গড়া',
    excerpt: 'কীভাবে তৃণমূল উদ্যোগগুলি স্থানীয় পাড়াকে রূপান্তরিত করছে।',
    date: 'অক্টোবর ৫, ২০২৫',
    author: 'অ্যাডমিন',
    category: 'সম্প্রদায়',
    href: '/blog/community-building',
  },
  {
    title: 'গ্রামীণ এলাকায় ডিজিটাল রূপান্তর',
    excerpt: 'প্রতিটি গ্রামে প্রযুক্তি এবং সংযোগ নিয়ে আসা।',
    date: 'সেপ্টেম্বর ২৮, ২০২৫',
    author: 'অ্যাডমিন',
    category: 'প্রযুক্তি',
    href: '/blog/digital-transformation',
  },
  {
    title: 'টেকসই উন্নয়ন লক্ষ্য',
    excerpt: 'বাংলাদেশ জুড়ে জাতিসংঘের এসডিজি অর্জনে আমাদের প্রতিশ্রুতি।',
    date: 'সেপ্টেম্বর ২০, ২০২৫',
    author: 'অ্যাডমিন',
    category: 'নীতি',
    href: '/blog/sdg-commitment',
  },
];

const categories = ['সব', 'শিক্ষা', 'কৃষি', 'সংস্কৃতি', 'সম্প্রদায়', 'প্রযুক্তি', 'নীতি'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const filteredPosts = selectedCategory === 'সব' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-slate-900 via-green-900 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-green-300 font-bold text-sm md:text-base uppercase tracking-wider">সর্বশেষ আপডেট</span>
            <h1 className="text-5xl md:text-7xl font-black mt-3 mb-6">
              অন্তর্দৃষ্টি ও গল্প
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              বাংলাদেশ জুড়ে আমাদের কাজ থেকে আপডেট, অন্তর্দৃষ্টি এবং গল্প
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <FaTags className="text-slate-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">এই বিভাগে কোন পোস্ট পাওয়া যায়নি।</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-red-50">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 md:p-16 shadow-xl text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              আপডেট থাকুন
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              আমাদের নিউজলেটারে সাবস্ক্রাইব করুন সর্বশেষ আপডেট, গল্প এবং অন্তর্দৃষ্টির জন্য।
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-full focus:border-green-500 focus:outline-none text-slate-900"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-full hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-green-400 font-bold text-sm md:text-base uppercase tracking-wider">আমরা যে বিষয়গুলি কভার করি</span>
            <h2 className="text-4xl md:text-6xl font-black mt-3 mb-6">
              আমাদের ফোকাস এলাকা
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              আমরা যে মূল বিষয়গুলি সম্পর্কে লিখি তা অন্বেষণ করুন
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(c => c !== 'সব').map((category, idx) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => {
                  setSelectedCategory(category);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 text-center"
              >
                <h3 className="text-lg font-bold">{category}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


