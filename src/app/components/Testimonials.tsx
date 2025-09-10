"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, Zap, Server, Activity } from 'lucide-react';

// --- Live Threat Dashboard Subcomponent (Replaces Globe) ---

const THREAT_LEVELS = [
    { level: 'LOW', color: 'text-green-400', ring: 'ring-green-500/50' },
    { level: 'GUARDED', color: 'text-blue-400', ring: 'ring-blue-500/50' },
    { level: 'ELEVATED', color: 'text-yellow-400', ring: 'ring-yellow-500/50' },
    { level: 'HIGH', color: 'text-orange-400', ring: 'ring-orange-500/50' },
    { level: 'CRITICAL', color: 'text-red-400', ring: 'ring-red-500/50' },
];

const EVENT_TYPES = [
    { name: 'Brute-force attempt', icon: ShieldAlert, color: 'text-orange-400' },
    { name: 'Malware signature detected', icon: ShieldAlert, color: 'text-red-400' },
    { name: 'Compliance check passed', icon: ShieldCheck, color: 'text-green-400' },
    { name: 'Anomalous network traffic', icon: Zap, color: 'text-yellow-400' },
    { name: 'Vulnerability patched', icon: ShieldCheck, color: 'text-blue-400' },
    { name: 'Data exfiltration blocked', icon: ShieldAlert, color: 'text-red-500' },
    { name: 'Phishing link neutralized', icon: ShieldCheck, color: 'text-green-400' },
    { name: 'DDoS mitigation active', icon: Server, color: 'text-blue-400' },
];

const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const generateLogEntry = (id: number) => ({
    id,
    ...getRandomItem(EVENT_TYPES),
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    ip: `172.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
});

const LiveThreatDashboardWidget = () => {
    const [threatLevel, setThreatLevel] = useState(THREAT_LEVELS[0]);
    const [events, setEvents] = useState<any[]>([]);
    const [chartData, setChartData] = useState(() => Array(10).fill(0).map(() => Math.random() * 80 + 20));
    const eventIdCounter = useRef(0);

    useEffect(() => {
        const initialEvents = Array(10).fill(0).map(() => generateLogEntry(eventIdCounter.current++));
        setEvents(initialEvents);
        const eventInterval = setInterval(() => {
            setEvents(prevEvents => [generateLogEntry(eventIdCounter.current++), ...prevEvents.slice(0, 14)]);
        }, 2000);
        const threatInterval = setInterval(() => setThreatLevel(getRandomItem(THREAT_LEVELS)), 5000);
        const chartInterval = setInterval(() => setChartData(prevData => [...prevData.slice(1), Math.random() * 80 + 20]), 1000);
        return () => {
            clearInterval(eventInterval);
            clearInterval(threatInterval);
            clearInterval(chartInterval);
        };
    }, []);

    return (
        <div className="h-full flex flex-col font-mono text-sm text-slate-300">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 ml-auto">
                    <span className={`font-bold text-base ${threatLevel.color}`}>{threatLevel.level}</span>
                    <div className={`w-4 h-4 rounded-full bg-slate-800 ring-2 ${threatLevel.ring} animate-pulse`}></div>
                </div>
            </div>
            <div className="flex gap-4 flex-grow h-[calc(100%-2rem)]">
                <div className="w-2/3 h-full overflow-hidden relative">
                    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]">
                        <div className="flex flex-col">
                            {events.map((event) => (
                                <motion.div key={event.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 py-1 border-b border-white/5">
                                    <event.icon className={`w-4 h-4 flex-shrink-0 ${event.color}`} />
                                    <span className="text-gray-400 text-xs">{event.timestamp}</span>
                                    <p className="truncate text-gray-200 text-xs flex-grow">{event.name}</p>
                                    <span className="text-gray-500 text-xs">{event.ip}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-full flex flex-col justify-between p-3 bg-black/20 rounded">
                    <div className='flex justify-between items-center'>
                        <h4 className="text-xs text-gray-400">Activity Pulse</h4>
                        <Activity className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="w-full h-full flex items-end gap-1 pt-2">
                        {chartData.map((height, i) => (
                            <div key={i} className="w-full bg-indigo-500/50 rounded-t-sm transition-all duration-500 ease-in-out" style={{ height: `${height}%` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Original Components from Your Snippet ---
const AnimatedCounter = ({ value, label, details }: { value: number; label: string; details: string; }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const animation = motion.animate(0, value, {
            duration: 2,
            onUpdate: (latest) => setCount(Math.round(latest)),
        });
        return animation.stop;
    }, [value]);

    return (
        <div className="bg-black/20 p-6 rounded-lg border border-white/10 h-full">
            <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                {count.toLocaleString()}
            </p>
            <p className="font-semibold text-white mt-2">{label}</p>
            <p className="text-xs text-gray-400 mt-1.5 leading-snug">{details}</p>
        </div>
    );
};

const threatFeedData = [
    { type: 'APT28 Activity', location: 'EMEA Financial Sector', status: 'Neutralized' },
    { type: 'Zero-Day Exploit', location: 'APAC Cloud Provider', status: 'Patched' },
    { type: 'DDoS Attempt', location: 'NORAM E-commerce', status: 'Mitigated' },
    { type: 'Ransomware Signature', location: 'Global Logistics Network', status: 'Blocked' },
    { type: 'Phishing Campaign', location: 'LATAM Healthcare', status: 'Contained' },
];

const ThreatFeed = () => {
    const extendedFeed = [...threatFeedData, ...threatFeedData];
    return (
        <div className="bg-black/20 p-6 rounded-lg border border-white/10 h-full overflow-hidden">
            <h3 className="font-bold text-lg mb-4 text-white">Live Threat Feed</h3>
            <div className="relative h-full">
                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)]">
                    <motion.div className="flex flex-col gap-4" animate={{ y: ['0%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                        {extendedFeed.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 text-sm">
                                <ShieldAlert className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <div className="flex-grow">
                                    <p className="font-semibold text-gray-200">{item.type}</p>
                                    <p className="text-xs text-gray-400">{item.location}</p>
                                </div>
                                <p className="text-xs font-bold text-green-400">{item.status}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- Main Global SOC Component ---
const GlobalSOC = () => {
    return (
        <section className="relative bg-[#0A0514] text-white py-32 sm:py-48 flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.2),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center">
                    <p className="text-indigo-400 font-semibold mb-3 tracking-wider">24/7 Global Operations</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">AI-Powered Global Security Operations Center</h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">Our GSOC is the nerve center of our defensive capabilities, providing continuous monitoring, advanced threat detection, and rapid response across the globe.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatedCounter value={1473281} label="Threats Neutralized Today" details="Real-time analysis and mitigation of malicious activities." />
                    <AnimatedCounter value={28500000} label="Assets Under Protection" details="Endpoints, cloud instances, and networks actively monitored." />
                    <AnimatedCounter value={12} label="Active Incidents" details="High-priority security events currently under investigation." />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 h-[400px]">
                    <div className="lg:col-span-1 h-full">
                        <ThreatFeed />
                    </div>
                    <div className="lg:col-span-2 h-full bg-black/20 p-6 rounded-lg border border-white/10 relative overflow-hidden">
                        <h3 className="font-bold text-lg text-white absolute top-6 left-6">Global Threat Activity</h3>
                        <LiveThreatDashboardWidget />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalSOC;

