
const DotGrid = ({ className }) => (
    <div className={`absolute grid grid-cols-5 gap-2 ${className}`}>
        {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
        ))}
    </div>
);

const EducationCard = ({ degree, university, gpa }) => (
    <div className="border border-gray-700">
        <h3 className="text-white font-bold p-3">Education</h3>
        <hr className="border-gray-700" />
        <div className="p-3 text-gray-400 space-y-2">
            <div>
                <p className="font-semibold text-white">{degree}</p>
                <p className="text-sm">{university}</p>
            </div>
            <div>
                <p className="font-semibold text-white">CGPA</p>
                <p className="text-sm">{gpa}</p>
            </div>
        </div>
    </div>
);

function AboutMe() {
    const objective = "I’m a final-year Software Engineering student passionate about building intelligent, scalable applications. I specialize in AI/ML, agentic systems, and full-stack web development using FastAPI, .NET, and modern frontend frameworks. My goal is to solve real-world problems with clean, efficient, and impactful software.";

    const highlights = [
        <>
            Served as <span className="text-purple-400">Teaching Assistant</span> for <span className="text-purple-400">Object-Oriented Programming (OOP)</span>, guiding students through core concepts like <span className="text-purple-400">classes</span>, <span className="text-purple-400">inheritance</span>, and <span className="text-purple-400">design patterns</span>.
        </>,
        <>
            <span className="text-purple-400">Teaching Assistant</span> for <span className="text-purple-400">Data Structures & Algorithms (DSA)</span>, assisting with implementation of key structures and solving <span className="text-purple-400">algorithmic problems</span>.
        </>
    ];

    
    const education = {
        degree: "B.S in Software Enginneering",
        university: "PUCIT",
        gpa: "3.8 / 4.0"
    };

    return (
        <section id="about-me" className="py-24 px-4 bg-[#282c34] text-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-purple-400">#</span>about-me
                    </h2>
                    <div className="flex-grow h-px bg-purple-400"></div>
                </div>

                {/* Content Layout */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    
                    {/* Left Column: Text Content */}
                    <div className="lg:w-2/3 space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-3">My Objective</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {objective}
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Highlights</h3>
                            <ul className="space-y-3">
                                {highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-purple-400 mr-3 mt-1">▹</span>
                                        <span className="text-gray-400">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Right Column: Card and Decoration */}
                    <div className="lg:w-1/3 w-full">
                        <div className="relative">
                           <EducationCard 
                                degree={education.degree}
                                university={education.university}
                                gpa={education.gpa}
                           />
                           {/* Decorative elements for visual consistency */}
                           <DotGrid className="-bottom-8 -right-8 opacity-50 hidden md:grid" />
                           <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-gray-700 -z-10 hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;