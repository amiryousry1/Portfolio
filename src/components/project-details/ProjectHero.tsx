import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProjectHeroProps {
    project: {
        title: string;
        tagline: string;
        tags: string[];
        images: string[];
    };
}

export function ProjectHero({ project }: ProjectHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const yMove = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    return (
        <div ref={containerRef}>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CBA135]/5 rounded-full blur-3xl opacity-50" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ opacity: yOpacity, y: yMove }}
                        className="flex flex-col items-center text-center max-w-4xl mx-auto"
                    >
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#CBA135] mb-8 transition-colors group px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-[#CBA135]/10"
                        >
                            <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                            <span className="text-sm font-medium">رجوع للبورتفوليو</span>
                        </Link>

                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {project.tags.map((tag, i) => (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    key={tag}
                                    className="text-xs font-semibold bg-[#CBA135]/10 text-[#CBA135] border border-[#CBA135]/20 px-4 py-1.5 rounded-full"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                            {project.tagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Showcase Image */}
            <section className="relative z-20 -mt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-[16/9] sm:aspect-[21/9] bg-[#1a1f2e]"
                >
                    <ImageWithFallback
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419]/80 via-transparent to-transparent pointer-events-none" />
                </motion.div>
            </section>
        </div>
    );
}
