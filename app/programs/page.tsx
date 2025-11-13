"use client";
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { FaBookReader, FaSeedling, FaTheaterMasks, FaLandmark, FaArrowRight, FaCheckCircle, FaUsers, FaChartLine } from 'react-icons/fa';

export default function ProgramsPage() {
  const programs = [
    {
      icon: FaBookReader,
      title: 'শিক্ষা সংস্কার',
      description: 'বিশ্বমানের শিক্ষা অবকাঠামো তৈরি করছি এবং প্রতিটি শিশুর জন্য মানসম্পন্ন শিক্ষার প্রবেশাধিকার প্রসারিত করছি।',
      color: 'from-blue-500 to-blue-700',
      features: [
        'বৃত্তি কর্মসূচি',
        'ডিজিটাল সাক্ষরতা উদ্যোগ',
        'আধুনিকীকৃত পাঠ্যক্রম',
        'শিক্ষক প্রশিক্ষণ কর্মসূচি',
        'গ্রামীণ বিদ্যালয় উন্নয়ন'
      ]
    },
    {
      icon: FaSeedling,
      title: 'কৃষি উদ্ভাবন',
      description: 'আধুনিক কৌশল, স্মার্ট সেচ এবং টেকসই সমবায় মডেলের মাধ্যমে কৃষকদের ক্ষমতায়ন করছি।',
      color: 'from-green-500 to-green-700',
      features: [
        'স্মার্ট চাষাবাদ কৌশল',
        'ন্যায্য মূল্য ব্যবস্থা',
        'আধুনিক সেচ সমাধান',
        'কৃষক সমবায়',
        'বাজার প্রবেশাধিকার কর্মসূচি'
      ]
    },
    {
      icon: FaTheaterMasks,
      title: 'শিল্প ও সংস্কৃতি',
      description: 'আমাদের সমৃদ্ধ ঐতিহ্য উদযাপন করছি এবং তরুণ শিল্পী ও সাংস্কৃতিক উদ্যোগকে ক্ষমতায়ন করছি।',
      color: 'from-purple-500 to-purple-700',
      features: [
        'সাংস্কৃতিক উৎসব',
        'ঐতিহ্য সংরক্ষণ',
        'যুব শিল্প কর্মসূচি',
        'সম্প্রদায় থিয়েটার',
        'শিল্পী সহায়তা তহবিল'
      ]
    },
    {
      icon: FaLandmark,
      title: 'সুশাসন',
      description: 'স্বচ্ছ, জবাবদিহিমূলক নেতৃত্ব যা সততার সাথে জনগণের সেবায় নিবেদিত।',
      color: 'from-red-500 to-red-700',
      features: [
        'স্বচ্ছতা উদ্যোগ',
        'জবাবদিহিতা ব্যবস্থা',
        'নাগরিক-প্রথম সেবা',
        'দুর্নীতিবিরোধী কর্মসূচি',
        'সম্প্রদায় সংযুক্তি'
      ]
    },
  ];

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
            <span className="text-green-300 font-bold text-sm md:text-base uppercase tracking-wider">আমরা যা করি</span>
            <h1 className="text-5xl md:text-7xl font-black mt-3 mb-6">
              আমাদের কর্মসূচি
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              বাংলাদেশ জুড়ে প্রকৃত পরিবর্তনের চালক চারটি স্তম্ভ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
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
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-slate-700">
                        <FaCheckCircle className={`text-green-600 mr-3 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-green-600 font-semibold group-hover:text-red-600 transition-colors">
                    আরও জানুন <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-bold text-sm md:text-base uppercase tracking-wider">প্রভাব</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3 mb-6">
              বাস্তব ফলাফল
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              বাংলাদেশ জুড়ে আমাদের কর্মসূচির পরিমাপযোগ্য ফলাফল
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                stat: '১৫০K+',
                label: 'প্রভাবিত মানুষ',
                description: 'আমাদের কর্মসূচির মাধ্যমে সরাসরি উন্নত জীবন',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: FaChartLine,
                stat: '৮৫%',
                label: 'সফলতার হার',
                description: 'কর্মসূচির লক্ষ্য পূরণ বা অতিক্রম',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: FaLandmark,
                stat: '৪৫+',
                label: 'সম্প্রদায়',
                description: 'সক্রিয়ভাবে সেবা প্রদান করা জেলা ও অঞ্চল',
                color: 'from-red-500 to-pink-600'
              },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.stat}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{stat.label}</h3>
                <p className="text-slate-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-900 to-red-900 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              যুক্ত হতে চান?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              পার্থক্য তৈরিতে আমাদের সাথে যোগ দিন। স্বেচ্ছাসেবক, দান বা আমাদের কর্মসূচির সাথে অংশীদার হন।
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-full font-bold text-lg shadow-2xl hover:bg-green-50 transition-all transform hover:scale-105"
            >
              আজই যোগাযোগ করুন
              <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


