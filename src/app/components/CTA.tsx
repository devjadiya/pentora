'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-32 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 grid-background"></div>
        <div className="absolute left-1/4 top-0 w-48 h-48 bg-gradient-to-br from-purple-700 to-transparent opacity-50 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-48 h-48 bg-gradient-to-tl from-indigo-700 to-transparent opacity-50 blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl mx-auto px-4"
      >
         <div className="flex justify-center items-center mb-8">
            <motion.div 
                className="relative w-36 h-36 flex items-center justify-center"
                initial={{ y: -50, rotateX: 45, rotateY: 45 }}
                whileInView={{ y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 2 }}
                viewport={{ once: true }}
            >
                 <div className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl blur-xl opacity-50"></div>
                 <div className="relative w-full h-full bg-gray-900 border-2 border-white/10 rounded-3xl flex flex-col items-center justify-center text-purple-400 p-2 space-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 24 24" fill="none" className="text-white">
                         <g>
                             <path d="M7.00044 2V7H16.2411C16.66 7 17.0004 7.34043 17.0004 7.75929V17H22.0004V8L16.0004 2H7.00044Z" fill="currentColor"></path>
                             <path d="M7.00161 16.2407L6.99983 7H2L2.00193 11.2448C2.00193 17.1836 6.99239 21.9996 12.933 21.9996H17L16.9998 17H7.75912C7.34026 17 6.99983 16.6596 6.99983 16.2407H7.00161Z" fill="currentColor"></path>
                         </g>
                     </svg>
                     <div className="text-xs bg-gradient-to-r from-green-400 to-green-600 text-black font-mono px-2 rounded">$ openlayer push</div>
                 </div>
            </motion.div>
         </div>
        <h2 className="text-5xl font-bold text-white leading-tight mb-6">Stop guessing. Ship with confidence.</h2>
        <p className="text-lg text-gray-300 opacity-65 mb-10">
          The automated AI evaluation and monitoring platform.
        </p>
         <div className="mt-10">
          <Link href="#demo">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-bold text-white bg-gradient-to-b from-purple-600 to-indigo-700 rounded-full shadow-lg shadow-purple-500/20">
              Request demo
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;