import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, CalendarDays, Facebook, Linkedin, Link as LinkIcon, User, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { articlesData } from '../data/articles';

export function ArticleDetailsPage() {
    const { id } = useParams();
    const article = articlesData.find(a => a.id === id);

    if (!article) {
        return (
            <div className="min-h-screen bg-[#0f1419] flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
                    <Link to="/blog" className="text-[#CBA135] hover:underline flex items-center gap-2 justify-center">
                        <ArrowRight className="w-4 h-4" />
                        الرجوع للمقالات
                    </Link>
                </div>
            </div>
        );
    }

    // Get related articles (same category, exclude current, max 3)
    const relatedArticles = articlesData
        .filter(a => a.id !== article.id)
        .sort((a, _b) => (a.category === article.category ? -1 : 1))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#0f1419]" dir="rtl">

            {/* ===== HERO SECTION ===== */}
            <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0d1117] pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
                {/* Background Glow Orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#CBA135]/8 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#CBA135]/5 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#CBA135]/3 rounded-full blur-[150px]"></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(193,170,126,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(193,170,126,0.3) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                ></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-sm text-gray-400 mb-8"
                    >
                        <Link to="/" className="hover:text-[#CBA135] transition-colors">الرئيسية</Link>
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <Link to="/blog" className="hover:text-[#CBA135] transition-colors">المقالات</Link>
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span className="text-gray-500 truncate max-w-[200px]">{article.title}</span>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex justify-center mb-6"
                    >
                        <span className="inline-block px-5 py-2 bg-[#CBA135]/15 text-[#CBA135] text-sm font-semibold rounded-full border border-[#CBA135]/25 backdrop-blur-sm">
                            {article.category}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white text-center mb-8 leading-[1.4] tracking-tight"
                    >
                        {article.title}
                    </motion.h1>

                    {/* Meta Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400"
                    >
                        <span className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#CBA135] to-[#8a7553] flex items-center justify-center">
                                <User className="w-3.5 h-3.5 text-[#0f1419]" />
                            </div>
                            <span className="font-medium text-gray-300">أمير يسري</span>
                        </span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="flex items-center gap-1.5">
                            <CalendarDays className="w-4 h-4 text-[#CBA135]/60" />
                            {article.date}
                        </span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-[#CBA135]/60" />
                            {article.readTime}
                        </span>
                    </motion.div>
                </div>

                {/* Bottom gradient fade into content */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f1419] to-transparent"></div>
            </section>

            {/* ===== ARTICLE CONTENT ===== */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">

                {/* Excerpt / Lead Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative mb-12"
                >
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#CBA135] to-[#CBA135]/20 rounded-full"></div>
                    <p className="text-lg sm:text-xl text-gray-300 leading-loose pr-6 font-light">
                        {article.excerpt}
                    </p>
                </motion.div>

                {/* Content Sections */}
                {article.content && (
                    <div className="space-y-8 mb-16">
                        {article.content.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.08, duration: 0.6 }}
                                className={`group relative rounded-2xl transition-all duration-300 ${section.isHighlight
                                    ? 'bg-gradient-to-br from-[#CBA135]/10 via-[#1a1f2e] to-[#1a1f2e] border border-white/5 p-6 sm:p-8 shadow-lg shadow-[#CBA135]/5'
                                    : 'bg-[#1a1f2e]/50 border border-white/5 hover:border-[#CBA135]/10 p-6 sm:p-8'
                                    }`}
                            >
                                {/* Highlight accent bar */}
                                {section.isHighlight && (
                                    <div className="absolute right-0 top-4 bottom-4 w-1 bg-gradient-to-b from-[#CBA135] to-[#CBA135]/30 rounded-full"></div>
                                )}

                                <h3 className={`text-xl sm:text-2xl font-bold mb-5 flex items-center gap-3 ${section.isHighlight ? 'text-[#CBA135]' : 'text-white'
                                    }`}>
                                    {section.isHighlight && <span className="text-2xl">💡</span>}
                                    {section.title}
                                </h3>
                                <div className="space-y-4">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="text-gray-300/90 leading-[1.9] text-[0.95rem]">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* ===== SHARE SECTION ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-[#1a1f2e] to-[#151a24] border border-white/5 rounded-2xl p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                            <div className="text-center sm:text-right">
                                <h4 className="text-lg font-bold text-white mb-1">عجبك المقال؟ شاركه!</h4>
                                <p className="text-sm text-gray-500">ساعد غيرك يستفيد 🚀</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="group px-4 py-2.5 bg-white/5 hover:bg-[#1877F2]/10 border border-white/10 hover:border-[#1877F2]/30 text-gray-400 hover:text-[#1877F2] rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                                    <Facebook className="w-4 h-4" />
                                    Facebook
                                </button>
                                <button className="group px-4 py-2.5 bg-white/5 hover:bg-[#0A66C2]/10 border border-white/10 hover:border-[#0A66C2]/30 text-gray-400 hover:text-[#0A66C2] rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </button>
                                <button className="group px-4 py-2.5 bg-white/5 hover:bg-[#CBA135]/10 border border-white/10 hover:border-[#CBA135]/30 text-gray-400 hover:text-[#CBA135] rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                                    <LinkIcon className="w-4 h-4" />
                                    نسخ
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ===== RELATED ARTICLES ===== */}
                {relatedArticles.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pb-20"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-[2px] bg-gradient-to-l from-[#CBA135] to-transparent rounded-full"></div>
                            <h3 className="text-2xl font-bold text-white">مقالات ذات صلة</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {relatedArticles.map((relArticle, index) => (
                                <motion.div
                                    key={relArticle.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={`/blog/${relArticle.id}`}
                                        className="block h-full bg-[#1a1f2e]/50 border border-white/5 hover:border-white/5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#CBA135]/5 group"
                                    >
                                        <span className="inline-block text-[11px] font-medium px-3 py-1 bg-[#CBA135]/10 text-[#CBA135]/80 rounded-full border border-[#CBA135]/15 mb-4">
                                            {relArticle.category}
                                        </span>
                                        <h4 className="text-base font-bold text-white mb-3 group-hover:text-[#CBA135] transition-colors leading-relaxed line-clamp-2">
                                            {relArticle.title}
                                        </h4>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {relArticle.readTime}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <CalendarDays className="w-3 h-3" />
                                                {relArticle.date}
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

            </div>
        </div>
    );
}
