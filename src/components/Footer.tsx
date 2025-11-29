import { Link } from 'react-router-dom';
import { Sparkles, Heart, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-paper-dark text-paper-cream pt-20 pb-10 border-t-[8px] border-paper-gold">
      
      {/* Decorative Washi Tape (Visual Connector) */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-48 h-10 bg-paper-clay/90 rotate-1 shadow-md opacity-90 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-paper-gold">
              <Sparkles className="w-6 h-6" />
              <span className="font-bold text-2xl" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                PaperBloom
              </span>
            </div>
            <p className="text-paper-cream/80 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Newsreader', serif" }}>
              The art of paper folding, digitalized. Join us to unfold creativity, one crease at a time.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
                <a href="#" className="p-2 bg-paper-cream/10 rounded-full hover:bg-paper-gold hover:text-paper-dark transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-paper-cream/10 rounded-full hover:bg-paper-gold hover:text-paper-dark transition-all duration-300">
                    <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-paper-cream/10 rounded-full hover:bg-paper-gold hover:text-paper-dark transition-all duration-300">
                    <Github className="w-4 h-4" />
                </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-paper-gold mb-6 uppercase tracking-widest text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Learn
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <li>
                <Link to="/tutorials" className="text-paper-cream/70 hover:text-paper-cream hover:translate-x-1 inline-block transition-all duration-200">
                  All Tutorials
                </Link>
              </li>
              <li>
                <Link to="/tutorials?level=beginner" className="text-paper-cream/70 hover:text-paper-cream hover:translate-x-1 inline-block transition-all duration-200">
                  Beginner's Guide
                </Link>
              </li>
              <li>
                <Link to="/tutorials?level=advanced" className="text-paper-cream/70 hover:text-paper-cream hover:translate-x-1 inline-block transition-all duration-200">
                  Master Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-paper-gold mb-6 uppercase tracking-widest text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Explore
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <li>
                <Link to="/blog" className="text-paper-cream/70 hover:text-paper-cream hover:translate-x-1 inline-block transition-all duration-200">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-paper-cream/70 hover:text-paper-cream hover:translate-x-1 inline-block transition-all duration-200">
                  About the Maker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-paper-cream/70 hover:text-paper-cream hover:translate-x-1 inline-block transition-all duration-200">
                  Community Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="font-bold text-paper-gold mb-6 uppercase tracking-widest text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Account
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <li>
                <Link to="/login" className="text-paper-cream/70 hover:text-paper-cream hover:translate-x-1 inline-block transition-all duration-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-paper-cream/70 hover:text-paper-cream hover:translate-x-1 inline-block transition-all duration-200">
                  Join the Club
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-paper-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-paper-cream/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <p>© 2025 PaperBloom. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-paper-gold fill-paper-gold" /> by Komal
          </p>
        </div>
      </div>
    </footer>
  );
}