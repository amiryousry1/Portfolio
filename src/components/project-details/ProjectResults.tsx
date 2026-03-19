import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectResultsProps {
    results: string[];
}

export function ProjectResults({ results }: ProjectResultsProps) {
    if (!results || results.length === 0) return null;

    return (
        <>
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CBA135]/5 to-transparent pointer-events-none" />
                <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">النتائج والأثر</h2>
                        <p className="text-xl text-gray-400 font-light">لغة الأرقام لا تكذب أبدًا.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {results.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "backOut" }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-[#1a1f2e]/80 backdrop-blur-md p-10 md:p-14 rounded-[2rem] border border-white/5 shadow-xl flex flex-col items-center justify-center text-center hover:border-[#CBA135]/30 hover:shadow-[#CBA135]/10 transition-all group min-h-[300px]"
                            >
                                <div className="w-14 h-14 rounded-full border border-[#CBA135]/40 bg-[#CBA135]/5 flex items-center justify-center text-[#CBA135] mb-8 group-hover:scale-110 group-hover:bg-[#CBA135]/10 transition-all shadow-[0_0_15px_rgba(203,161,53,0.1)]">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <p className="text-gray-200 font-medium text-lg leading-relaxed">{result}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Project / CTA */}
            < section className="py-32 relative text-center border-t border-white/5" >
                <div className="absolute inset-0 bg-gradient-to-t from-[#CBA135]/5 to-transparent pointer-events-none" />
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                            هل أعجبك هذا العمل؟
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
                            دعنا نتعاون معًا لنبني قصة نجاحك القادمة بواجهة استثنائية وتجربة مستخدم لا تُنسى.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                className="bg-[#CBA135] text-[#0f1419] px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(203,161,53,0.4)] hover:scale-105 transition-all w-full sm:w-auto"
                            >
                                ابدأ مشروعك الآن
                            </Link>
                            <Link
                                to="/portfolio"
                                className="bg-white/5 text-white border border-white/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto backdrop-blur-sm"
                            >
                                المزيد من الأعمال
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section >
        </>
    );
}
