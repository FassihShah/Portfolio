import { Phone, Mail, Github, Linkedin, MapPin } from 'lucide-react';

const DotGrid = ({ className }) => (
    <div className={`absolute grid grid-cols-3 gap-2 ${className}`}>
        {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        ))}
    </div>
);

function Contact() {
    return (
        <section id="contact" className="bg-gray-900 text-white font-mono pt-16 pb-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold">
                        <span className="text-purple-400">#</span>contact
                    </h2>
                    <div className="w-1/3 h-px section-line"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Text */}
                    <div className="relative">
                        <DotGrid className="relative hidden lg:grid mb-6 top-0 left-0" />
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            I'm currently open to <span className="text-purple-400">freelance work</span> and <span className="text-purple-400">full-time opportunities</span>. Got a project, job offer, or just want to say hi? I'd love to hear from you.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <a
                                href="https://github.com/FassihShah"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 py-2 px-4 rounded hover:border-purple-400 hover:text-white transition-all duration-200"
                            >
                                <Github size={18} />
                                <span className="text-sm">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/syed-fassih"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 py-2 px-4 rounded hover:border-purple-400 hover:text-white transition-all duration-200"
                            >
                                <Linkedin size={18} />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <MapPin size={14} className="text-purple-400" />
                            <span>Based in <span className="text-purple-400">Lahore, Pakistan</span></span>
                        </div>
                    </div>

                    {/* Right: Contact card */}
                    <div className="border border-gray-700/80 rounded-lg overflow-hidden bg-gray-900">
                        <div className="px-4 py-3 border-b border-gray-700/60 flex items-center gap-2">
                            <span className="text-purple-400 text-xs">▹</span>
                            <h3 className="text-white font-semibold text-sm">Reach me directly</h3>
                        </div>
                        <div className="p-5 space-y-4">
                            <a
                                href="mailto:fassihshah22@gmail.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                            >
                                <div className="w-9 h-9 rounded border border-gray-700 group-hover:border-purple-400/50 flex items-center justify-center transition-colors">
                                    <Mail size={16} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Email</p>
                                    <p className="text-sm">fassihshah22@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+923154472419"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                            >
                                <div className="w-9 h-9 rounded border border-gray-700 group-hover:border-purple-400/50 flex items-center justify-center transition-colors">
                                    <Phone size={16} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Phone</p>
                                    <p className="text-sm">+92-315 4472419</p>
                                </div>
                            </a>

                            <div className="pt-2 border-t border-gray-700/60">
                                <p className="text-xs text-gray-600">Response time: usually within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
