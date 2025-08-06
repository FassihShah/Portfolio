
const SkillCard = ({ title, lines }) => (
    <div className="border border-gray-600">
        <h3 className="text-white font-bold p-2">{title}</h3>
        <hr className="border-gray-600" />
        <div className="p-2 text-gray-400 space-y-1">
            {lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    </div>
);

// A reusable component for the dot grid pattern
const DotGrid = ({ className }) => (
    <div className={`absolute grid grid-cols-5 gap-2 ${className}`}>
        {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
        ))}
    </div>
);


function Skills() {
    const ai_ml = {
    title: "AI / ML",
    lines: [
        "LangChain LangGraph RAG",
        "HuggingFace PyTorch YOLOv5 OpenCV",
        "TensorFlow Scikit-learn CNN"
    ]
};

const languages = {
    title: "Languages",
    lines: [
        "Python JavaScript C++",
        "C# Kotlin SQL"
    ]
};

const web_technologies = {
    title: "Web Technologies",
    lines: [
        "ASP.NET MVC Blazor Rest APIs",
        "FastAPI Streamlit React",
        "HTML CSS Bootstrap"
    ]
};

const other_tools = {
    title: "Other Tools",
    lines: [
        "Git GitHub JIRA",
        "Jupyter Colab"
    ]
};

const databases = {
    title: "Databases",
    lines: [
        "SQL Server OracleDB",
        "ChromaDB MSSQL",
        "MongoDB"
    ]
};




    return (
        <section id="skills" className="bg-[#282c34] py-24 px-4 font-mono">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                {/* Left Side: Title and Decorative Elements */}
                <div className="w-full lg:w-1/3">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-bold text-white">
                            <span className="text-purple-400">#</span>skills
                        </h2>
                        <div className="w-1/3 h-px bg-purple-400"></div>
                    </div>
                    {/* Decorative shapes container - hidden on small screens for clarity */}
                    <div className="relative h-80 mt-10 hidden lg:block">
                        <DotGrid className="top-0 left-4" />
                        <DotGrid className="top-32 left-32" />
                        <div className="absolute top-10 right-10 w-20 h-20 border border-gray-600"></div>
                        <div className="absolute bottom-10 left-10 w-14 h-14 border border-gray-600"></div>
                        {/* Overlapping squares */}
                        <div className="absolute bottom-0 right-4 w-28 h-28">
                            <div className="absolute top-0 left-4 w-24 h-24 border border-purple-400"></div>
                            <div className="absolute top-4 left-0 w-24 h-24 border border-purple-400"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Skills Grid */}
                <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        <SkillCard title={languages.title} lines={languages.lines} />
                        <SkillCard title={ai_ml.title} lines={ai_ml.lines} />
                    </div>
                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                        <SkillCard title={databases.title} lines={databases.lines} />
                        <SkillCard title={web_technologies.title} lines={web_technologies.lines} />
                        <SkillCard title={other_tools.title} lines={other_tools.lines} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;