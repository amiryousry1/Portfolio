import { Link } from 'react-router-dom';
import amirPhoto from '../assets/amir.jpg';
import { ArrowLeft, Briefcase, Users, GraduationCap, Building2, Star, Quote, Award, TrendingUp, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
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
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
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
                className="inline-flex items-center gap-3 bg-[#C1AA7E]/8 border border-[#C1AA7E]/20 rounded-full px-5 py-2.5 backdrop-blur-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C1AA7E] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C1AA7E] shadow-[0_0_10px_rgba(193,170,126,0.8)]" />
                </span>
                <span className="text-sm font-medium text-[#C1AA7E]/90 tracking-wide">متاح لمشاريع جديدة — ابدأ مشروعك دلوقتي</span>
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
                  <span className="block bg-gradient-to-l from-[#C1AA7E] via-[#e8dcc8] to-[#C1AA7E] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease-in-out_infinite]">
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
                شغلت مع{' '}
                <span className="text-[#C1AA7E] font-semibold">+25 شركة وستارت أب</span>
                {' '}في مصر والخليج، ودرّبت{' '}
                <span className="text-[#C1AA7E] font-semibold">+3,000 مصمم</span>
                {' '}يدخلوا سوق العمل.
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
                  className="group relative bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#C1AA7E]/20 hover:shadow-2xl hover:shadow-[#C1AA7E]/40 hover:scale-[1.03] transition-all duration-300 inline-flex items-center gap-3 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative">شوف نتايج شغلي</span>
                  <ArrowLeft className="w-5 h-5 relative group-hover:-translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="group relative border-2 border-[#C1AA7E]/40 text-[#C1AA7E] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#C1AA7E] hover:text-[#0f1419] hover:border-[#C1AA7E] hover:scale-[1.03] transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-sm"
                >
                  <span className="relative">ابدأ مشروعك معايا</span>
                  <ArrowLeft className="w-5 h-5 relative group-hover:-translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* ── Right Column: Visual / Profile Card ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              {/* Orbiting Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#C1AA7E]/10"
              >
                {/* Orbiting skill badges */}
                {[
                  { label: 'Figma', angle: 0 },
                  { label: 'React', angle: 90 },
                  { label: 'UX Research', angle: 180 },
                  { label: 'Prototyping', angle: 270 },
                ].map((skill) => (
                  <motion.div
                    key={skill.label}
                    className="absolute w-auto px-3 py-1.5 bg-[#1a1f2e]/90 border border-[#C1AA7E]/25 rounded-full text-xs text-[#C1AA7E] font-medium backdrop-blur-sm shadow-lg whitespace-nowrap"
                    style={{
                      top: `${50 - 50 * Math.cos((skill.angle * Math.PI) / 180)}%`,
                      left: `${50 + 50 * Math.sin((skill.angle * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  >
                    {skill.label}
                  </motion.div>
                ))}
              </motion.div>

              {/* Outer glow ring */}
              <div className="absolute w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] rounded-full border border-[#C1AA7E]/5" />

              {/* Center Profile Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] rounded-3xl overflow-hidden shadow-2xl shadow-[#C1AA7E]/10 border border-[#C1AA7E]/20 group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e] via-[#0f1419] to-[#1a1f2e]" />

                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C1AA7E]/10 via-transparent to-[#C1AA7E]/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative elements inside card */}
                <div className="absolute top-6 right-6 left-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#C1AA7E]/40" />
                    <div className="w-3 h-3 rounded-full bg-[#C1AA7E]/25" />
                    <div className="w-3 h-3 rounded-full bg-[#C1AA7E]/15" />
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
                      <div className="text-white font-semibold text-base">أمير يسري</div>
                      <div className="text-[#C1AA7E]/70 text-sm">Cairo, Egypt 🇪🇬</div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-10 h-10 rounded-xl bg-[#C1AA7E]/15 border border-[#C1AA7E]/25 flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 text-[#C1AA7E]" />
                    </motion.div>
                  </div>
                </div>

                {/* Shine sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            </motion.div>
          </div>

          {/* ── Floating Stats Bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6 }}
            className="mt-20 lg:mt-28"
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Glow behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C1AA7E]/10 via-[#C1AA7E]/5 to-[#C1AA7E]/10 rounded-3xl blur-xl" />

              <div className="relative bg-[#1a1f2e]/70 backdrop-blur-xl border border-[#C1AA7E]/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                  {[
                    { value: '+4', label: 'سنين في السوق', icon: Award },
                    { value: '+3,000', label: 'مصمم دخلوا المجال', icon: Users },
                    { value: '+25', label: 'مشروع ناجح', icon: Briefcase },
                    { value: '+200', label: 'متدرب في رواد مصر', icon: TrendingUp },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                      className="text-center group/stat"
                    >
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#C1AA7E]/10 border border-[#C1AA7E]/15 flex items-center justify-center group-hover/stat:bg-[#C1AA7E]/20 group-hover/stat:scale-110 transition-all duration-300">
                          <stat.icon className="w-5 h-5 text-[#C1AA7E]" />
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover/stat:text-[#d4c5a9] transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 group-hover/stat:text-gray-300 transition-colors">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-[#C1AA7E]/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-[#C1AA7E] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-12 text-center text-white"
          >
            خدمات التصميم والتدريب
          </motion.h2>
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
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C1AA7E]/0 via-[#C1AA7E]/0 to-[#C1AA7E]/0 group-hover:from-[#C1AA7E]/20 group-hover:via-[#C1AA7E]/10 group-hover:to-transparent rounded-2xl blur-lg transition-all duration-500"></div>

                  <div className="relative bg-gradient-to-br from-[#1a1f2e]/90 to-[#151a25]/90 backdrop-blur-xl p-8 rounded-2xl border border-[#C1AA7E]/10 group-hover:border-[#C1AA7E]/30 transition-all duration-300 h-full shadow-xl">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#C1AA7E]/20 to-[#C1AA7E]/5 rounded-2xl flex items-center justify-center group-hover:from-[#C1AA7E]/30 group-hover:to-[#C1AA7E]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-8 h-8 text-[#C1AA7E]" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl mb-3 text-white font-semibold group-hover:text-[#d4c5a9] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-[15px]">{service.description}</p>

                    {/* Hover indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-0.5 w-12 bg-gradient-to-r from-[#C1AA7E] to-transparent rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#C1AA7E] hover:text-[#d4c5a9] transition-colors"
            >
              <span>اعرف تفاصيل كل خدمة</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-12 text-center text-white"
          >
            أعمالي ومشاريعي
          </motion.h2>
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
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C1AA7E]/0 via-[#C1AA7E]/0 to-[#C1AA7E]/0 group-hover:from-[#C1AA7E]/20 group-hover:via-[#C1AA7E]/10 group-hover:to-transparent rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                    <div className="relative h-full bg-gradient-to-br from-[#1a1f2e]/95 to-[#151a25]/95 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#C1AA7E]/10 group-hover:border-[#C1AA7E]/30 transition-all duration-300 shadow-2xl">
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
                              className="text-xs bg-[#C1AA7E]/10 text-[#C1AA7E] border border-[#C1AA7E]/20 px-3 py-1.5 rounded-full font-medium"
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
                        <div className="flex items-center gap-2 text-[#C1AA7E] pt-2">
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
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-[#C1AA7E]/20 transition-all font-semibold"
            >
              <span>شوف كل المشاريع</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-16 text-center text-white"
          >
            آراء المتدربين والعملاء
          </motion.h2>

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
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C1AA7E]/0 via-[#C1AA7E]/0 to-[#C1AA7E]/0 group-hover:from-[#C1AA7E]/15 group-hover:via-[#C1AA7E]/5 group-hover:to-transparent rounded-3xl blur-xl transition-all duration-500"></div>

                <div className="relative bg-gradient-to-br from-[#1a1f2e]/95 to-[#151a25]/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-[#C1AA7E]/10 group-hover:border-[#C1AA7E]/30 transition-all duration-300 h-full">
                  {/* Quote Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C1AA7E]/20 to-[#C1AA7E]/5 rounded-2xl flex items-center justify-center group-hover:from-[#C1AA7E]/30 group-hover:to-[#C1AA7E]/10 transition-all duration-300">
                      <Quote className="w-6 h-6 text-[#C1AA7E]" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C1AA7E] text-[#C1AA7E]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-center leading-relaxed mb-8 text-[15px]">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="flex justify-center mb-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C1AA7E]/50 to-transparent"></div>
                  </div>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C1AA7E]/20 to-[#C1AA7E]/5 rounded-full flex items-center justify-center text-[#C1AA7E] text-lg font-semibold border border-[#C1AA7E]/20">
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
              className="inline-flex items-center gap-2 text-[#C1AA7E] hover:text-[#d4c5a9] border-2 border-[#C1AA7E] px-6 py-3 rounded-xl hover:bg-[#C1AA7E]/10 transition-all"
            >
              <span>اقرأ المزيد من آراء العملاء</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C1AA7E]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-6 text-white"
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
              className="bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#C1AA7E]/20 transition-all inline-flex items-center gap-2 font-semibold"
            >
              <span>انضم لمجتمع المصممين</span>
              <Users className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="border-2 border-[#C1AA7E] text-[#C1AA7E] px-8 py-4 rounded-xl hover:bg-[#C1AA7E] hover:text-[#0f1419] transition-all font-semibold"
            >
              تواصل معايا
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}