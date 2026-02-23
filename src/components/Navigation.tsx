import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from 'figma:asset/7b3347c76bf59464f3407594fa2dfb2715304061.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'عني' },
    { path: '/portfolio', label: 'أعمالي' },
    { path: '/services', label: 'الخدمات' },
    { path: '/blog', label: 'المقالات' },
    { path: '/contact', label: 'تواصل' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#1a1f2e]/95 backdrop-blur-xl border-b border-[#C1AA7E]/10 sticky top-0 z-50 shadow-xl shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logoImage} alt="أمير يسري" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(193,170,126,0.3)]" />
            </motion.div>
            <div className="hidden sm:block">
              <div className="font-semibold text-lg bg-gradient-to-l from-[#C1AA7E] to-[#d4c5a9] bg-clip-text text-transparent">أمير يسري</div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C1AA7E]" />
                UI/UX Designer & Trainer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 rounded-xl transition-all group"
              >
                <span className={`relative z-10 transition-colors ${isActive(link.path)
                  ? 'text-[#C1AA7E] font-medium'
                  : 'text-gray-300 group-hover:text-[#C1AA7E]'
                  }`}>
                  {link.label}
                </span>

                {/* Active/Hover Background */}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#C1AA7E]/10 rounded-xl border border-[#C1AA7E]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover Indicator */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#C1AA7E] to-[#d4c5a9] transition-all duration-300 ${isActive(link.path)
                  ? 'w-8'
                  : 'w-0 group-hover:w-8'
                  }`} />
              </Link>
            ))}
          </div>

          {/* CV Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/resume"
              className="relative bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#C1AA7E]/20 transition-all flex items-center gap-2 group overflow-hidden font-semibold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <FileText className="w-4 h-4 relative z-10" />
              <span className="relative z-10">السيرة الذاتية</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-[#C1AA7E]/10 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-[#C1AA7E]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-[#C1AA7E]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-[#C1AA7E]/10"
            >
              <div className="flex flex-col gap-2 py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${isActive(link.path)
                        ? 'bg-[#C1AA7E]/10 text-[#C1AA7E] font-medium border border-[#C1AA7E]/20'
                        : 'text-gray-300 hover:bg-[#C1AA7E]/5'
                        }`}
                    >
                      <span>{link.label}</span>
                      {isActive(link.path) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-gradient-to-r from-[#C1AA7E] to-[#d4c5a9] rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <div className="px-4 pt-4 border-t border-[#C1AA7E]/10 mt-2">
                  <Link
                    to="/resume"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 bg-gradient-to-br from-[#C1AA7E] to-[#a89363] text-[#0f1419] rounded-xl hover:shadow-lg hover:shadow-[#C1AA7E]/20 transition-all font-semibold flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    السيرة الذاتية
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}