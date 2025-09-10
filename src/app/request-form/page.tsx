'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// SVG Icon components for form fields
const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);


const RequestDemoPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call)
        console.log('Form Submitted:', formData);
        alert('Thank you for your request! We will be in touch shortly.');
    };

  return (
    <><Navbar/>
    <div className="relative bg-black min-h-screen text-white font-sans overflow-x-hidden">
      {/* Background Glow Effect */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] max-w-xl max-h-xl 
                   bg-purple-600/30 rounded-full blur-[150px] lg:blur-[250px] pointer-events-none"
        aria-hidden="true"
      ></div>
       <div
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vh] max-w-2xl max-h-2xl 
                   bg-indigo-600/30 rounded-full blur-[150px] lg:blur-[250px] pointer-events-none"
        aria-hidden="true"
      ></div>

      <main className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-8">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content: Text */}
          <div className="text-center lg:text-left pt-16 lg:pt-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Secure Your Digital Frontier.
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
              Request a personalized demo to see how the world's leading cybersecurity platform can protect your organization from evolving threats.
            </p>
          </div>

          {/* Right Content: Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-800/50 rounded-2xl shadow-2xl shadow-purple-500/10">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-center mb-1">Get a Demo</h2>
                <p className="text-center text-gray-400 mb-6">Fill out the form to get started.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input type="text" name="name" placeholder="Full Name" required className="w-full pl-10 p-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" onChange={handleInputChange} value={formData.name} />
                  </div>
                  {/* Email Input */}
                   <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input type="email" name="email" placeholder="Work Email" required className="w-full pl-10 p-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" onChange={handleInputChange} value={formData.email} />
                  </div>
                   {/* Phone Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full pl-10 p-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" onChange={handleInputChange} value={formData.phone} />
                  </div>
                   {/* Company Input */}
                  <div className="relative">
                    <input type="text" name="company" placeholder="Company Name" required className="w-full p-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" onChange={handleInputChange} value={formData.company} />
                  </div>
                  {/* Message Textarea */}
                  <div>
                    <textarea name="message" placeholder="Tell us about your needs (optional)" rows="3" className="w-full p-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" onChange={handleInputChange} value={formData.message}></textarea>
                  </div>

                  <button type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold 
                               py-3 px-8 rounded-lg text-lg transition-transform duration-300
                               transform hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  >
                    Request Your Demo
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default RequestDemoPage;

