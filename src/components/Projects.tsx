"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        title: "🌤️ Weather App",
        description: "Live weather updates using modern API integrations and a clean, user-friendly interface.",
        tags: ["React", "API Integration", "CSS"],
        demoLink: "https://todayweatherfrc.netlify.app/",
        githubLink: "https://github.com/elso12/weather-app",
        image: "https://placehold.co/400x200/50b8e7/ffffff?text=Weather+App"
    },
    {
        title: "💬 Dev Quotes",
        description: "A web app that provides motivational tech quotes with a smooth and clean UI, perfect for daily inspiration.",
        tags: ["React", "API", "UI/UX"],
        demoLink: "https://devquotes1.netlify.app/",
        githubLink: "https://github.com/elso12/devquotes",
        image: "https://placehold.co/400x200/8d8d8d/ffffff?text=Dev+Quotes"
    },
    {
        title: "💊 Pharmacy Management System",
        description: "A full-stack web application for pharmacy inventory and sales control built with PHP and MySQL.",
        tags: ["PHP", "MySQL", "Full Stack"],
        demoLink: "#",
        githubLink: "https://github.com/elso12",
        image: "https://placehold.co/400x200/58c49c/ffffff?text=Pharmacy"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 font-outfit">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my passion for building robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
