import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'من فضلك اكتب اسمك';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'من فضلك اكتب الإيميل';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'محتاج تكتب الإيميل صح';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'من فضلك اكتب الرسالة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/server/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('فشل إرسال الرسالة');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setError('حصل خطأ أثناء إرسال الرسالة. جرب تاني من فضلك.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'الإيميل',
      value: 'ansaya16@gmail.com',
      href: 'mailto:ansaya16@gmail.com',
    },
    {
      icon: Phone,
      label: 'الموبايل',
      value: '+20 106 914 4823',
      href: 'tel:+201069144823',
    },
    {
      icon: MapPin,
      label: 'الموقع',
      value: 'القاهرة، مصر',
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
                <span className="text-[#C1AA7E] text-sm">تواصل معايا</span>
              </div>
              <h1 className="text-4xl lg:text-6xl mb-6 text-white">
                تواصل معايا — ابدأ مشروعك النهاردة
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                عندك مشروع محتاج تصميم UI/UX؟ أو عايز استشارة؟ ابعتلي رسالة وهرد عليك خلال 24 ساعة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl mb-6 text-white">
                طرق التواصل المتاحة
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                تقدر تتواصل معايا بأي طريقة تناسبك — وبرد خلال 24 ساعة.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C1AA7E]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                      <div className="relative flex items-center gap-4 bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-6 rounded-2xl border border-[#C1AA7E]/20 hover:border-[#C1AA7E]/40 transition-all">
                        <div className="w-14 h-14 bg-[#C1AA7E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#C1AA7E]" />
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white hover:text-[#C1AA7E] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-white">{item.value}</div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C1AA7E]/10 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#151a25] p-8 rounded-3xl border border-[#C1AA7E]/20 shadow-2xl">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 bg-[#C1AA7E]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-[#C1AA7E]" />
                      </div>
                      <h3 className="text-2xl mb-4 text-white">تم الإرسال بنجاح!</h3>
                      <p className="text-gray-300 mb-6">
                        شكرًا لرسالتك! هرد عليك خلال 24 ساعة على الإيميل.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-[#C1AA7E]/20 transition-all font-semibold"
                      >
                        إرسال رسالة أخرى
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2">
                          الاسم *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[#0f1419] border ${errors.name ? 'border-red-500' : 'border-[#C1AA7E]/20'
                            } rounded-xl focus:border-[#C1AA7E] focus:outline-none transition-colors text-white`}
                          placeholder="اسمك (مثال: أحمد محمد)"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-white mb-2">
                          الإيميل *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[#0f1419] border ${errors.email ? 'border-red-500' : 'border-[#C1AA7E]/20'
                            } rounded-xl focus:border-[#C1AA7E] focus:outline-none transition-colors text-white`}
                          placeholder="example@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-white mb-2">
                          رقم الموبايل
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0f1419] border border-[#C1AA7E]/20 rounded-xl focus:border-[#C1AA7E] focus:outline-none transition-colors text-white"
                          placeholder="+20 1xx xxx xxxx"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-white mb-2">
                          الرسالة *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 bg-[#0f1419] border ${errors.message ? 'border-red-500' : 'border-[#C1AA7E]/20'
                            } rounded-xl focus:border-[#C1AA7E] focus:outline-none transition-colors text-white resize-none`}
                          placeholder="اكتب تفاصيل مشروعك أو سؤالك..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2 text-red-400">
                          <XCircle className="w-5 h-5 flex-shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-6 py-4 rounded-xl hover:shadow-xl hover:shadow-[#C1AA7E]/20 transition-all flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>جاري الإرسال...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>إرسال الرسالة</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
