import React from 'react';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';


const DotGrid = ({ className }) => (
    <div className={`absolute grid grid-cols-3 gap-2 ${className}`}>
        {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
        ))}
    </div>
);

function Contact() {
    return (
        <section id="contact" className="bg-[#282c34] text-white font-mono pt-16 pb-30">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-8">
                    {/* Left Side: Title and Text */}
                    <div className="md:col-span-8">
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-3xl font-bold">
                                <span className="text-purple-400">#</span>contacts
                            </h2>
                            <div className="w-1/3 h-px bg-purple-400"></div>
                        </div>
                        <div className="flex gap-8">
                           <DotGrid className="relative top-1 hidden lg:grid" />
                           <div className="text-gray-400 space-y-6">   
                               <p>Got a project, job, or idea in mind? Let's connect and build something awesome together!</p>
                               <div className="flex flex-wrap items-center gap-4">
                                    <a
                                        href="https://github.com/FassihShah" // Replace with your GitHub profile URL
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 py-2 px-4 hover:border-purple-400 hover:text-white transition-colors"
                                    >
                                        <Github size={24} />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/syed-fassih" // Replace with your LinkedIn profile URL
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 py-2 px-4 hover:border-purple-400 hover:text-white transition-colors"
                                    >
                                        <Linkedin size={24} />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                                <p className="text-gray-400 mt-2">📍 Based in <span className="text-purple-400">Lahore, Pakistan</span></p>
                           </div>
                        </div>
                    </div>

                    {/* Right Side: Message Card */}
                    <div className="md:col-span-4">
                        <div className="border border-gray-600 p-4 h-full">
                            <h3 className="font-semibold text-white mb-2">Message me here</h3>
                            <hr className="border-gray-700 mb-2" />
                            <div className="space-y-3">
                                <a href="tel:+92-3154472419" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                    <Phone size={20} />
                                    <span>+92-315 4472419</span>
                                </a>
                                <a href="mailto:fassihshah22@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                    <Mail size={20} />
                                    <span>fassihshah22@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;