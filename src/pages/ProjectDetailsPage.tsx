import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Target, Lightbulb, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ProjectDetailsPage() {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const yMove = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Mock project data (since it's a template)
  const project = {
    id: id,
    title: 'تطبيق طبي للاستشارات',
    tagline: 'رعاية صحية في متناول إيدك بخطوات بسيطة وواجهة مريحة',
    client: 'شركة ميديكير للرعاية الصحية',
    year: '2024',
    role: ['UX Research', 'Wireframing', 'UI Design', 'Testing'],
    tags: ['Mobile App', 'Healthcare', 'iOS', 'Android'],
    overview: `تطبيق موبايل متكامل يسمح للمرضى بحجز مواعيد مع الأطباء، الحصول على استشارات طبية عن بعد، وإدارة ملفاتهم الطبية بشكل آمن وسهل. المشروع كان يحتاج تجربة مستخدم بسيطة جدًا لأن الجمهور المستهدف من مختلف الأعمار والخلفيات التقنية.`,
    challenge: 'التحدي الأساسي كان إزاي نخلّي التطبيق سهل للجميع، خصوصًا كبار السن اللي مش معتادين على التكنولوجيا. كمان كان لازم نبني ثقة المستخدمين في حفظ بياناتهم الطبية الحساسة.',
    solution: 'بدأنا ببحث مستخدمين موسّع، وعملنا interviews مع أطباء ومرضى. صممنا واجهة بسيطة جدًا بخطوط كبيرة، ألوان واضحة، وتدفق منطقي. كل خطوة في التطبيق بتوجّه المستخدم بشكل واضح لتجنب أي تشتت.',
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
    <div className="min-h-screen bg-[#0f1419]" ref={containerRef}>
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CBA135]/5 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity: yOpacity, y: yMove }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#CBA135] mb-8 transition-colors group px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-[#CBA135]/10"
            >
              <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">رجوع للبورتفوليو</span>
            </Link>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  key={tag}
                  className="text-xs font-semibold bg-[#CBA135]/10 text-[#CBA135] border border-[#CBA135]/20 px-4 py-1.5 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Showcase Image */}
      <section className="relative z-20 -mt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-[16/9] sm:aspect-[21/9] bg-[#1a1f2e]"
        >
          <ImageWithFallback
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419]/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Project Details Grid */}
      <section className="py-8 border-y border-white/5 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">العميل</div>
              <div className="text-lg font-medium text-white">{project.client}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">السنة</div>
              <div className="text-lg font-medium text-white">{project.year}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-2">
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

      {/* Story & Approach */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Left Col - Overview */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#CBA135]/10 flex items-center justify-center text-[#CBA135] mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-white">نظرة عامة على المشروع</h2>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {project.overview}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Col - Challenge & Solution */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#1a1f2e]/40 backdrop-blur-xl border border-white/5 p-8 sm:p-10 rounded-3xl shadow-xl shadow-black/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">التحدي</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[#1a1f2e]/40 to-[#151a25]/40 backdrop-blur-xl border border-[#CBA135]/20 p-8 sm:p-10 rounded-3xl shadow-xl shadow-[#CBA135]/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#CBA135]/5 rounded-full blur-3xl group-hover:bg-[#CBA135]/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#CBA135]/10 flex items-center justify-center text-[#CBA135]">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">الحل الذي قدمناه</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Width Gallery */}
      <section className="py-12 w-full overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl aspect-[4/3] group relative bg-[#1a1f2e]"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - صورة ${index + 2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Impact */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CBA135]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">النتائج والأثر</h2>
            <p className="text-xl text-gray-400">لغة الأرقام لا تكذب أبدًا.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1f2e]/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-lg flex flex-col items-center justify-center text-center hover:border-[#CBA135]/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-[#CBA135]/10 rounded-2xl flex items-center justify-center text-[#CBA135] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <p className="text-gray-300 font-medium text-lg leading-relaxed">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project / CTA */}
      <section className="py-32 relative text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              هل أعجبك هذا العمل؟
            </h2>
            <p className="text-xl text-gray-400 mb-10">
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
                className="bg-white/5 text-white border border-white/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                المزيد من الأعمال
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
