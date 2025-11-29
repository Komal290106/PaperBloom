import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import TutorialCard from '../components/TutorialCard';
import FilterChips from '../components/FilterChips';
import { tutorials } from '../data/tutorials';

export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || tutorial.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-paper-cream">
      
      {/* --- HEADER SECTION (Updated to Sage Green) --- */}
      {/* Changed bg-paper-dark to bg-paper-sage */}
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
                    The Collection
                </span>
                <Sparkles className="w-5 h-5" />
            </motion.div>
            
            <h1 
                className="text-5xl md:text-7xl font-bold text-paper-cream mb-6 drop-shadow-[4px_4px_0px_#0C3B2E]" 
                style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Tutorial Library
            </h1>
            <p 
                className="text-xl text-paper-dark/80 max-w-2xl mx-auto font-medium italic" 
                style={{ fontFamily: "'Newsreader', serif" }}
            >
              Explore our curated collection of origami projects, from simple folds to complex masterpieces.
            </p>
          </div>

          {/* --- SEARCH BAR --- */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="relative group">
                {/* Search Icon */}
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-paper-dark/50 group-focus-within:text-paper-dark transition-colors pointer-events-none">
                    <Search className="w-6 h-6" />
                </div>
                
                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Search for 'Crane', 'Flower'..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 rounded-2xl border-4 border-paper-dark focus:border-paper-gold focus:outline-none bg-paper-cream text-paper-dark text-lg font-bold placeholder:text-paper-dark/30 shadow-[8px_8px_0px_0px_#0C3B2E] transition-all"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                />
            </div>
          </div>

          {/* --- FILTER CHIPS --- */}
          <FilterChips
            options={difficulties}
            selected={selectedDifficulty}
            onSelect={setSelectedDifficulty}
          />
        </div>
      </div>

      {/* --- GRID SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredTutorials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTutorials.map((tutorial, index) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border-2 border-paper-dark rounded-3xl shadow-[8px_8px_0px_0px_#0C3B2E] max-w-lg mx-auto">
            <div className="w-20 h-20 bg-paper-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-paper-dark/50" />
            </div>
            <h3 className="text-2xl font-bold text-paper-dark mb-2" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                No results found
            </h3>
            <p className="text-paper-dark/70 font-medium" style={{ fontFamily: "'Newsreader', serif" }}>
                Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}