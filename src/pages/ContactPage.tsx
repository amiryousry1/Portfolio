import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';


const countryCodes = [
  { code: '+20', label: 'EG +20' },
  { code: '+966', label: 'SA +966' },
  { code: '+971', label: 'AE +971' },
  { code: '+965', label: 'KW +965' },
  { code: '+974', label: 'QA +974' },
  { code: '+968', label: 'OM +968' },
  { code: '+973', label: 'BH +973' },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    countryCode: '+20',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

    if (!formData.phone.trim()) {
      newErrors.phone = 'من فضلك اكتب رقم الواتساب';
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
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwe4rerO0bmSd5Cz0fnrLaHGXzyx6ZeB_drO9ufNXHAFs_j-QmRlGKa8-Le034oJQul/exec';

      const phoneValue = formData.phone ? `${formData.countryCode} ${formData.phone}` : '';

      const submitData = new URLSearchParams();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', phoneValue);
      submitData.append('message', formData.message);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: submitData,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', countryCode: '+20' });
    } catch (err) {
      console.error('Error sending message:', err);
      setError('حصل خطأ أثناء إرسال الرسالة. جرب تاني من فضلك.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
                <span className="text-[#CBA135] text-sm">تواصل معايا</span>
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
                      <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                      <div className="relative flex items-center gap-4 bg-gradient-to-br from-[#1a1f2e]/80 to-[#1a1f2e]/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-[#CBA135]/30 transition-all">
                        <div className="w-14 h-14 bg-[#CBA135]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#CBA135]" />
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white hover:text-[#CBA135] transition-colors"
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/10 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-[#1a1f2e]/80 to-[#1a1f2e]/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 bg-[#CBA135]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-[#CBA135]" />
                      </div>
                      <h3 className="text-2xl mb-4 text-white">تم الإرسال بنجاح!</h3>
                      <p className="text-gray-300 mb-6">
                        شكرًا لرسالتك! هرد عليك خلال 24 ساعة على الإيميل.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-gradient-to-br from-[#CBA135] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#CBA135]/20 transition-all font-semibold"
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
                          className={`w-full px-4 py-3 bg-[#0f1419] border ${errors.name ? 'border-red-500' : 'border-white/5'
                            } rounded-xl focus:border-[#CBA135] focus:outline-none transition-colors text-white`}
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
                          className={`w-full px-4 py-3 bg-[#0f1419] border ${errors.email ? 'border-red-500' : 'border-white/5'
                            } rounded-xl focus:border-[#CBA135] focus:outline-none transition-colors text-white`}
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
                          رقم الموبايل (واتساب) *
                        </label>
                        <div className={`flex items-center w-full px-4 py-3 bg-[#0f1419] border ${errors.phone ? 'border-red-500' : 'border-white/5'} rounded-xl focus-within:border-[#CBA135] transition-colors`} dir="ltr">
                          <div className="relative" ref={dropdownRef}>
                            <div
                              className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors"
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                              <span className="font-medium text-sm min-w-[56px] select-none uppercase tracking-wider">
                                {countryCodes.find(c => c.code === formData.countryCode)?.label || 'EG +20'}
                              </span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>

                            <motion.div
                              initial={false}
                              animate={{
                                opacity: isDropdownOpen ? 1 : 0,
                                y: isDropdownOpen ? 0 : -10,
                                pointerEvents: isDropdownOpen ? 'auto' : 'none'
                              }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full mt-3 -left-2 w-28 bg-[#1a1f2e] border border-white/5 shadow-2xl z-50 py-1"
                            >
                              {countryCodes.map((country) => (
                                <div
                                  key={country.code}
                                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors uppercase tracking-wider ${formData.countryCode === country.code
                                    ? 'bg-blue-600 text-white font-medium'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, countryCode: country.code }));
                                    setIsDropdownOpen(false);
                                  }}
                                >
                                  {country.label}
                                </div>
                              ))}
                            </motion.div>
                          </div>
                          <div className="h-6 w-px bg-white/10 mx-3"></div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent focus:outline-none text-white ml-2"
                            placeholder="1xx xxx xxxx"
                            dir="ltr"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1" dir="rtl">
                            <XCircle className="w-4 h-4" />
                            {errors.phone}
                          </p>
                        )}
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
                          className={`w-full px-4 py-3 bg-[#0f1419] border ${errors.message ? 'border-red-500' : 'border-white/5'
                            } rounded-xl focus:border-[#CBA135] focus:outline-none transition-colors text-white resize-none`}
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
                        className="w-full bg-gradient-to-br from-[#CBA135] to-[#a89363] text-[#0f1419] px-6 py-4 rounded-full hover:shadow-xl hover:shadow-[#CBA135]/20 transition-all flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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
