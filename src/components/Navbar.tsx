import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isActive = (path: string) => location.pathname === path;

  // --- DYNAMIC STYLES ---

  // 1. Container: Transparent top -> Opaque Cream when scrolled
  const navContainer = isScrolled 
    ? 'bg-paper-cream border-b-2 border-paper-dark shadow-sm' 
    : 'bg-transparent border-b-2 border-transparent';

  // 2. Text Color: Light on Video -> Dark on Cream
  const textColor = isScrolled ? 'text-paper-dark' : 'text-paper-cream';

  // 3. Active Link: Yellow BG, Green Shadow
  const activePillClass = 'bg-paper-gold text-paper-dark border-2 border-paper-dark shadow-[4px_4px_0px_0px_#0C3B2E]';
  
  // 4. Inactive Link: Hover effect adapts to background
  const inactivePillClass = isScrolled
    ? 'text-paper-dark hover:bg-paper-sage/20 border-2 border-transparent'
    : 'text-paper-cream hover:bg-white/10 border-2 border-transparent';

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navContainer}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* --- LOGO --- */}
          <Link 
            to="/" 
            className="flex items-center gap-3"
          >
            <motion.img 
              src="/logo.png" 
              alt="PaperBloom"
              className="w-10 h-10 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <motion.span 
              className={`font-bold text-3xl tracking-tight transition-colors duration-300 ${textColor}`}
              style={{ fontFamily: "'Bodoni Moda', serif" }}
              whileHover={{ scale: 1.02 }}
            >
              PaperBloom
            </motion.span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-3">
              {['/', '/tutorials', '/blog', '/about'].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-5 py-2 rounded-lg transition-all duration-200 font-bold tracking-wide ${
                    isActive(path) ? activePillClass : inactivePillClass
                  }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                </Link>
              ))}
          </div>

          {/* --- LOGIN BUTTON --- */}
          {/* Green BG (#0C3B2E) with Yellow Shadow (#FFBA00) */}
          <motion.div whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className="px-6 py-2.5 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-200 border-2 bg-paper-dark text-paper-gold border-paper-dark shadow-[4px_4px_0px_0px_#FFBA00] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#FFBA00]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Login
            </Link>
          </motion.div>
        </div>

        {/* --- MOBILE NAV --- */}
        <div className={`md:hidden flex justify-center pb-4 transition-all duration-500 ${
            isScrolled ? 'border-t border-paper-dark/10' : 'border-t border-white/20'
        }`}>
          <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-2">
            {['/', '/tutorials', '/blog', '/about'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all border-2 ${
                  isActive(path) 
                    ? 'bg-paper-gold text-paper-dark border-paper-dark shadow-[2px_2px_0px_0px_#0C3B2E]' 
                    : `${textColor} border-transparent`
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {path === '/' ? 'Home' : 
                 path === '/tutorials' ? 'Tutorials' :
                 path === '/blog' ? 'Blog' : 'About'}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}