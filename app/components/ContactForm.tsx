"use client";
import { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder submit
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheckCircle className="text-4xl text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">বার্তা পাঠানো হয়েছে!</h3>
        <p className="text-slate-600">
          যোগাযোগের জন্য ধন্যবাদ। আমরা যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব।
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-900">
          পুরো নাম <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
            <FaUser />
          </div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border-2 border-slate-200 pl-12 pr-4 py-3.5 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
            placeholder="আপনার নাম"
          />
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-900">
          ইমেইল ঠিকানা <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
            <FaEnvelope />
          </div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border-2 border-slate-200 pl-12 pr-4 py-3.5 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
            placeholder="আপনার@ইমেইল.com"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-900">
          আপনার বার্তা <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-4 top-4 text-slate-400">
            <FaCommentDots />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full rounded-xl border-2 border-slate-200 pl-12 pr-4 py-3.5 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all resize-none"
            placeholder="আমরা কীভাবে আপনাকে সাহায্য করতে পারি তা বলুন..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-4 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105"
      >
        <FaPaperPlane />
        বার্তা পাঠান
      </button>
    </form>
  );
}


