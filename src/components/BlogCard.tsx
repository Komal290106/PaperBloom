import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { BlogPost } from '../data/blogs';

interface BlogCardProps {
  blog: BlogPost;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Link to={`/blog/${blog.id}`}>
        <div 
          className="relative bg-paper-cream rounded-2xl overflow-hidden transition-all duration-300 border-[3px] border-paper-dark h-full flex flex-col"
          style={{ 
            boxShadow: isHovered ? '8px 8px 0px 0px #0C3B2E' : '4px 4px 0px 0px #0C3B2E',
            transform: isHovered ? 'translate(-2px, -2px)' : 'translate(0, 0)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-paper-dark bg-white">
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              animate={{ 
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span 
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-paper-gold text-paper-dark border-2 border-paper-dark shadow-[2px_2px_0px_0px_#0C3B2E]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }} 
              >
                {blog.category}
              </span>
            </div>

            {/* Read Time Badge */}
            <div className="absolute top-3 right-3 z-10">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-paper-cream rounded-md border-2 border-paper-dark shadow-[2px_2px_0px_0px_#0C3B2E]">
                <Clock className="w-3 h-3 text-paper-dark" />
                <span className="text-xs font-bold text-paper-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {blog.readTime || '5 min read'}
                </span>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-5 flex flex-col flex-grow">
            {/* Title */}
            <h3 
              className="text-2xl font-bold text-paper-dark mb-3 leading-tight flex-grow"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-paper-dark/80 mb-4 leading-relaxed flex-grow"
               style={{ fontFamily: "'Newsreader', serif" }}>
              {blog.excerpt}
            </p>

            {/* Metadata Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-paper-sage/20 rounded-md border border-paper-dark/10">
                <Calendar className="w-4 h-4 text-paper-dark" />
                <span className="text-sm font-bold text-paper-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-paper-clay/20 rounded-md border border-paper-dark/10">
                <Tag className="w-4 h-4 text-paper-dark" />
                <span className="text-sm font-bold text-paper-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {blog.tags[0]}
                </span>
              </div>
            </div>

            {/* Bottom Row: CTA */}
            <div className="pt-4 border-t-2 border-paper-dark/10 flex justify-between items-center">
              <span 
                className="text-sm font-bold text-paper-sage uppercase tracking-wide"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Read More
              </span>
              <div className={`w-8 h-8 rounded-full bg-paper-dark flex items-center justify-center transition-transform duration-300 ${isHovered ? '-rotate-45' : 'rotate-0'}`}>
                <ArrowRight className="w-4 h-4 text-paper-gold" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}