"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, Server, Terminal, BarChart, Users, Zap } from 'lucide-react';

// Mock data for the cybersecurity tools
const toolsData = {
  featured: [
    {
      id: 1,
      name: 'SentinelOne',
      category: 'Endpoint Security',
      description: 'Autonomous endpoint protection against all types of attacks.',
      rating: 4.8,
      users: '2M+',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
    },
    {
      id: 2,
      name: 'Darktrace',
      category: 'Network Security',
      description: 'AI-powered cyber defense for detecting and responding to threats.',
      rating: 4.9,
      users: '1.5M+',
      icon: <Server className="w-8 h-8 text-green-400" />,
    },
     {
      id: 3,
      name: 'Metasploit',
      category: 'Penetration Testing',
      description: 'The world’s most used penetration testing framework.',
      rating: 4.7,
      users: '3M+',
      icon: <Terminal className="w-8 h-8 text-red-400" />,
    },
  ],
  trending: [
    {
      id: 4,
      name: 'Splunk',
      category: 'SIEM & Analytics',
      description: 'Data-to-Everything Platform for security, IT and DevOps.',
      rating: 4.6,
      users: '5M+',
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
    },
    {
      id: 5,
      name: 'Okta',
      category: 'Identity & Access',
      description: 'Secure identity management for your workforce and customers.',
      rating: 4.8,
      users: '10M+',
      icon: <Users className="w-8 h-8 text-yellow-400" />,
    },
    {
      id: 6,
      name: 'Burp Suite',
      category: 'Web Security',
      description: 'Advanced toolkit for web application security testing.',
      rating: 4.9,
      users: '4.5M+',
      icon: <Zap className="w-8 h-8 text-orange-400" />,
    },
  ],
   popular: [
    {
      id: 7,
      name: 'Wireshark',
      category: 'Network Analysis',
      description: 'The world’s foremost network protocol analyzer.',
      rating: 4.9,
      users: '15M+',
      icon: <Server className="w-8 h-8 text-teal-400" />,
    },
    {
      id: 8,
      name: 'CrowdStrike Falcon',
      category: 'Endpoint Security',
      description: 'Cloud-native endpoint protection platform.',
      rating: 4.7,
      users: '2.5M+',
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
    },
    {
      id: 9,
      name: 'Nessus',
      category: 'Vulnerability Scanner',
      description: 'The #1 vulnerability assessment solution.',
      rating: 4.6,
      users: '8M+',
      icon: <Terminal className="w-8 h-8 text-pink-400" />,
    },
  ]
};

const ToolCard = ({ tool }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-800/20 backdrop-blur-sm border border-purple-900/50 rounded-xl p-6 flex flex-col justify-between h-full group hover:bg-purple-900/20 transition-all duration-300 relative overflow-hidden"
    >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
            <div className="flex items-start justify-between">
                <div className="flex-shrink-0">{tool.icon}</div>
                <div className="flex items-center space-x-1 text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-white">{tool.rating}</span>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-100">{tool.name}</h3>
                <p className="text-purple-300 text-sm mt-1">{tool.category}</p>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{tool.description}</p>
            </div>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-gray-500 relative z-10">
            <span>{tool.users} users</span>
            <span className="bg-purple-500/10 text-purple-300 px-2 py-1 rounded-md">{tool.category.split(' ')[0]}</span>
        </div>
    </motion.div>
  );
};

const Tools = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#0d0517] text-white font-sans p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        Cybersecurity Tools
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
                        Explore our curated collection of industry-leading tools and frameworks to supercharge your security operations.
                    </p>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search over 1,000+ tools..."
                            className="w-full bg-gray-900/50 border border-purple-800/60 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 flex-wrap">
                        {['All', 'SIEM', 'Endpoint', 'Network', 'Cloud', 'DevSecOps'].map((filter) => (
                            <button key={filter} className="px-4 py-2 text-sm rounded-full bg-gray-800/40 text-gray-300 hover:bg-purple-600/50 hover:text-white transition-colors">
                                {filter}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Tool Sections */}
                <div>
                    {Object.entries(toolsData).map(([sectionTitle, tools], index) => (
                        <div key={sectionTitle} className="mb-16">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                                className="text-2xl md:text-3xl font-bold mb-8 capitalize text-gray-200"
                            >
                                {sectionTitle} Tools
                            </motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {tools.map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tools;

