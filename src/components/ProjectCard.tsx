"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
    project: {
        title: string;
        description: string;
        tags: string[];
        demoLink: string;
        githubLink: string;
        image?: string;
    };
    index: number;
}

const ProjectCard = ({ project, index }: ProjectProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group"
        >
            <div className="relative h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 font-medium">
                    PROJECT PREVIEW
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
                        title="View Live Demo"
                    >
                        <ExternalLink size={20} />
                    </a>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
                        title="View Code"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
