import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft, Clock, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';
import { articlesData } from '../data/articles';
import { useSEO } from '../utils/useSEO';

export function ArticlesPage() {
    const [activeCategory, setActiveCategory] = useState('الكل');
    useSEO({ title: 'المقالات', description: 'مقالات وأفكار في عالم الـ UI/UX — أدوات، أساسيات، تحسينات، وتجارب شخصية من أمير يسري.', path: '/blog' });

    const categories = ['الكل', 'مقالات عامة', 'أساسيات', 'أدوات', 'تجارب شخصية', 'تحسينات'];

    const filteredArticles = activeCategory === 'الكل'
        ? articlesData
        : articlesData.filter(article => article.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#0f1419]">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#0a0d12] via-[#0f1419] to-[#1a1f2e] py-28 lg:py-36 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#CBA135]/8 rounded-full blur-[130px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CBA135]/5 rounded-full blur-3xl"></div>
                    {/* Floating category labels */}
                    <div className="absolute top-12 right-8 hidden lg:flex flex-col gap-3 opacity-20">
                        {['UX Research', 'Product Design', 'Figma Tips'].map((t) => (
                            <span key={t} className="px-3 py-1.5 text-xs rounded-full border border-[#CBA135]/30 text-[#CBA135] text-center">{t}</span>
                        ))}
                    </div>
                    <div className="absolute top-12 left-8 hidden lg:flex flex-col gap-3 opacity-20">
                        {['Career Tips', 'UI Patterns', 'Case Studies'].map((t) => (
                            <span key={t} className="px-3 py-1.5 text-xs rounded-full border border-[#CBA135]/30 text-[#CBA135] text-center">{t}</span>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-[#CBA135]/15 rounded-full border border-[#CBA135]/40 backdrop-blur-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#CBA135] animate-pulse inline-block"></span>
                                <span className="text-[#CBA135] text-sm font-medium tracking-widest uppercase">المقالات</span>
                            </motion.div>

                            {/* H1 */}
                            <h1 className="font-bold text-white mb-8 leading-tight whitespace-normal lg:whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                                <span>أفكار </span>
                                <span className="bg-gradient-to-l from-[#CBA135] via-[#d4c5a9] to-[#CBA135] bg-clip-text text-transparent">
                                    تصنع فرق
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                                أفكار لا تُصمم، بل تُكتب.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Search bar */}
                    <div className="relative w-full md:w-80">
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="دور في المقالات..."
                            className="w-full bg-[#1a1f2e]/60 border border-white/5 text-white rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:border-[#CBA135]/50 transition-colors"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full md:w-auto">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? 'bg-[#CBA135] text-[#0f1419]'
                                    : 'bg-[#1a1f2e]/60 text-gray-300 hover:bg-[#CBA135]/20 hover:text-[#CBA135] border border-white/5'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <Link to={`/blog/${article.id}`} className="relative flex-1 bg-[#151a25] border border-white/5 group-hover:border-[#CBA135]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#CBA135]/5 flex flex-col">
                                {/* Top gold accent bar */}
                                <div className="h-1 w-full bg-gradient-to-l from-transparent via-[#CBA135]/60 to-transparent group-hover:via-[#CBA135] transition-all duration-300"></div>

                                <div className="p-7 flex flex-col flex-1">
                                    {/* Category badge */}
                                    <div className="mb-5">
                                        <span className="text-xs font-semibold px-3.5 py-1.5 bg-[#CBA135]/10 text-[#CBA135] rounded-lg border border-[#CBA135]/20">
                                            {article.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#CBA135] transition-colors leading-relaxed">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <span className="flex items-center gap-1.5">
                                                <CalendarDays className="w-3.5 h-3.5" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {article.readTime}
                                            </span>
                                        </div>

                                        <div className="text-[#CBA135] flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                                            <span>اقرأ</span>
                                            <ArrowLeft className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
