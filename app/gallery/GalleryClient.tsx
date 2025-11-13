"use client";
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

type CampaignEvent = {
  date: string;
  title: string;
  location: string;
  description: string;
  images: { src: string; alt: string }[];
};

const CAMPAIGN_EVENTS: CampaignEvent[] = [
  {
    date: 'নভেম্বর ১২, ২০২৫',
    title: 'গণসংযোগ সভা - ঢাকা',
    location: 'শাহবাগ, ঢাকা',
    description: 'জনগণের সাথে সরাসরি সংযোগ এবং নির্বাচনী ইশতেহার উপস্থাপন।',
    images: [
      { src: '/gallery/aminul14.webp', alt: 'শাহবাগ জনসভা' },
      { src: '/gallery/aminul14.webp', alt: 'জনগণের সাথে কথা বলা' },
      { src: '/gallery/aminul14.webp', alt: 'প্রচার দল' },
    ]
  },
  {
    date: 'নভেম্বর ১০, ২০২৫',
    title: 'কৃষক সমাবেশ',
    location: 'মানিকগঞ্জ',
    description: 'কৃষকদের সাথে বৈঠক এবং কৃষি উন্নয়ন পরিকল্পনা নিয়ে আলোচনা।',
    images: [
      { src: '/gallery/aminul14.webp', alt: 'কৃষক সভা' },
      { src: '/gallery/aminul14.webp', alt: 'কৃষকদের সাথে' },
      { src: '/gallery/aminul14.webp', alt: 'গ্রামীণ প্রচার' },
    ]
  },
  {
    date: 'নভেম্বর ৮, ২০২৫',
    title: 'যুব সমাবেশ',
    location: 'চট্টগ্রাম',
    description: 'তরুণদের সাথে সংলাপ এবং যুব উন্নয়ন কর্মসূচি উপস্থাপন।',
    images: [
      { src: '/gallery/aminul14.webp', alt: 'যুব সমাবেশ' },
      { src: '/gallery/aminul14.webp', alt: 'তরুণদের সাথে' },
      { src: '/gallery/aminul14.webp', alt: 'চট্টগ্রাম প্রচার' },
    ]
  },
  {
    date: 'নভেম্বর ৫, ২০২৫',
    title: 'শিক্ষা সংস্কার সভা',
    location: 'রাজশাহী',
    description: 'শিক্ষা সংস্কার পরিকল্পনা এবং শিক্ষকদের সাথে মতবিনিময়।',
    images: [
      { src: '/gallery/aminul14.webp', alt: 'শিক্ষক সভা' },
      { src: '/gallery/aminul14.webp', alt: 'শিক্ষা পরিকল্পনা' },
      { src: '/gallery/aminul14.webp', alt: 'রাজশাহী প্রচার' },
    ]
  },
  {
    date: 'নভেম্বর ৩, ২০২৫',
    title: 'মহিলা সমাবেশ',
    location: 'সিলেট',
    description: 'নারী ক্ষমতায়ন এবং নারী উন্নয়ন কর্মসূচি নিয়ে আলোচনা।',
    images: [
      { src: '/gallery/aminul14.webp', alt: 'মহিলা সমাবেশ' },
      { src: '/gallery/aminul14.webp', alt: 'নারী নেত্রীদের সাথে' },
      { src: '/gallery/aminul14.webp', alt: 'সিলেট প্রচার' },
    ]
  },
];

export default function GalleryClient() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      {CAMPAIGN_EVENTS.map((event, eventIdx) => (
        <motion.div
          key={eventIdx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: eventIdx * 0.1 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Event Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-green-100 mb-2">
                  <FaCalendarAlt />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-white/90">
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                <FaUsers />
                <span className="font-semibold">{event.images.length} ছবি</span>
              </div>
            </div>
            <p className="text-white/90 mt-4 text-lg">
              {event.description}
            </p>
          </div>

          {/* Image Grid */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.images.map((image, imgIdx) => (
                <motion.div
                  key={imgIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: imgIdx * 0.05 }}
                  onClick={() => setSelectedEvent(eventIdx * 10 + imgIdx)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Lightbox Modal - You can implement this later if needed */}
      {selectedEvent !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-green-400 transition-colors"
            onClick={() => setSelectedEvent(null)}
          >
            ×
          </button>
          <img
            src={CAMPAIGN_EVENTS[Math.floor(selectedEvent / 10)].images[selectedEvent % 10].src}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
