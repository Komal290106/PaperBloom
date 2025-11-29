import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Brain, Smile, Sparkles, ChevronDown } from 'lucide-react';
import heroVideo from '../assets/hero_bg.mp4';
import TutorialCard from '../components/TutorialCard';
import BlogCard from '../components/BlogCard';
import { tutorials } from '../data/tutorials';
import { blogs } from '../data/blogs';
import FlyingPaperPlane from '../components/FlyingPaperPlane';



export default function Home() {
  const featuredTutorials = tutorials.slice(0, 3);
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <div className="min-h-screen bg-paper-cream">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-screen w-full overflow-hidden bg-paper-dark">
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <video
            className="w-full h-full object-cover opacity-60"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-paper-dark/60 via-transparent to-transparent z-10"></div>

        <div className="relative z-20 h-full flex items-end px-6 md:px-16 pb-20 md:pb-24">
          <div className="max-w-3xl">
          
            {/* Main Title - BODONI MODA */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-paper-cream leading-tight mb-6"
              style={{ fontFamily: "'Bodoni Moda', serif" }} 
            >
              Craft Your <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-paper-gold italic font-light"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Paper World
              </motion.span>
            </motion.h1>

           {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-white mb-8 max-w-lg leading-relaxed font-normal italic drop-shadow-[2px_2px_0px_#0C3B2E]"
              style={{ fontFamily: "'Newsreader', serif" }}
            >
              Magical, storybook-style origami tutorials bringing calm & 
              creativity into every fold.
            </motion.p>

            {/* CTA Button - SPACE GROTESK (Brutalist Tech) */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Link
                to="/tutorials"
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-paper-gold text-paper-dark rounded-xl font-bold text-lg transition-all duration-300 border-2 border-paper-dark hover:-translate-y-1"
                style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                    boxShadow: '4px 4px 0px 0px #0C3B2E' 
                }}
              >
                <span>Start Folding</span>
                <div className="bg-paper-dark text-paper-gold rounded-full p-1 transition-transform group-hover:rotate-45">
                   <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 right-10 z-20 hidden md:block"
        >
          <div className="flex flex-col items-center text-paper-cream/70">
            <span className="text-xs tracking-widest uppercase mb-2 vertical-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

      </section>


      {/* ---------------- FEATURED TUTORIALS ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-paper-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Header - BODONI MODA */}
          <h2 className="text-4xl md:text-5xl font-black text-paper-dark mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            Featured Tutorials
          </h2>
          {/* Subheader - NEWSREADER */}
          <p className="text-xl text-paper-sage max-w-2xl mx-auto font-medium italic" style={{ fontFamily: "'Newsreader', serif" }}>
            Begin your origami journey with these beautifully crafted projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {featuredTutorials.map((tutorial, index) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/tutorials"
            className="inline-flex items-center gap-3 px-8 py-3 bg-white text-paper-dark border-2 border-paper-dark rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
            style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: '4px 4px 0px 0px #0C3B2E'
            }}
          >
            Explore All Tutorials
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* ---------------- WHY ORIGAMI (Symmetrical Stacked Look) ---------------- */}
      <section className="relative bg-paper-sage py-24 border-y-2 border-paper-dark overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#FDF8E8 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-6xl text-paper-cream mb-4 drop-shadow-md" style={{ fontFamily: "'Caveat Brush', cursive" }}>
                Why Origami?
            </h2>
            <div className="flex justify-center items-center gap-3">
                <span className="h-px w-12 bg-paper-dark/30"></span>
                <p className="font-bold uppercase tracking-[0.2em] text-sm text-paper-dark" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Benefits beyond the paper
                </p>
                <span className="h-px w-12 bg-paper-dark/30"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="h-full group bg-paper-cream p-8 rounded-2xl border-2 border-paper-dark text-center flex flex-col items-center"
              style={{ 
                  boxShadow: '8px 8px 0px 0px #BB8A52, 16px 16px 0px 0px #0C3B2E',
                  transition: 'all 0.3s ease'
              }}
            >
              <div className="w-16 h-16 bg-paper-clay/20 rounded-full flex items-center justify-center mb-6 border-2 border-paper-dark group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-[#BB8A52]" />
              </div>
              <h3 className="font-bold text-2xl text-paper-dark mb-3" style={{ fontFamily: "'Bodoni Moda', serif" }}>Reduces Stress</h3>
              <p className="text-base text-paper-dark/70 leading-relaxed font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  A meditative ritual. Each fold is a breath, calming your mind and grounding your spirit.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="h-full group bg-paper-cream p-8 rounded-2xl border-2 border-paper-dark text-center flex flex-col items-center"
              style={{ 
                  boxShadow: '8px 8px 0px 0px #6D9773, 16px 16px 0px 0px #0C3B2E',
                  transition: 'all 0.3s ease'
              }}
            >
              <div className="w-16 h-16 bg-paper-sage/20 rounded-full flex items-center justify-center mb-6 border-2 border-paper-dark group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-[#6D9773]" />
              </div>
              <h3 className="font-bold text-2xl text-paper-dark mb-3" style={{ fontFamily: "'Bodoni Moda', serif" }}>Improves Focus</h3>
              <p className="text-base text-paper-dark/70 leading-relaxed font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Sharpen your mind. Complex patterns require precision, patience, and deep concentration.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="h-full group bg-paper-cream p-8 rounded-2xl border-2 border-paper-dark text-center flex flex-col items-center"
              style={{ 
                  boxShadow: '8px 8px 0px 0px #FFBA00, 16px 16px 0px 0px #0C3B2E',
                  transition: 'all 0.3s ease'
              }}
            >
              <div className="w-16 h-16 bg-paper-gold/20 rounded-full flex items-center justify-center mb-6 border-2 border-paper-dark group-hover:scale-110 transition-transform duration-300">
                 <Smile className="w-8 h-8 text-[#D49B00]" /> 
              </div>
              <h3 className="font-bold text-2xl text-paper-dark mb-3" style={{ fontFamily: "'Bodoni Moda', serif" }}>Sparks Joy</h3>
              <p className="text-base text-paper-dark/70 leading-relaxed font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Transform simple paper into extraordinary art. The joy of creation is just one fold away.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ME (Personalized Split Layout) ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: The "Polaroid" Image */}
          <motion.div 
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Added Flying Paper Plane Animation */}
            <FlyingPaperPlane />
            
            {/* Washi Tape Effect at Top */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-paper-clay/80 rotate-2 z-20 shadow-sm backdrop-blur-sm"></div>
            
            {/* Photo Frame */}
            <div className="bg-white p-4 pb-16 rounded-sm shadow-[12px_12px_0px_0px_#0C3B2E] border-2 border-paper-dark transform transition-transform hover:rotate-0 duration-500">
               {/* PLACEHOLDER IMAGE */}
               <img 
                 src="https://images.pexels.com/photos/110473/pexels-photo-110473.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="The Creator" 
                 className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-paper-dark/10"
               />
               <div className="absolute bottom-4 left-0 w-full text-center">
                 <span className="font-handwriting text-paper-dark/60 text-xl" style={{ fontFamily: "'Caveat Brush', cursive" }}>
                   Me & My Code
                 </span>
               </div>
            </div>

            {/* Decorative Sparkle SVG behind */}
            <div className="absolute -bottom-10 -left-10 text-paper-gold z-[-1]">
              <Sparkles className="w-24 h-24 opacity-40" />
            </div>
          </motion.div>

          {/* RIGHT: The Story */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Small Badge */}
            <div className="inline-block px-3 py-1 mb-6 border-2 border-paper-dark rounded-full bg-paper-sage/20 text-paper-dark font-bold text-xs uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Meet the Maker
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-black text-paper-dark mb-6 leading-tight" style={{ fontFamily: "'Bodoni Moda', serif" }}>
              Coding logic meets <br/>
              <span className="text-paper-sage decoration-paper-gold underline decoration-4 underline-offset-4">paper magic.</span>
            </h2>

            {/* Body Text */}
            <div className="space-y-6 text-lg text-paper-dark/80 leading-relaxed" style={{ fontFamily: "'Newsreader', serif" }}>
              <p>
                Hi! I built <strong>PaperBloom</strong> as a solo developer with a love for tactile design. 
              </p>
              <p>
                What started as a simple React project evolved into a digital garden where I combine my two passions: clean code and the ancient art of Origami.
              </p>
              <p>
                Every animation, every pixel, and every fold you see here was crafted with care. I hope this space inspires you to slow down and create something beautiful with your hands.
              </p>
            </div>

            {/* Signature & CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-8">
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-3 px-8 py-3 bg-paper-dark text-paper-cream border-2 border-paper-dark rounded-lg font-bold text-lg hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0px_0px_#BB8A52]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Read My Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Signature Effect */}
              <div className="text-3xl text-paper-clay rotate-[-5deg]" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Happy Folding!
              </div>
            </div>

          </motion.div>

        </div>
      </section>

    {/* ---------------- FROM OUR BLOG (Sage Green Retro Section) ---------------- */}
      <section className="bg-paper-sage py-24 relative overflow-hidden border-t-2 border-paper-dark">
        
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#FDF8E8 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl text-paper-cream mb-4 drop-shadow-[2px_2px_0px_#0C3B2E]" style={{ fontFamily: "'Caveat Brush', cursive" }}>
              Fresh from the Fold
            </h2>
            
            <div className="inline-block mt-2">
                <span className="font-bold uppercase tracking-[0.2em] text-sm text-paper-dark border-y border-paper-dark/30 py-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                   Stories, tips, and inspiration
                </span>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} index={0} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 px-8 py-3 bg-paper-dark text-paper-gold border-2 border-paper-dark rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
              style={{ 
                  fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: '4px 4px 0px 0px #FFBA00'
              }}
            >
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}