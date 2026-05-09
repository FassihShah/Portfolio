const DotGrid = ({ className }) => (
    <div className={`absolute grid grid-cols-5 gap-2 ${className}`}>
        {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        ))}
    </div>
);

const StatCard = ({ value, label }) => (
    <div className="border border-gray-700/80 rounded-lg p-4 text-center bg-gray-900 hover:border-purple-400/40 transition-colors">
        <p className="text-2xl font-bold text-purple-400">{value}</p>
        <p className="text-gray-400 text-xs mt-1">{label}</p>
    </div>
);

const EducationCard = ({ degree, university, gpa }) => (
    <div className="border border-gray-700/80 rounded-lg overflow-hidden bg-gray-900">
        <div className="px-4 py-3 border-b border-gray-700/60 flex items-center gap-2">
            <span className="text-purple-400 text-xs">▹</span>
            <h3 className="text-white font-semibold text-sm">Education</h3>
        </div>
        <div className="p-4 text-gray-400 space-y-3">
            <div>
                <p className="font-semibold text-white text-sm">{degree}</p>
                <p className="text-xs text-gray-500 mt-0.5">{university}</p>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">CGPA</span>
                <span className="text-purple-400 font-bold">{gpa}</span>
            </div>
        </div>
    </div>
);

function AboutMe() {
    const objective = "I'm a final-year Software Engineering student passionate about building intelligent, scalable applications. I specialize in AI/ML, agentic systems, and full-stack web development using FastAPI, .NET, and modern frontend frameworks. My goal is to solve real-world problems with clean, efficient, and impactful software.";

    const highlights = [
        <>
            Served as <span className="text-purple-400">Teaching Assistant</span> for <span className="text-purple-400">Object-Oriented Programming</span>, guiding students through core concepts like classes, inheritance, and design patterns.
        </>,
        <>
            <span className="text-purple-400">Teaching Assistant</span> for <span className="text-purple-400">Data Structures & Algorithms</span>, assisting with implementation of key structures and solving algorithmic problems.
        </>,
        <>
            Built and deployed multiple projects spanning <span className="text-purple-400">AI agents</span>, LLM pipelines, <span className="text-purple-400">VS Code extensions</span>, and enterprise full-stack applications.
        </>
    ];

    const education = {
        degree: "B.S. in Software Engineering",
        university: "PUCIT — Punjab University College of Information Technology",
        gpa: "3.8 / 4.0"
    };

    const stats = [
        { value: "3.8",  label: "CGPA" },
        { value: "2×",   label: "Teaching Assistant" },
        { value: "2026", label: "Graduating" },
    ];

    return (
        <section id="about-me" className="py-20 px-4 bg-gray-900 text-white font-mono">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-purple-400">#</span>about-me
                    </h2>
                    <div className="flex-grow h-px section-line"></div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                    {stats.map((s, i) => <StatCard key={i} {...s} />)}
                </div>

                {/* Main content */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column */}
                    <div className="lg:w-2/3 space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="text-purple-400">{'>'}</span> About Me
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {objective}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="text-purple-400">{'>'}</span> Highlights
                            </h3>
                            <ul className="space-y-3">
                                {highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-0.5 flex-shrink-0">▹</span>
                                        <span className="text-gray-400 text-sm leading-relaxed">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/3 w-full">
                        <div className="relative">
                            <EducationCard
                                degree={education.degree}
                                university={education.university}
                                gpa={education.gpa}
                            />
                            <DotGrid className="-bottom-8 -right-8 opacity-30 hidden md:grid" />
                            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-purple-400/20 -z-10 hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
