'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart, Book, Briefcase, FileText, GitBranch, LifeBuoy, Rocket, Shield
} from 'lucide-react';
import AnimatedHamburgerIcon from './AnimatedHamburgerIcon';

const menuItems = {
  product: [
    { title: "Generative AI", description: "For LLM-based systems", href: "#", icon: <Rocket size={16} /> },
    { title: "LLM Observability", description: "Monitor your LLMs in production", href: "#", icon: <BarChart size={16} /> },
    { title: "Data Quality", description: "Automated checks for your data", href: "#", icon: <Shield size={16} /> },
    { title: "Traditional ML", description: "For predictive models", href: "#", icon: <GitBranch size={16} /> },
    { title: "ML Observability", description: "Monitor your models in production", href: "#", icon: <BarChart size={16} /> },
    { title: "AI Governance", description: "AI compliance & governance", href: "#", icon: <Briefcase size={16} /> },
  ],
  resources: [
    { title: "Blog", description: "Our latest thoughts", href: "#", icon: <FileText size={16} /> },
    { title: "Changelog", description: "Updates to the platform", href: "#", icon: <GitBranch size={16} /> },
    { title: "Manifesto", description: "Our guide to a better AI future", href: "#", icon: <Book size={16} /> },
    { title: "Glossary", description: "Key terms in AI", href: "#", icon: <Book size={16} /> },
  ],
  company: [
    { title: "About us", description: "Learn about our mission", href: "#", icon: <LifeBuoy size={16} /> },
    { title: "Careers", description: "Join our team", href: "#", icon: <Briefcase size={16} /> },
    { title: "Security", description: "How we protect your data", href: "#", icon: <Shield size={16} /> },
  ]
};

const DropdownMenu = ({ items }: { items: { href: string; title: string; description: string, icon: React.ReactNode }[] }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="absolute top-full mt-2 w-max max-w-lg bg-[#100D1B] rounded-lg border border-white/10 shadow-lg p-4"
  >
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <Link key={item.title + index} href={item.href} className="block p-3 rounded-md hover:bg-white/5">
          <div className="flex items-center space-x-3">
            <div className="text-purple-400">{item.icon}</div>
            <div>
              <p className="font-bold text-white text-sm">{item.title}</p>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </motion.div>
);

const Navbar = () => {
  const [activeDropdowns, setActiveDropdowns] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleMouseEnter = (key: string) => {
    setActiveDropdowns(prev => [...prev, key]);
  };

  const handleMouseLeave = (key: string) => {
    setActiveDropdowns(prev => prev.filter(item => item !== key));
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-center w-full h-10 bg-black/70 backdrop-blur-lg text-white/80 px-4">
        <Link href="#" className="hover:underline text-center text-xs sm:text-sm">Announcing our $14.5M Series A! Read the blog post →</Link>
      </div>
      <nav 
        className="sticky top-10 z-50 flex items-center justify-center w-full h-16 bg-[#04010E]/50 border-b border-t border-white/10 backdrop-blur-md"
      >
     <div className="flex items-center justify-between w-full h-full max-w-screen-xl px-4 md:px-8 mx-auto">
  <Link href="/" className="cursor-pointer z-50">
    <Image src="/pentora-logo.png" alt="Logo" width={100} height={100} />
  </Link>
          <div className="hidden md:flex items-center space-x-1">
            {Object.keys(menuItems).map((key) => (
              <div key={key} className="relative h-full flex items-center" onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={() => handleMouseLeave(key)}>
                <button className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors capitalize h-full">
                  {key}
                </button>
                <AnimatePresence>
                  {activeDropdowns.includes(key) && (
                    <DropdownMenu items={menuItems[key as keyof typeof menuItems]} />
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href="/tools" className="h-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
              Tools
            </Link>
            <Link href="#pricing" className="h-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
             Threat Monitoring
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#login" className="text-sm text-gray-300 hover:text-white transition-colors">Login</Link>
            <Link href="#demo">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-b from-purple-600 to-indigo-700 rounded-full transition-transform"
              >
                Request Demo
              </motion.button>
            </Link>
          </div>

          <div className="md:hidden">
              <AnimatedHamburgerIcon isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

