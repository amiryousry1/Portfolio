import { motion } from 'motion/react';

export function LoadingSkeleton() {
    return (
        <div className="min-h-screen bg-[#0f1419] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
            >
                {/* Animated logo / spinner */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-[#CBA135]/20"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#CBA135] animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#CBA135]/60 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                </div>
                <p className="text-gray-500 text-sm tracking-widest uppercase">Loading</p>
            </motion.div>
        </div>
    );
}
