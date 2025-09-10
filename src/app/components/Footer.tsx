import React from 'react';
import Image from 'next/image';
import {
    FaXTwitter,
    FaGithub,
    FaDiscord,
    FaLinkedin
} from 'react-icons/fa6'; // or use 'react-icons/fa' if FaXTwitter is not available

// Updated footer link sections based on your site content
const footerSections = [
    {
        title: 'Products',
        links: [
            { name: 'Threat Monitoring', href: '#' },
            { name: 'Application Security', href: '#' },
            { name: 'Cloud-Native Security', href: '#' },
            { name: 'Infrastructure Security', href: '#' },
            { name: 'Data Security', href: '#' },
            { name: 'Security Automation', href: '#' },
            { name: 'AI-Powered Co-Pilot', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Blog', href: '#' },
            { name: 'Live Threat Feed', href: '#' },
            { name: 'Security Audits', href: '#' },
            { name: 'Case Studies', href: '#' },
            { name: 'Training Programs', href: '#' },
            { name: 'Request Demo', href: '#' },
        ],
    },
    {
        title: 'Documentation',
        links: [
            { name: 'Getting Started', href: '#' },
            { name: 'API Reference', href: '#' },
            { name: 'Integrations', href: '#' },
            { name: 'Templates', href: '#' },
            { name: 'CLI & SDKs', href: '#' },
            { name: 'Compliance Guides', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About Us', href: '#' },
            { name: 'Leadership', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Security & Disclosure', href: '#' },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#0E091E] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
                    {/* Left Section: Logo, Socials, and Status */}
                    <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                        <a href="#" className="flex items-center gap-3">
                            <Image
                                src="/pentora-logo.png"
                                alt="Pentora Logo"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </a>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="X (Twitter)">
                                <FaXTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Discord">
                                <FaDiscord size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="GitHub">
                                <FaGithub size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                        <a
                            href="#"
                            className="border border-gray-700 rounded-full py-2 px-4 flex items-center gap-2 text-sm hover:bg-gray-800 transition-colors duration-300"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            All systems operational
                        </a>
                    </div>

                    {/* Right Section: Link Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h3 className="font-semibold text-gray-200 mb-4">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
