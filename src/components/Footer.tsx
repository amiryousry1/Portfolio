import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowLeft, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/7b3347c76bf59464f3407594fa2dfb2715304061.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0d12] via-[#0f1419] to-[#0a0d12] text-white mt-20 overflow-hidden border-t border-[#C1AA7E]/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#C1AA7E]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#C1AA7E]/8 to-transparent rounded-full blur-3xl"
        />
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
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all">
                <img src={logoImage} alt="أمير يسري" className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(193,170,126,0.4)]" />
              </div>
              <div>
                <span className="text-xl font-semibold bg-gradient-to-l from-[#C1AA7E] to-[#d4c5a9] bg-clip-text text-transparent">أمير يسري</span>
                <div className="text-xs text-gray-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C1AA7E]" />
                  UI/UX Designer
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              مصمم، مدرّب، وصانع محتوى متخصص في UI/UX. بساعدك تفهم المجال صح وتبني مستقبل مهني قوي.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#C1AA7E]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#C1AA7E] hover:text-[#0f1419] transition-all border border-[#C1AA7E]/20 text-[#C1AA7E]"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/amir-yousry-2bb306283"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#C1AA7E]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#C1AA7E] hover:text-[#0f1419] transition-all border border-[#C1AA7E]/20 text-[#C1AA7E]"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#C1AA7E]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#C1AA7E] hover:text-[#0f1419] transition-all border border-[#C1AA7E]/20 text-[#C1AA7E]"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@amir_ayo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#C1AA7E]/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#C1AA7E] hover:text-[#0f1419] transition-all border border-[#C1AA7E]/20 text-[#C1AA7E]"
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
              <div className="w-1 h-6 bg-gradient-to-b from-[#C1AA7E] to-[#a89363] rounded-full"></div>
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'الرئيسية' },
                { path: '/about', label: 'من أنا' },
                { path: '/portfolio', label: 'البورتفوليو' },
                { path: '/services', label: 'الخدمات' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#C1AA7E] transition-colors flex items-center gap-2 group"
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
              <div className="w-1 h-6 bg-gradient-to-b from-[#C1AA7E] to-[#a89363] rounded-full"></div>
              الموارد
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/courses', label: 'الكورسات' },
                { path: '/blog', label: 'المقالات' },
                { path: '/testimonials', label: 'آراء الناس' },
                { path: '/booking', label: 'احجز جلسة' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#C1AA7E] transition-colors flex items-center gap-2 group"
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
              <div className="w-1 h-6 bg-gradient-to-b from-[#C1AA7E] to-[#a89363] rounded-full"></div>
              تواصل معايا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-[#C1AA7E] transition-colors" />
                <a href="mailto:ansaya16@gmail.com" className="hover:text-[#C1AA7E] transition-colors break-all">
                  ansaya16@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-[#C1AA7E] transition-colors" />
                <a href="tel:+201069144823" className="hover:text-[#C1AA7E] transition-colors" dir="ltr">
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
              className="inline-flex items-center gap-2 mt-6 bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-[#C1AA7E]/20 transition-all group relative overflow-hidden font-semibold"
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
          className="border-t border-[#C1AA7E]/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} أمير يسري. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              صُنع بـ 
              <Heart className="w-4 h-4 text-[#C1AA7E] fill-[#C1AA7E] animate-pulse" />
              في مصر 🇪🇬
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}