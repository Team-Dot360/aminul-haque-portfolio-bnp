"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaDonate, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'হোম' },
  { href: '/about', label: 'সম্পর্কে' },
  { href: '/programs', label: 'কর্মসূচি' },
  { href: '/gallery', label: 'গ্যালারি' },
  { href: '/blog', label: 'ব্লগ' },
  { href: '/comments', label: 'মন্তব্য' },
  { href: '/contact', label: 'যোগাযোগ' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-md">
              <span className="text-white font-black text-xl">AH</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-900 font-black text-xl">আমিনুল হক</span>
              <div className="text-xs text-slate-500 font-medium">আগামীর স্বপ্ন</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                    active 
                      ? 'text-green-700' 
                      : 'text-slate-700 hover:text-green-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-green-700 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105"
            >
              <FaDonate /> দান করুন
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all ${
                      active
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-lg"
              >
                <FaDonate /> দান করুন
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


