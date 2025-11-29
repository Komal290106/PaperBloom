import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BarChart3, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { tutorials } from '../data/tutorials';

export default function TutorialDetail() {
  const { id } = useParams();
  const tutorial = tutorials.find((t) => t.id === id);

  // ---------------- NOT FOUND STATE ---------------- //
  if (!tutorial) {
    return (
      <div className="min-h-screen bg-paper-cream flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl border-2 border-paper-dark shadow-[8px_8px_0px_0px_#0C3B2E] text-center max-w-md">
          <h1 className="text-3xl font-bold text-paper-dark mb-4" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            Tutorial not found
          </h1>
          <Link 
            to="/tutorials" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-paper-gold text-paper-dark border-2 border-paper-dark rounded-xl font-bold hover:-translate-y-1 transition-transform"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Library
          </Link>
        </div>
      </div>
    );
  }

  const scrollToSteps = () => {
    document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Custom colors for PaperBloom theme badges
  const difficultyStyle = {
    Beginner: 'bg-paper-sage text-white border-paper-dark',
    Intermediate: 'bg-paper-gold text-paper-dark border-paper-dark',
    Advanced: 'bg-[#D37F68] text-white border-paper-dark', 
  };

  return (
    <div className="min-h-screen bg-paper-cream relative overflow-hidden">
      
      {/* ---------------- HEADER BACKGROUND STRIP ---------------- */}
      {/* Sage green strip behind navbar */}
      <div className="absolute top-0 left-0 w-full h-28 bg-paper-sage border-b-[6px] border-paper-gold z-0">
         <div className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'radial-gradient(#FDF8E8 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
         </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        
        {/* --- BACK LINK --- */}
        <Link
          to="/tutorials"
          className="inline-flex items-center gap-2 text-paper-dark/60 hover:text-paper-dark mb-10 font-bold uppercase tracking-widest text-sm transition-colors group"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <div className="bg-white border border-paper-dark/30 rounded-full p-2 group-hover:border-paper-dark group-hover:-translate-x-1 transition-all">
             <ArrowLeft className="w-4 h-4" /> 
          </div>
          Back to Library
        </Link>

        {/* --- TITLE & META SECTION --- */}
        <div className="mb-10">
            <h1 className="text-5xl md:text-6xl font-bold text-paper-dark mb-6 leading-tight" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                {tutorial.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <div className="flex items-center gap-2 text-paper-dark/80 bg-white/50 px-3 py-1 rounded-lg border border-paper-dark/10">
                    <Clock className="w-5 h-5" />
                    <span>{tutorial.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-paper-dark/80 bg-white/50 px-3 py-1 rounded-lg border border-paper-dark/10">
                    <BarChart3 className="w-5 h-5" />
                    <span>{tutorial.category}</span>
                </div>
                
                <span className={`px-4 py-1 rounded-lg border-2 ${difficultyStyle[tutorial.difficulty as keyof typeof difficultyStyle]}`}>
                    {tutorial.difficulty}
                </span>
            </div>
        </div>

        {/* --- HERO IMAGE (Clean, No Overlays) --- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-paper-dark shadow-[8px_8px_0px_0px_#0C3B2E] mb-16"
        >
            <img
              src={tutorial.image}
              alt={tutorial.title}
              className="w-full h-full object-cover"
            />
        </motion.div>

        {/* --- INSTRUCTIONS --- */}
        <div id="steps" className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-12 border-b-2 border-paper-dark/10 pb-6">
                <h2 className="text-4xl font-bold text-paper-dark" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                    Instructions
                </h2>
                <button
                    onClick={() => window.print()}
                    className="hidden md:block text-paper-dark/60 hover:text-paper-dark font-bold text-sm uppercase tracking-wider underline decoration-2 underline-offset-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Print Guide
                </button>
            </div>

            <div className="space-y-12">
              {tutorial.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 md:gap-10"
                >
                  {/* Vertical Line Connector */}
                  {index !== tutorial.steps.length - 1 && (
                      <div className="absolute left-[24px] top-14 bottom-[-48px] w-0.5 bg-paper-dark/20 border-l border-dashed border-paper-dark/40"></div>
                  )}

                  {/* Number Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 bg-paper-gold border-2 border-paper-dark rounded-full flex items-center justify-center font-bold text-xl text-paper-dark shadow-[2px_2px_0px_0px_#0C3B2E]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <div className="bg-white rounded-xl p-6 border-2 border-paper-dark/10 hover:border-paper-dark/30 transition-colors">
                        <p className="text-xl text-paper-dark leading-relaxed font-medium" style={{ fontFamily: "'Newsreader', serif" }}>
                            {step.text}
                        </p>
                        
                        {/* Optional: Add an image tag here if you have step-by-step images */}
                        {/* <div className="mt-4 h-48 bg-paper-cream rounded-lg border border-paper-dark/10"></div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

        {/* --- FOOTER / COMPLETION --- */}
        <div className="mt-24 pt-12 border-t-2 border-paper-dark/10 max-w-4xl mx-auto">
            <div className="bg-paper-sage/10 rounded-2xl p-8 border border-paper-sage/30 text-center mb-12">
                <CheckCircle2 className="w-12 h-12 text-paper-sage mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-paper-dark mb-2" style={{ fontFamily: "'Bodoni Moda', serif" }}>Finished Folding?</h3>
                <p className="text-paper-dark/70" style={{ fontFamily: "'Newsreader', serif" }}>
                    Great job! You've added another creation to your collection.
                </p>
            </div>

            <div className="flex justify-between items-center">
                <Link
                  to="/tutorials"
                  className="inline-flex items-center gap-2 text-paper-dark/60 hover:text-paper-dark font-bold uppercase tracking-wider text-sm transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Library
                </Link>
                <Link
                  to="/tutorials"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-paper-dark text-paper-gold rounded-xl font-bold hover:bg-paper-dark/90 transition-all shadow-[4px_4px_0px_0px_#BB8A52]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Next Project <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}