import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
    return (
        <div className="min-h-screen bg-[#0f1419] flex items-center justify-center px-4">
            {/* Decorative glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#CBA135]/5 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center relative z-10 max-w-lg"
            >
                {/* Big 404 */}
                <h1 className="text-[8rem] sm:text-[10rem] font-bold leading-none mb-2">
                    <span className="bg-gradient-to-b from-[#CBA135] via-[#CBA135]/60 to-transparent bg-clip-text text-transparent">
                        404
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    الصفحة مش موجودة
                </h2>

                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    يبدو إن اللينك ده مش صح أو الصفحة اتنقلت. مش مشكلة — ارجع للرئيسية وابدأ من هناك.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-l from-[#CBA135] to-[#a89363] text-[#0f1419] px-8 py-4 rounded-full font-bold shadow-lg shadow-[#CBA135]/20 hover:shadow-xl hover:shadow-[#CBA135]/30 transition-all hover:scale-105"
                    >
                        <Home className="w-5 h-5" />
                        <span>الصفحة الرئيسية</span>
                    </Link>
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 border border-[#CBA135]/40 text-[#CBA135] px-8 py-4 rounded-full font-medium hover:bg-[#CBA135]/10 transition-all"
                    >
                        <span>شوف أعمالي</span>
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
