"use client";
import { Metadata } from 'next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaBookReader, FaSeedling, FaTheaterMasks, FaLandmark, FaArrowRight, FaUsers, FaTrophy, FaHeart, FaRocket } from 'react-icons/fa';
import { useRef } from 'react';
import TestimonialCarousel from './components/TestimonialCarousel';
import BlogCard from './components/BlogCard';
import WelcomeModal from './components/WelcomeModal';

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="overflow-hidden">
      {/* Welcome Modal */}
      <WelcomeModal />
      
      {/* Full-Screen Cinematic Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-red-900/80 z-10" />
          <img
            src="/aminul_haque.jpg"
            alt="Aminul Haque"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
              আমিনুল হক
            </h1>
            <p className="text-xl md:text-3xl font-light mb-4 text-white/90">
              আগামীর বাংলাদেশ গড়ছি
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
              শিক্ষা, কৃষি, শিল্প ও সংস্কৃতিতে নিবেদিত একজন নেতা — কর্মের মাধ্যমে সমাজকে ক্ষমতায়ন করছি
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#vision"
              className="group relative px-8 py-4 bg-red-600 rounded-full text-white font-bold text-lg shadow-2xl hover:bg-red-700 transition-all transform hover:scale-105"
            >
              আমাদের রূপকল্প দেখুন
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
            >
              অংশ নিন
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Floating Stats Section */}
      <section className="relative -mt-32 z-30 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: FaRocket, label: 'কর্মসূচি চালু হয়েছে', value: '২৫+', color: 'from-green-500 to-emerald-600' },
              { icon: FaUsers, label: 'সম্প্রদায়ে পৌঁছেছি', value: '১২০+', color: 'from-blue-500 to-cyan-600' },
              { icon: FaHeart, label: 'সক্রিয় স্বেচ্ছাসেবক', value: '৫K+', color: 'from-red-500 to-pink-600' },
              { icon: FaTrophy, label: 'পুরস্কার পেয়েছি', value: '১২', color: 'from-yellow-500 to-orange-600' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br ${item.color} rounded-2xl p-6 md:p-8 text-white shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 cursor-pointer`}>
                  <item.icon className="text-3xl md:text-4xl mb-3 opacity-90" />
                  <div className="text-3xl md:text-4xl font-black mb-1">{item.value}</div>
                  <div className="text-sm md:text-base font-medium opacity-90">{item.label}</div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section with Video */}
      <section id="vision" className="py-20 md:py-32 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-bold text-sm md:text-base uppercase tracking-wider">আমাদের ইশতেহার</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3 mb-6">
              উন্নত আগামীর রূপকল্প
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              আমাদের বিস্তৃত নির্বাচনী ইশতেহার দেখুন এবং জানুন কীভাবে আমরা একটি সমৃদ্ধ, অন্তর্ভুক্তিমূলক বাংলাদেশ গড়ছি
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.youtube.com/embed/AyL-WF3Uryo"
              title="Election Manifesto"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Programs Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-bold text-sm md:text-base uppercase tracking-wider">আমরা যা করি</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3 mb-6">
              রূপান্তরমূলক কর্মসূচি
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              বাংলাদেশ জুড়ে প্রকৃত পরিবর্তনের চালক চারটি স্তম্ভ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: FaBookReader,
                title: 'শিক্ষা সংস্কার',
                description: 'বিশ্বমানের শিক্ষা অবকাঠামো তৈরি করছি এবং প্রতিটি শিশুর জন্য মানসম্পন্ন শিক্ষার প্রবেশাধিকার প্রসারিত করছি।',
                color: 'from-blue-500 to-blue-700',
                delay: 0
              },
              {
                icon: FaSeedling,
                title: 'কৃষি উদ্ভাবন',
                description: 'আধুনিক কৌশল, স্মার্ট সেচ এবং টেকসই সমবায় মডেলের মাধ্যমে কৃষকদের ক্ষমতায়ন করছি।',
                color: 'from-green-500 to-green-700',
                delay: 0.1
              },
              {
                icon: FaTheaterMasks,
                title: 'শিল্প ও সংস্কৃতি',
                description: 'আমাদের সমৃদ্ধ ঐতিহ্য উদযাপন করছি এবং তরুণ শিল্পী ও সাংস্কৃতিক উদ্যোগকে ক্ষমতায়ন করছি।',
                color: 'from-purple-500 to-purple-700',
                delay: 0.2
              },
              {
                icon: FaLandmark,
                title: 'সুশাসন',
                description: 'স্বচ্ছ, জবাবদিহিমূলক নেতৃত্ব যা সততার সাথে জনগণের সেবায় নিবেদিত।',
                color: 'from-red-500 to-red-700',
                delay: 0.3
              },
            ].map((program) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: program.delay }}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-3xl group-hover:w-64 group-hover:h-64 transition-all duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <program.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-6 flex items-center text-green-600 font-semibold group-hover:text-red-600 transition-colors">
                    আরও জানুন <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Glassmorphism */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-red-50" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-bold text-sm md:text-base uppercase tracking-wider">জনগণের কণ্ঠস্বর</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3 mb-6">
              তারা যা বলেন
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              যে সম্প্রদায়গুলির সেবা করার সুযোগ পেয়েছি তাদের বাস্তব গল্প
            </p>
          </motion.div>

          <TestimonialCarousel
            testimonials={[
              { quote: "দূরদর্শী এবং সহানুভূতিশীল একজন নেতা। শিক্ষা সংস্কারে তার নিবেদন আমাদের সম্প্রদায়কে রূপান্তরিত করেছে।", author: "নুসরাত জে.", role: "শিক্ষক" },
              { quote: "আমার মতো কৃষকদের জন্য বাস্তবসম্মত সমাধান। কৃষি কর্মসূচিগুলি আমাদের জীবনে প্রকৃত পরিবর্তন এনেছে।", author: "রহিম ইউ.", role: "কৃষক" },
              { quote: "যুব ও সংস্কৃতিতে বিনিয়োগ। শিল্প উদ্যোগগুলি আমাদের শিশুদের অসাধারণ সুযোগ দিয়েছে।", author: "তানভীর এ.", role: "শিল্পী" },
              { quote: "স্বচ্ছ শাসন এবং জনগণের জন্য প্রকৃত যত্ন। একজন সত্যিকারের জনসেবক।", author: "ফাতিমা কে.", role: "সম্প্রদায় নেতা" },
              { quote: "চালু হওয়া কর্মসূচিগুলি সরাসরি আমাদের জীবনযাত্রার মান উন্নত করেছে। আপনার সেবার জন্য ধন্যবাদ।", author: "মোহাম্মদ এইচ.", role: "বাসিন্দা" },
            ]}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-red-600 font-bold text-sm md:text-base uppercase tracking-wider">গ্যালারি</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3">
              প্রচারণার মুহূর্ত
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: '/gallery/aminul14.webp', alt: 'Campaign moment 1' },
              { src: '/gallery/aminul14.webp', alt: 'Campaign moment 2' },
              { src: '/gallery/aminul14.webp', alt: 'Campaign moment 3' },
              { src: '/gallery/aminul14.webp', alt: 'Campaign moment 4' },
              { src: '/gallery/aminul14.webp', alt: 'Campaign moment 5' },
              { src: '/gallery/aminul14.webp', alt: 'Campaign moment 6' },
            ].map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              সম্পূর্ণ গ্যালারি দেখুন
              <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog - Asymmetric Grid */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-end justify-between mb-12"
          >
            <div>
              <span className="text-green-400 font-bold text-sm md:text-base uppercase tracking-wider">সর্বশেষ আপডেট</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3">
                অন্তর্দৃষ্টি ও গল্প
              </h2>
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 group flex items-center text-white hover:text-green-400 transition-colors font-semibold">
              সকল নিবন্ধ দেখুন <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <BlogCard
                title="সবার জন্য শিক্ষা সংস্কার"
                excerpt="গ্রামীণ অঞ্চল জুড়ে আধুনিক শিক্ষার প্রবেশাধিকার প্রসারিত করছি।"
                date="নভেম্বর ১, ২০২৫"
                author="অ্যাডমিন"
                category="শিক্ষা"
                href="/blog/education-reform"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <BlogCard
                title="কৃষিকে ক্ষমতায়ন"
                excerpt="কৃষকদের জন্য স্মার্ট সেচ এবং সমবায় মডেল।"
                date="অক্টোবর ২৫, ২০২৫"
                author="অ্যাডমিন"
                category="কৃষি"
                href="/blog/agriculture"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BlogCard
                title="শিল্প ও সংস্কৃতি উদ্যোগ"
                excerpt="ঐতিহ্য উদযাপন এবং তরুণ সৃজনশীলদের ক্ষমতায়ন।"
                date="অক্টোবর ১০, ২০২৫"
                author="অ্যাডমিন"
                category="সংস্কৃতি"
                href="/blog/arts-culture"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Modern */}
      <section id="contact" className="relative py-32 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-red-600" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              আন্দোলনে যোগ দিন
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              একসাথে, আমরা একটি শক্তিশালী, আরও সমৃদ্ধ বাংলাদেশ গড়তে পারি। পরিবর্তনের অংশ হন।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-10 py-5 bg-white text-green-700 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              >
                আজই যুক্ত হন
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
              >
                আরও জানুন
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
