"use client";
import { motion } from 'framer-motion';
import { 
  FaFileAlt, 
  FaHeart, 
  FaShieldAlt, 
  FaFutbol, 
  FaGraduationCap, 
  FaHome, 
  FaLeaf, 
  FaHands, 
  FaPaw, 
  FaUserFriends,
  FaTrafficLight,
  FaWater,
  FaBan,
  FaBuilding,
  FaBreadSlice,
  FaUsers,
  FaBook,
  FaMedal,
  FaHospital,
  FaUniversity,
  FaFlag,
  FaVirus,
  FaHandHoldingHeart,
  FaBolt,
  FaBriefcase,
  FaCamera,
  FaWifi
} from 'react-icons/fa';

export default function AminulManifestoPage() {
  const manifestoSections = [
    {
      id: 'rehabilitation',
      icon: FaHome,
      title: 'স্থায়ী পূর্ণবাসন ও সামাজিক মর্যাদা',
      color: 'from-blue-600 to-indigo-700',
      content: [
        'নিম্ন ও মধ্যম আয়ের সকল নাগরিকদের স্থায়ী পূর্ণবাসন, নিরাপত্তা ও সামাজিক মর্যাদা প্রদান'
      ]
    },
    {
      id: 'urdu-community',
      icon: FaUsers,
      title: 'উর্দূভাষী জনগোষ্ঠীর অধিকার',
      color: 'from-violet-500 to-purple-600',
      content: [
        'উর্দূভাষী জনগোষ্ঠীর সকল নাগরিক সুবিধা নিশ্চিত করে স্থায়ী পূর্ণবাসন ও সামাজিক মর্যাদা প্রদান'
      ]
    },
    {
      id: 'education-quality',
      icon: FaBook,
      title: 'শিক্ষার মান উন্নয়ন',
      color: 'from-sky-500 to-blue-600',
      content: [
        'প্রতিটি শিক্ষা প্রতিষ্ঠানে শিক্ষার পরিবেশ ও শিক্ষার মান সুনিশ্চিত করা',
        'নিম্ন ও মধ্যম আয়ের এবং উর্দূভাষী জনগোষ্ঠীর জন্য বিনামূল্যে শিক্ষার ব্যবস্থা'
      ]
    },
    {
      id: 'scholarship',
      icon: FaMedal,
      title: 'মেধা বৃত্তি',
      color: 'from-amber-500 to-yellow-600',
      content: [
        'মেধাবী শিক্ষার্থীদের জন্য মেধা ও শিক্ষা বৃত্তি প্রদান'
      ]
    },
    {
      id: 'healthcare',
      icon: FaHospital,
      title: 'স্বাস্থ্যসেবা',
      color: 'from-rose-500 to-red-600',
      content: [
        'ওয়ার্ডভিত্তিক স্বাস্থ্য ও মাতৃসদন কেন্দ্র স্থাপন করে বিনামূল্যে প্রাথমিক স্বাস্থ্যসেবা প্রদানসহ গর্ভবতী মায়েদের সেবা নিশ্চিত করা',
        'সরকারি মেডিকেল কলেজ ও হাসপাতাল নির্মাণ',
        'ডেঙ্গু ও চিকুনগুনিয়া প্রতিরোধে কার্যকর ব্যবস্থা'
      ]
    },
    {
      id: 'higher-education',
      icon: FaUniversity,
      title: 'উচ্চশিক্ষা উন্নয়ন',
      color: 'from-indigo-500 to-blue-600',
      content: [
        'ডিগ্রি কলেজগুলোকে বিশ্ববিদ্যালয় কলেজে রূপান্তরিত করা'
      ]
    },
    {
      id: 'nationalization',
      icon: FaFlag,
      title: 'শিক্ষা প্রতিষ্ঠান জাতীয়করণ',
      color: 'from-emerald-600 to-green-700',
      content: [
        'পল্লবী ও রূপনগর থানার সকল এমপিওভুক্ত শিক্ষা প্রতিষ্ঠান গুলোকে অগ্রাধিকার ভিত্তিতে জাতীয়করণ'
      ]
    },
    {
      id: 'shelter',
      icon: FaHandHoldingHeart,
      title: 'আশ্রয় কেন্দ্র',
      color: 'from-pink-500 to-rose-600',
      content: [
        'অসহায় ও ছিন্নমূল মানুষের জন্য আশ্রয় কেন্দ্র নির্মাণ'
      ]
    },
    {
      id: 'utilities',
      icon: FaBolt,
      title: 'গ্যাস, পানি ও বিদ্যুৎ',
      color: 'from-yellow-500 to-amber-600',
      content: [
        'প্রতিটি পরিবারের জন্য নিরবচ্ছিন্ন গ্যাস, পানি ও বিদ্যুৎ সরবরাহ নিশ্চিত করা এবং পুরাতন, জীর্ণশীর্ণ গ্যাস ও পানির লাইন প্রয়োজনীয় সংস্কার ও পুনঃস্থাপন'
      ]
    },
    {
      id: 'employment',
      icon: FaBriefcase,
      title: 'কর্মসংস্থান সৃষ্টি',
      color: 'from-teal-500 to-emerald-600',
      content: [
        'বেকার ও তরুণদের কর্মসংস্থান সৃষ্টির লক্ষ্যে কারিগরি প্রশিক্ষণ, তৃতীয় ভাষা শিক্ষা এবং Job Fair-এর মাধ্যমে কর্মসংস্থান নিশ্চিত করা'
      ]
    },
    {
      id: 'sports-academy',
      icon: FaFutbol,
      title: 'খেলাধুলা ও স্পোর্টস একাডেমি',
      color: 'from-green-500 to-teal-600',
      content: [
        'খেলাধুলার জন্য খেলার উপযোগী মাঠ তৈরি এবং পূর্ণাঙ্গ স্পোর্টস একাডেমি প্রতিষ্ঠা'
      ]
    },
    {
      id: 'religious-harmony',
      icon: FaHands,
      title: 'সাম্প্রদায়িক সম্প্রীতি',
      color: 'from-purple-500 to-violet-600',
      content: [
        'ধর্ম, বর্ণ, দল-মত নির্বিশেষে সাম্প্রদায়িক সম্প্রীতি নিশ্চিত করে ধর্মীয় উৎসব নির্বিঘ্নে পালনের লক্ষ্যে প্রতিটি ওয়ার্ডে মসজিদ, মাদ্রাসা, মন্দির ও গির্জাসহ অন্যান্য উপাসনালয় স্থাপন ও উন্নয়ন'
      ]
    },
    {
      id: 'security',
      icon: FaCamera,
      title: 'নিরাপত্তা ব্যবস্থা',
      color: 'from-slate-600 to-zinc-700',
      content: [
        'আবাসিক ও অনাবাসিক এলাকা শোঃ প্রতিটি মহল্লায় প্রয়োজনীয় নিরাপত্তা নিশ্চিতে সিসিটিভি স্থাপন, নিরাপত্তা কর্মী নিয়োগ এবং স্থানীয় কমিটির মাধ্যমে নিরাপত্তা নিশ্চিত করা'
      ]
    },
    {
      id: 'digital',
      icon: FaWifi,
      title: 'ডিজিটাল সুবিধা',
      color: 'from-cyan-500 to-sky-600',
      content: [
        'কলেজ, বাসস্ট্যান্ড ও মার্কেটে Free WiFi Zone ব্যবস্থা এবং তরুণ প্রজন্মের মাঝে বিজ্ঞানভিত্তিক বিকাশের লক্ষ্যে আধুনিক লাইব্রেরি চালু'
      ]
    }
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaFileAlt className="inline mr-2" />
              আমাদের প্রতিশ্রুতি
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                আমিনুল ভাইয়ের ইশতেহার
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              জনগণের জন্য, জনগণের দ্বারা - একটি সমৃদ্ধ ভবিষ্যতের রূপরেখা
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 bg-gradient-to-r from-emerald-500 to-green-600"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="text-center mb-8">
                <FaHeart className="text-6xl text-emerald-600 mx-auto mb-4" />
                <h2 className="text-4xl font-black text-slate-900 mb-4">আমার পরিচয়</h2>
              </div>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  আসসালামু আলাইকুম। আমি আমিনুল হক - ঢাকা মহানগর উত্তর বিএনপির আহ্বায়ক এবং আপনাদেরই একজন সন্তান। এই ঢাকা-১৬ আমার ঘর, আমার মরিয়ার। আপনাদের সুখ-দুঃখ, কষ্ট আর স্বপ্ন – সিই আমার মনদজর মদ া কদর অনুভি কমর।
                </p>
                <p>
                  মিগ ১৭ বছর আমরা সিাই একসাদে এক কমিন সময় িার কদরমছ। যানজট, িামন ও গযাদসর ঘাটম, চাাঁোিামজ, মােক আর অিযিস্থািনার কারদে আমাদের প্রম মেদনর জীিন দমিিষহ হদয় উিদছ। আমাদের রুেরা িে হারাদে, মাদয়রা মনরািত্তাহীন ায় ভুগদছ, মরিয়ারগুদলা স্বপ্ন হারাদে।
                </p>
                <p>
                  আমি রাজনীতি করি ক্ষমতার জন্য না, মানুষদের সেবা করার জন্য। আমি বিশ্বাস করি – মরি ন সম্ভি, যমে আমরা একসাদে চাই। আর সসই মরি িদনর িে সেখাদ আমি আপনার কাদছ এদসমছ আমার মরকল্পনা ও প্রম শ্রুম মনদয়।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Sections */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              আমার প্রতিশ্রুতি সমূহ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ঢাকা-১৬ এর উন্নয়নের জন্য আমার পরিকল্পনা
            </p>
          </motion.div>

          <div className="space-y-8">
            {manifestoSections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-all bg-gradient-to-r ${section.color}`}></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${section.color} rounded-2xl flex-shrink-0`}>
                      <section.icon className="text-4xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        {section.title}
                      </h3>
                      <div className="space-y-4">
                        {section.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-lg text-slate-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Commitment */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 bg-gradient-to-r from-emerald-500 to-green-600"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                আমার অঙ্গীকার
              </h2>
              <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
                <p>
                  প্রিয় ঢাকা-১৬ এর জনগণ,
                </p>
                <p>
                  এট সকানও িাাঁকা প্রম শ্রুম নয়। এট আমাদের সিার আশা, আমাদের সিার ভমিষ্যৎ। এখন মসদ্ধান্ত আিনার- আরও ১৭ িছদরর দনিীম ও দুঃশাসন নামক ন্যায়, সম্মান ও আশার ন ুন যুগ।
                </p>
                <p className="text-2xl font-black text-emerald-600 mt-8">
                  "আমি আমিনুল হক, প্রম শ্রুম মেমে আমি কো মেদয় োমদিা না, কাদজ সেখাদিা।"
                </p>
                <p className="text-lg text-slate-600 mt-6">
                  আপনাদের সন্তান, আপনাদের প্রম মনমধ মহদসদি আমি আপনাদের িাদশ োকদিা প্রম মট ঘদর আদলা মিমরদয় আনার জন্য।
                </p>
                <div className="mt-8 text-3xl font-black text-emerald-600">
                  - আমিনুল হক
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
