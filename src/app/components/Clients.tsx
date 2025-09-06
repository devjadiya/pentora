"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Logo Components ---
// Redesigned with more professional and varied logos for a better aesthetic.
const Logo1 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><path d="M20,20 L40,20 L30,5 Z" fill="currentColor" /><text x="50" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">ApexSecure</text></svg>;
const Logo2 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" /><text x="45" y="28" fontFamily="Georgia, serif" fontSize="20" fill="currentColor">Quantum</text></svg>;
const Logo3 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><path d="M10,5 L30,5 L30,35 L10,35 Z M35,5 L55,5 L55,35 L35,35 Z" fill="currentColor"/><text x="65" y="28" fontFamily="Verdana, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">Nexus</text></svg>;
const Logo4 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Tahoma, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">Virtu<tspan fillOpacity="0.7">Financial</tspan></text></svg>;
const Logo5 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><path d="M10 20 C 10 10, 30 10, 30 20 S 50 30, 50 20" stroke="currentColor" strokeWidth="2" fill="none"/><text x="60" y="28" fontFamily="Courier New, monospace" fontSize="20" fill="currentColor">Innovate</text></svg>;
const Logo6 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="22" fill="currentColor">SENTINEL</text></svg>;
const Logo7 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><path d="M15,5 L35,20 L15,35 Z" stroke="currentColor" strokeWidth="2" fill="none" /><text x="45" y="28" fontFamily="Impact, sans-serif" fontSize="20" fill="currentColor">IronClad</text></svg>;
const Logo8 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontStyle="italic" fill="currentColor">Velocity</text></svg>;
const Logo9 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><path d="M25,5 L10,15 L10,30 L25,35 L40,30 L40,15 Z" fill="currentColor"/><text x="55" y="28" fontFamily="Verdana, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">Aegis</text></svg>;
const Logo10 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Georgia, serif" fontSize="20" fill="currentColor">CoreLogic</text></svg>;
const Logo11 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="20" fill="currentColor">Zenith Dynamics</text></svg>;
const Logo12 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Tahoma, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">Pinnacle</text></svg>;
const Logo13 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Courier New, monospace" fontSize="20" fill="currentColor">Synergy</text></svg>;
const Logo14 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Arial Black, sans-serif" fontSize="20" fill="currentColor">Horizon</text></svg>;
const Logo15 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Impact, sans-serif" fontSize="20" fill="currentColor">Catalyst</text></svg>;
const Logo16 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontStyle="italic" fill="currentColor">Momentum</text></svg>;
const Logo17 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Verdana, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">Equinox</text></svg>;
const Logo18 = () => <svg viewBox="0 0 140 40" className="w-full h-full"><text x="10" y="28" fontFamily="Georgia, serif" fontSize="20" fill="currentColor">Oracle</text></svg>;


const allLogos = [
    { id: 1, component: Logo1 }, { id: 2, component: Logo2 }, { id: 3, component: Logo3 },
    { id: 4, component: Logo4 }, { id: 5, component: Logo5 }, { id: 6, component: Logo6 },
    { id: 7, component: Logo7 }, { id: 8, component: Logo8 }, { id: 9, component: Logo9 },
    { id: 10, component: Logo10 }, { id: 11, component: Logo11 }, { id: 12, component: Logo12 },
    { id: 13, component: Logo13 }, { id: 14, component: Logo14 }, { id: 15, component: Logo15 },
    { id: 16, component: Logo16 }, { id: 17, component: Logo17 }, { id: 18, component: Logo18 }
];

const TrustedBy: React.FC = () => {
    const [page, setPage] = useState(0);
    const logosPerPage = 6;
    const totalPages = Math.ceil(allLogos.length / logosPerPage);

    useEffect(() => {
        const timer = setInterval(() => {
            setPage((prevPage) => (prevPage + 1) % totalPages);
        }, 2000);

        return () => clearInterval(timer);
    }, [totalPages]);

    const marqueeLogos = [...allLogos, ...allLogos];

    return (
        <section className="relative bg-gray-950 text-gray-300 py-20 md:py-32 overflow-hidden">
             <div 
                className="absolute inset-0 z-0 bg-dot-purple-500/[0.15]"
                style={{
                    maskImage: 'radial-gradient(ellipse at center, white, transparent 60%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, white, transparent 60%)'
                }}
            />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        Trusted By Leading Companies
                    </h2>
                    <p className="text-purple-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                        Our track record is a testament to the trust global organizations place in our expertise and commitment to cybersecurity.
                    </p>
                </motion.div>

                {/* Desktop View: Grid with animated refresh */}
                <div className="hidden md:block max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.05, duration: 0.5, ease: "easeOut" } }}
                            exit={{ opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } }}
                            className="grid grid-cols-3 gap-x-12 gap-y-16 items-center"
                        >
                            {allLogos.slice(page * logosPerPage, (page + 1) * logosPerPage).map(({ id, component: LogoComponent }) => (
                                <motion.div 
                                    key={id} 
                                    className="h-12 w-full text-gray-500 grayscale hover:grayscale-0 hover:text-white transition-all duration-300 transform hover:scale-105"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <LogoComponent />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile View: Flowing Marquee */}
                <div className="md:hidden">
                    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                        <div className="flex w-max animate-marquee">
                             {marqueeLogos.map(({ id, component: LogoComponent }, index) => (
                                <div key={`${id}-${index}`} className="flex-shrink-0 w-40 h-12 mx-4 text-gray-400">
                                    <LogoComponent />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-dot-purple-500\\[\\[0.15\\]\\] {
                     background-image: radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 1px, transparent 1px);
                     background-size: 1.5rem 1.5rem;
                }
                .animate-marquee {
                     animation: marquee 30s linear infinite;
                }
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default TrustedBy;

