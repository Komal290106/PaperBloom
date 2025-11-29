import { motion } from 'framer-motion';

interface FilterChipsProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

export default function FilterChips({ options, selected, onSelect }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {options.map((option) => (
        <motion.button
          key={option}
          onClick={() => onSelect(option)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-xl text-sm font-bold uppercase tracking-wider border-2 transition-all duration-200 ${
            selected === option
              ? 'bg-paper-gold text-paper-dark border-paper-dark shadow-[4px_4px_0px_0px_#0C3B2E]'
              : 'bg-paper-cream text-paper-dark border-paper-dark hover:bg-white shadow-[2px_2px_0px_0px_rgba(12,59,46,0.2)]'
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
}