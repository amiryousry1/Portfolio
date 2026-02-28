import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Mail, Phone, MapPin, ArrowLeft, Heart, Sparkles, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '../assets/Amir-LOGO.png';

const TikTok = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0d12] via-[#0f1419] to-[#0a0d12] text-white overflow-hidden border-t border-[#CBA135]/10">
      {/* Static Background Elements to reduce lag instead of heavy infinite blur animations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#CBA135]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#CBA135]/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-all">
                <img src={logoImage} alt="أمير يسري" className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(193,170,126,0.4)]" />
              </div>
              <div>
                <span className="text-2xl font-semibold bg-gradient-to-l from-[#CBA135] to-[#d4c5a9] bg-clip-text text-transparent">أمير يسري</span>
                <div className="text-sm text-gray-400 flex items-center gap-1.5 mt-1">
                  مصمم تجربة مستخدم
                  <Sparkles className="w-3.5 h-3.5 text-[#CBA135]" />
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              مصمم UI/UX ومدرب معتمد بخبرة +4 سنين. بصمّم منتجات رقمية وبدرّب مصممين يدخلوا سوق العمل.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap">
              <motion.a
                href="https://www.instagram.com/uiux_with.amir?utm_source=qr&igsh=dGNkb2xlcmkxdGs5"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#CBA135]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#CBA135] hover:text-[#0f1419] transition-all border border-white/5 text-[#CBA135]"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1DUn648W5x/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#CBA135]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#CBA135] hover:text-[#0f1419] transition-all border border-white/5 text-[#CBA135]"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@amir_ayo1?_r=1&_t=ZS-94CYG5OvMqC"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#CBA135]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#CBA135] hover:text-[#0f1419] transition-all border border-white/5 text-[#CBA135]"
              >
                <TikTok className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/amir-yousry-2bb306283"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#CBA135]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#CBA135] hover:text-[#0f1419] transition-all border border-white/5 text-[#CBA135]"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@amir_ayo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#CBA135]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#CBA135] hover:text-[#0f1419] transition-all border border-white/5 text-[#CBA135]"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#CBA135] to-[#a89363] rounded-full"></div>
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'الرئيسية' },
                { path: '/about', label: 'عني' },
                { path: '/portfolio', label: 'أعمالي' },
                { path: '/services', label: 'الخدمات' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#CBA135] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#CBA135] to-[#a89363] rounded-full"></div>
              الموارد
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/blog', label: 'مقالات ونصائح' },
                { path: '/testimonials', label: 'آراء المتدربين' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#CBA135] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#CBA135] to-[#a89363] rounded-full"></div>
              تواصل معايا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-[#CBA135] transition-colors" />
                <a href="mailto:ansaya16@gmail.com" className="hover:text-[#CBA135] transition-colors break-all">
                  ansaya16@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-[#CBA135] transition-colors" />
                <a href="tel:+201069144823" className="hover:text-[#CBA135] transition-colors" dir="ltr">
                  +20 106 914 4823
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>القاهرة، مصر</span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-gradient-to-br from-[#CBA135] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-full hover:shadow-xl hover:shadow-[#CBA135]/20 transition-all group relative overflow-hidden font-semibold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">ابعت رسالة</span>
              <ArrowLeft className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#CBA135]/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} أمير يسري — مصمم UI/UX في مصر. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              صُنع بـ
              <Heart className="w-4 h-4 text-[#CBA135] fill-[#CBA135] animate-pulse" />
              في مصر 🇪🇬
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}