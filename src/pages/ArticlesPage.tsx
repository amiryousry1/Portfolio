import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft, Clock, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';
import { articlesData } from '../data/articles';

export function ArticlesPage() {
    const [activeCategory, setActiveCategory] = useState('الكل');

    const categories = ['الكل', 'مقالات عامة', 'أساسيات', 'أدوات', 'تجارب شخصية', 'تحسينات'];

    const filteredArticles = activeCategory === 'الكل'
        ? articlesData
        : articlesData.filter(article => article.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#0f1419]">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] py-24 lg:py-32 overflow-hidden mb-12 lg:mb-16">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-20 w-96 h-96 bg-[#CBA135]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#CBA135]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block mb-4 px-4 py-2 bg-[#CBA135]/20 rounded-full border border-[#CBA135]/30">
                                <span className="text-[#CBA135] text-sm">المقالات</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl mb-6 text-white">
                                معلومات كتير... في كلام بسيط
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                مقالات سريعة وعملية عن الـ UI/UX، الأدوات والخبرات.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <Link to={`/blog/${article.id}`} className="flex-1 bg-gradient-to-br from-[#1a1f2e]/80 to-[#151a25]/80 border border-[#CBA135]/10 group-hover:border-[#CBA135]/30 rounded-3xl p-6 sm:p-8 transition-all hover:-translate-y-2 shadow-xl flex flex-col">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-xs font-semibold px-3 py-1 bg-[#CBA135]/10 text-[#CBA135] rounded-full border border-white/5">
                                        {article.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#CBA135] transition-colors leading-relaxed">
                                    {article.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#CBA135]/10">
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

                                    <div className="text-[#CBA135] flex items-center gap-1 text-sm font-medium">
                                        <span>اقرأ المزيد</span>
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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
