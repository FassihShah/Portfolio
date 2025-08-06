import { TerminalSquare } from 'lucide-react';


function Navbar()
{
    const scrollTo = (id) =>
    {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight">
                    <TerminalSquare size={28} className="text-purple-400" />
                    Syed Fassih
                </div>

                <div className="space-x-6 hidden md:flex">
                    <button onClick={() => scrollTo('home')} className="text-white hover:text-gray-500 transition font-light">
                        <span className="text-purple-400 mr-1">#</span>Home
                    </button>
                    <button onClick={() => scrollTo('skills')} className="text-white hover:text-gray-500 transition font-light">
                        <span className="text-purple-400 mr-1">#</span>Skills
                    </button>
                    <button onClick={() => scrollTo('projects')} className="text-white hover:text-gray-500 transition font-light">
                        <span className="text-purple-400 mr-1">#</span>Projects
                    </button>
                    <button onClick={() => scrollTo('about-me')} className="text-white hover:text-gray-500 transition font-light">
                        <span className="text-purple-400 mr-1">#</span>About Me
                    </button>
                    <button onClick={() => scrollTo('contact')} className="text-white hover:text-gray-500 transition font-light">
                        <span className="text-purple-400 mr-1">#</span>Contact
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
