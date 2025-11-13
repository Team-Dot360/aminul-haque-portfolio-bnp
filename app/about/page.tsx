"use client";
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBullseye, FaTrophy, FaCheckCircle } from 'react-icons/fa';

export default function AboutPage() {
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
            <span className="text-green-300 font-bold text-sm md:text-base uppercase tracking-wider">জানুন</span>
            <h1 className="text-5xl md:text-7xl font-black mt-3 mb-6">
              আমিনুল হক সম্পর্কে
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              অন্তর্ভুক্তিমূলক উন্নয়ন এবং সমাজ ক্ষমতায়নের মাধ্যমে বাংলাদেশকে রূপান্তরে নিবেদিত একজন নেতা
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section with Image */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-green-600 font-bold text-sm uppercase tracking-wider">জীবনী</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
                সেবার জীবন
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  আমিনুল হক একজন জনসেবক যিনি বাংলাদেশ জুড়ে অন্তর্ভুক্তিমূলক উন্নয়ন এবং সমাজ ক্ষমতায়নে নিবেদিত। জনগণের প্রতি তার অটুট প্রতিশ্রুতি শিক্ষা, কৃষি, শিল্প ও সংস্কৃতিতে অর্থবহ সংস্কার চালিয়েছে।
                </p>
                <p>
                  জনপ্রশাসন এবং সমাজ উন্নয়নে পটভূমি নিয়ে, তিনি দশকের পর দশক ধরে যাদের কণ্ঠস্বর প্রায়ই শোনা যায় না তাদের পক্ষে সওয়াল করেছেন। তার পদ্ধতি তৃণমূল সংযুক্তি এবং কৌশলগত নীতি উদ্যোগকে একত্রিত করে দীর্ঘস্থায়ী পরিবর্তন সৃষ্টি করতে।
                </p>
                <p>
                  গ্রামীণ গ্রাম থেকে শহুরে কেন্দ্র পর্যন্ত, আমিনুল একটি আরও ন্যায়সংগত এবং সমৃদ্ধ বাংলাদেশ গড়ার জন্য তার নিবেদনের মাধ্যমে অসংখ্য জীবন স্পর্শ করেছেন।
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/aminul_haque.jpg"
                  alt="আমিনুল হক"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-bold text-sm md:text-base uppercase tracking-wider">আমাদের দিকনির্দেশনা</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3 mb-6">
              রূপকল্প ও লক্ষ্য
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 opacity-10 rounded-full blur-3xl group-hover:w-64 group-hover:h-64 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                  <FaBullseye className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">আমাদের রূপকল্প</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  শিক্ষা-প্রথম একটি জাতি গড়া যেখানে সকল নাগরিকের জন্য সমান সুযোগ রয়েছে, যেখানে প্রতিটি ব্যক্তি পটভূমি নির্বিশেষে মানসম্পন্ন সম্পদে প্রবেশাধিকার পায় এবং তাদের পূর্ণ সম্ভাবনায় পৌঁছাতে পারে।
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 opacity-10 rounded-full blur-3xl group-hover:w-64 group-hover:h-64 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6">
                  <FaGraduationCap className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">আমাদের লক্ষ্য</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  বাস্তবসম্মত, প্রভাবশালী কর্মসূচি সরবরাহ করা যা সরাসরি বাংলাদেশ জুড়ে প্রতিটি সম্প্রদায়কে উপকৃত করে। আমরা শিক্ষা, কৃষি, সাংস্কৃতিক সংরক্ষণ এবং সুশাসনের মাধ্যমে টেকসই উন্নয়নে মনোনিবেশ করি।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline of Achievements */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-bold text-sm md:text-base uppercase tracking-wider">যাত্রা</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3 mb-6">
              অর্জনের সময়রেখা
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              বাংলাদেশকে রূপান্তরের যাত্রায় মূল মাইলফলক
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: '২০১৮',
                title: 'গ্রামীণ বৃত্তি কর্মসূচি চালু',
                description: 'গ্রামীণ সম্প্রদায় থেকে ১০,০০০+ শিক্ষার্থীদের শিক্ষার সুযোগ প্রদান করে ব্যাপক বৃত্তি উদ্যোগ শুরু।',
                icon: FaGraduationCap,
                color: 'from-green-500 to-emerald-600',
                bgColor: 'from-green-50 to-emerald-50'
              },
              {
                year: '২০২০',
                title: 'কৃষক সমবায় নেটওয়ার্ক প্রতিষ্ঠা',
                description: '৫,০০০+ কৃষকদের সংযুক্ত করে টেকসই কৃষি সমবায় তৈরি, ফলন এবং বাজার প্রবেশাধিকার উন্নত।',
                icon: FaTrophy,
                color: 'from-blue-500 to-cyan-600',
                bgColor: 'from-blue-50 to-cyan-50'
              },
              {
                year: '২০২৩',
                title: 'শহর-ব্যাপী যুব সংস্কৃতি উৎসব',
                description: 'একাধিক শহর জুড়ে ঐতিহ্য উদযাপন এবং তরুণ শিল্পীদের ক্ষমতায়নের জন্য প্রধান সাংস্কৃতিক উৎসব আয়োজন।',
                icon: FaCheckCircle,
                color: 'from-red-500 to-pink-600',
                bgColor: 'from-red-50 to-pink-50'
              },
            ].map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative bg-gradient-to-br ${item.bgColor} rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Year Badge with Icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <item.icon className="text-3xl text-white" />
                    </div>
                    <div className={`mt-3 inline-block px-4 py-1.5 bg-gradient-to-r ${item.color} text-white font-black rounded-full text-sm shadow-md`}>
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-green-400 font-bold text-sm md:text-base uppercase tracking-wider">নীতি</span>
            <h2 className="text-4xl md:text-6xl font-black mt-3 mb-6">
              মূল মূল্যবোধ
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              যে নীতিগুলি আমাদের প্রতিটি সিদ্ধান্তকে নির্দেশনা দেয়
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'সততা', description: 'সকল কাজে সৎ এবং স্বচ্ছ' },
              { title: 'সহানুভূতি', description: 'প্রতিটি সম্প্রদায় সদস্যের জন্য গভীর যত্ন' },
              { title: 'উৎকর্ষতা', description: 'সর্বোচ্চ মানের প্রতি প্রতিশ্রুতিবদ্ধ' },
              { title: 'উদ্ভাবন', description: 'আধুনিক চ্যালেঞ্জের সৃজনশীল সমাধান' },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


