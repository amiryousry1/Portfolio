import { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = 'قبل',
    afterLabel = 'بعد'
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };

    const handleInteractionStart = (clientX: number) => {
        setIsDragging(true);
        handleMove(clientX);
    };

    const handleInteractionEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-2xl select-none group border border-white/5 shadow-2xl"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseUp={handleInteractionEnd}
            onTouchEnd={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
        >
            {/* After Image (Background/Bottom) */}
            <div className="absolute inset-0 w-full h-full">
                <ImageWithFallback src={afterImage} alt={afterLabel} className="w-full h-full object-cover block" />
                <div className="absolute top-4 left-4 sm:bottom-4 sm:top-auto bg-[#1a1f2e]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-[#CBA135] z-10 border border-[#CBA135]/30">
                    {afterLabel}
                </div>
            </div>

            {/* Before Image (Foreground/Top with Clip Path) */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <ImageWithFallback src={beforeImage} alt={beforeLabel} className="w-full h-full object-cover block" />
                <div className="absolute top-4 right-4 sm:bottom-4 sm:top-auto bg-[#1a1f2e]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-gray-300 z-10 border border-white/10">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#CBA135] to-transparent cursor-ew-resize z-20 flex items-center justify-center -ml-[2px]"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => handleInteractionStart(e.clientX)}
                onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
            >
                {/* Glow effect on the line */}
                <div className="absolute inset-y-0 w-8 bg-[#CBA135] blur-xl opacity-20 select-none pointer-events-none" />

                {/* Handle Button */}
                <div className="absolute w-12 h-12 bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] border-2 border-[#CBA135] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(193,170,126,0.6)] transition-transform group-hover:scale-110">
                    <ArrowLeftRight className="w-6 h-6 text-[#CBA135]" />
                </div>
            </div>
        </div>
    );
}
