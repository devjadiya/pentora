'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const MobileMenu = ({ menuItems, setIsMenuOpen }: { menuItems: any, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col pt-24 px-8 z-40 overflow-y-auto"
    >
      <div className="flex flex-col space-y-4 text-xl">
        {Object.keys(menuItems).map((key) => (
          <div key={key}>
            <button
              onClick={() => setOpenAccordion(openAccordion === key ? null : key)}
              className="w-full flex justify-between items-center text-gray-300 hover:text-white capitalize py-3"
            >
              <span>{key}</span>
              <motion.div animate={{ rotate: openAccordion === key ? 180 : 0 }}>
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openAccordion === key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-4"
                >
                  <div className="flex flex-col space-y-2 mt-2 border-l border-white/10">
                    {menuItems[key as keyof typeof menuItems].map((item: any, index: number) => (
                      <Link key={item.title + index} href={item.href} className="text-base text-gray-400 hover:text-white p-2 pl-4" onClick={closeMenu}>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <Link href="#docs" className="text-gray-300 hover:text-white py-3" onClick={closeMenu}>Documentation</Link>
        <Link href="#pricing" className="text-gray-300 hover:text-white py-3" onClick={closeMenu}>Pricing</Link>
        
        <div className="flex flex-col items-center space-y-6 pt-12">
            <Link href="#login" className="text-lg text-gray-300 hover:text-white transition-colors" onClick={closeMenu}>Login</Link>
            <Link href="#demo" onClick={closeMenu}>
              <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-lg font-bold text-white bg-gradient-to-b from-purple-600 to-indigo-700 rounded-full transition-transform">
                Request Demo
              </motion.button>
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
