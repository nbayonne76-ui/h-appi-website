'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function GlowCursor() {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  // Don't render on touch devices or SSR
  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-40"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  );
}
