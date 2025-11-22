"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CAMPAIGN_EVENTS = [
  {
    date: '১৫ অক্টোবর ২০২৩',
    location: 'ঢাকা বিশ্ববিদ্যালয় প্রাঙ্গণ',
    title: 'যুব নেতৃত্ব সেমিনার এবং ছাত্র মিথস্ক্রিয়া',
    description: 'দেশের ভবিষ্যৎ নেতৃত্ব গড়ে তোলার লক্ষ্যে ছাত্র-যুবদের সাথে মতবিনিময় এবং তাদের স্বপ্ন ও আকাঙ্ক্ষা নিয়ে আলোচনা করা হয়েছে।',
    images: [
      '/aminul_haque.jpg',
      '/aminul_nomination_post.webp',
      '/aminul_haque.jpg',
      '/aminul_nomination_post.webp',
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    date: '২ অক্টোবর ২০২৩',
    location: 'ময়মনসিংহ কৃষি সমবায়',
    title: 'কৃষক মিলনায়তন এবং প্রশিক্ষণ সেশন',
    description: 'কৃষকদের সমস্যা সমাধান এবং আধুনিক কৃষি পদ্ধতি সম্পর্কে প্রশিক্ষণ প্রদান করা হয়েছে। কৃষি উন্নয়নে সরকারি সহায়তা বৃদ্ধির বিষয়েও আলোচনা হয়েছে।',
    images: [
      '/aminul_haque.jpg',
      '/aminul_nomination_post.webp',
      '/aminul_haque.jpg',
    ],
    color: 'from-emerald-500 to-green-600',
  },
  {
    date: '২০ সেপ্টেম্বর ২০২৩',
    location: 'চট্টগ্রাম সাংস্কৃতিক কেন্দ্র',
    title: 'লোক সঙ্গীত উৎসব এবং কারুশিল্প প্রদর্শনী',
    description: 'বাংলার ঐতিহ্যবাহী সংস্কৃতি এবং কারুশিল্পের প্রচার ও সংরক্ষণের উদ্যোগ। স্থানীয় শিল্পীদের সাথে মতবিনিময় এবং সাংস্কৃতিক উন্নয়নে সহায়তার প্রতিশ্রুতি প্রদান করা হয়েছে।',
    images: [
      '/aminul_haque.jpg',
      '/aminul_nomination_post.webp',
      '/aminul_haque.jpg',
      '/aminul_nomination_post.webp',
      '/aminul_haque.jpg',
    ],
    color: 'from-purple-500 to-pink-600',
  },
  {
    date: '৮ সেপ্টেম্বর ২০২৩',
    location: 'সিলেট গ্রামীণ স্কুল ভিজিট',
    title: 'বৃত্তি প্রোগ্রাম চালু এবং স্কুল সরবরাহ বিতরণ',
    description: 'মেধাবী ও দরিদ্র শিক্ষার্থীদের জন্য বৃত্তি প্রোগ্রাম চালু এবং প্রয়োজনীয় শিক্ষা উপকরণ বিতরণ করা হয়েছে। শিক্ষার মান উন্নয়নে প্রতিশ্রুতিবদ্ধ থাকার অঙ্গীকার করা হয়েছে।',
    images: [
      '/aminul_haque.jpg',
      '/aminul_nomination_post.webp',
      '/aminul_haque.jpg',
    ],
    color: 'from-blue-500 to-cyan-600',
  },
];

export default function GalleryClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentEventImages, setCurrentEventImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (image: string, eventImages: string[]) => {
    setSelectedImage(image);
    setCurrentEventImages(eventImages);
    setCurrentImageIndex(eventImages.indexOf(image));
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = (currentImageIndex - 1 + currentEventImages.length) % currentEventImages.length;
      setCurrentImageIndex(newIndex);
      setSelectedImage(currentEventImages[newIndex]);
    } else {
      const newIndex = (currentImageIndex + 1) % currentEventImages.length;
      setCurrentImageIndex(newIndex);
      setSelectedImage(currentEventImages[newIndex]);
    }
  };

  return (
    <>
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl space-y-16">
          {CAMPAIGN_EVENTS.map((event, idx) => (
            <motion.div
              key={event.date}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-20`}></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
                {/* Event Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                    {event.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <div className={`p-2 bg-gradient-to-r ${event.color} rounded-lg`}>
                        <FaCalendarAlt className="text-white" />
                      </div>
                      <span className="font-bold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <div className={`p-2 bg-gradient-to-r ${event.color} rounded-lg`}>
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <div className={`p-2 bg-gradient-to-r ${event.color} rounded-lg`}>
                        <FaImages className="text-white" />
                      </div>
                      <span>{event.images.length} ফটো</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mt-4">
                    {event.description}
                  </p>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {event.images.map((image, imageIdx) => (
                    <motion.div
                      key={imageIdx}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => openLightbox(image, event.images)}
                      className="group relative cursor-pointer rounded-xl overflow-hidden aspect-square shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-75 transition-all z-10`}></div>
                      <img
                        src={image}
                        alt={`${event.title} - ছবি ${imageIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20">
                        <FaImages className="text-4xl text-white" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-10"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Navigation Buttons */}
            {currentEventImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                >
                  <FaChevronLeft className="text-2xl" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                >
                  <FaChevronRight className="text-2xl" />
                </button>
              </>
            )}

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-full font-bold">
              {currentImageIndex + 1} / {currentEventImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
