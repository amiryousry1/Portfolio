import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Users, GraduationCap, Building2, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      title: 'UI/UX Design',
      description:
        'هصمّم لك تجربة مستخدم كاملة — من أبحاث المستخدمين وتحليل الاحتياجات، لحد تسليم Design System متكامل مع Prototypes تفاعلية. كل خطوة مبنية على بيانات حقيقية.',
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
      title: 'البرمجة بالذكاء الاصطناعي (Vibe Coding)',
      description:
        'بحوّل فكرتك أو الـ UI/UX ديزاين لمنتج حقيقي شغال في وقت قياسي. باستخدام الـ Vibe Coding وأقوى أدوات الـ AI، بنبني الـ MVP بتاعك بأعلى جودة عشان تتست فكرتك في السوق في أيام مش شهور.',
      features: [
        'تحويل التصميم لكود حقيقي (React/Next.js)',
        'تسليم الـ MVP في أيام بدل شهور',
        'أكواد نظيفة وقابلة للتطوير (Scalable)',
        'توفير تكلفة ووقت البرمجة التقليدية',
        'تعديلات مرنة وسريعة بالـ AI',
        'ربط الواجهات بقواعد البيانات',
      ],
      price: 'تسليم سريع',
      duration: 'MVP',
      buttonText: 'ابدأ مشروعك الآن',
    },
    {
      icon: GraduationCap,
      title: 'كورسات UI/UX عملية',
      description:
        'كورسات تطبيقية بتركّز على المشاريع الحقيقية — مش نظري. كل كورس فيه تطبيقات عملية، دعم مستمر، وشهادة إتمام. المحتوى متاح مدى الحياة.',
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
      title: 'استشارات UX للشركات',
      description:
        'بساعد الشركات الناشئة والمتوسطة تحسّن تجربة المستخدم في منتجاتها — تحليل UX شامل، ورش عمل مع الفريق، وخطة تطوير قابلة للتنفيذ.',
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
    <div className="w-full bg-[#0f1419]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-[#CBA135]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#CBA135]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-[#CBA135]/20 rounded-full border border-[#CBA135]/30">
                <span className="text-[#CBA135] text-sm">الخدمات</span>
              </div>
              <h1 className="text-4xl lg:text-6xl mb-6 text-white">
                خدمات التصميم والتدريب في UI/UX
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                من تصميم المنتجات الرقمية لتدريب المصممين — بقدّم خدمات شاملة
                مبنية على خبرة +4 سنين في السوق المصري والخليجي.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-[#1a1f2e]/80 to-[#1a1f2e]/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-[#CBA135]/30 transition-all shadow-xl">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-[#CBA135]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#CBA135]/20 transition-all">
                        <Icon className="w-8 h-8 text-[#CBA135]" />
                      </div>
                      <div>
                        <h3 className="text-2xl mb-2 text-white">{service.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="text-[#CBA135] bg-[#CBA135]/10 px-3 py-1 rounded-full border border-[#CBA135]/30">
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
                          <CheckCircle className="w-5 h-5 text-[#CBA135] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-br from-[#CBA135] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#CBA135]/20 transition-all font-semibold"
                    >
                      <span>{(service as any).buttonText || 'ابدأ الآن'}</span>
                      <ArrowLeft className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden text-center z-10 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl mb-6 text-white"
          >
            مش متأكد من الخدمة المناسبة؟ كلمني وهنختار مع بعض
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-400"
          >
            ابعتلي تفاصيل مشروعك في رسالة وهرد عليك خلال 24 ساعة بخطة مناسبة ليك.
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
    </div>
  );
}
