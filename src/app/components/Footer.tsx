import React from 'react';

// SVG icon components for logos and social media links.
// These are included directly in the file for a self-contained component.

const OpenlayerLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3137 5.625H6.68629L1.87256 12L6.68629 18.375H17.3137L22.1274 12L17.3137 5.625Z" stroke="white" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2.25" stroke="white" strokeWidth="1.5"/>
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const DiscordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.54 5.25a2.4 2.4 0 0 0-2.4-1.5h-10.3a2.4 2.4 0 0 0-2.4 1.5L2.25 15.68a2.38 2.38 0 0 0 .88 2.53 2.43 2.43 0 0 0 2.62.13l2.81-1.59-1.21 4.5a.61.61 0 0 0 .58.75h.5a.6.6 0 0 0 .58-.42l1.62-4.83h2.52l1.62 4.83a.6.6 0 0 0 .58.42h.5a.61.61 0 0 0 .58-.75l-1.21-4.5 2.81 1.59a2.43 2.43 0 0 0 2.62-.13 2.38 2.38 0 0 0 .88-2.53zm-6.24 5.25h-2.6a.6.6 0 0 1 0-1.2h2.6a.6.6 0 0 1 0 1.2zm2.1-3.6h-6.8a.6.6 0 0 1 0-1.2h6.8a.6.6 0 1 1 0 1.2z"/>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
);


// Data for the footer links, making it easy to manage and update.
const footerSections = [
    {
        title: 'Products',
        links: [
            { name: 'LLM observability', href: '#' },
            { name: 'LLM evaluation', href: '#' },
            { name: 'ML observability', href: '#' },
            { name: 'ML evaluation', href: '#' },
            { name: 'Data quality monitoring', href: '#' },
            { name: 'AI compliance & governance', href: '#' },
            { name: 'Other products', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Blog', href: '#' },
            { name: 'Changelog', href: '#' },
            { name: 'Glossary', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Discord', href: '#' },
            { name: 'Request demo', href: '#' },
        ],
    },
    {
        title: 'Documentation',
        links: [
            { name: 'Getting started', href: '#' },
            { name: 'API reference', href: '#' },
            { name: 'SDKs', href: '#' },
            { name: 'CLI', href: '#' },
            { name: 'Integrations', href: '#' },
            { name: 'Templates', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About us', href: '#' },
            { name: 'Manifesto', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Security', href: '#' },
            { name: 'Terms of service', href: '#' },
            { name: 'Privacy policy', href: '#' },
            { name: 'Responsible disclosure', href: '#' },
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
                            <OpenlayerLogo />
                            <span className="text-xl font-semibold">Openlayer</span>
                        </a>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="X social media"><XIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Discord community"><DiscordIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="GitHub repository"><GithubIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn profile"><LinkedinIcon /></a>
                            <a href="#" className="w-9 h-9 bg-blue-500 rounded-full flex flex-col items-center justify-center text-white text-[7px] leading-[8px] font-bold text-center transition-opacity hover:opacity-80" title="AICPA Service Organization Control (SOC) 2 Type II certified">
                                <span>AICPA</span>
                                <span>SOC</span>
                            </a>
                        </div>
                        <a href="#" className="border border-gray-700 rounded-full py-2 px-4 flex items-center gap-2 text-sm hover:bg-gray-800 transition-colors duration-300">
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
                                            <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
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
