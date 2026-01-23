"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50/50 dark:bg-indigo-900/10 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-50/50 dark:bg-blue-900/10 blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Image Column */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transitionDuration-500" />
                        <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                            <Image
                                src="/images/elsay.jfif"
                                alt="Profile"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce-slow hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="text-4xl">✨</div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Experience</p>
                                    <p className="text-lg font-bold text-slate-900 dark:text-slate-50">2+ Years</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
                            Who I Am
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 font-outfit leading-tight">
                            Turning Vision Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital Reality</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            <p>
                                I’m a passionate creative who loves turning ideas into digital experiences. From building modern websites to editing engaging videos and crafting eye-catching designs — I bring creativity and technology together to deliver meaningful results.
                            </p>
                            <p>
                                My approach combines technical precision with artistic flair, ensuring every project is not just functional, but also visually captivating and user-centric.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {["💻 Web Development", "🎬 Video Editing", "🎨 Graphic Design"].map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-white dark:hover:bg-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            >
                                Let’s Work Together 🚀
                            </a>
                            <a
                                href="#projects"
                                className="text-slate-600 dark:text-slate-400 font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                            >
                                View Projects
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
