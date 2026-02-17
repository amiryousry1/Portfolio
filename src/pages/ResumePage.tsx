import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, Languages } from 'lucide-react';
import { motion } from 'motion/react';

export function ResumePage() {
  const profile = {
    name: 'أمير يسري',
    title: 'مصمم واجهة وتجربة مستخدم (UI/UX Designer)',
    email: 'ansaya16@gmail.com',
    phone: '+20 106 914 4823',
    location: 'القاهرة، مصر',
    summary: [
      'مصمم واجهة وتجربة مستخدم (UI/UX): عندي خبرة أكتر من 4 سنين في تصميم منتجات قابلة للتطوير وتركز على المستخدم، باستخدام بيانات الـ UX وأساليب التفكير التصميمي (Design Thinking).',
      'الخبرة التقنية: عندي خلفية قوية في أبحاث تجربة المستخدم (UX Research)، واستراتيجية المنتج، والـ Wireframing، والـ Prototyping، وبناء أنظمة التصميم (Design Systems) باستخدام برنامج Figma.',
      'التدريب والقيادة: شغال مدرب ومحاضر UI/UX في "رواد مصر"، وليا دور قيادي مثبت في توجيه المصممين وقيادة ورش العمل العملية.',
      'الخلفية الأكاديمية: دراستي علوم حاسب (CS)، وده مخليني فاهم كويس مراحل تطوير المنتج والتعاون بين الفرق المختلفة.',
      'مجالات العمل: عندي خبرة في الشغل الحر (Freelance)، والشركات الناشئة (Startups)، وبيئات العمل السريعة، مع تركيز قوي على تحقيق تأثير للبزنس وسهولة الاستخدام.',
    ],
  };

  const experience = [
    {
      title: 'مدرب UI UX',
      company: 'مبادرة DEPI (مصر)',
      period: 'فبراير 2025 – مارس 2025',
      responsibilities: [
        'بقدّم كورسات تدريبية وورش عمل في مجال تجربة المستخدم وتصميم الواجهات.',
        'بساعد الطلبة في مشاريعهم وبطوّر مهاراتهم في التصميم.',
      ],
    },
    {
      title: 'شغل حر (Freelancer)',
      company: 'مصر، الكويت، السعودية',
      period: 'يناير 2024 – حالياً',
      responsibilities: [
        'بصمم واجهات مستخدم مبتكرة وسهلة الاستخدام لمشاريع متنوعة لعملاء وشركات مختلفة.',
        'بحسّن تجربة المستخدم بناءً على أبحاث المستخدمين واختبارات قابلية الاستخدام (Usability Testing).',
      ],
    },
    {
      title: 'محاضر UI UX',
      company: 'Code Eagles (مصر - مدينة نصر)',
      period: 'فبراير 2024 – مايو 2025',
      responsibilities: [
        'بقدّم دورات تدريبية وورش عمل في مجال الـ UI/UX.',
        'بتابع مشاريع الطلبة وبشتغل على تحسين مهاراتهم التصميمية.',
      ],
    },
    {
      title: 'Product Designer',
      company: 'The Masters (الكويت)',
      period: 'فبراير 2024 – ديسمبر 2025',
      responsibilities: [
        'بصمم واجهات مستخدم مبتكرة وسهلة لمشاريع متنوعة.',
        'بشتغل على تحسين الـ UX بناءً على الأبحاث والاختبارات.',
      ],
    },
    {
      title: 'Product Designer',
      company: 'TNK (الكويت)',
      period: 'مارس 2025',
      responsibilities: [
        'صممت واجهات مستخدم لمشروع "شركة التنديل الكويتية للمقاولات العامة".',
        'حسّنت تجربة المستخدم بناءً على الأبحاث واختبارات الاستخدام.',
      ],
    },
    {
      title: 'UI UX Designer',
      company: 'شركة Nova Dev (القاهرة الجديدة)',
      period: 'ديسمبر 2025',
      responsibilities: [
        'تصميم واجهات مستخدم مبتكرة لمشاريع مختلفة.',
        'تحسين تجربة المستخدم اعتماداً على الأبحاث والاختبارات.',
      ],
    },
    {
      title: 'UI UX Designer',
      company: 'The 73 Agency (مدينة العاشر من رمضان)',
      period: 'مايو 2024 – حالياً',
      responsibilities: [
        'بشارك في تصميم وتطوير واجهات المستخدم لتطبيقات الويب والموبايل.',
        'بشتغل مع فرق متعددة التخصصات عشان نحسن تجربة المستخدم ونحقق أهداف المشروع.',
      ],
    },
  ];

  const projects = [
    {
      name: 'موقع الجامعة العربية المفتوحة (AOU)',
      period: 'أغسطس 2024 – يناير 2025',
      description: 'صممت وطورت موقع الجامعة العربية المفتوحة (ومقرها الرئيسي الكويت) وليها 9 فروع في دول زي الكويت، البحرين، الأردن، عمان، السعودية، لبنان، فلسطين، السودان، ومصر.',
    },
    {
      name: 'AM Menu (نظام POS) - مشروع SaaS',
      period: 'أبريل 2025 – يونيو 2025',
      description: 'ده نظام نقاط بيع (POS) سعودي متكامل للمطاعم والكافيهات. بيشمل ويب أبليكيشن ولوحة تحكم (Dashboard) قوية لإدارة الطلبات، المنيو، الموظفين، والمبيعات. النظام بيركز على السهولة، السرعة، والتحليلات الفورية عشان يساعد البزنس ياخد قرارات مبنية على بيانات.',
    },
    {
      name: 'Zony - مشروع SaaS',
      period: 'يوليو 2024 – أغسطس 2024',
      description: 'منتج لوجستي سعودي (SaaS). اشتغلت فيه على تصميم ويب أبليكيشن كامل ولوحة تحكم للعمليات عشان إدارة التوصيل والشحنات.',
    },
    {
      name: 'Ejary - مشروع SaaS في The Masters',
      period: 'فبراير 2025 – أبريل 2025',
      description: 'تصميم وتطوير تطبيق تجارة إلكترونية + موقع + لوحة تحكم لصالح "The Masters"، بهدف تحسين تجربة التسوق أونلاين وتسهيل عملية شراء المنتجات.',
    },
    {
      name: 'Click Solutions - في The 73 Agency',
      period: 'يوليو 2023 – سبتمبر 2023',
      description: 'تصميم وتطوير منصة للكورسات المصغرة (Micro-course platform). اشتغلت على الموبايل، الويب، والداشبورد.',
    },
    {
      name: 'Foodia POS - في The 73 Agency',
      period: 'أبريل 2024 – مايو 2024',
      description: 'تصميم وتطوير موقع تجاري لشركة (Web & Dashboard)، بهدف تحسين وجودهم الرقمي وتسهيل الوصول لخدماتهم ومنتجاتهم.',
    },
  ];

  const education = {
    degree: 'بكالوريوس علوم حاسب (Computer Science)',
    institution: 'معهد العبور - قسم علوم الحاسب',
    period: 'أكتوبر 2022 – نوفمبر 2026',
  };

  const skills = [
    'تصميم واجهة المستخدم (UI) وتصميم المنتجات (Product Design)',
    'تحليل الأبحاث (Research analysis) وتجربة المستخدم (UX)',
    'اختبار قابلية الاستخدام (Usability testing)',
    'Figma',
    'Adobe XD',
    'Notion',
    'Photoshop',
  ];

  const certificates = [
    'Google: شهادة احترافية في تصميم تجربة المستخدم (UX Design)',
    'Mahara Tech: تصميم تجربة المستخدم (UXD)',
    'Udemy: واجهة وتجربة المستخدم (UI UX Design)، تصميم الـ UX، تصميم الـ UI ببرنامج Figma، وبرنامج Adobe XD',
  ];

  const languages = ['عربي', 'إنجليزي'];

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] py-12 border-b border-[#C1AA7E]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#C1AA7E] hover:text-[#d4c5a9] mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 rotate-180" />
              <span>رجوع للرئيسية</span>
            </Link>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div>
                <h1 className="text-4xl lg:text-5xl text-white mb-2">{profile.name}</h1>
                <p className="text-xl text-[#C1AA7E]">{profile.title}</p>
              </div>
              <button
                onClick={() => window.print()}
                className="bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-[#C1AA7E]/20 transition-all font-semibold"
              >
                طباعة / تحميل PDF
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#C1AA7E]" />
                <a href={`mailto:${profile.email}`} className="hover:text-[#C1AA7E] transition-colors">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#C1AA7E]" />
                <a href={`tel:${profile.phone}`} className="hover:text-[#C1AA7E] transition-colors">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C1AA7E]" />
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Profile Summary */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C1AA7E]/10 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#C1AA7E]" />
            </div>
            الملف الشخصي
          </h2>
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-6 rounded-2xl border border-[#C1AA7E]/20 space-y-4">
            {profile.summary.map((para, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C1AA7E]/10 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#C1AA7E]" />
            </div>
            خبرة العمل
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-6 rounded-2xl border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl text-white mb-1">{job.title}</h3>
                    <p className="text-[#C1AA7E]">{job.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-[#C1AA7E] mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C1AA7E]/10 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-[#C1AA7E]" />
            </div>
            المشاريع
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-6 rounded-2xl border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h3 className="text-lg text-white font-medium">{project.name}</h3>
                  <span className="text-gray-400 text-sm whitespace-nowrap">{project.period}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C1AA7E]/10 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#C1AA7E]" />
            </div>
            التعليم
          </h2>
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-6 rounded-2xl border border-[#C1AA7E]/20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-xl text-white mb-1">{education.degree}</h3>
                <p className="text-[#C1AA7E]">{education.institution}</p>
              </div>
              <span className="text-gray-400 text-sm">{education.period}</span>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C1AA7E]/10 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-[#C1AA7E]" />
            </div>
            المهارات
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] text-white px-5 py-3 rounded-xl border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Certificates */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C1AA7E]/10 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-[#C1AA7E]" />
            </div>
            الشهادات
          </h2>
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-6 rounded-2xl border border-[#C1AA7E]/20">
            <ul className="space-y-3">
              {certificates.map((cert, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <span className="text-[#C1AA7E] mt-1">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C1AA7E]/10 rounded-lg flex items-center justify-center">
              <Languages className="w-6 h-6 text-[#C1AA7E]" />
            </div>
            اللغات
          </h2>
          <div className="flex gap-4">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#151a25] text-white px-6 py-3 rounded-xl border border-[#C1AA7E]/20"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white !important;
          }
          .bg-\\[\\#0f1419\\] {
            background: white !important;
          }
          .text-white {
            color: black !important;
          }
          .text-gray-300, .text-gray-400 {
            color: #333 !important;
          }
          .border-\\[\\#C1AA7E\\]\\/20 {
            border-color: #C1AA7E !important;
          }
          button {
            display: none !important;
          }
          a[href^="/"]:first-of-type {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
