import image_4a180dbf0412e1996c2a6f6179f02a33bfccc20b from '../assets/4a180dbf0412e1996c2a6f6179f02a33bfccc20b.png';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Users, Lightbulb, TrendingUp, CalendarDays, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { articlesData } from '../data/articles';
import { useSEO } from '../utils/useSEO';

export function AboutPage() {
  useSEO({ title: 'من أنا', description: 'تعرف على أمير يسري — مصمم UI/UX بخبرة +4 سنين في 4 دول مختلفة. +25 مشروع منجز وأكتر من 3000 مصمم دخلوا المجال.', path: '/about' });
  const approach = [
    {
      icon: Target,
      title: 'تفكير مش بس شكل',
      description: 'كل تصميم بيبدأ بفهم المشكلة والهدف',
    },
    {
      icon: Users,
      title: 'حلول مبنية على بحث',
      description: 'بحث المستخدمين وتحليل احتياجاتهم الحقيقية',
    },
    {
      icon: Lightbulb,
      title: 'تجربة قبل أي حاجة',
      description: 'التركيز على تجربة المستخدم أولًا وأخيرًا',
    },
    {
      icon: TrendingUp,
      title: 'شغل عملي يطوّر المنتج',
      description: 'نتائج قابلة للقياس وتحسين مستمر',
    },
  ];

  const tools = [
    { name: 'UX Research', category: 'بحث' },
    { name: 'Wireframing', category: 'هيكلة' },
    { name: 'UI Design', category: 'تصميم' },
    { name: 'Design Systems', category: 'أنظمة' },
    { name: 'Prototyping', category: 'نماذج' },
    { name: 'Design Thinking', category: 'تفكير' },
    { name: 'User Testing', category: 'اختبار' },
    { name: 'Figma', category: 'أدوات' },
    { name: 'Adobe XD', category: 'أدوات' },
    { name: 'Sketch', category: 'أدوات' },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a0d12] via-[#0f1419] to-[#1a1f2e] py-16 lg:py-24 overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CBA135]/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CBA135]/5 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDQkExMzUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2Nmg2VjBoLTZ6TTYgMzR2Nmg2di02SDZ6TTYgMHY2aDZWMEg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-[#CBA135]/15 rounded-full border border-[#CBA135]/40 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#CBA135] animate-pulse inline-block"></span>
                <span className="text-[#CBA135] text-sm font-medium tracking-widest uppercase">من أنا؟</span>
              </motion.div>

              {/* H1 */}
              <h1 className="font-bold text-white mb-8 leading-tight whitespace-normal lg:whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                <span>أمير يسري — </span>
                <span className="bg-gradient-to-l from-[#CBA135] via-[#d4c5a9] to-[#CBA135] bg-clip-text text-transparent">
                  بصمّم زي ما بفكر
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
                UI/UX & Product Designer بخبرة +4 سنين. شايل في بالي إن الشكل الحلو من غير تجربة مستخدم صح = فلوس اتحرقت.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[{ n: '+4', label: 'سنين خبرة' }, { n: '+25', label: 'مشروع منجز' }, { n: '4', label: 'دول مختلفة' }].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="text-center">
                    <div className="text-3xl font-bold text-[#CBA135]">{s.n}</div>
                    <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4 justify-center">
                <Link to="/portfolio" className="inline-flex items-center gap-2 bg-gradient-to-l from-[#CBA135] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-full font-bold shadow-lg shadow-[#CBA135]/20 hover:shadow-xl hover:shadow-[#CBA135]/30 transition-all hover:scale-105">
                  <span>شوف شغلي</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-[#CBA135]/40 text-[#CBA135] px-8 py-4 rounded-full font-medium hover:bg-[#CBA135]/10 transition-all">
                  <span>تواصل معايا</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl mb-8 text-white">
                رحلتي في التصميم
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  بدأت في الـ UI/UX من أكتر من 4 سنين، واشتغلت على مشاريع تنوعت ما بين تطبيقات موبايل، منصات ويب، ولوحات إدارة — لعملاء في مصر والخليج والسوق الدولي.
                </p>
                <p>
                  كل مشروع أضاف ليّا طبقة جديدة من الفهم: إن المستخدم مش بيقرأ، بيشوف — وإن كل ثانية تأخير أو زر مش واضح بتكلّف صاحب المشروع عميل.
                </p>
                <p>
                  دلوقتي بجمع بين التصميم، بناء المنتجات رقمية بالـ AI، وتدريب المصممين الجدد. هدفي الواحد: إن كل حاجة بتخرج باسمي تفرق.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-[#CBA135] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#CBA135]/20 transition-all font-semibold"
                >
                  <span>شوف شغلي</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl max-w-md mx-auto">
                <img
                  src={image_4a180dbf0412e1996c2a6f6179f02a33bfccc20b}
                  alt="أمير يسري — UI/UX Designer & Product Designer | Amir Yousry"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-12 text-center text-white"
          >
            طريقتي في الشغل
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-[#1a1f2e]/80 to-[#1a1f2e]/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-[#CBA135]/30 transition-all shadow-xl text-center">
                    <div className="w-14 h-14 mx-auto bg-[#CBA135]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#CBA135]/20 transition-all">
                      <Icon className="w-7 h-7 text-[#CBA135]" />
                    </div>
                    <h3 className="text-lg mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-12 text-center text-white"
          >
            الأدوات والمهارات
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1a1f2e]/80 to-[#1a1f2e]/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/5 hover:border-[#CBA135]/30 transition-all shadow-lg"
              >
                <span className="text-white font-medium">{tool.name}</span>
                <span className="text-[#CBA135] text-sm mr-2">• {tool.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-6 text-white"
          >
            عايز نشتغل مع بعض؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-400"
          >
            سواء عندك مشروع جديد أو محتاج استشارة، أنا هنا عشان أساعدك.
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

      {/* ===== ARTICLES SECTION ===== */}
      <section className="py-20 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">أحدث المقالات</h2>
            <p className="text-gray-400 max-w-xl mx-auto">أفكار وتجارب من عالم الـ UI/UX</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full"
              >
                <Link to={`/blog/${article.id}`} className="relative flex-1 bg-[#151a25] border border-white/5 group-hover:border-[#CBA135]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#CBA135]/5 flex flex-col">
                  <div className="h-1 w-full bg-gradient-to-l from-transparent via-[#CBA135]/60 to-transparent group-hover:via-[#CBA135] transition-all duration-300"></div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="mb-5">
                      <span className="text-xs font-semibold px-3.5 py-1.5 bg-[#CBA135]/10 text-[#CBA135] rounded-lg border border-[#CBA135]/20">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#CBA135] transition-colors leading-relaxed">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
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
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border border-[#CBA135]/40 text-[#CBA135] px-8 py-4 rounded-full font-medium hover:bg-[#CBA135]/10 transition-all"
            >
              <span>تصفح كل المقالات</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}