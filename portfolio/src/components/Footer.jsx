import { Github, Linkedin, TerminalSquare, Heart } from 'lucide-react';

function Footer() {
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const links = ['home', 'skills', 'projects', 'about-me', 'contact'];

    return (
        <footer className="bg-gray-900 text-gray-400 font-mono border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">

                    {/* Brand */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <TerminalSquare className="text-purple-400" size={20} />
                            <span className="text-white font-bold">Syed <span className="text-purple-400">Fassih</span></span>
                        </div>
                        <p className="text-sm">AI/ML Engineer · Full-Stack Developer</p>
                        <a href="mailto:fassihshah22@gmail.com" className="text-xs text-gray-500 hover:text-purple-400 transition-colors mt-1 block">
                            fassihshah22@gmail.com
                        </a>
                    </div>

                    {/* Nav */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-3">Navigation</h3>
                        <div className="flex flex-col gap-1.5">
                            {links.map(id => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className="text-left text-sm text-gray-500 hover:text-purple-400 transition-colors"
                                >
                                    <span className="text-purple-400 mr-1">#</span>
                                    {id.replace('-', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-3">Social</h3>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/FassihShah" target="_blank" rel="noopener noreferrer"
                               className="hover:text-purple-400 transition-colors" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/syed-fassih" target="_blank" rel="noopener noreferrer"
                               className="hover:text-purple-400 transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
                    <span>© 2025 Syed Fassih. All rights reserved.</span>
                    <span className="flex items-center gap-1">
                        Built with <Heart size={11} className="text-purple-400 mx-0.5" /> using React & Tailwind
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
