'use client';
import { motion } from 'framer-motion';

const AnimatedHamburgerIcon = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 6 },
  };
  const center = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -6 },
  };

  return (
    <button onClick={() => setIsOpen(!isOpen)} className="w-6 h-6 relative z-50">
      <motion.div
        variants={top}
        animate={variant}
        transition={{ duration: 0.3 }}
        className="absolute h-0.5 w-full bg-white top-1"
      ></motion.div>
      <motion.div
        variants={center}
        animate={variant}
        transition={{ duration: 0.3 }}
        className="absolute h-0.5 w-full bg-white top-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        variants={bottom}
        animate={variant}
        transition={{ duration: 0.3 }}
        className="absolute h-0.5 w-full bg-white bottom-1"
      ></motion.div>
    </button>
  );
};

export default AnimatedHamburgerIcon;