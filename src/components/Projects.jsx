import codepilotImg     from '../assets/codepilot.png';
import youtubeImg       from '../assets/youtube.jpg';
import printsStudioImg  from '../assets/PrintsStudio.png';
import propertEaseImg2  from '../assets/PropertEase.png';
import intelliFoneImg   from '../assets/IntelliFone.png';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
    {
        title: "IntelliFone",
        category: "AI Platform",
        techStack: ["TypeScript", "Next.js", "AI/ML", "YOLOv11", "Gemini", "Vercel"],
        description: "AI-powered platform that verifies used smartphones by detecting physical damage, scoring device condition, and predicting fair market prices using real-time data.",
        image: null,
        links: [
            { name: "Live", url: "https://intellifone.vercel.app", icon: "live" },
            { name: "GitHub", url: "https://github.com/FassihShah/IntelliFone", icon: "github" }
        ]
    },
    {
        title: "Analyzer",
        category: "AI / Agents",
        techStack: ["Python", "FastAPI", "LangChain", "LLMs", "PDF Parsing"],
        description: "AI-powered recruiter dashboard for importing resumes, evaluating candidates against job-specific rubrics, and managing review, export, and rejection workflows.",
        image: null,
        links: [
            { name: "GitHub", url: "https://github.com/FassihShah/Analyzer", icon: "github" }
        ]
    },
    {
        title: "CodePilot",
        category: "Developer Tool",
        techStack: ["TypeScript", "FastAPI", "LangGraph", "LangChain", "VS Code API"],
        description: "AI coding assistant VS Code extension that edits, explains, chats with, and generates boilerplate code using LangGraph agents.",
        image: codepilotImg,
        links: [
            { name: "Marketplace", url: "https://marketplace.visualstudio.com/items?itemName=Fassih.codepilot-ai", icon: "live" },
            { name: "GitHub", url: "https://github.com/FassihShah/CodePilot-VSCode", icon: "github" }
        ]
    },
    {
        title: "YT Shorts Agent",
        category: "AI / Agents",
        techStack: ["Python", "LangGraph", "Veo 3", "Gemini", "YouTube API"],
        description: "AI agent that fetches trending topics, generates YouTube Shorts using Veo 3, and uploads them with human-in-the-loop approval via LangGraph.",
        image: youtubeImg,
        links: [
            { name: "GitHub", url: "https://github.com/FassihShah/YT-Videos-Agent", icon: "github" }
        ]
    },
    {
        title: "PriceHunt MCP",
        category: "AI / MCP",
        techStack: ["Python", "MCP", "Gemini", "LangChain", "Streamlit"],
        description: "MCP-powered AI tool that finds the cheapest 4+ star products across Daraz, Telemart, and iShopping using Gemini + LangChain for smart product matching.",
        image: null,
        links: [
            { name: "GitHub", url: "https://github.com/FassihShah/PriceHunt-MCP", icon: "github" }
        ]
    },
    {
        title: "LinkedIn Automation",
        category: "AI Automation",
        techStack: ["Make.com", "AI", "Automation", "Carousel Design", "Video"],
        description: "End-to-end LinkedIn automation system powered by Make.com and AI for competitor analysis, content ideation, carousel design, video repurposing, and scheduled publishing.",
        image: null,
        links: [
            { name: "GitHub", url: "https://github.com/FassihShah/LinkedIn-Content-Automation-System", icon: "github" }
        ]
    },
    {
        title: "PrintsStudio",
        category: "Full Stack",
        techStack: ["C#", "Blazor", ".NET 8", "EF Core", "REST APIs"],
        description: "Modern print shop platform with role-based dashboards, customizable products, and designer portfolio system built with Blazor and .NET 8.",
        image: printsStudioImg,
        links: [
            { name: "Live", url: "https://printsstudio.netlify.app/", icon: "live" },
            { name: "GitHub", url: "https://github.com/FassihShah/PrintsStudio", icon: "github" }
        ]
    },
    {
        title: "PropertEase",
        category: "Full Stack",
        techStack: ["ASP.NET MVC", "Clean Architecture", "EF Core", "SQL Server"],
        description: "Real estate marketplace with advanced search, messaging system, and clean architecture backend with separate roles for Agents and Users.",
        image: propertEaseImg2,
        links: [
            { name: "GitHub", url: "https://github.com/FassihShah/PropertEase", icon: "github" }
        ]
    },
];

const categoryColors = {
    "AI Platform":    "text-blue-400 bg-blue-400/10 border-blue-400/30",
    "AI / Agents":    "text-purple-400 bg-purple-400/10 border-purple-400/30",
    "Developer Tool": "text-green-400 bg-green-400/10 border-green-400/30",
    "AI / MCP":       "text-pink-400 bg-pink-400/10 border-pink-400/30",
    "AI Automation":  "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    "Full Stack":     "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
};

const ProjectCard = ({ project }) => (
    <div className="project-card border border-gray-700/80 rounded-lg overflow-hidden bg-gray-900 flex flex-col group">
        {/* Image / Placeholder */}
        <div className="h-44 border-b border-gray-700/80 bg-gray-800 flex items-center justify-center relative overflow-hidden">
            {project.image ? (
                <>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
            ) : (
                <div className="flex flex-col items-center gap-2">
                    <span className="text-purple-400 text-3xl font-bold">{project.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded border ${categoryColors[project.category] || 'text-gray-400 bg-gray-700/40 border-gray-600/40'}`}>
                        {project.category}
                    </span>
                </div>
            )}

            {/* Category badge overlay for image cards */}
            {project.image && (
                <div className="absolute top-3 left-3">
                    <span className={`text-xs px-2 py-0.5 rounded border ${categoryColors[project.category] || 'text-gray-400 bg-gray-800 border-gray-600'}`}>
                        {project.category}
                    </span>
                </div>
            )}
        </div>

        {/* Tech stack badges */}
        <div className="px-4 py-2.5 border-b border-gray-700/60 flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
                <span key={i} className="skill-badge text-xs px-2 py-0.5 border border-gray-700 text-gray-400 rounded">
                    {tech}
                </span>
            ))}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 justify-between gap-4">
            <div>
                <h3 className="text-lg font-semibold text-white mb-1.5">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm border border-gray-600 text-gray-300 px-3 py-1.5 rounded hover:border-purple-400 hover:text-white transition-all duration-200"
                    >
                        {link.icon === 'live' ? <ExternalLink size={13} /> : <Github size={13} />}
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    </div>
);

function Projects() {
    return (
        <section id="projects" className="pt-8 pb-16 px-4 bg-gray-900 text-white font-mono">
            <div className="max-w-6xl mx-auto relative">
                {/* Decorative dots */}
                <div className="absolute top-2 -left-12 hidden lg:grid grid-cols-3 gap-2 opacity-30">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    ))}
                </div>

                {/* Section Header */}
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-bold text-white">
                            <span className="text-purple-400">#</span>projects
                        </h2>
                        <div className="w-40 h-px section-line hidden sm:block"></div>
                    </div>
                    <a
                        href="https://github.com/FassihShah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 flex items-center gap-1.5 text-sm transition-colors"
                    >
                        <span>All on GitHub</span>
                        <Github size={15} />
                    </a>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
