import image_4a180dbf0412e1996c2a6f6179f02a33bfccc20b from 'figma:asset/4a180dbf0412e1996c2a6f6179f02a33bfccc20b.png';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function AboutPage() {
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
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] py-24 lg:py-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-[#C1AA7E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#C1AA7E]/5 rounded-full blur-3xl"></div>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/3 w-4 h-4 bg-[#C1AA7E] rounded-full opacity-60"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#C1AA7E] rounded-full opacity-40"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-[#C1AA7E]/20 rounded-full border border-[#C1AA7E]/30">
                <span className="text-[#C1AA7E] text-sm">من أنا؟</span>
              </div>
              <h1 className="text-4xl lg:text-6xl mb-6 font-[IBM_Plex_Sans_Arabic] text-white">
                أنا أمير يسري
              </h1>
              <p className="text-xl text-gray-300 font-[IBM_Plex_Sans_Arabic] leading-relaxed">
                مصمم تجربة مستخدم… عقليتي دايمًا في حل المشاكل قبل تصميم الشكل.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl mb-6 text-white">
                رحلتي في التصميم
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  بدأت رحلتي في عالم الـ UI/UX من أكتر من 4 سنين، وخلال الفترة دي
                  اشتغلت على مشاريع مختلفة في مجالات كتير.
                </p>
                <p>
                  كل مشروع علمني حاجة جديدة، وخلاني أفهم إن التصميم الحقيقي مش
                  بس شكل جميل… ده حل مشكلة حقيقية للمستخدم.
                </p>
                <p>
                  دلوقتي بشتغل مصمم، مدرب، وصانع محتوى. هدفي إني أساعد أكبر عدد
                  من الناس يدخلوا المجال بشكل صحيح ويبنوا مستقبل مهني قوي.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-[#C1AA7E]/20 transition-all font-semibold"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#C1AA7E]/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-[#C1AA7E]/20 shadow-2xl max-w-md mx-auto">
                <img
                  src={image_4a180dbf0412e1996c2a6f6179f02a33bfccc20b}
                  alt="أمير يسري"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C1AA7E]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-6 rounded-2xl border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40 transition-all shadow-xl text-center">
                    <div className="w-14 h-14 mx-auto bg-[#C1AA7E]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C1AA7E]/20 transition-all">
                      <Icon className="w-7 h-7 text-[#C1AA7E]" />
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
                className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] px-6 py-3 rounded-xl border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40 transition-all shadow-lg"
              >
                <span className="text-white font-medium">{tool.name}</span>
                <span className="text-[#C1AA7E] text-sm mr-2">• {tool.category}</span>
              </motion.div>
            ))}
          </motion.div>
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