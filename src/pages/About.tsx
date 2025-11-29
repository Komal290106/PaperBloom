import { motion } from 'framer-motion';
import { 
  Code, 
  Heart, 
  Coffee, 
  Calendar, 
  Cpu, 
  Sparkles, 
  Scissors, 
  PenTool,
  ArrowRight,
  Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FlyingPaperPlane from '../components/FlyingPaperPlane'; 

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-paper-cream overflow-hidden">
      
      {/* ---------------- HEADER SECTION (Matches Blog.tsx) ---------------- */}
      <section className="bg-paper-sage pt-32 pb-20 border-b-[8px] border-paper-gold relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#FDF8E8 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
        </div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div 
            variants={fadeInUp} 
            className="inline-flex items-center gap-2 text-paper-gold mb-4"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The Maker
            </span>
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-paper-cream mb-6 drop-shadow-[4px_4px_0px_#0C3B2E]"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            Behind the Fold
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl text-paper-dark/80 max-w-2xl mx-auto font-medium italic"
            style={{ fontFamily: "'Newsreader', serif" }}
          >
            Where clean code meets the ancient art of paper folding.
          </motion.p>
        </motion.div>
      </section>


      {/* ---------------- THE ORIGIN STORY ---------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-paper-dark" style={{ fontFamily: "'Bodoni Moda', serif" }}>
              One Developer, <br/>
              <span className="text-paper-clay decoration-paper-sage underline decoration-4 underline-offset-4">Two Passions.</span>
            </h2>

            <div className="text-xl text-paper-dark/80 space-y-6 leading-relaxed" style={{ fontFamily: "'Newsreader', serif" }}>
              <p>
              <strong className="text-paper-dark font-bold text-2xl float-left mr-2 mt-[-6px]" style={{ fontFamily: "'Bodoni Moda', serif" }}>P</strong>aperBloom wasn't created by a large agency or a team of designers. It is a solo project born during the quiet days of <strong>Winter Break 2025</strong>.
              </p>
              <p>
                As a developer, I've always been fascinated by the logic of code. As an artist, I find peace in the tactile precision of origami. I realized that both disciplines share the same soul: creating something complex and beautiful from simple starting materials.
              </p>
              <p>
                I built this platform to be a digital sanctuary. No ads, no noise - just a clean, storybook aesthetic where you can slow down, grab a sheet of paper, and learn to fold.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-8">
               <span className="text-5xl text-paper-sage block" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Made with love, Komal
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Project Stats (Bento Box Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 sticky top-24"
          >
            {/* Stat 1 */}
            <div className="bg-paper-gold p-6 rounded-xl border-2 border-paper-dark shadow-[4px_4px_0px_0px_#0C3B2E] text-center transform hover:-translate-y-1 transition-transform">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-paper-dark" />
              <div className="font-bold text-3xl text-paper-dark" style={{ fontFamily: "'Bodoni Moda', serif" }}>2025</div>
              <div className="text-xs font-bold uppercase tracking-widest text-paper-dark/70" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Winter Break</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-paper-sage p-6 rounded-xl border-2 border-paper-dark shadow-[4px_4px_0px_0px_#0C3B2E] text-center transform hover:-translate-y-1 transition-transform">
               <Code className="w-8 h-8 mx-auto mb-2 text-paper-cream" />
               <div className="font-bold text-3xl text-paper-cream" style={{ fontFamily: "'Bodoni Moda', serif" }}>100%</div>
               <div className="text-xs font-bold uppercase tracking-widest text-paper-cream/80" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Solo Coded</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-paper-cream p-6 rounded-xl border-2 border-paper-dark shadow-[4px_4px_0px_0px_#0C3B2E] text-center col-span-2 transform hover:-translate-y-1 transition-transform">
               <div className="flex justify-center gap-4 mb-3">
                  <Coffee className="w-6 h-6 text-paper-clay" />
                  <Cpu className="w-6 h-6 text-paper-clay" />
                  <Heart className="w-6 h-6 text-paper-clay" />
               </div>
               <div className="text-sm font-bold text-paper-dark" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                 Fueled by coffee, React, and a love for paper.
               </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ---------------- THE TECH STACK STRIP ---------------- */}
      <section className="bg-paper-dark py-12 overflow-hidden whitespace-nowrap border-y-4 border-paper-gold">
         <div className="flex gap-12 animate-marquee items-center justify-center">
            {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lucide Icons', 'Storybook UI'].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Sparkles className="w-4 h-4 text-paper-gold" />
                <span className="font-bold text-xl text-paper-cream uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {tech}
                </span>
              </div>
            ))}
         </div>
      </section>

      {/* ---------------- THE CREATIVE PROCESS (Polaroid Style) ---------------- */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: The Polaroid Visual */}
            <motion.div 
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
            >
            {/* Flying Plane Animation */}
            <div className="absolute -top-10 -left-10 z-20">
                <FlyingPaperPlane />
            </div>
            
            {/* Washi Tape Effect */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-paper-sage/80 rotate-2 z-20 shadow-sm backdrop-blur-sm opacity-90"></div>
            
            {/* Photo Frame */}
            <div className="bg-white p-4 pb-20 rounded-sm shadow-[12px_12px_0px_0px_#BB8A52] border-2 border-paper-dark transform transition-transform hover:rotate-0 duration-500 bg-paper-cream/50">
                {/* Placeholder Image */}
                <div className="w-full h-[400px] bg-paper-dark/5 border border-paper-dark/10 flex items-center justify-center overflow-hidden relative group">
                    <img 
                        src="https://images.pexels.com/photos/7319478/pexels-photo-7319478.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Sketching ideas" 
                        className="w-full h-full object-cover sepia-[.3] group-hover:sepia-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-paper-dark/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center px-8">
                    <span className="text-paper-dark text-2xl" style={{ fontFamily: "'Caveat Brush', cursive" }}>
                    Sketching, Folding, Coding.
                    </span>
                    <div className="mt-2 flex justify-center gap-2 text-paper-clay/60">
                        <Camera className="w-4 h-4" />
                        <span className="text-xs tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PROCESS SHOT</span>
                    </div>
                </div>
            </div>
            </motion.div>

            {/* RIGHT: Text Content */}
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
            >
                <div className="inline-block px-3 py-1 mb-4 border-2 border-paper-dark rounded-full bg-paper-gold/20 text-paper-dark font-bold text-xs uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Behind the Scenes
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-paper-dark leading-tight" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                    Crafting the <br/> Digital Paper.
                </h2>
                <p className="text-xl text-paper-dark/80 leading-relaxed" style={{ fontFamily: "'Newsreader', serif" }}>
                    The goal wasn't just to show origami instructions, but to make the website <em>feel</em> like paper.
                </p>
                <p className="text-lg text-paper-dark/70 leading-relaxed" style={{ fontFamily: "'Newsreader', serif" }}>
                    This meant obsessing over details: the slight texture in the background, the way shadows fall sharply like cut cardstock, and the satisfying "snap" of interactions. It's a digital experience rooted in the physical world.
                </p>
            </motion.div>
        </div>
      </section>


      {/* ---------------- PHILOSOPHY / VALUES ---------------- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-paper-cream relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-black text-5xl text-paper-dark mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            The Philosophy
          </h2>
          <p className="italic text-xl text-paper-sage" style={{ fontFamily: "'Newsreader', serif" }}>Guiding principles behind the pixels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <PenTool className="w-8 h-8 text-paper-gold" />,
              title: "Digital Handcraft",
              desc: "Every interaction is designed to feel as tactile as paper. We prioritize texture and depth over flat design."
            },
            {
              icon: <Scissors className="w-8 h-8 text-paper-sage" />,
              title: "Mindful Making",
              desc: "Origami teaches patience. This site is designed to be a slow-web experience, encouraging focus."
            },
            {
              icon: <Heart className="w-8 h-8 text-paper-clay" />,
              title: "Open & Free",
              desc: "Knowledge should be folded and shared. This project is open source and free for everyone."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl border-2 border-paper-dark text-center group hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '8px 8px 0px 0px #0C3B2E' }}
            >
              <div className="w-16 h-16 bg-paper-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-2xl text-paper-dark mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                {item.title}
              </h3>
              <p className="text-lg text-paper-dark/70 leading-relaxed" style={{ fontFamily: "'Newsreader', serif" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ---------------- CTA SECTION ---------------- */}
      <section className="bg-paper-sage py-24 border-t-[8px] border-paper-dark text-center relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#FDF8E8 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-6xl text-paper-cream mb-6 drop-shadow-[4px_4px_0px_#0C3B2E]" style={{ fontFamily: "'Caveat Brush', cursive" }}>
            Ready to fold?
          </h2>
          <p className="font-medium text-paper-cream/90 text-lg mb-10 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Grab a piece of paper. Square is best. Let's make something beautiful together.
          </p>
          
          <Link
            to="/tutorials"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-paper-gold text-paper-dark rounded-xl font-bold text-xl border-2 border-paper-dark hover:-translate-y-1 transition-all duration-300"
            style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: '4px 4px 0px 0px #0C3B2E' 
            }}
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}