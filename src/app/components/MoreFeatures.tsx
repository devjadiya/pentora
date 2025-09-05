'use client';
import React from 'react';
import { motion } from 'framer-motion';

const MoreFeatures = () => {
    return (
        <section className="relative py-32 flex flex-col items-center text-center">
            <div className="absolute inset-0 grid-background"></div>
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-bl from-purple-700 to-transparent opacity-30 blur-3xl"></div>
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-2xl mx-auto px-4"
             >
                <h3 className="text-md font-normal bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 mb-4">Platform</h3>
                <h2 className="text-5xl font-bold text-white leading-tight mb-6">Designed for builders</h2>
                <p className="text-lg text-gray-300 opacity-65">
                   Pentora fits into your workflow without friction, allowing you to focus on what matters most: crafting high-quality systems with AI.
                </p>
            </motion.div>
        </section>
    );
};

export default MoreFeatures;