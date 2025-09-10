'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Network, Cloud, DatabaseZap, BrainCircuit,
  ClipboardCheck, BookUser, Target, RadioTower,
  ToyBrick, Server, Users, Settings
} from 'lucide-react';

const services = [
  { title: "Application Security & VAPT", description: "Identify and remediate vulnerabilities in your applications before they can be exploited by malicious actors.", icon: Shield, image: "/assets/services/1.png" },
  { title: "Network Security & VAPT", description: "Secure your network infrastructure against internal and external threats with continuous monitoring and penetration testing.", icon: Network, image: "/assets/services/2.png" },
  { title: "Cloud-Native Security", description: "Comprehensive security for your cloud environments, from configuration management to container security.", icon: Cloud, image: "/assets/services/3.png" },
  { title: "Data Security & Privacy Compliance", description: "Protect sensitive data and ensure compliance with regulations like GDPR and CCPA through robust data governance.", icon: DatabaseZap, image: "/assets/services/4.png" },
  { title: "Infrastructure Security", description: "Defend your infrastructure from cyber threats with advanced monitoring and hardening.", icon: Server, image: "/assets/services/5.png" },
  { title: "Cyber Threat Intelligence (CTI)", description: "Stay ahead of attackers with proactive threat hunting, IOC analysis, and dark web monitoring.", icon: BrainCircuit, image: "/assets/services/6.png" },
  { title: "Security Audits & Compliance Readiness", description: "Achieve and maintain compliance with industry standards like ISO 27001, SOC 2, and PCI-DSS.", icon: ClipboardCheck, image: "/assets/services/7.png" },
  { title: "Cybersecurity Consulting Services", description: "Expert guidance to help you build, optimize, and mature your security strategy.", icon: Users, image: "/assets/services/8.png" },
  { title: "Red Team Assessments", description: "Simulate real-world, objective-based attacks to test your organization’s detection and response capabilities.", icon: Target, image: "/assets/services/9.png" },
  { title: "Managed Security Services (MSS)", description: "End-to-end managed security operations to monitor, detect, and respond to threats in real-time.", icon: Settings, image: "/assets/services/10.png" },
  { title: "Radio Frequency - Mesh VAPT", description: "Advanced vulnerability testing for RF mesh networks, including smart grids and industrial comms.", icon: RadioTower, image: "/assets/services/11.png" },
  { title: "Scada/IOT Devices VAPT", description: "Specialized security testing for industrial control systems and Internet of Things (IoT) devices.", icon: ToyBrick, image: "/assets/services/12.png" },
  { title: "Security Awareness & Training Programs", description: "Empower your employees to be the first line of defense against phishing, social engineering, and other threats.", icon: BookUser, image: "/assets/services/13.png" },
];

const Templates = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const [leftHeight, setLeftHeight] = useState<number | null>(null);

  useEffect(() => {
    if (leftColRef.current) {
      setLeftHeight(leftColRef.current.offsetHeight);
    }
  }, [activeService]);

  return (
    <section className="relative bg-[#0A0514] text-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none z-0" />
      <div className="absolute -left-48 -top-48 w-96 h-96 bg-gradient-to-br from-purple-900 to-transparent opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute -right-48 -bottom-48 w-96 h-96 bg-gradient-to-tl from-blue-900 to-transparent opacity-20 blur-3xl rounded-full z-0" />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2 tracking-wider uppercase">Our Expertise</h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">Comprehensive Security Solutions</h2>
          <p className="text-base text-gray-300 opacity-75 leading-relaxed">
            Full-spectrum cybersecurity services: assessments, threat intel, compliance & response readiness.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
        >
          {/* Left Column - Service Menu */}
          <div
            className="lg:col-span-4 flex flex-col gap-2 max-h-full overflow-y-auto"
            ref={leftColRef}
          >
            {/* Desktop Vertical Menu */}
            <div className="lg:flex hidden flex-col gap-2">
              {services.map(service => (
                <button
                  key={service.title}
                  onClick={() => setActiveService(service)}
                  className={`group p-3 rounded-md border transition-all duration-300 text-left text-sm
                    ${activeService.title === service.title
                      ? 'bg-white/10 border-purple-500 shadow-md shadow-purple-500/20'
                      : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <service.icon className={`w-5 h-5 transition-colors duration-300 ${activeService.title === service.title ? 'text-purple-400' : 'text-gray-400 group-hover:text-white'}`} />
                    <span className="font-medium">{service.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory">
              {services.map(service => (
                <button
                  key={service.title}
                  onClick={() => setActiveService(service)}
                  className={`group shrink-0 snap-start whitespace-nowrap px-3 py-2 rounded-lg border text-xs
                    ${activeService.title === service.title
                      ? 'bg-white/10 border-purple-500 text-purple-300'
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                    }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Details */}
          <div
            className="lg:col-span-8 bg-black/20 border border-white/10 rounded-2xl p-5"
            style={{ minHeight: leftHeight || 'auto' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{activeService.title}</h3>
                <p className="text-gray-400 text-sm mb-4 max-w-2xl">{activeService.description}</p>
                <div className="w-full max-h-[400px] overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Templates;