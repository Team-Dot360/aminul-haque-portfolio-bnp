"use client";
import { motion } from 'framer-motion';
import GalleryClient from './GalleryClient';

export default function GalleryPage() {
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
            <span className="text-green-300 font-bold text-sm md:text-base uppercase tracking-wider">প্রচারণা</span>
            <h1 className="text-5xl md:text-7xl font-black mt-3 mb-6">
              প্রচারণার মুহূর্ত
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              প্রতিদিনের প্রচারণা কার্যক্রম — জনগণের সাথে সরাসরি সংযোগ এবং সমাবেশের ছবি
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <GalleryClient />
        </div>
      </section>
    </main>
  );
}
