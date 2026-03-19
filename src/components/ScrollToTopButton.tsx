import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="ارجع لفوق"
            className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-[#1a1f2e] border border-[#CBA135]/30 text-[#CBA135] flex items-center justify-center shadow-lg shadow-black/30 hover:bg-[#CBA135] hover:text-[#0f1419] hover:border-[#CBA135] transition-all duration-300 hover:scale-110"
            style={{ animation: isVisible ? 'fadeInUp 0.3s ease-out' : 'none' }}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
