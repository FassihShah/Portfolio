import { useState, useEffect } from 'react';
import { TerminalSquare, Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Home',     id: 'home' },
    { label: 'Skills',   id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'About Me', id: 'about-me' },
    { label: 'Contact',  id: 'contact' },
];

function Navbar() {
    const [menuOpen, setMenuOpen]     = useState(false);
    const [activeId, setActiveId]     = useState('home');
    const [scrolled, setScrolled]     = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observers = navItems.map(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(o => o?.disconnect());
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'bg-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xl font-bold text-white tracking-tight cursor-pointer" onClick={() => scrollTo('home')}>
                    <TerminalSquare size={26} className="text-purple-400" />
                    <span>Syed <span className="text-purple-400">Fassih</span></span>
                </div>

                {/* Desktop nav */}
                <div className="space-x-2 hidden md:flex items-center">
                    {navItems.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`px-3 py-1.5 rounded text-sm font-light transition-all duration-200 ${
                                activeId === id
                                    ? 'text-purple-400'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            <span className="text-purple-400 mr-0.5">#</span>{label}
                        </button>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800 px-4 py-4 flex flex-col gap-2 animate-fade-in">
                    {navItems.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`text-left px-3 py-2 rounded text-sm transition-colors ${
                                activeId === id
                                    ? 'text-purple-400 bg-purple-400/10'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                            }`}
                        >
                            <span className="text-purple-400 mr-1">#</span>{label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
