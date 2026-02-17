import image_b48e01759a31b8ea08049303a04d9cc47cc68e2a from 'figma:asset/b48e01759a31b8ea08049303a04d9cc47cc68e2a.png';
import image_4a180dbf0412e1996c2a6f6179f02a33bfccc20b from 'figma:asset/4a180dbf0412e1996c2a6f6179f02a33bfccc20b.png';
import heroImage from 'figma:asset/f394433b1d509fd1379007063298eb22bef5dad6.png';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Users, GraduationCap, Building2, Star, CheckCircle, Quote, Award, TrendingUp, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { CounterAnimation } from '../components/CounterAnimation';

export function HomePage() {
  const services = [
    {
      icon: Briefcase,
      title: 'UI/UX Design',
      description: 'بحوّل فكرتك لمنتج حقيقي بتجربة استخدام مظبوطة.',
    },
    {
      icon: Users,
      title: 'Mentorship 1:1',
      description: 'هشتغل معاك خطوة بخطوة لحد ما تبقى جاهز للشغل.',
    },
    {
      icon: GraduationCap,
      title: 'Courses',
      description: 'كورسات تطبيقية سهلة وبتدخل في الموضوع على طول.',
    },
    {
      icon: Building2,
      title: 'Consulting للشركات',
      description: 'تحليل – تحسين – حلول UX عملية.',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'تطبيق طبي',
      description: 'تطبيق لحجز المواعيد والاستشارات الطبية عن بعد',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0OTY2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'Healthcare'],
    },
    {
      id: 2,
      title: 'لوحة تحكم تحليلات',
      description: 'منصة لعرض وتحليل البيانات بشكل مرئي وسهل',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0OTU3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Dashboard'],
    },
    {
      id: 3,
      title: 'منصة تعليمية',
      description: 'نظام إدارة تعلم متكامل للكورسات أونلاين',
      image: 'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjQ5Njg3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Education'],
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'إزاي تبدأ في مجال الـ UI/UX من الصفر؟',
      excerpt: 'دليل شامل للمبتدئين اللي عايزين يدخلوا المجال بطريقة صحيحة...',
      category: 'مقالات تعليمية',
    },
    {
      id: 2,
      title: 'الفرق بين UI و UX وإزاي تتعلمهم',
      excerpt: 'كتير بيخلطوا بين المصطلحات دي، تعالى نفهمهم مع بعض...',
      category: 'أساسيات',
    },
    {
      id: 3,
      title: 'أهم الأدوات اللي محتاجها كمصمم UI/UX',
      excerpt: 'قائمة بأهم البرامج والأدوات اللي هتحتاجها في شغلك اليومي...',
      category: 'أدوات',
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
      {/* Hero Section - Dark Premium Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#C1AA7E]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#C1AA7E]/15 to-transparent rounded-full blur-3xl"
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#C1AA7E] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#C1AA7E]/10 border border-[#C1AA7E]/30 rounded-full px-6 py-3 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-[#C1AA7E] rounded-full animate-pulse shadow-[0_0_8px_rgba(193,170,126,0.8)]" />
              <span className="text-sm font-medium text-[#C1AA7E]">مدرّب معتمد | مصمم UI/UX | صانع محتوى</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl leading-tight"
            >
              <span className="block text-gray-300 mb-2 text-[36px]">
                أنا العبد الفقير إلي الله
              </span>
              <span className="block bg-gradient-to-l from-[#C1AA7E] via-[#d4c5a9] to-[#C1AA7E] bg-clip-text text-transparent font-bold">أمير يسري</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
            >
              ودي رحلتي في عالم الـ{" "}
              <span className="text-[#C1AA7E] font-semibold">UI/UX</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              مصمم، مدرّب، وصانع محتوى… بساعدك تفهم المجال صح وتبني مستقبل
              مهني قوي بخطوات واضحة ومهنية.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              <Link
                to="/portfolio"
                className="group relative bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-[#C1AA7E]/20 hover:shadow-2xl hover:shadow-[#C1AA7E]/30 transition-all duration-300 inline-flex items-center gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative text-lg">شوف شغلي</span>
                <ArrowLeft className="w-6 h-6 relative group-hover:translate-x-2 transition-transform" />
              </Link>

              <a
                href="https://t.me/uiux_with_amiryousry"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-transparent border-2 border-[#C1AA7E] text-[#C1AA7E] px-8 py-4 rounded-2xl font-semibold hover:bg-[#C1AA7E] hover:text-[#0f1419] transition-all duration-300 inline-flex items-center gap-3"
              >
                <span className="relative text-lg">
                  الانضمام للمجتمع
                </span>
                <Users className="w-6 h-6 relative" />
              </a>
            </motion.div>

            {/* Stats - Simple Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap items-center justify-center gap-8 pt-12 text-center"
            >
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">+4</span>
                <span className="text-gray-400">سنين خبرة</span>
              </div>
              
              <div className="w-px h-8 bg-[#C1AA7E]/20"></div>
              
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">+3000</span>
                <span className="text-gray-400">طالب اتدربوا</span>
              </div>
              
              <div className="w-px h-8 bg-[#C1AA7E]/20"></div>
              
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">+25</span>
                <span className="text-gray-400">مشروع</span>
              </div>
              
              <div className="w-px h-8 bg-[#C1AA7E]/20"></div>
              
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">+200</span>
                <span className="text-gray-400">طالب في منحة رواد مصر</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
            بقدّم إيه؟
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
              <span>شوف كل الخدمات</span>
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
            شوية من شغلي
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
              <span>شوف الباقي</span>
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
            الناس قالت إيه؟
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
              <span>شوف كل الآراء</span>
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
            جاهز تبدأ رحلتك؟ خلّي أول خطوة معايا.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-400"
          >
            سواء عايز تتعلم أو محتاج مساعدة في مشروعك، أنا هنا عشان أساعدك.
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
              <span>انضم للمجتمع</span>
              <Users className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="border-2 border-[#C1AA7E] text-[#C1AA7E] px-8 py-4 rounded-xl hover:bg-[#C1AA7E] hover:text-[#0f1419] transition-all font-semibold"
            >
              كلمّني
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}