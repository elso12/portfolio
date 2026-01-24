"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Full Stack & MERN",
        items: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "VS Code", "Vercel", "npm/yarn", "Figma"],
    },
    {
        category: "Performance & SEO",
        items: ["Core Web Vitals", "SEO Optimization", "Accessibility (a11y)", "Responsive Design"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 font-outfit">
                        Technical Skills
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        The technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
