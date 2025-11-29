import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, Clock, Share2 } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  // ---------------- NOT FOUND STATE ---------------- //
  if (!blog) {
    return (
      <div className="min-h-screen bg-paper-cream flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl border-2 border-paper-dark shadow-[8px_8px_0px_0px_#0C3B2E] text-center max-w-md">
          <h1 className="text-3xl font-bold text-paper-dark mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            Article not found
          </h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-paper-gold text-paper-dark border-2 border-paper-dark rounded-xl font-bold hover:-translate-y-1 transition-transform"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs.filter((b) => b.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper-cream relative overflow-hidden">
      
      {/* ---------------- HEADER BACKGROUND STRIP ---------------- */}
      {/* Height reduced to h-28 (approx 112px) to just cover the navbar */}
      <div className="absolute top-0 left-0 w-full h-28 bg-paper-sage border-b-[6px] border-paper-gold z-0">
         {/* Dotted Pattern Overlay */}
         <div className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'radial-gradient(#FDF8E8 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
         </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        
        {/* --- BACK LINK --- */}
        {/* Changed color to paper-dark since it now sits on the cream background */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-paper-dark/60 hover:text-paper-dark mb-8 font-bold uppercase tracking-widest text-sm transition-colors group"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <div className="bg-white border border-paper-dark/30 rounded-full p-2 group-hover:border-paper-dark group-hover:-translate-x-1 transition-all">
             <ArrowLeft className="w-4 h-4" /> 
          </div>
          Back to Journal
        </Link>

        {/* --- MAIN ARTICLE CARD --- */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-xl border-2 border-paper-dark shadow-[12px_12px_0px_0px_#0C3B2E]"
        >
          {/* ---------------- 4 CORNER WASHI TAPES ---------------- */}
          {/* Top Left */}
          <div className="absolute -top-3 -left-8 w-28 h-7 bg-paper-sage/90 -rotate-45 shadow-sm z-20 backdrop-blur-sm opacity-90 clip-tape-left"></div>
          {/* Top Right */}
          <div className="absolute -top-3 -right-8 w-28 h-7 bg-paper-sage/90 rotate-45 shadow-sm z-20 backdrop-blur-sm opacity-90 clip-tape-right"></div>
          {/* Bottom Left */}
          <div className="absolute -bottom-3 -left-8 w-28 h-7 bg-paper-sage/90 rotate-45 shadow-sm z-20 backdrop-blur-sm opacity-90 clip-tape-left"></div>
          {/* Bottom Right */}
          <div className="absolute -bottom-3 -right-8 w-28 h-7 bg-paper-sage/90 -rotate-45 shadow-sm z-20 backdrop-blur-sm opacity-90 clip-tape-right"></div>


          {/* Hero Image */}
          <div className="relative h-[400px] bg-paper-dark/5 border-b-2 border-paper-dark rounded-t-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for texture */}
            <div className="absolute inset-0 bg-paper-dark/10"></div>
          </div>

          <div className="p-8 md:p-12 bg-white rounded-b-xl relative z-10">
            
            {/* Meta Data */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
               <span className="px-4 py-1.5 bg-paper-gold text-paper-dark border-2 border-paper-dark rounded-full font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#0C3B2E]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {blog.category}
               </span>
               <div className="flex items-center gap-2 text-paper-dark/60 text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
               </div>
               <div className="flex items-center gap-2 text-paper-dark/60 text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
               </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-paper-dark mb-8 leading-tight" style={{ fontFamily: "'Bodoni Moda', serif" }}>
              {blog.title}
            </h1>

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-paper-dark/80 space-y-6" style={{ fontFamily: "'Newsreader', serif" }}>
              <p className="text-xl leading-relaxed text-paper-dark font-medium italic border-l-4 border-paper-gold pl-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Transforming paper into poetry requires patience."
              </p>

              <p className="leading-relaxed">
                 Origami is more than just folding paper; it is a discipline of precision and a practice of mindfulness. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>

              <h2 className="text-3xl font-bold text-paper-dark mt-10 mb-6" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                The Art of the Crease
              </h2>
              <p className="leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. When we fold, we create structure from chaos.
              </p>

              <div className="my-8 p-6 bg-paper-sage/10 rounded-xl border border-paper-sage/30">
                 <h3 className="font-bold text-paper-dark text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>💡 Pro Tip:</h3>
                 <p className="text-paper-dark/90">Always use a bone folder for crisp edges, especially when working with thicker cardstock.</p>
              </div>

              <h2 className="text-3xl font-bold text-paper-dark mt-10 mb-6" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                Final Thoughts
              </h2>
              <p className="leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Happy folding!
              </p>
            </div>

            {/* Footer: Tags & Share */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 pt-8 border-t-2 border-paper-dark/10">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 bg-paper-cream text-paper-dark/70 rounded-lg text-sm font-bold border border-paper-dark/20"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-paper-dark hover:text-paper-clay transition-colors font-bold text-sm uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                 <Share2 className="w-4 h-4" /> Share Article
              </button>
            </div>
          </div>
        </motion.article>

        {/* --- RELATED ARTICLES --- */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-paper-dark/20 flex-1"></div>
             <h2 className="text-3xl font-bold text-paper-dark text-center" style={{ fontFamily: "'Bodoni Moda', serif" }}>
               Continue Reading
             </h2>
             <div className="h-px bg-paper-dark/20 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <BlogCard key={relatedBlog.id} blog={relatedBlog} index={0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}