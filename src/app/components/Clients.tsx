'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'Telefonica', path: '/clients/telefonica.svg' },
  { name: 'Hurb', path: '/clients/hurb.svg' },
  { name: 'Jericho Security', path: '/clients/jericho.svg' },
  { name: 'Rootly', path: '/clients/rootly.svg' },
  { name: 'Birdie', path: '/clients/birdie.svg' },
  { name: 'Zuma', path: '/clients/zuma.svg' },
  { name: 'eBay', path: '/clients/ebay.svg' },
];

const Clients = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h4 className="text-lg text-gray-400 opacity-50">Trusted by top AI teams</h4>
      </motion.div>
      <div className="relative w-full">
        <div className="flex animate-marquee">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-64 flex justify-center items-center h-20 mx-12">
              {/* Placeholder - Replace with your actual client logos */}
              <div className="w-32 h-10 bg-gray-700 rounded flex items-center justify-center text-white text-sm grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;