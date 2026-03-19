import { motion } from 'motion/react';
import { Target, Lightbulb, Smartphone, LayoutGrid, ListOrdered } from 'lucide-react'; interface ProjectOverviewProps {
    project: {
        client: string;
        year: string;
        role: string[];
        overview: string;
        challenge: string;
        solution: string;
        systems?: {
            icon: string;
            title: string;
            tag?: string;
            items: string[];
        }[];
    };
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'Smartphone': return <Smartphone className="w-6 h-6" />;
            case 'LayoutGrid': return <LayoutGrid className="w-6 h-6" />;
            case 'ListOrdered': return <ListOrdered className="w-6 h-6" />;
            default: return <Lightbulb className="w-6 h-6" />;
        }
    };

    return (
        <>
            <section className="py-8 border-y border-white/5 bg-[#0f1419]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">العميل</div>
                            <div className="text-lg font-medium text-white">{project.client}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">السنة</div>
                            <div className="text-lg font-medium text-white">{project.year}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-2">
                            <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">دوري في المشروع</div>
                            <div className="flex flex-wrap gap-2">
                                {project.role.map((r) => (
                                    <span key={r} className="text-sm bg-white/5 text-gray-300 border border-white/5 px-3 py-1 rounded-md">
                                        {r}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Top Text Section matching screenshot */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-20 items-start">
                        {/* Right Col: Challenge (RTL so Right is mathematically first) */}
                        <div className="order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#CBA135] bg-[#CBA135]/10">
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#CBA135]">التحدي</h3>
                                </div>
                                <p className="text-lg text-gray-300 leading-relaxed font-light whitespace-pre-line text-justify">
                                    {project.challenge}
                                </p>
                            </motion.div>
                        </div>

                        {/* Left Col: Solution */}
                        <div className="order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex flex-row-reverse items-center justify-end gap-4 mb-6">
                                    <h3 className="text-2xl font-bold text-[#CBA135]">الحل المبتكر</h3>
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#CBA135] bg-[#CBA135]/10">
                                        <Lightbulb className="w-5 h-5" />
                                    </div>
                                </div>
                                <p className="text-lg text-gray-300 leading-relaxed font-light whitespace-pre-line text-right">
                                    {/* Usually we pull this from project.overview or project.systems intro, but mimicking screenshot text roughly */}
                                    {project.overview.includes('تم بناء') ? project.overview : 'تم بناء منظومة متكاملة من 3 أنظمة مترابطة لحظياً لضمان تدفق البيانات بسلاسة بين العميل، الإدارة، والمطبخ.'}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* conditionally render new cards layout if systems present, else fallback to old solution string */}
                    {project.systems && project.systems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {project.systems.map((sys, idx) => (
                                <motion.div
                                    key={sys.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                                    className={`bg-[#0f1419] rounded-3xl p-8 flex flex-col items-center relative transition-all shadow-xl group ${sys.tag ? 'border-t-2 border-[#CBA135]/60 hover:border-[#CBA135]' : 'border border-white/5 hover:border-white/10'}`}
                                >
                                    {sys.tag && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CBA135] text-[#0f1419] text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-md uppercase tracking-wide shadow-md whitespace-nowrap z-10">
                                            {sys.tag}
                                        </div>
                                    )}

                                    <div className="text-[#CBA135] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                        {renderIcon(sys.icon)}
                                    </div>

                                    <h4 className="text-xl font-bold text-white mb-10 text-center">{sys.title}</h4>

                                    <ul className="flex flex-col items-start w-fit mx-auto space-y-5 px-2" dir="rtl">
                                        {sys.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#CBA135] mt-2 flex-shrink-0" />
                                                <span className="leading-relaxed text-right">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1f2e] border border-white/5 rounded-3xl p-8 lg:p-12 shadow-xl text-center"
                        >
                            <h3 className="text-2xl font-bold text-[#CBA135] mb-6">تفاصيل إضافية</h3>
                            <p className="text-lg text-gray-300 leading-relaxed font-light whitespace-pre-line max-w-4xl mx-auto">
                                {project.solution}
                            </p>
                        </motion.div>
                    )}

                </div>
            </section>
        </>
    );
}
