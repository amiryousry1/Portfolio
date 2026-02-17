import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Users, GraduationCap, Building2, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: 'UI/UX Design',
      description:
        'هصمّم لك تجربة كاملة… من أول الفكرة لحد ما يبقى عندك منتج جاهز. هشتغل معاك على فهم المستخدمين، رسم User Flow، تصميم Wireframes، والتصميم النهائي مع نظام تصميم متكامل.',
      features: [
        'بحث وتحليل المستخدمين',
        'تصميم User Flow و Wireframes',
        'تصميم واجهات UI احترافية',
        'نظام تصميم Design System',
        'Prototypes تفاعلية',
        'اختبار التصميم مع مستخدمين حقيقيين',
      ],
      price: 'حسب المشروع',
      duration: 'من 2 - 8 أسابيع',
    },
    {
      icon: Users,
      title: 'Mentorship 1:1',
      description:
        'هشتغل معاك خطوة بخطوة لحد ما تبقى جاهز للشغل. سواء لسه بتبدأ أو عايز تطوّر من نفسك، هساعدك تفهم المجال صح وتبني بورتفوليو قوي يفتح لك فرص.',
      features: [
        'جلسات فردية مخصصة ليك',
        'مراجعة وتطوير البورتفوليو',
        'توجيه في مسار التعلم',
        'نصائح عملية للدخول في سوق العمل',
        'متابعة مستمرة لتقدمك',
        'دعم حتى بعد انتهاء الجلسات',
      ],
      price: 'من 500 جنيه',
      duration: 'جلسة واحدة أو أكتر',
    },
    {
      icon: GraduationCap,
      title: 'Courses - الكورسات',
      description:
        'كورسات تطبيقية سهلة وبتدخل في الموضوع على طول. مش هضيّع وقتك في كلام نظري كتير، كل حاجة هتتعلمها هتطبقها في مشاريع حقيقية.',
      features: [
        'محتوى مبسّط وعملي',
        'مشاريع تطبيقية من الواقع',
        'دعم ومتابعة مستمرة',
        'شهادة إتمام معتمدة',
        'وصول مدى الحياة للمحتوى',
        'مجموعة تفاعلية من الطلاب',
      ],
      price: 'متاح قريبًا',
      duration: 'حسب الكورس',
    },
    {
      icon: Building2,
      title: 'Consulting للشركات',
      description:
        'هساعد فريقك يحسّن تجربة المستخدم في منتجاتكم. هعمل تحليل شامل، وأقدم حلول عملية وقابلة للتطبيق تخلي المنتج أحسن.',
      features: [
        'تحليل شامل لتجربة المستخدم',
        'ورش عمل مع الفريق',
        'تطوير استراتيجية UX',
        'مراجعة وتحسين التصاميم الحالية',
        'تدريب الفريق على أفضل الممارسات',
        'دعم مستمر للفريق',
      ],
      price: 'حسب المشروع',
      duration: 'حسب نطاق العمل',
    },
  ];

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
                <span className="text-[#C1AA7E] text-sm">الخدمات</span>
              </div>
              <h1 className="text-4xl lg:text-6xl mb-6 text-white">
                بقدّم إيه بالظبط؟
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                خدمات متكاملة في التصميم، التدريب، والاستشارات… هختار معاك الأنسب
                لاحتياجك.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C1AA7E]/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-8 rounded-3xl border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40 transition-all shadow-xl">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-[#C1AA7E]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C1AA7E]/20 transition-all">
                        <Icon className="w-8 h-8 text-[#C1AA7E]" />
                      </div>
                      <div>
                        <h3 className="text-2xl mb-2 text-white">{service.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="text-[#C1AA7E] bg-[#C1AA7E]/10 px-3 py-1 rounded-full border border-[#C1AA7E]/30">
                            {service.price}
                          </span>
                          <span className="text-gray-400 bg-[#1a1f2e] px-3 py-1 rounded-full border border-gray-700">
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C1AA7E] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-[#C1AA7E]/20 transition-all font-semibold"
                    >
                      <span>ابدأ الآن</span>
                      <ArrowLeft className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
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
            مش عارف تختار؟ تعالى نتكلم
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-400"
          >
            ابعتلي تفاصيل مشروعك أو احتياجك، وهساعدك تختار الخدمة المناسبة.
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
