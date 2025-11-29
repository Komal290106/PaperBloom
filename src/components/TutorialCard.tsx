import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight, Video } from 'lucide-react'; // Added Video Icon
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

interface TutorialCardProps {
  tutorial: any; 
  index: number;
}

export default function TutorialCard({ tutorial, index }: TutorialCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleHoverStart = () => {
    setIsHovered(true);
    // Force play immediately on hover
    if (videoRef.current && tutorial.video) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    // Pause immediately on leave
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Link to={`/tutorial/${tutorial.id}`}>
        <div 
            className="relative bg-paper-cream rounded-2xl overflow-hidden transition-all duration-300 border-[3px] border-paper-dark"
            style={{ 
                boxShadow: isHovered ? '8px 8px 0px 0px #0C3B2E' : '4px 4px 0px 0px #0C3B2E',
                transform: isHovered ? 'translate(-2px, -2px)' : 'translate(0, 0)'
            }}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
          {/* ---------------- MEDIA CONTAINER ---------------- */}
          <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-paper-dark bg-white">
            
            {/* 1. Static Image (Always visible until video covers it) */}
            <motion.img
              src={tutorial.image}
              alt={tutorial.title}
              className="w-full h-full object-cover"
              animate={{ 
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* 2. Video Overlay (Sits ON TOP of image) */}
            {/* Opacity is 0 by default. Becomes 1 on Hover. */}
            {tutorial.video && (
              <motion.video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={() => setIsVideoLoaded(true)}
                // Show video ONLY if hovered AND loaded
                animate={{ opacity: isHovered && isVideoLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <source src={tutorial.video} type="video/mp4" />
              </motion.video>
            )}

            {/* Difficulty Badge (Top Left) */}
            <div className="absolute top-3 left-3 z-10">
              <span 
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-paper-gold text-paper-dark border-2 border-paper-dark shadow-[2px_2px_0px_0px_#0C3B2E]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }} 
              >
                {tutorial.difficulty}
              </span>
            </div>

            {/* Video Indicator (Top Right) - Shows user this card HAS a video */}
            {tutorial.video && (
                <div className="absolute top-3 right-3 z-10">
                    <div className="bg-paper-cream p-1.5 rounded-md border-2 border-paper-dark shadow-[2px_2px_0px_0px_#0C3B2E]">
                        <Video className="w-4 h-4 text-paper-dark" />
                    </div>
                </div>
            )}
            
          </div>

          {/* ---------------- CONTENT CONTAINER ---------------- */}
          <div className="p-5">
            
            {/* Title */}
            <h3 
              className="text-2xl font-bold text-paper-dark mb-3 leading-tight"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              {tutorial.title}
            </h3>

            {/* Metadata Row */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-paper-sage/20 rounded-md border border-paper-dark/10">
                <Clock className="w-4 h-4 text-paper-dark" />
                <span className="text-sm font-bold text-paper-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {tutorial.time}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-paper-clay/20 rounded-md border border-paper-dark/10">
                <Tag className="w-4 h-4 text-paper-dark" />
                <span className="text-sm font-bold text-paper-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {tutorial.category}
                </span>
              </div>
            </div>

            {/* Bottom Row: CTA */}
            <div className="pt-4 border-t-2 border-paper-dark/10 flex justify-between items-center">
               <span 
                 className="text-sm font-bold text-paper-sage uppercase tracking-wide"
                 style={{ fontFamily: "'Space Grotesk', sans-serif" }}
               >
                   Let's Fold!
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