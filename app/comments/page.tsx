"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaComment, FaUser, FaPaperPlane, FaClock, FaHeart } from 'react-icons/fa';

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
  likes: number;
}

// Sample initial comments
const INITIAL_COMMENTS: Comment[] = [
  {
    id: 1,
    name: 'আনোনিমাস',
    message: 'আমিনুল হক আমাদের এলাকার জন্য অনেক কাজ করেছেন। তার নেতৃত্বে আমরা উন্নতি দেখছি।',
    date: 'নভেম্বর ১২, ২০২৫',
    likes: 24
  },
  {
    id: 2,
    name: 'রহিম',
    message: 'শিক্ষা ক্ষেত্রে তার অবদান প্রশংসনীয়। আমাদের গ্রামে নতুন স্কুল প্রতিষ্ঠায় তিনি সাহায্য করেছেন।',
    date: 'নভেম্বর ১১, ২০২৫',
    likes: 18
  },
  {
    id: 3,
    name: 'ফাতেমা',
    message: 'কৃষকদের জন্য তার কর্মসূচি খুবই উপকারী। আমার পরিবার এর থেকে অনেক সাহায্য পেয়েছে।',
    date: 'নভেম্বর ১০, ২০২৫',
    likes: 31
  },
];

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.message.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      name: formData.name.trim() || 'আনোনিমাস',
      message: formData.message.trim(),
      date: new Date().toLocaleDateString('bn-BD', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      likes: 0
    };

    setComments([newComment, ...comments]);
    setFormData({ name: '', message: '' });
    setSubmitted(true);
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleLike = (id: number) => {
    setComments(comments.map(comment => 
      comment.id === id 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-green-900 via-green-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-green-300 font-bold text-sm md:text-base uppercase tracking-wider">আপনার মতামত</span>
            <h1 className="text-5xl md:text-7xl font-black mt-3 mb-6">
              মন্তব্য করুন
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              আপনার চিন্তা, মতামত এবং পরামর্শ আমাদের সাথে শেয়ার করুন। আপনি চাইলে নাম গোপন রাখতে পারেন।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white text-center shadow-xl"
            >
              <FaComment className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-black mb-1">{comments.length}</div>
              <div className="text-white/90 font-semibold">মোট মন্তব্য</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 text-white text-center shadow-xl"
            >
              <FaUser className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-black mb-1">{comments.length}</div>
              <div className="text-white/90 font-semibold">অংশগ্রহণকারী</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-6 text-white text-center shadow-xl"
            >
              <FaHeart className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-black mb-1">
                {comments.reduce((sum, c) => sum + c.likes, 0)}
              </div>
              <div className="text-white/90 font-semibold">মোট পছন্দ</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comment Form and Comments Display */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Comment Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                      <FaPaperPlane className="text-white text-xl" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900">
                      নতুন মন্তব্য
                    </h2>
                  </div>

                  {submitted && (
                    <div className="mb-4 p-4 bg-green-600 text-white rounded-xl text-center font-semibold">
                      ✓ আপনার মন্তব্য যুক্ত হয়েছে!
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        আপনার নাম (ঐচ্ছিক)
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="নাম লিখুন অথবা খালি রাখুন"
                        className="w-full px-4 py-3 rounded-xl border-2 border-green-200 focus:border-green-500 focus:outline-none transition-all"
                      />
                      <p className="text-xs text-slate-600 mt-1">
                        * খালি রাখলে 'আনোনিমাস' হিসেবে দেখাবে
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        আপনার মন্তব্য <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        placeholder="আপনার মতামত লিখুন..."
                        className="w-full px-4 py-3 rounded-xl border-2 border-green-200 focus:border-green-500 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
                    >
                      <FaPaperPlane />
                      মন্তব্য পাঠান
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Comments Display */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                  সকল মন্তব্য
                </h2>
                <p className="text-slate-600">
                  {comments.length} টি মন্তব্য পাওয়া গেছে
                </p>
              </div>

              <div className="space-y-6">
                {comments.map((comment, idx) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                          <FaUser className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">
                            {comment.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <FaClock className="text-xs" />
                            {comment.date}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleLike(comment.id)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-all"
                      >
                        <FaHeart />
                        <span className="font-bold">{comment.likes}</span>
                      </button>
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {comment.message}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-red-50">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              আপনার মতামত গুরুত্বপূর্ণ
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              আপনার প্রতিটি মন্তব্য আমাদের আরও ভালো সেবা প্রদানে সাহায্য করে। নিঃসংকোচে আপনার মতামত শেয়ার করুন।
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

