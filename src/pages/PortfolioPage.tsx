import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects';
import { useSEO } from '../utils/useSEO'; export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  useSEO({ title: 'أعمالي', description: '+25 مشروع تصميم UI/UX لمواقع وتطبيقات وداشبوردز. شوف أعمال أمير يسري والمشاريع اللي اتعملت.', path: '/portfolio' });

  const categories = ['الكل', 'Mobile', 'Web', 'Dashboard'];

  const projects = projectsData;

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'الكل' || project.tags.includes(selectedCategory);
    const matchesSearch = !searchQuery || project.title.toLowerCase().includes(searchQuery.toLowerCase()) || (project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#0f1419]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a0d12] via-[#0f1419] to-[#1a1f2e] py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#CBA135]/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#CBA135]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              {/* Badge */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-[#CBA135]/15 rounded-full border border-[#CBA135]/40 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#CBA135] animate-pulse inline-block"></span>
                <span className="text-[#CBA135] text-sm font-medium tracking-widest uppercase">معرض الأعمال</span>
              </motion.div>

              <h1 className="font-bold text-white mb-8 leading-tight whitespace-normal lg:whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                <span>أعمالي اللي </span>
                <span className="bg-gradient-to-l from-[#CBA135] via-[#d4c5a9] to-[#CBA135] bg-clip-text text-transparent">
                  بتتكلم عنّي
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
                منتجات حقيقية، أثر ملموس، وتجربة لا تُنسى.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-l from-[#CBA135] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-full font-bold shadow-lg shadow-[#CBA135]/20 hover:shadow-xl hover:shadow-[#CBA135]/30 transition-all hover:scale-105">
                  <span>اشتغل معايا</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search bar */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="دور في الأعمال..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a1f2e]/60 border border-white/5 text-white rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:border-[#CBA135]/50 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
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
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Link to={`/portfolio/${project.id}`} className="block h-full">
                  <div className="relative bg-[#0f1419] rounded-[32px] overflow-hidden border border-white/[0.03] hover:border-[#CBA135]/30 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#CBA135]/10 flex flex-col p-6 sm:p-7 h-[500px]">
                    {/* Top Row: Tags (Right) + Arrow (Left) — RTL flow */}
                    <div className="flex justify-between items-start w-full mb-6">
                      {/* Tags on the Right (start in RTL) */}
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag, i) => (
                          <span
                            key={tag}
                            className={`text-[11px] px-3.5 py-1 rounded-full font-medium tracking-wide border ${i === 0
                              ? 'text-[#CBA135] border-[#CBA135]/40 bg-transparent'
                              : 'text-gray-300 border-white/10 bg-[#151a25]/50'
                              }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Arrow on the Left (end in RTL) */}
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#CBA135] group-hover:text-[#0f1419] group-hover:border-[#CBA135] transition-all bg-transparent flex-shrink-0">
                        <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Middle Content — Right-Aligned RTL */}
                    <div className="flex flex-col items-start text-right w-full mb-5">
                      <h3 className="text-2xl sm:text-[28px] text-white font-bold group-hover:text-[#CBA135] transition-colors mb-2.5 leading-tight">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                    </div>

                    {/* Bottom Image */}
                    <div className="relative w-full flex-grow mt-auto rounded-2xl overflow-hidden border border-white/5 bg-[#151a25]">
                      <ImageWithFallback
                        src={project.image}
                        alt={`أمير يسري — ${project.title} | Amir Yousry UI/UX Design Project`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419]/40 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-6 text-white"
          >
            عندك فكرة مشروع؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-400"
          >
            خلينا نحوّل فكرتك لمنتج رقمي ناجح — ابعتلي التفاصيل وهرد عليك خلال 24 ساعة.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#CBA135] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#CBA135]/20 transition-all font-semibold"
            >
              <span>تواصل معايا</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
