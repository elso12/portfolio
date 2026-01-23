"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800"
                    >
                        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6 font-outfit"
                    >
                        Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Experiences</span> That Matter
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center"
                    >
                        <span className="font-bold text-slate-900 dark:text-white">Elsay Belude</span>
                        <span className="hidden md:inline text-slate-400">•</span>
                        <span className="text-indigo-600 dark:text-indigo-400">Full Stack Developer</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        I help ideas come alive through modern web experiences, creative media, and design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors gap-2 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20"
                        >
                            View My Work
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors gap-2"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
