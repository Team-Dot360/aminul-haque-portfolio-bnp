"use client";
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
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
            <span className="text-green-300 font-bold text-sm md:text-base uppercase tracking-wider">যোগাযোগ করুন</span>
            <h1 className="text-5xl md:text-7xl font-black mt-3 mb-6">
              আমাদের সাথে যোগাযোগ করুন
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              আমরা আপনার চিন্তা, প্রশ্ন এবং সমর্থনকে মূল্য দিই। যেকোনো সময় আমাদের সাথে যোগাযোগ করুন।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-20 z-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaEnvelope,
                title: 'ইমেইল করুন',
                content: 'contact@aminulhaque.bd',
                subtext: 'আমরা ২৪ ঘন্টার মধ্যে উত্তর দিই',
                color: 'from-blue-500 to-blue-700'
              },
              {
                icon: FaPhone,
                title: 'কল করুন',
                content: '+৮৮০ ১২৩৪-৫৬৭৮৯০',
                subtext: 'সোম-শুক্র সকাল ৯টা থেকে সন্ধ্যা ৬টা',
                color: 'from-green-500 to-green-700'
              },
              {
                icon: FaMapMarkerAlt,
                title: 'আমাদের দেখুন',
                content: 'ঢাকা, বাংলাদেশ',
                subtext: 'প্রধান কার্যালয়',
                color: 'from-red-500 to-red-700'
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-lg font-semibold text-slate-700 mb-1">{item.content}</p>
                <p className="text-sm text-slate-500">{item.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-green-600 font-bold text-sm uppercase tracking-wider">বার্তা পাঠান</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
                আপনার কথা শুনতে আগ্রহী
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                প্রশ্ন, পরামর্শ বা যুক্ত হতে চান? নিচের ফর্মটি পূরণ করুন এবং আমরা যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব।
              </p>
              <ContactForm />
            </motion.div>

            {/* Map and Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  title="মানচিত্র"
                  src="https://maps.google.com/maps?q=Dhaka%2C%20Bangladesh&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="h-[400px] w-full"
                />
              </div>

              {/* Social Media */}
              <div className="bg-slate-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  সোশ্যাল মিডিয়ায় আমাদের অনুসরণ করুন
                </h3>
                <p className="text-slate-600 mb-6">
                  সংযুক্ত থাকুন এবং আমাদের সোশ্যাল চ্যানেলে সর্বশেষ আপডেট পান
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: FaFacebook, color: 'from-blue-500 to-blue-700', href: '#' },
                    { icon: FaTwitter, color: 'from-sky-500 to-sky-700', href: '#' },
                    { icon: FaYoutube, color: 'from-red-500 to-red-700', href: '#' },
                    { icon: FaInstagram, color: 'from-pink-500 to-pink-700', href: '#' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                    >
                      <social.icon className="text-2xl" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-green-600 font-bold text-sm md:text-base uppercase tracking-wider">সহজলভ্যতা</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
              কার্যালয় সময়
            </h2>
            <p className="text-lg text-slate-600">
              এই সময়ে আমাদের দেখুন বা একটি অ্যাপয়েন্টমেন্ট করুন
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { day: 'সোমবার - শুক্রবার', hours: 'সকাল ৯:০০ - সন্ধ্যা ৬:০০' },
              { day: 'শনিবার', hours: 'সকাল ১০:০০ - বিকাল ৪:০০' },
              { day: 'রবিবার', hours: 'বন্ধ' },
            ].map((schedule, idx) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{schedule.day}</h3>
                <p className="text-2xl font-black text-green-600">{schedule.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-red-600 font-bold text-sm md:text-base uppercase tracking-wider">সাধারণ প্রশ্ন</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
              দ্রুত উত্তর
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'আমি কীভাবে স্বেচ্ছাসেবক হতে পারি?',
                answer: 'উপরের যোগাযোগ ফর্মটি পূরণ করে আপনার আগ্রহ প্রকাশ করুন এবং আমাদের স্বেচ্ছাসেবক সমন্বয়কারী উপলব্ধ সুযোগ নিয়ে আপনার সাথে যোগাযোগ করবেন।'
              },
              {
                question: 'আমি কোথায় দান করতে পারি?',
                answer: 'নিরাপদ দান বিকল্পের জন্য ফর্ম বা ফোনের মাধ্যমে আমাদের সাথে যোগাযোগ করুন। আমরা ব্যাংক স্থানান্তর এবং ডিজিটাল পেমেন্ট গ্রহণ করি।'
              },
              {
                question: 'আমি কি একটি বৈঠক নির্ধারণ করতে পারি?',
                answer: 'হ্যাঁ! আমাদের টিমের সাথে একটি বৈঠক নির্ধারণ করতে আমাদের কল করুন বা একটি ইমেইল পাঠান। আপনি কীভাবে যুক্ত হতে পারেন তা নিয়ে আলোচনা করতে আমরা খুশি।'
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


