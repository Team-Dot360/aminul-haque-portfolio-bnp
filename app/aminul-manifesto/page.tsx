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
  FaBreadSlice
} from 'react-icons/fa';

export default function AminulManifestoPage() {
  const manifestoSections = [
    {
      id: 'traffic',
      icon: FaTrafficLight,
      title: 'যানজট ও পরিবহন সমস্যা সমাধান',
      color: 'from-blue-500 to-cyan-600',
      content: [
        'প্রথমেই আমি শুরু করেছি যানজট ও পরিবহন সমস্যা নিয়ে। প্রতিদিন আমাদের ঘণ্টার পর ঘণ্টা সময় নষ্ট হয় রাস্তায়। আমি চাই এই অবস্থা বদলাই।',
        'প্রধান সড়কগুলোর ইন্টারসেকশনে ট্রাফিক সিগন্যাল বসাব যার ফলে যানজট কমে ঘণ্টা বাঁচবে।',
        'রিক্সা ও বাস যেখানে সেখানে থামবে না, নির্দিষ্ট পার্কিং ও স্টপেজ নির্ধারিত করব।',
        'আমরা এমন এক ঢাকা-১৬ তৈরি করব, যেখানে মানুষ নিশ্চিন্তে নিয়মিতের সাথে যাওয়া-আসা করতে পারবে।'
      ]
    },
    {
      id: 'water-gas',
      icon: FaWater,
      title: 'পানি ও গ্যাস সংকট সমাধান',
      color: 'from-cyan-500 to-blue-600',
      content: [
        'আমাদের মা-বোনেরা এখানে রান্না করে গ্যাসের অভাবে কষ্ট পায়, বিশুদ্ধ পানির জন্য কষ্ট হয়।',
        'ঢাকা ওয়াসার সাথে সমন্বয় করে বিশুদ্ধ পানির স্থায়ী ব্যবস্থা করার চেষ্টা করব।',
        'পুরানো পাইপলাইন বদলে নতুন পাইপলাইন বসাবনা হবে।',
        'কমিউনিটি ওয়াটার ট্যাঙ্ক বসাবনা হবে যেখানে প্রয়োজন।',
        '২৪ ঘণ্টা অভিযোগ হটলাইন চালু করব যার মাধ্যমে আপনার সমস্যা সমাধান নিমিত্ত আপনার নিবেদন দ্রুত নিবি করা যায়।'
      ]
    },
    {
      id: 'drugs',
      icon: FaBan,
      title: 'মাদকের বিরুদ্ধে জিরো টলারেন্স',
      color: 'from-red-500 to-rose-600',
      content: [
        'আমাদের ছেলেদের জীবন মাদকের কারণে ধ্বংস হয়ে। আমি আপনাদের কে বলি - মাদক ব্যবসার সাথে জড়িত যারা থাকবে না, সে সই সহ্য না করা।',
        'মাদক ব্যবসায়ীদের বিরুদ্ধে কঠোর ব্যবস্থা ও জিরো টলারেন্স নিবি করা হবে।',
        'মাদকাসক্তদের স্বাভাবিক জীবনে ফিরিয়ে আনতে রিহ্যাবিলিটেশন সেন্টার ও কাউন্সেলিং সিস্টেম স্থাপন করা হবে।',
        'প্রতিটি এলাকার সচেতন নাগরিকদের সাথে নিয়ে মাদক নিবি কাজ করব।'
      ]
    },
    {
      id: 'crime',
      icon: FaShieldAlt,
      title: 'চাঁদাবাজি ও ভয়ভীতি দূর ব্যবস্থা',
      color: 'from-orange-500 to-red-600',
      content: [
        'চাঁদাবাজির কারণে ব্যবসা ধ্বংস হয়ে যায়, ব্যবসায়ীরা ও জনসাধারণ আতঙ্ক পায়।',
        'চাঁদাবাজির অভিযোগ সংক্রান্ত সমস্যার সমাধানের হটলাইন চালু করব এবং অপরাধীদের জামিন-মামলা থেকে আওতায় শাস্তির ব্যবস্থা করব।',
        'ব্যবসায়ীদের নিরাপত্তার জন্য প্রটেকশন ইউনিট গঠন করা হবে।'
      ]
    },
    {
      id: 'infrastructure',
      icon: FaBuilding,
      title: 'অবকাঠামো উন্নয়ন',
      color: 'from-amber-500 to-orange-600',
      content: [
        'আধুনিক ঢাকা-১৬ নিমিত্তে আমি দৃঢ় প্রতিজ্ঞ। প্রতিবছর বর্ষাকালে আমাদের রাস্তা ভেসে যায়, পানি জমে। আমি শুরু করব ১০০ দিনের মধ্যে জরুরি মেরামতের অভিযান।',
        'আমি ভাঙা রাস্তা মেরামত ও পাকা উঁচু রাস্তা নিবি করে করব।',
        'প্রতিটি ওয়ার্ডে আধুনিক "মাতৃসেন হাসপাতাল" নিমিত্তের মাধ্যমে আমরা গভীরভাবে নিবি সেবক প্রসূতি রক্ষা করব দ্রুত সময়ে যাতে নিশ্চিত মাতা ও শিশু স্বাস্থ্যসেবা নিবি করি, যেখানে ২৪/৭ বিশেষজ্ঞ চিকিৎসক, নিবা দেয়ার উন্নত যন্ত্রপাতি এবং জরুরি অ্যাম্বুলেন্সের সুবিধা পাওয়া যাবে। আমাদের প্রধান লক্ষ্য হবে—প্রতিটি মায়ের জন্য নিবি প্রসূতি এবং প্রতিটি নিবা দেয়ার সুস্থ জীবন নিবি করে সমাজের সামাজিক স্বাস্থ্য সুরক্ষা সজাগোর করা।'
      ]
    },
    {
      id: 'sports-youth',
      icon: FaFutbol,
      title: 'যুব মাঠ ও যুব উন্নয়ন',
      color: 'from-green-500 to-emerald-600',
      content: [
        'আমাদের শিশুরা খেলার মাঠ পায় না, ছেলেরা সময় কাটানোর জায়গা পায়না। নিব যুক্ত ও অযিহৃ সরকারের সরকারের মাঠ সরকারের মাঠ রূপান্তর করব।',
        'প্রতিটি ওয়ার্ডে স্পোর্টস কমপ্লেক্স নিবি করে করব যেখানে ইনডোর ও আউটডোর যাতে সকল খেলাধুলার যাপ্ত ব্যবস্থা োকদি।',
        'আপনাদের সেবায় যেখানে বাংলাদেশ জাতীয় পার্টি (বিএনপি) সরকার গঠন করে নিবি নিবি মিলিয়নিয়ারদের সুবিধাদেি Paypall ব্যবস্থা চালু করব।',
        'মিলিয়নিয়ারদের জন্য একটি বিশেষায়িত আইটি সিস্টেম গড়ে তুলব এবং মিলিয়নিয়ারদের সকল সুযোগ সুবিধা নিবি এক একটি কমিউনিটি হাব গড়ে তুলি যা সরকার ও মিলিয়নিয়ারদের সস ুিেন মহদসদি কাজ করবি।',
        'প্রতি বছর "Youth Carnival" আয়োজন করব, যেখানে োকদি কনসার্ট, শিল্প, খেলাধুলা ও উদ্যোক্তা সমাদিশ।',
        'এর পাশাপাশি "Job Fair" আয়োজন করব যা সেবক সিকার যুবকরা তাদের যোগ্যতা অনুযায়ী কর্মসংস্থাদন প্রদান করব পারবি।',
        'যুব উন্নয়ন ও কর্মসংস্থান শিক্ষা সিস্টেম গড়ে তুলি।'
      ]
    },
    {
      id: 'education-sports',
      icon: FaGraduationCap,
      title: 'শিক্ষা ও ক্রীড়া স্কুল',
      color: 'from-purple-500 to-pink-600',
      content: [
        'ঢাকা-১৬ কে ক্রীড়া উৎকর্ষের কেন্দ্র রূপান্তর করব।',
        'জাতীয় ও আন্তর্জাতিক কৃতিত্বের খেলোয়াড় ত তৈরি করব ক্রীড়া একাডেমি গড়ে তুলি।',
        'যখন বিএনপি সরকার হয় তখনই একটি স্পোর্টস ইউনিভার্সিটি গড়ে তুলি।',
        'খেলাধুলায় সবারই সমান সুযোগ-সুবিধা নিবি করা হবে।'
      ]
    },
    {
      id: 'displaced',
      icon: FaHome,
      title: 'উদ্বাস্তু জনগোষ্ঠীর মর্যাদা ও উন্নয়ন',
      color: 'from-indigo-500 to-purple-600',
      content: [
        'দীর্ঘদিন ধরে উদ্বাস্তু জনগণ অবহেলিত। আমি প্রথম শ্রমে তাদের জন্য টেকসই গৃহায়ন প্রকল্প বাস্তবায়ন করব। স্থায়ী নিবাসনের লক্ষ্যে সরকার, এনজিও ও ত্রাণ সংস্থার মধ্যে সমন্বয় সাধন করব।',
        'উদ্বাস্তু জনগোষ্ঠীর সুবিধাদেি আঞ্চলিক নাসিডিটি অফিস নিবি করে করবি।',
        'উদ্বাস্তুদের কর্মসংস্থানের প্রশিক্ষণে ও ত্রাণ সংস্থার ভাষা শিক্ষা দিয়ে দক্ষ জনশক্তিতে রূপান্তর করব।',
        'সাপ্তাহিক সমিতিকল ক্যাম্প এবং নিবামলয প্রাথমিক শিক্ষা নিবি করব।'
      ]
    },
    {
      id: 'green',
      icon: FaLeaf,
      title: 'সবুজ ও সুস্থ ঢাকা-১৬',
      color: 'from-green-600 to-emerald-700',
      content: [
        'সবুজ ও সুস্থ ঢাকা-১৬ নিমিত্তে বৃক্ষরোপণ ও নিব ম রে কর্মসূচি হাদ সনি। প্রতিটি সরকারের খেলার মাঠ ও রাস্তা সবুজায়ন করব।',
        'ঢাকা-১৬ আসনের জনগণের নিকট ২০ লক্ষ চারা মি রে করব।',
        'সিটি করপোরেশনের সাথে আলোচনামূলক ছাে লাগান ও ছােকৃমষদ সংযুক্ত রাস্তারওয়ালাদের গৃহকরে ওয়ভার প্রোন করব।'
      ]
    },
    {
      id: 'religious',
      icon: FaHands,
      title: 'ধর্মীয় সম্প্রীতি ও উপাসনালয়',
      color: 'from-teal-500 to-cyan-600',
      content: [
        'সকল ধর্মের মানুষের সমান মর্যাদা নিবি করব।',
        'যেখানে প্রয়োজন সেখানেই নতুন মসজিদ-মন্দির ত তৈরি ও সংস্কার করব।',
        'আন্ত ধর্মীয় সম্প্রীতি র জন্য সাংস্কৃতিক অনুষ্ঠান ও মুক্ত আলোচনার ব্যবস্থা করব।',
        'কওমি মাদ্রাসার শিক্ষার্থীদের জন্য বিশেষ কম্পিউটার স্ট্রেনিং এর ব্যবস্থা করব।'
      ]
    },
    {
      id: 'stray',
      icon: FaPaw,
      title: 'প্রাণী কল্যাণ',
      color: 'from-rose-500 to-pink-600',
      content: [
        'নিবেগামী প্রাণীদের জন্য আশ্রয় কেন্দ্র ও সভদতনামর নিমক স্থাপন করব।',
        'মামসক রা প্রয়োজনমামিক সবার মটকাকরে অভিযান চালু করব।',
        'আহতশুপ্রাণীদের সেবা ও সুস্থা নিবিদ Animal Hospital ও Shelter নিবি করে করবি।'
      ]
    },
    {
      id: 'food',
      icon: FaBreadSlice,
      title: 'খাদ্য নিরাপত্তা',
      color: 'from-yellow-500 to-orange-600',
      content: [
        'প্রতিটি ওয়ার্ডে সাপ্তাহিক মটমসি ট্রাক োকদি।',
        'ন্যায্য মূল্যের সোকান বাড়াবনা হবে যাতে সোকান মরিয়ার ক্ষুধা র না োক।',
        'হতেমরদ্রদের জন্য সমাজকল্যাণ মন্ত্রালয় ক ৃিক ভা া প্রদানের ব্যবস্থা করবি।'
      ]
    },
    {
      id: 'elderly',
      icon: FaUserFriends,
      title: 'প্রবীণ',
      color: 'from-slate-600 to-gray-700',
      content: [
        'প্রতীনের জন্য বিশেষায়িত সিস্টেম নিবি করে করা হবে এবং প্রতীে সেস্যদের জন্য বয়স্ক ভা া নিবি করা হবে।',
        'প্রতীে নারী সেস্য ও মিধিাদের জন্য সরশদনর ব্যবস্থা করা হবে।',
        'প্রতীে সেস্যদের নিবিনাদের জন্য একটি স্থায়ী লাইদেরী নিবি করে করবি।'
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
