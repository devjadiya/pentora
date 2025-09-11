import React from 'react';
import {
    Shield, Target, GitBranch, Zap, Layers, BarChart, Server, Cloud, BrainCircuit,
    Code2, Network, Globe
} from 'lucide-react';

// --- PENTORA'S CUSTOM SVG ICONS ---
const CerberusIcon = () => ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-fuchsia-400"><path d="M12 2L9 6H5l-1 5l2 2l-2 2l1 5h4l3 4l3-4h4l1-5l-2-2l2-2l-1-5h-4z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" strokeWidth="1.5"/><path d="M8 9a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/><path d="M16 9a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/></svg> );
const SpectreIcon = () => ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-fuchsia-400"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9" strokeWidth="1.5" /><path d="M12 3v2" strokeWidth="1.5" /><path d="M12 19v2" strokeWidth="1.5" /><path d="M21 12h-2" strokeWidth="1.5" /><path d="M5 12H3" strokeWidth="1.5" /><path d="M12 12l-4 4" strokeWidth="1.5" /><path d="M16 8l-4 4" strokeWidth="1.5" /></svg> );
const AegisIcon = () => ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-fuchsia-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" /><path d="M12 8v4l2 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );

export const toolsData = {
    "Pentora's Proprietary Arsenal": [
        { id: 'cerberus', name: 'Cerberus', category: 'Threat Correlation Engine', description: 'Our AI-driven platform that ingests, analyzes, and correlates threat data from millions of sources in real-time.', icon: <CerberusIcon />, type: 'Proprietary' },
        { id: 'spectre-c2', name: 'Spectre C2', category: 'Red Team C2 Framework', description: 'An elusive and modular command-and-control framework designed for advanced adversary simulation.', icon: <SpectreIcon />, type: 'Proprietary' },
        { id: 'aegis-shield', name: 'Aegis Shield', category: 'Cloud-Native Autonomous Defense', description: 'Automated defense for cloud workloads, providing proactive threat mitigation without human intervention.', icon: <AegisIcon />, type: 'Proprietary' },
    ],
    "Threat Intelligence & Analytics": [
        { id: 'shodan', name: 'Shodan', category: 'Attack Surface Monitoring', description: 'The search engine for everything on the Internet, helping you discover exposed devices and services.', icon: <Globe className="w-8 h-8 text-cyan-300" />, type: 'Commercial' },
        { id: 'misp', name: 'MISP', category: 'Threat Intelligence', description: 'An open-source platform for sharing, storing, and correlating indicators of compromise (IoCs).', icon: <BrainCircuit className="w-8 h-8 text-cyan-300" />, type: 'Open Source' },
        { id: 'splunk-es', name: 'Splunk ES', category: 'SIEM & Analytics', description: 'A market-leading SIEM for real-time threat monitoring, advanced analytics, and rapid investigation.', icon: <BarChart className="w-8 h-8 text-cyan-300" />, type: 'Enterprise' },
    ],
    "Offensive & Red Team Operations": [
        { id: 'metasploit', name: 'Metasploit', category: 'Penetration Testing', description: 'The world’s most used penetration testing framework for developing and executing exploit code.', icon: <Target className="w-8 h-8 text-red-400" />, type: 'Open Source' },
        { id: 'burp-suite-pro', name: 'Burp Suite Pro', category: 'Web Application Testing', description: 'The premier toolkit for web security testers, enabling comprehensive manual and automated testing.', icon: <Network className="w-8 h-8 text-orange-400" />, type: 'Commercial' },
        { id: 'bloodhound', name: 'BloodHound', category: 'Active Directory Security', description: 'Visualize and analyze Active Directory attack paths using graph theory. An essential for red teams.', icon: <GitBranch className="w-8 h-8 text-red-400" />, type: 'Open Source' },
    ],
    "Defense & Incident Response": [
        { id: 'crowdstrike', name: 'CrowdStrike', category: 'Endpoint Detection & Response (EDR)', description: 'A cloud-native platform that unifies next-gen antivirus, EDR, and a 24/7 managed hunting service.', icon: <Shield className="w-8 h-8 text-green-300" />, type: 'Enterprise' },
        { id: 'the-hive-project', name: 'TheHive Project', category: 'Security Incident Response (SIRP)', description: 'A scalable, open-source solution to manage, investigate and act upon security incidents.', icon: <Layers className="w-8 h-8 text-green-300" />, type: 'Open Source' },
    ],
    "Cloud & DevSecOps": [
       { id: 'wiz', name: 'Wiz', category: 'Cloud Native Application Protection', description: 'A comprehensive cloud security platform that provides full visibility and context into cloud risks.', icon: <Cloud className="w-8 h-8 text-sky-300" />, type: 'Enterprise' },
       { id: 'trivy', name: 'Trivy', category: 'Vulnerability Scanning', description: 'A simple and comprehensive open-source scanner for vulnerabilities in container images, filesystems, and Git repos.', icon: <Code2 className="w-8 h-8 text-sky-300" />, type: 'Open Source' },
       { id: 'falco', name: 'Falco', category: 'Cloud Threat Detection', description: 'The open-source standard for cloud-native runtime security, detecting unexpected application behavior.', icon: <Zap className="w-8 h-8 text-yellow-300" />, type: 'Open Source' },
    ],
};
