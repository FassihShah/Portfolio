import React from 'react';

import { Github, Linkedin,  } from 'lucide-react';

function SocialLinks() {
    return (
        <div className="hidden md:flex flex-col gap-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {/* Replace these with actual icons */}
            <a href="https://www.github.com/FassihShah" className="hover:text-purple-400 transition-colors"><Github size = {30}/></a>
            <a href="https://www.linkedin.com/in/syed-fassih" className="hover:text-purple-400 transition-colors"><Linkedin size={30}/> </a>
        </div>
    );
}

// A simple dot grid component to replicate the design element
function DotGrid() {
    return (
        <div className="absolute -top-4 -right-4 w-20 h-20 grid grid-cols-5 gap-2 opacity-30">
            {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
        </div>
    );
}


// Restyled CodeBlock to match the new theme
function CodeBlock() {
    return (
        <div className="font-mono text-sm text-gray-400 border border-gray-600 p-4 rounded-md bg-[#282C34]/50 backdrop-blur-sm w-full max-w-sm">
            <p><span className="text-purple-400">const</span> <span className="text-white">developer</span> = &#123;</p>
            <p className="pl-4">name: <span className="text-white">"Fassih"</span>,</p>
            <p className="pl-4">skills: [ <span className="text-white">"AI/ML"</span>, <span className="text-white">"Backend"</span>, <span className="text-white">"Databases"</span> ],</p>
            <p className="pl-4">hireable: <span className="text-purple-400">true</span>,</p>
            <p>&#125;;</p>
        </div>
    );
}

function Home() {
    return (
        <section
            id="home"
            className="bg-[#282C34] min-h-screen flex items-center justify-center p-8 relative"
        >
            <SocialLinks />

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-snug">
                        Syed Fassih – <span className="text-purple-400">AI/ML</span> and <span className="text-purple-400">Full Stack Developer</span>
                    </h1>

                    <p className="text-gray-400 font-mono">
                        currently in my final year of Software Engineering. Skilled in modern backend frameworks like FastAPI and .NET, with hands-on experience in building intelligent agents using LangChain, LangGraph, and LLMs.
                    </p>

                    <a
                        href="#contacts" // Changed to match navbar in image
                        className="border border-purple-400 text-white font-mono px-6 py-2 mt-4 rounded w-fit hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                        Contact me !!
                    </a>
                </div>

                {/* Right Visuals */}
                <div className="relative hidden md:flex flex-col items-center justify-center">
                    {/* Decorative Elements */}
                    <div className="absolute w-64 h-40 border-2 border-purple-400 opacity-30 -top-10 -left-10 rounded"></div>
                    <div className="absolute w-56 h-32 border-2 border-purple-400 opacity-30 -top-4 -left-4 rounded"></div>
                    <DotGrid />

                    {/* Main Content for this column */}
                    <div className="relative z-10 w-full flex flex-col items-center gap-4">
                       <CodeBlock />
                        <div className="border border-gray-600 px-4 py-2 rounded w-full max-w-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-400"></div>
                                <p className="text-sm text-gray-300">
                                    Currently working on {"  "}<span className="text-white font-mono">  AI/ML</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;