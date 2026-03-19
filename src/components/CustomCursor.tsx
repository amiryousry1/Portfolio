import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Only enable on non-touch devices
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect touch device
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button');

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseover', handleHoverStart);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseover', handleHoverStart);
        };
    }, [isVisible]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-[#CBA135] rounded-full pointer-events-none z-[9999] mix-blend-exclusion"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    opacity: isVisible ? 1 : 0,
                    scale: isHovering ? 0 : 1
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.1
                }}
            />

            {/* Glowing Outline */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-[#CBA135]/60 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    opacity: isVisible ? 1 : 0,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(193, 170, 126, 0.1)' : 'transparent',
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.5
                }}
            />
        </>
    );
}
