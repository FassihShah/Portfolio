import codepilotImg from '../assets/codepilot.png';
import youtubeImg from '../assets/youtube.jpg';
import printsStudioImg from '../assets/PrintsStudio.png';
import propertEaseImg from '../assets/Screenshot.png';


const projectsData = [
    {
        title: "CodePilot",
        techStack: "VS Code Extension · FastAPI · LangGraph . LangChain",
        description: "AI coding assistant that edits, explains, chats with, and generates boilerplate code using LangGraph agents integrated into VS Code.",
        image: codepilotImg,
        links: [
            { name: "Live <->", url: "https://marketplace.visualstudio.com/items?itemName=Fassih.codepilot-ai" },
            { name: "GitHub >", url: "https://github.com/FassihShah/CodePilot-VSCode" }
        ]
    },
    {
        title: "CodeQA-RAG",
        techStack: "Streamlit · LangChain · HuggingFace · ChromaDB",
        description: "RAG-based assistant that answers natural language questions about any GitHub repo using semantic chunking and conversational memory.",
        links: [
            { name: "GitHub >", url: "https://github.com/FassihShah/CodeQA-Assistant" }
        ]
    },
    {
        title: "YT Shorts Agent",
        techStack: "LangGraph · Veo 3 · Gemini · YouTube API . LangChain",
        description: "AI agent that fetches trends, generates short videos using Veo 3, and uploads to YouTube with human-in-the-loop approval.",
        image: youtubeImg,
        links: [
            { name: "GitHub >", url: "https://github.com/FassihShah/YT-Videos-Agent" }
        ]
    },
    {
        title: "PrintsStudio",
        techStack: "Blazor · .NET 8 · EF Core . Bootstrap . Restful APIs",
        description: "Modern print shop platform with role-based dashboards, customizable products, and designer portfolio system.",
        image: printsStudioImg,
        links: [
            { name: "Live <->", url: "https://printsstudio.netlify.app/" },
            { name: "GitHub >", url: "https://github.com/FassihShah/PrintsStudio" }
        ]
    },
    {
        title: "PropertEase",
        techStack: "ASP.NET MVC · Clean Architecture · EF Core . Bootstrap",
        description: "Real estate marketplace with advanced search, messaging system, and clean architecture backend with separate roles for Agents and Users.",
        image: propertEaseImg,
        links: [
            { name: "GitHub >", url: "https://github.com/FassihShah/PropertEase" }
        ]
    },
    {
        title: "License Plate Reader",
        techStack: "YOLOv5 · EasyOCR · Python",
        description: "Smart surveillance system that detects and reads license plates from images and videos using object detection and OCR.",
        links: [
            { name: "GitHub >", url: "https://github.com/FassihShah/License-Plate-Reader" }
        ]
    }
];


const ProjectCard = ({ project }) => (
    <div className="border border-gray-700">
        {/* Image Placeholder */}
        <div className="h-48 border-b border-gray-700 bg-gray-800 flex items-center justify-center">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                />
            ) : (
                <span className="text-purple-400 text-4xl font-semibold">
                    {project.title}
                </span>
            )}
        </div>

        
        {/* Tech Stack */}
        <div className="p-2 border-b border-gray-700">
            <p className="text-gray-400 text-sm">{project.techStack}</p>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between" style={{ minHeight: '180px' }}>
            <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-purple-400 text-white font-medium px-4 py-2 hover:bg-purple-400/10 transition-colors duration-200"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    </div>
);


function Projects() {
    return (
        <section id="projects" className="pt-7 pb-10 px-4 bg-gray-900 text-white font-mono">
            <div className="max-w-6xl mx-auto relative">
                {/* Decorative dots */}
                <div className="absolute top-2 -left-16 hidden lg:grid grid-cols-3 gap-2">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    ))}
                </div>

                {/* Section Header */}
                <div className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-bold text-white">
                            <span className="text-purple-400">#</span>projects
                        </h2>
                        <div className="w-48 h-px bg-purple-400 hidden sm:block"></div>
                    </div>
                    <a href="https://github.com/FassihShah" className="text-white hover:text-purple-400 flex items-center gap-2">
                        <span>View all on GitHub</span>
                        <span>➞</span>
                    </a>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;