"use client";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const recentPosts = [
  { title: 'সবার জন্য শিক্ষা সংস্কার', href: '/blog/education-reform' },
  { title: 'কৃষিকে ক্ষমতায়ন', href: '/blog/agriculture' },
  { title: 'শিল্প ও সংস্কৃতি উদ্যোগ', href: '/blog/arts-culture' },
];

const quickLinks = [
  { title: 'হোম', href: '/' },
  { title: 'সম্পর্কে', href: '/about' },
  { title: 'কর্মসূচি', href: '/programs' },
  { title: 'গ্যালারি', href: '/gallery' },
  { title: 'ব্লগ', href: '/blog' },
  { title: 'মন্তব্য', href: '/comments' },
  { title: 'যোগাযোগ', href: '/contact' },
];

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-2xl">AH</span>
                </div>
                <div>
                  <h3 className="font-black text-lg">আমিনুল হক</h3>
                  <p className="text-xs text-white/70">আগামীর স্বপ্ন</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                শিক্ষা, কৃষি, শিল্প ও সংস্কৃতির মাধ্যমে বাংলাদেশকে রূপান্তরে নিবেদিত একজন নেতা।
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, href: '#', color: 'hover:bg-blue-600' },
                  { icon: FaTwitter, href: '#', color: 'hover:bg-sky-500' },
                  { icon: FaYoutube, href: '#', color: 'hover:bg-red-600' },
                  { icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center ${social.color} transition-all transform hover:scale-110`}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">দ্রুত লিংক</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-white/80 hover:text-green-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full group-hover:w-2 transition-all"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="text-lg font-bold mb-4">সাম্প্রতিক পোস্ট</h4>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.href}>
                    <Link 
                      href={post.href} 
                      className="text-sm text-white/80 hover:text-green-400 transition-colors block"
                    >
                      <span className="line-clamp-2">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">যোগাযোগের তথ্য</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaEnvelope className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/60">ইমেইল</p>
                    <a href="mailto:contact@aminulhaque.bd" className="text-sm text-white/90 hover:text-green-400 transition-colors">
                      contact@aminulhaque.bd
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/60">ফোন</p>
                    <a href="tel:+8801234567890" className="text-sm text-white/90 hover:text-green-400 transition-colors">
                      +৮৮০ ১২৩৪-৫৬৭৮৯০
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/60">ঠিকানা</p>
                    <p className="text-sm text-white/90">ঢাকা, বাংলাদেশ</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} আমিনুল হক। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-sm text-white/60 hover:text-green-400 transition-colors">
                গোপনীয়তা নীতি
              </Link>
              <Link href="/contact" className="text-sm text-white/60 hover:text-green-400 transition-colors">
                সেবার শর্তাবলী
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}


