const DotGrid = ({ className }) => (
    <div className={`absolute grid grid-cols-5 gap-2 ${className}`}>
        {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        ))}
    </div>
);

const SkillGroup = ({ title, skills }) => (
    <div className="border border-gray-700/80 rounded-lg overflow-hidden bg-gray-900">
        <div className="px-4 py-2.5 border-b border-gray-700/60 flex items-center gap-2">
            <span className="text-purple-400 text-xs">▹</span>
            <h3 className="text-white font-semibold text-sm">{title}</h3>
        </div>
        <div className="p-4 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
                <span
                    key={i}
                    className="skill-badge text-xs px-2.5 py-1 border border-gray-700 text-gray-400 rounded cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const skillGroups = [
    {
        title: "Languages",
        skills: ["Python", "TypeScript", "JavaScript", "C#", "C++", "Kotlin", "SQL"]
    },
    {
        title: "AI / ML",
        skills: ["LangChain", "LangGraph", "RAG", "HuggingFace", "PyTorch", "TensorFlow", "Scikit-learn", "YOLOv11", "YOLOv5", "OpenCV", "Gemini", "MCP", "Make.com"]
    },
    {
        title: "Web & Backend",
        skills: ["FastAPI", "ASP.NET MVC", "Blazor", "REST APIs", "React", "Next.js", "Streamlit", "HTML", "CSS", "Bootstrap", "Tailwind CSS"]
    },
    {
        title: "Databases",
        skills: ["SQL Server", "PostgreSQL", "MongoDB", "ChromaDB", "MSSQL", "OracleDB"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "GitHub", "Vercel", "Netlify", "Docker", "JIRA", "Jupyter", "Google Colab"]
    },
];

function Skills() {
    return (
        <section id="skills" className="bg-gray-900 py-20 px-4 font-mono">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                {/* Left: Title + decorative */}
                <div className="w-full lg:w-1/4 flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl font-bold text-white">
                            <span className="text-purple-400">#</span>skills
                        </h2>
                        <div className="h-px bg-purple-400 w-12"></div>
                    </div>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                        Technologies and tools I use to build intelligent, scalable software.
                    </p>

                    {/* Decorative shapes — hidden on small screens */}
                    <div className="relative h-64 hidden lg:block">
                        <DotGrid className="top-0 left-0" />
                        <DotGrid className="bottom-0 right-0 opacity-50" />
                        <div className="absolute top-14 right-6 w-16 h-16 border border-gray-700 rounded-sm"></div>
                        <div className="absolute bottom-12 left-8 w-10 h-10 border border-gray-700 rounded-sm"></div>
                        <div className="absolute bottom-4 right-4 w-20 h-20">
                            <div className="absolute top-0 left-3 w-16 h-16 border border-purple-400/40 rounded-sm"></div>
                            <div className="absolute top-3 left-0 w-16 h-16 border border-purple-400/20 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Right: Skills grid */}
                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillGroups.map((group, i) => (
                        <div key={i} className={i === skillGroups.length - 1 && skillGroups.length % 2 !== 0 ? 'sm:col-span-2' : ''}>
                            <SkillGroup title={group.title} skills={group.skills} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
