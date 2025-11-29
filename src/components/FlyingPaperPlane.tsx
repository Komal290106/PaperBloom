import { motion } from 'framer-motion';
import paperPlaneIcon from '../assets/FlyingPaperPlane.svg';

export default function FlyingPaperPlane() {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
      <motion.img
        src={paperPlaneIcon}
        alt="Flying Paper Plane"
        className="absolute"
        style={{
          // Overlapping the polaroid slightly
          top: '0%',
          left: '0%',
          width: '4.5rem', // 72px
          height: '4.5rem',
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))',
        }}
        animate={{
          y: ["0px", "-5px", "0px"],
          rotate: ["0deg", "-2deg", "0deg"],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}