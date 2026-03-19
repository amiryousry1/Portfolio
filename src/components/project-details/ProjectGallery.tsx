import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { LayoutTemplate } from 'lucide-react';

interface ProjectGalleryProps {
    images: string[];
    title: string;
    gallerySections?: {
        id: string;
        title: string;
        description?: string;
        type: string; // 'grid', 'flow', 'process', 'user-flows'
        images?: string[];
        flows?: { title: string; image: string; description?: string }[];
        steps?: { title: string; desc: string }[];
    }[];
}

export function ProjectGallery({ images, title, gallerySections }: ProjectGalleryProps) {

    // If we have categorized gallery sections, render the new layout
    if (gallerySections && gallerySections.length > 0) {
        return (
            <div className="bg-[#0f1419] py-16 space-y-32">
                {gallerySections.map((section) => (
                    <section key={section.id} className="max-w-[100rem] mx-auto px-4 sm:px-6">

                        {/* Section Header */}
                        <div className="max-w-4xl mx-auto mb-16 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 bg-[#CBA135]/10 border border-[#CBA135]/20 text-[#CBA135] px-6 py-2 rounded-full mb-6"
                            >
                                <LayoutTemplate className="w-5 h-5" />
                                <span className="font-bold tracking-wider uppercase">{section.title}</span>
                            </motion.div>
                            {section.description && (
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xl text-gray-400 font-light"
                                >
                                    {section.description}
                                </motion.p>
                            )}
                        </div>

                        {/* Render Grid Layout */}
                        {section.type === 'grid' && section.images && (
                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                {section.images.map((image, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                                        className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl aspect-[4/3] group relative bg-[#1a1f2e]"
                                    >
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                                        <ImageWithFallback
                                            src={image}
                                            alt={`${section.title} - صورة ${idx + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Render Flow Layout (e.g. User Journey) */}
                        {section.type === 'flow' && section.images && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl w-full bg-[#1a1f2e]"
                            >
                                <ImageWithFallback
                                    src={section.images[0]}
                                    alt={section.title}
                                    className="w-full h-auto object-cover opacity-80"
                                />
                            </motion.div>
                        )}

                        {/* Render Multiple User Flows Layout */}
                        {section.type === 'user-flows' && section.flows && (
                            <div className="space-y-24">
                                {section.flows.map((flow, idx) => (
                                    <div key={idx} className="space-y-8">
                                        <div className="flex flex-col items-center gap-4 text-center w-full max-w-5xl mx-auto">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CBA135] to-[#a89363] flex flex-shrink-0 items-center justify-center text-[#0f1419] font-black text-2xl shadow-xl shadow-[#CBA135]/20">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl font-bold border-b-4 border-[#CBA135] pb-3 inline-block text-white leading-tight">
                                                    {flow.title}
                                                </h3>
                                                {flow.description && (
                                                    <p className="text-gray-400 mt-4 text-lg font-light leading-relaxed max-w-3xl mx-auto">{flow.description}</p>
                                                )}
                                            </div>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            className="rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] w-full max-w-5xl mx-auto bg-[#1a1f2e] p-2 sm:p-4 hover:border-[#CBA135]/20 transition-colors duration-500"
                                        >
                                            <ImageWithFallback
                                                src={flow.image}
                                                alt={flow.title}
                                                className="w-full h-auto object-contain rounded-xl"
                                            />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Render Process/Steps Layout */}
                        {section.type === 'process' && section.steps && (
                            <div className="max-w-5xl mx-auto">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {section.steps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="bg-[#1a1f2e]/60 border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-[#CBA135]/40 transition-all hover:-translate-y-2 shadow-xl"
                                        >
                                            <div className="absolute -right-6 -top-6 text-[8rem] font-black text-white/5 group-hover:text-[#CBA135]/5 transition-colors select-none">
                                                {idx + 1}
                                            </div>
                                            <div className="relative z-10 relative">
                                                <h4 className="text-2xl font-bold text-white mb-4 pr-4 border-r-4 border-[#CBA135]">
                                                    {step.title}
                                                </h4>
                                                <p className="text-gray-400 leading-relaxed font-light">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </section>
                ))}
            </div>
        );
    }

    // Fallback for older projects that only have flat images array
    if (images.length <= 1) return null;

    return (
        <section className="py-12 w-full overflow-hidden bg-[#0f1419]">
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {images.slice(1).map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl aspect-[4/3] group relative bg-[#1a1f2e]"
                        >
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                            <ImageWithFallback
                                src={image}
                                alt={`${title} - صورة ${index + 2}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
