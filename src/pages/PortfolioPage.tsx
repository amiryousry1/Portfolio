import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'Mobile', 'Web', 'Dashboard'];

  const projects = [
    {
      id: 1,
      title: 'تطبيق طبي',
      description: 'تصميم UI/UX لتطبيق حجز مواعيد واستشارات طبية عن بعد',
      image:
        'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0OTY2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'Healthcare'],
    },
    {
      id: 2,
      title: 'لوحة تحكم تحليلات',
      description: 'تصميم Dashboard لتحليل البيانات — واجهة مرئية سهلة لاتخاذ قرارات أسرع',
      image:
        'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0OTU3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Dashboard'],
    },
    {
      id: 3,
      title: 'منصة تعليمية',
      description: 'تصميم LMS — تجربة مستخدم متكاملة للطلاب والمدربين',
      image:
        'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpبmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjQ5Njg3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Education'],
    },
    {
      id: 4,
      title: 'تطبيق توصيل طعام',
      description: 'تصميم تطبيق توصيل طعام مع تجربة طلب سلسة — من البحث للدفع',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY0OTY4ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'Food'],
    },
    {
      id: 5,
      title: 'موقع عقارات',
      description: 'تصميم UI/UX لمنصة عقارية — بحث ذكي وتجربة تصفح محسّنة',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjQ5Njg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Real Estate'],
    },
    {
      id: 6,
      title: 'تطبيق بنكي',
      description: 'تصميم تطبيق بنكي رقمي — واجهة آمنة وسهلة للخدمات المصرفية',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc2NDk2ODg2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'Finance'],
    },
  ];

  const filteredProjects =
    selectedCategory === 'الكل'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-[#C1AA7E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#C1AA7E]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-[#C1AA7E]/20 rounded-full border border-[#C1AA7E]/30">
                <span className="text-[#C1AA7E] text-sm">أعمالي</span>
              </div>
              <h1 className="text-4xl lg:text-6xl mb-6 text-white">
                أعمالي ومشاريعي في تصميم UI/UX
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                مشاريع حقيقية لعملاء في مصر والخليج — تصاميم مبنية على أبحاث مستخدمين ونتائج قابلة للقياس.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-[#C1AA7E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-xl transition-all font-medium ${selectedCategory === category
                    ? 'bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] shadow-lg'
                    : 'bg-[#1a1f2e] text-gray-300 border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/portfolio/${project.id}`} className="block">
                  <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#151a25] rounded-2xl overflow-hidden border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#C1AA7E]/10">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-[#C1AA7E]/10 text-[#C1AA7E] border border-[#C1AA7E]/30 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex items-center gap-2 text-[#C1AA7E]">
                        <span>شوف التفاصيل</span>
                        <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C1AA7E]/10 to-transparent"></div>
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
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#C1AA7E]/20 transition-all font-semibold"
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
