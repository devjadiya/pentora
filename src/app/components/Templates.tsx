'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const templates = [
    { title: "PDF extraction", description: "LangChain with Python", icon: "pdf" },
    { title: "Question-answering retrieval", description: "RAG with Python", icon: "rag" },
    { title: "Structured outputs", description: "Instructor and Claude with Python", icon: "structured" },
    { title: "Simple chatbot", description: "OpenAI with Python", icon: "chatbot" },
    { title: "Simple chatbot", description: "OpenAI with TypeScript", icon: "chatbot" },
]

const TemplateCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
    return (
        <motion.div 
            className="w-[400px] h-[300px] bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between text-left shrink-0"
            whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(144, 116, 240, 0.2)" }}
        >
            <div>
                {/* Placeholder for icon */}
                <div className="w-14 h-14 bg-purple-500/20 border border-purple-500/30 rounded-2xl mb-4"></div>
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
            <div>
                 <button className="text-sm font-bold text-white px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">Clone template</button>
            </div>
        </motion.div>
    )
}

const Templates = () => {
    return (
        <section className="relative py-32 flex flex-col items-center text-center">
             <div className="absolute inset-0 grid-background"></div>
             <div className="absolute left-1/2 -translate-x-1/2 top-0 w-48 h-48 bg-gradient-to-br from-purple-700 to-transparent opacity-30 blur-3xl"></div>
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-2xl mx-auto px-4"
            >
                <h3 className="text-md font-normal bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 mb-4">Templates</h3>
                <h2 className="text-5xl font-bold text-white leading-tight mb-6">Get started in seconds</h2>
                <p className="text-lg text-gray-300 opacity-65">
                   Pick a template to accelerate your setup. Templates are sample projects with common AI patterns. They come pre-configured with all sorts of relevant tests.
                </p>

                <div className="mt-10 flex items-center justify-center space-x-6">
                    <Link href="#start-template">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 font-bold text-white bg-gradient-to-b from-purple-600 to-indigo-700 rounded-full shadow-lg shadow-purple-500/20">
                            Start from a template
                        </motion.button>
                    </Link>
                     <Link href="#browse-templates" className="font-bold text-white hover:text-gray-300 transition-colors flex items-center">
                        Browse templates 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </motion.div>
            <div className="w-full max-w-screen-xl mx-auto mt-20 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900/0 via-gray-900/0 to-gray-900 z-10 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-gray-900/0 via-gray-900/0 to-gray-900 z-10 pointer-events-none"></div>
                <div className="flex space-x-8 pb-8 overflow-x-auto">
                    {/* Add a spacer to the left */}
                    <div className="shrink-0 w-1/2 md:w-1/3"></div>
                    {templates.map((template, index) => (
                        <TemplateCard key={index} {...template} />
                    ))}
                     {/* Add a spacer to the right */}
                    <div className="shrink-0 w-1/2 md:w-1/3"></div>
                </div>
            </div>
        </section>
    );
};

export default Templates;