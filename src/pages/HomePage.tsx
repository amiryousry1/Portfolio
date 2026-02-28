import { Link } from 'react-router-dom';
import amirPhoto from '../assets/amir.jpg';
import { ArrowLeft, Briefcase, Users, GraduationCap, Building2, Star, Quote, Award, Sparkles, CalendarDays, Clock, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { articlesData } from '../data/articles';
export function HomePage() {
  const services = [
    {
      icon: Briefcase,
      title: 'UI/UX Design',
      description: 'بصمّم واجهات احترافية وتجارب مستخدم مبنية على أبحاث حقيقية — من الفكرة للمنتج النهائي.',
    },
    {
      icon: Sparkles,
      title: 'Vibe Coding',
      description: 'بحوّل التصميم لمنتج حقيقي شغال (MVP) في وقت قياسي باستخدام أقوى أدوات الذكاء الاصطناعي.',
    },
    {
      icon: GraduationCap,
      title: 'Courses',
      description: 'كورسات UI/UX عملية — كل درس بتطبّقه في مشروع حقيقي.',
    },
    {
      icon: Building2,
      title: 'استشارات UX للشركات',
      description: 'استشارات UX للشركات — تحليل شامل وحلول عملية لتحسين منتجاتكم.',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'تطبيق طبي',
      description: 'تصميم UI/UX لتطبيق حجز مواعيد واستشارات طبية عن بعد',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0OTY2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'Healthcare'],
    },
    {
      id: 2,
      title: 'لوحة تحكم تحليلات',
      description: 'تصميم Dashboard لتحليل البيانات — واجهة مرئية سهلة لاتخاذ قرارات أسرع',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0OTU3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Dashboard'],
    },
    {
      id: 3,
      title: 'منصة تعليمية',
      description: 'تصميم LMS — تجربة مستخدم متكاملة للطلاب والمدربين',
      image: 'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjQ5Njg3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Education'],
    },
  ];

  const testimonials = [
    {
      name: 'محمد أحمد',
      role: 'UI/UX Designer',
      text: 'أمير مدرّب محترف وطريقته في الشرح سهلة جدًا. قدرت أدخل المجال وأشتغل في شركة بعد الكورس مباشرة.',
      rating: 5,
    },
    {
      name: 'سارة حسن',
      role: 'Product Designer',
      text: 'الجلسات الإرشادية مع أمير غّرت نظرتي للتصمم بشكل كامل. دلوقتي بفهم المستخدم أحسن بكتير.',
      rating: 5,
    },
    {
      name: 'أحمد علي',
      role: 'Junior Designer',
      text: 'كورس عملي ومباشر، من غير كلام فاضي. كل معلومة بتاخدها بتستخدمها في الشغل على طول.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — Premium Immersive Design
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] pt-8 lg:pt-16 pb-24 lg:pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-[#CBA135]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#CBA135]/5 rounded-full blur-3xl"></div>

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,

              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/3 w-4 h-4 bg-[#CBA135] rounded-full opacity-60"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 8,

              ease: "easeInOut",
            }}
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#CBA135] rounded-full opacity-40"
          ></motion.div>
        </div>

        {/* ── Main Content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* ── Left Column: Text Content ── */}
            <div dir="rtl" className="space-y-8 text-right order-2 lg:order-1 flex flex-col items-start w-full">

              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-[#CBA135]/8 border border-white/5 rounded-full px-5 py-2.5 backdrop-blur-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CBA135] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CBA135] shadow-[0_0_10px_rgba(193,170,126,0.8)]" />
                </span>
                <span className="text-sm font-medium text-[#CBA135]/90 tracking-wide">متاح لمشاريع جديدة — ابدأ مشروعك دلوقتي</span>
              </motion.div>

              {/* Main Heading with staggered reveal */}
              <div className="space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2]"
                >
                  <span className="block text-white mb-2">بحوّل أفكارك</span>
                  <span className="block bg-gradient-to-l from-[#CBA135] via-[#e8dcc8] to-[#CBA135] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease-in-out_infinite]">
                    لمنتجات رقمية بتكسب
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl"
              >
                مش بس بصمّم شاشات — بحل مشاكل حقيقية تخلّي المستخدم يرجعلك تاني والبيزنس يكبر.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  to="/portfolio"
                  className="group relative bg-[#CBA135] text-[#0f1419] px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(203,161,53,0.4)] hover:scale-[1.03] transition-all duration-300 inline-flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative">شوف شغلي</span>
                  <ArrowLeft className="w-5 h-5 relative group-hover:-translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="group relative border-2 border-[#CBA135] text-[#CBA135] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#CBA135]/10 hover:scale-[1.03] transition-all duration-300 inline-flex items-center justify-center gap-3 backdrop-blur-sm"
                >
                  <span className="relative">ابدأ مشروعك معايا</span>
                  <ArrowLeft className="w-5 h-5 relative group-hover:-translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Text Stats Under CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-10 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-white/5 pt-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#CBA135]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#CBA135]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white leading-tight">4+</span>
                    <span className="text-xs text-gray-500 font-medium">سنين خبرة</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#CBA135]/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#CBA135]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white leading-tight">25+</span>
                    <span className="text-xs text-gray-500 font-medium">مشروع ناجح</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#CBA135]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#CBA135]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white leading-tight">3,000+</span>
                    <span className="text-xs text-gray-500 font-medium">مصمم دخلوا المجال</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Right Column: Visual / Profile Card ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              {/* Orbiting Rings - perfectly centered, hidden on small screens */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#CBA135]/20 hidden sm:block">
                {[
                  { label: 'Figma', delay: '0s' },
                  { label: 'UX Writing', delay: '-8s' },
                  { label: 'AI-driven UX', delay: '-16s' },
                  { label: 'UX Research', delay: '-24s' },
                  { label: 'Prototyping', delay: '-32s' },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      animation: 'orbit 40s linear infinite',
                      animationDelay: skill.delay,
                    }}
                  >
                    <div
                      className="px-4 py-2 bg-[#1a1f2e] border border-[#CBA135]/40 rounded-full text-sm text-[#CBA135] font-semibold shadow-[0_0_15px_rgba(203,161,53,0.15)] whitespace-nowrap"
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      {skill.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Outer glow ring - centered */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] rounded-full border border-[#CBA135]/5" />

              {/* Center Profile Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] rounded-3xl overflow-hidden shadow-2xl shadow-[#CBA135]/10 border border-white/5 group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e] via-[#0f1419] to-[#1a1f2e]" />

                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#CBA135]/10 via-transparent to-[#CBA135]/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative elements inside card */}
                <div className="absolute top-6 right-6 left-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#CBA135]/40" />
                    <div className="w-3 h-3 rounded-full bg-[#CBA135]/25" />
                    <div className="w-3 h-3 rounded-full bg-[#CBA135]/15" />
                  </div>
                </div>

                {/* Profile Photo */}
                <div className="absolute inset-0">
                  <img
                    src={amirPhoto}
                    alt="أمير يسري — Product Designer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-[#0f1419]/30 to-transparent" />
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0f1419]/95 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold text-base mb-1">أمير يسري</div>
                      <div className="text-[#CBA135]/90 text-xs font-medium truncate max-w-[200px] sm:max-w-full">
                        مدرب معتمد | مصمم تجربة مستخدم | منشئ محتوي
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            </motion.div>
          </div>


        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-[#CBA135]/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-[#CBA135] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CBA135]/10 border border-[#CBA135]/20 text-[#CBA135] text-sm font-semibold mb-6"
            >
              <Award className="w-4 h-4" />
              <span>الخدمات</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              خدمات التصميم والتدريب
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#CBA135] to-transparent mx-auto rounded-full"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#CBA135]/0 via-[#CBA135]/0 to-[#CBA135]/0 group-hover:from-[#CBA135]/20 group-hover:via-[#CBA135]/10 group-hover:to-transparent rounded-2xl blur-lg transition-all duration-500"></div>

                  <div className="relative bg-gradient-to-br from-[#1a1f2e]/90 to-[#151a25]/90 backdrop-blur-xl p-8 rounded-2xl border border-[#CBA135]/10 group-hover:border-[#CBA135]/30 transition-all duration-300 h-full shadow-xl">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#CBA135]/20 to-[#CBA135]/5 rounded-2xl flex items-center justify-center group-hover:from-[#CBA135]/30 group-hover:to-[#CBA135]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-8 h-8 text-[#CBA135]" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl mb-3 text-white font-semibold group-hover:text-[#d4c5a9] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-[15px]">{service.description}</p>

                    {/* Hover indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-0.5 w-12 bg-gradient-to-r from-[#CBA135] to-transparent rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 text-[#CBA135] hover:text-[#d4c5a9] border-2 border-[#CBA135] px-8 py-3 rounded-full hover:bg-[#CBA135]/10 transition-all font-semibold"
            >
              <span>اعرف تفاصيل كل خدمة</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CBA135]/10 border border-[#CBA135]/20 text-[#CBA135] text-sm font-semibold mb-6"
            >
              <Briefcase className="w-4 h-4" />
              <span>المشاريع</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              أعمالي ومشاريعي
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#CBA135] to-transparent mx-auto rounded-full"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/portfolio/${project.id}`} className="block h-full">
                  {/* Outer glow wrapper */}
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-[#CBA135]/0 via-[#CBA135]/0 to-[#CBA135]/0 group-hover:from-[#CBA135]/20 group-hover:via-[#CBA135]/10 group-hover:to-transparent rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                    <div className="relative h-full bg-gradient-to-br from-[#1a1f2e]/95 to-[#151a25]/95 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#CBA135]/10 group-hover:border-[#CBA135]/30 transition-all duration-300 shadow-2xl">
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419]/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Tags */}
                        <div className="flex gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-[#CBA135]/10 text-[#CBA135] border border-white/5 px-3 py-1.5 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl text-white font-semibold group-hover:text-[#d4c5a9] transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed text-[15px]">
                          {project.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-[#CBA135] pt-2">
                          <span className="text-sm font-medium">شوف التفاصيل</span>
                          <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 text-[#CBA135] hover:text-[#d4c5a9] border-2 border-[#CBA135] px-8 py-3 rounded-full hover:bg-[#CBA135]/10 transition-all font-semibold"
            >
              <span>شوف كل المشاريع</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CBA135]/10 border border-[#CBA135]/20 text-[#CBA135] text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4" />
              <span>التوصيات</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              آراء العملاء والمتدربين
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#CBA135] to-transparent mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#CBA135]/0 via-[#CBA135]/0 to-[#CBA135]/0 group-hover:from-[#CBA135]/15 group-hover:via-[#CBA135]/5 group-hover:to-transparent rounded-3xl blur-xl transition-all duration-500"></div>

                <div className="relative bg-gradient-to-br from-[#1a1f2e]/95 to-[#151a25]/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-[#CBA135]/10 group-hover:border-[#CBA135]/30 transition-all duration-300 h-full">
                  {/* Quote Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#CBA135]/20 to-[#CBA135]/5 rounded-2xl flex items-center justify-center group-hover:from-[#CBA135]/30 group-hover:to-[#CBA135]/10 transition-all duration-300">
                      <Quote className="w-6 h-6 text-[#CBA135]" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#CBA135] text-[#CBA135]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-center leading-relaxed mb-8 text-[15px]">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="flex justify-center mb-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#CBA135]/50 to-transparent"></div>
                  </div>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#CBA135]/20 to-[#CBA135]/5 rounded-full flex items-center justify-center text-[#CBA135] text-lg font-semibold border border-white/5">
                      {testimonial.name.split(' ')[0].charAt(0)}
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium text-base">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/testimonials"
              className="inline-flex items-center justify-center gap-2 text-[#CBA135] hover:text-[#d4c5a9] border-2 border-[#CBA135] px-8 py-3 rounded-full hover:bg-[#CBA135]/10 transition-all font-semibold"
            >
              <span>اقرأ المزيد من آراء العملاء</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 relative bg-[#131821]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CBA135]/10 border border-[#CBA135]/20 text-[#CBA135] text-sm font-semibold mb-6"
            >
              <BookOpen className="w-4 h-4" />
              <span>المدونة</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              أحدث المقالات والنصائح
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#CBA135] to-transparent mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesData.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 text-[#CBA135] hover:text-[#d4c5a9] border-2 border-[#CBA135] px-8 py-3 rounded-full hover:bg-[#CBA135]/10 transition-all font-semibold"
            >
              <span>تصفح كل المقالات</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CBA135]/10 border border-[#CBA135]/20 text-[#CBA135] text-sm font-semibold mb-6"
            >
              <Users className="w-4 h-4" />
              <span>تواصل معي</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              جاهز تبدأ؟ خلّي الخطوة الأولى معايا.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 text-gray-400"
            >
              سواء عندك مشروع محتاج تصميم UX، أو عايز تتعلم المجال صح — ابدأ من هنا.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="https://t.me/uiux_with_amiryousry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-[#CBA135] hover:text-[#d4c5a9] border-2 border-[#CBA135] px-8 py-4 rounded-full hover:bg-[#CBA135]/10 transition-all font-semibold w-full sm:w-auto"
            >
              <span>انضم لمجتمع المصممين</span>
              <Users className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-[#CBA135] hover:text-[#d4c5a9] border-2 border-[#CBA135] px-8 py-4 rounded-full hover:bg-[#CBA135]/10 transition-all font-semibold w-full sm:w-auto"
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