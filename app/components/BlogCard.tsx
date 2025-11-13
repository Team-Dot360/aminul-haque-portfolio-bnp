import Link from 'next/link';
import { FaArrowRight, FaClock, FaUser, FaTag } from 'react-icons/fa';

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  category,
  href,
}: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  href: string;
}) {
  return (
    <article className="group h-full flex flex-col rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
      {/* Category Badge */}
      <div className="relative bg-gradient-to-br from-green-500 to-green-700 px-6 py-8">
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white">
            <FaTag className="text-xs" />
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1.5">
            <FaClock />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <FaUser />
            {author}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 leading-relaxed mb-4 flex-1 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link 
          href={href} 
          className="inline-flex items-center gap-2 text-sm font-bold text-green-600 group-hover:text-red-600 transition-colors"
        >
          আরও পড়ুন 
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}


