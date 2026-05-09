import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const ROLES = ['AI/ML Engineer', 'Full Stack Developer', 'Agent Builder', 'Problem Solver'];

function useTypewriter(words, speed = 80, pause = 1800) {
    const [display, setDisplay] = useState('');
    const [wordIdx, setWordIdx]   = useState(0);
    const [typing, setTyping]     = useState(true);

    useEffect(() => {
        const current = words[wordIdx];
        let timeout;
        if (typing) {
            if (display.length < current.length) {
                timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
            } else {
                timeout = setTimeout(() => setTyping(false), pause);
            }
        } else {
            if (display.length > 0) {
                timeout = setTimeout(() => setDisplay(d => d.slice(0, -1)), speed / 2);
            } else {
                setWordIdx(i => (i + 1) % words.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [display, typing, wordIdx, words, speed, pause]);

    return display;
}

function SocialLinks() {
    return (
        <div className="hidden md:flex flex-col gap-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            <a href="https://www.github.com/FassihShah" target="_blank" rel="noopener noreferrer"
               className="hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5">
                <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/syed-fassih" target="_blank" rel="noopener noreferrer"
               className="hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5">
                <Linkedin size={22} />
            </a>
            <div className="w-px h-16 bg-gray-700 mx-auto mt-2"></div>
        </div>
    );
}

function CodeBlock({ role }) {
    return (
        <div className="font-mono text-sm text-gray-400 border border-gray-700 p-5 rounded-lg bg-gray-900/80 backdrop-blur-sm w-full max-w-sm shadow-xl">
            <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = &#123;</p>
            <p className="pl-4">name: <span className="text-green-400">"Syed Fassih"</span>,</p>
            <p className="pl-4">role: <span className="text-green-400">"{role}"</span>,</p>
            <p className="pl-4">skills: [</p>
            <p className="pl-8 text-green-400">"AI / ML"<span className="text-gray-400">,</span> <span className="text-green-400">"LangGraph"</span><span className="text-gray-400">,</span></p>
            <p className="pl-8 text-green-400">"FastAPI"<span className="text-gray-400">,</span> <span className="text-green-400">".NET"</span><span className="text-gray-400">,</span></p>
            <p className="pl-8 text-green-400">"TypeScript"<span className="text-gray-400">,</span> <span className="text-green-400">"MCP"</span></p>
            <p className="pl-4">],</p>
            <p className="pl-4">hireable: <span className="text-purple-400">true</span>,</p>
            <p>&#125;;</p>
        </div>
    );
}

function StatusBadge() {
    return (
        <div className="border border-gray-700 px-4 py-2.5 rounded-lg w-full max-w-sm bg-gray-900/60 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
            <p className="text-sm text-gray-300">
                Available for <span className="text-purple-400 font-medium">freelance & full-time</span>
            </p>
        </div>
    );
}

function Home() {
    const role = useTypewriter(ROLES);

    const scrollToProjects = () =>
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    const scrollToContact  = () =>
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="home" className="bg-gray-900 min-h-screen flex items-center justify-center p-8 pt-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-800/5 rounded-full blur-3xl"></div>
            </div>

            <SocialLinks />

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="flex flex-col gap-5 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 border border-purple-400/30 bg-purple-400/5 px-3 py-1.5 rounded-full w-fit">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        <span className="text-purple-300 text-xs font-mono">Final-year Software Engineering student</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Hi, I'm <span className="text-purple-400">Syed Fassih</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 h-9">
                        <span className="cursor-blink">{role}</span>
                    </h2>

                    <p className="text-gray-400 font-mono leading-relaxed text-sm">
                        I build intelligent, scalable applications — from AI agents and LLM pipelines to full-stack web platforms. Proficient in LangChain, LangGraph, FastAPI, and .NET.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-2">
                        <button
                            onClick={scrollToProjects}
                            className="btn-glow border border-purple-400 bg-purple-400/10 text-white font-mono px-6 py-2.5 rounded hover:bg-purple-400 hover:text-white transition-all duration-300"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="border border-gray-600 text-gray-300 font-mono px-6 py-2.5 rounded hover:border-purple-400 hover:text-white transition-all duration-300"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Right Visuals */}
                <div className="relative hidden md:flex flex-col items-center gap-4 animate-slide-in-right animate-float">
                    {/* Decorative frames */}
                    <div className="absolute w-72 h-48 border border-purple-400/20 -top-8 -left-8 rounded-lg pointer-events-none"></div>
                    <div className="absolute w-64 h-40 border border-purple-400/10 -top-4 -left-4 rounded-lg pointer-events-none"></div>

                    {/* Dot grid */}
                    <div className="absolute -top-6 -right-6 grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        ))}
                    </div>

                    <div className="relative z-10 w-full flex flex-col items-center gap-4">
                        <CodeBlock role={role || ROLES[0]} />
                        <StatusBadge />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToProjects}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-purple-400 transition-colors animate-bounce"
                aria-label="Scroll down"
            >
                <ArrowDown size={20} />
            </button>
        </section>
    );
}

export default Home;
