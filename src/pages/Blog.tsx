import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import FilterChips from '../components/FilterChips';
import { blogs } from '../data/blogs';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Wellness', 'Tips', 'Culture', 'Kids', 'Advanced'];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-paper-cream">
      
      {/* --- HEADER SECTION (Sage Green) --- */}
      <div className="bg-paper-sage pt-32 pb-20 border-b-[8px] border-paper-gold relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#FDF8E8 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 text-paper-gold mb-4"
            >
                <Sparkles className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    The Journal
                </span>
                <Sparkles className="w-5 h-5" />
            </motion.div>
            
            <h1 
                className="text-5xl md:text-7xl font-bold text-paper-cream mb-6 drop-shadow-[4px_4px_0px_#0C3B2E]" 
                style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              PaperBloom Blog
            </h1>
            <p 
                className="text-xl text-paper-dark/80 max-w-2xl mx-auto font-medium italic" 
                style={{ fontFamily: "'Newsreader', serif" }}
            >
              Stories, tips, and inspiration for your paper folding journey.
            </p>
          </div>

          {/* --- SEARCH BAR --- */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="relative group">
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-paper-dark/50 group-focus-within:text-paper-dark transition-colors pointer-events-none">
                    <Search className="w-6 h-6" />
                </div>
                
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 rounded-2xl border-4 border-paper-dark focus:border-paper-gold focus:outline-none bg-paper-cream text-paper-dark text-lg font-bold placeholder:text-paper-dark/30 shadow-[8px_8px_0px_0px_#0C3B2E] transition-all"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                />
            </div>
          </div>

          {/* --- FILTER CHIPS --- */}
          <FilterChips
            options={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </div>

      {/* --- GRID SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} index={0} />
              ))}
            </div>

            {/* Load More Button (Retro Style) */}
            <div className="text-center">
              <button 
                className="px-8 py-3 bg-paper-cream text-paper-dark border-2 border-paper-dark rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0px_0px_#0C3B2E] hover:shadow-[6px_6px_0px_0px_#0C3B2E]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Load More Articles
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white border-2 border-paper-dark rounded-3xl shadow-[8px_8px_0px_0px_#0C3B2E] max-w-lg mx-auto">
            <div className="w-20 h-20 bg-paper-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-paper-dark/50" />
            </div>
            <h3 className="text-2xl font-bold text-paper-dark mb-2" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                No articles found
            </h3>
            <p className="text-paper-dark/70 font-medium" style={{ fontFamily: "'Newsreader', serif" }}>
                Try searching for something else or browse all categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}