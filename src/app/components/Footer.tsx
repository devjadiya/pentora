import React from 'react';
import Link from 'next/link';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full py-20 border-t border-white border-opacity-10 bg-gradient-to-t from-gray-900/20 to-transparent">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-12">
        {/* Column 1: Logo & Social */}
        <div className="col-span-2 flex flex-col space-y-8">
          <Link href="/" className="cursor-pointer">
            <span className="text-2xl font-bold text-white">PENTORA</span>
          </Link>
           <div className="text-sm text-gray-400">
             All systems operational
           </div>
          <div className="flex space-x-4">
            {/* Add Social Icons Here */}
          </div>
        </div>

        {/* Column 2: Products */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-white mb-2">Products</h4>
          <FooterLink href="#">LLM Observability</FooterLink>
          <FooterLink href="#">ML Observability</FooterLink>
          <FooterLink href="#">LLM Evaluation</FooterLink>
          <FooterLink href="#">ML Evaluation</FooterLink>
          <FooterLink href="#">Data Quality Monitoring</FooterLink>
          <FooterLink href="#">AI Compliance & Governance</FooterLink>
          <FooterLink href="#other-products">Other products</FooterLink>
        </div>

        {/* Column 3: Resources */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-white mb-2">Resources</h4>
          <FooterLink href="#blog">Blog</FooterLink>
          <FooterLink href="#changelog">Changelog</FooterLink>
          <FooterLink href="#glossary">Glossary</FooterLink>
          <FooterLink href="#pricing">Pricing</FooterLink>
          <FooterLink href="#demo">Request demo</FooterLink>
        </div>

        {/* Column 4: Documentation */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-white mb-2">Documentation</h4>
          <FooterLink href="#getting-started">Getting started</FooterLink>
          <FooterLink href="#api-reference">API reference</FooterLink>
          <FooterLink href="#sdks">SDKs</FooterLink>
          <FooterLink href="#cli">CLI</FooterLink>
          <FooterLink href="#integrations">Integrations</FooterLink>
          <FooterLink href="#templates">Templates</FooterLink>
        </div>

        {/* Column 5: Company */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-white mb-2">Company</h4>
          <FooterLink href="#about">About us</FooterLink>
          <FooterLink href="#careers">Careers</FooterLink>
          <FooterLink href="#security">Security</FooterLink>
          <FooterLink href="#terms">Terms of service</FooterLink>
          <FooterLink href="#privacy">Privacy policy</FooterLink>
           <FooterLink href="#disclosure">Responsible Disclosure</FooterLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;