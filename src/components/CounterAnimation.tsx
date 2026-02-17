import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  start?: number;
}

export function CounterAnimation({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = '',
  start = 0
}: CounterAnimationProps) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = start;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, start]);

  return (
    <div ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{count}{suffix}
    </div>
  );
}