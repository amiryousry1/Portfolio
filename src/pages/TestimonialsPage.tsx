import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'محمد أحمد',
      role: 'UI/UX Designer',
      company: 'Tech Startup',
      text: 'أمير مدرّب محترف وطريقته في الشرح سهلة جدًا. قدرت أدخل المجال وأشتغل في شركة بعد الكورس مباشرة. الدعم المستمر اللي كان بيقدمه كان ليه دور كبير في نجاحي.',
      rating: 5,
    },
    {
      name: 'سارة حسن',
      role: 'Product Designer',
      company: 'E-commerce Platform',
      text: 'الجلسات الإرشادية مع أمير غّرت نظرتي للتصميم بشكل كامل. دلوقتي بفهم المستخدم أحسن بكتير ومشاريعي بقت أقوى وأكتر احترافية.',
      rating: 5,
    },
    {
      name: 'أحمد علي',
      role: 'Junior Designer',
      company: 'Digital Agency',
      text: 'كورس عملي ومباشر، من غير كلام فاضي. كل معلومة بتاخدها بتستخدمها في الشغل على طول. أمير مش بس بيعلم، ده بيلهم كمان.',
      rating: 5,
    },
    {
      name: 'نور محمود',
      role: 'UX Researcher',
      company: 'Healthcare App',
      text: 'تجربة التعلم معاه كانت مختلفة تمامًا. البورتفوليو اللي بنيته معاه فتحلي فرص شغل كتير. شكرًا يا أمير!',
      rating: 5,
    },
    {
      name: 'خالد إبراهيم',
      role: 'Freelance Designer',
      company: 'Independent',
      text: 'المنتورشيب معاه كانت من أفضل القرارات اللي خدتها في مسيرتي. دلوقتي بشتغل فريلانس وعندي عملاء ثابتين بفضل النصايح والتوجيه اللي قدمهولي.',
      rating: 5,
    },
    {
      name: 'مريم سعيد',
      role: 'UI Designer',
      company: 'Fintech Company',
      text: 'أمير مش بس مدرب، ده mentor حقيقي. بيهتم بالتفاصيل ويخليك تفهم الأساسيات صح. المهارات اللي اتعلمتها منه بستخدمها كل يوم في شغلي.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419]">
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
                <span className="text-[#CBA135] text-sm">آراء العملاء والمتدربين</span>
              </div>
              <h1 className="text-4xl lg:text-6xl mb-6 text-white">
                آراء عملاء ومتدربين حقيقيين
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                +3,000 طالب ومصمم اشتغلوا معايا — دي بعض آرائهم عن تجربتهم.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                <div className="relative bg-gradient-to-br from-[#1a1f2e]/80 to-[#1a1f2e]/40 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-black/40 border border-white/5 hover:border-[#CBA135]/30 transition-all h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-[#CBA135] to-[#a89363] rounded-full flex items-center justify-center shadow-lg shadow-[#CBA135]/30 group-hover:scale-110 transition-transform">
                    <Quote className="w-7 h-7 text-[#0f1419]" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-[#CBA135] text-[#CBA135]"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-center leading-relaxed mb-8 flex-grow">
                    {testimonial.text}
                  </p>

                  {/* Divider */}
                  <div className="flex justify-center mb-6">
                    <div className="w-2 h-2 bg-[#CBA135]/50 rounded-full"></div>
                  </div>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#CBA135] to-[#a89363] rounded-full flex items-center justify-center text-[#0f1419] text-lg font-semibold shadow-md shadow-[#CBA135]/30">
                      {testimonial.name.split(' ')[0].charAt(0)}
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-[#CBA135]">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            جاهز تبدأ رحلتك في UI/UX؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-gray-400"
          >
            انضم لأكتر من 3,000 مصمم بدأوا رحلتهم معايا — ابعتلي وهنبدأ مع بعض.
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
