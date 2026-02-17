import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function ProjectDetailsPage() {
  const { id } = useParams();

  // Mock project data
  const project = {
    id: id,
    title: 'تطبيق طبي للاستشارات',
    tagline: 'رعاية صحية في متناول إيدك',
    client: 'شركة ميديكير للرعاية الصحية',
    year: '2024',
    role: ['UX Research', 'Wireframing', 'UI Design', 'Testing'],
    tags: ['Mobile', 'Healthcare', 'iOS', 'Android'],
    overview: `تطبيق موبايل متكامل يسمح للمرضى بحجز مواعيد مع الأطباء، الحصول على استشارات طبية عن بعد، وإدارة ملفاتهم الطبية بشكل آمن وسهل. المشروع كان يحتاج تجربة مستخدم بسيطة جدًا لأن الجمهور المستهدف من مختلف الأعمار والخلفيات التقنية.`,
    challenge: 'التحدي الأساسي كان إزاي نخلّي التطبيق سهل للجميع، خصوصًا كبار السن اللي مش معتادين على التكنولوجيا. كمان كان لازم نبني ثقة المستخدمين في حفظ بياناتهم الطبية الحساسة.',
    solution: 'بدأنا ببحث مستخدمين موسّع، وعملنا interviews مع أطباء ومرضى. صممنا واجهة بسيطة جدًا بخطوط كبيرة، ألوان واضحة، وتدفق منطقي. كل خطوة في التطبيق بتوجّه المستخدم بشكل واضح.',
    results: [
      'زيادة عدد الحجوزات بنسبة 85% في أول 3 شهور',
      'تقييم 4.8 من 5 على App Store و Google Play',
      'انخفاض معدل التخلي عن العملية بنسبة 40%',
      'تحسين رضا المستخدمين بنسبة 92%',
    ],
    images: [
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0OTY2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0OTU3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NDk3MTg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] py-20 border-b border-[#C1AA7E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-[#C1AA7E] hover:text-[#d4c5a9] mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 rotate-180" />
              <span>رجوع للبورتفوليو</span>
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-[#C1AA7E]/20 text-[#C1AA7E] border border-[#C1AA7E]/30 px-4 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl lg:text-6xl mb-4 text-white">{project.title}</h1>
              <p className="text-2xl text-gray-400">{project.tagline}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 border-b border-[#C1AA7E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm text-gray-500 mb-2">العميل</div>
              <div className="text-lg text-white">{project.client}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-sm text-gray-500 mb-2">السنة</div>
              <div className="text-lg text-white">{project.year}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-sm text-gray-500 mb-2">دوري في المشروع</div>
              <div className="flex flex-wrap gap-2">
                {project.role.map((r) => (
                  <span key={r} className="text-sm bg-[#1a1f2e] text-gray-300 border border-[#C1AA7E]/20 px-3 py-1 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-[#C1AA7E]/20 shadow-2xl"
          >
            <ImageWithFallback
              src={project.images[0]}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-6 text-white">نظرة عامة</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{project.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 bg-gradient-to-br from-[#1a1f2e]/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-8 rounded-2xl border-r-4 border-[#C1AA7E] shadow-xl"
          >
            <h2 className="text-3xl mb-6 text-white">التحدي</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{project.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-8 rounded-2xl border-r-4 border-[#C1AA7E] shadow-xl"
          >
            <h2 className="text-3xl mb-6 text-white">الحل</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Additional Images */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border border-[#C1AA7E]/20 shadow-xl"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - صورة ${index + 2}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-gradient-to-br from-[#C1AA7E]/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-8 text-white">النتائج</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-6 rounded-xl border border-[#C1AA7E]/20 shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#C1AA7E] rounded-full flex items-center justify-center text-[#0f1419] font-bold flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-gray-300 leading-relaxed">{result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            className="text-3xl lg:text-4xl mb-6 text-white"
          >
            عايز مشروع زي ده؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-400"
          >
            خلّينا نشتغل مع بعض على فكرتك الجاية.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#C1AA7E]/20 transition-all inline-flex items-center gap-2 font-semibold"
            >
              <span>تواصل معايا</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-[#C1AA7E] text-[#C1AA7E] px-8 py-4 rounded-xl hover:bg-[#C1AA7E]/10 transition-all font-semibold"
            >
              شوف مشاريع تانية
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
