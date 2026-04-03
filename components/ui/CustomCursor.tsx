'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Dot follows cursor instantly
  const dotX = useMotionValue(-40);
  const dotY = useMotionValue(-40);

  // Ring follows with spring lag
  const rawX = useMotionValue(-40);
  const rawY = useMotionValue(-40);
  const ringX = useSpring(rawX, { stiffness: 140, damping: 18 });
  const ringY = useSpring(rawY, { stiffness: 140, damping: 18 });

  // Large glow trails slowly
  const glowX = useSpring(rawX, { stiffness: 60, damping: 18 });
  const glowY = useSpring(rawY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    setMounted(true);

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const enter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')) {
        setHovering(true);
      }
    };
    const leave = () => setHovering(false);
    const down = () => setClicking(true);
    const up   = () => setClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', enter);
    window.addEventListener('mouseout',  leave);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup',   up);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', enter);
      window.removeEventListener('mouseout',  leave);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup',   up);
    };
  }, [dotX, dotY, rawX, rawY]);

  if (!mounted) return null;

  return (
    <>
      {/* Large ambient glow */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          x: glowX, y: glowY,
          translateX: '-50%', translateY: '-50%',
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-happi-blue/40"
        animate={{
          width:  hovering ? 40 : 28,
          height: hovering ? 40 : 28,
          opacity: hovering ? 0.8 : 0.5,
          borderColor: hovering ? 'rgba(16,185,129,0.7)' : 'rgba(59,130,246,0.4)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
        }}
      />

      {/* Dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-white"
        animate={{
          width:   clicking ? 3 : hovering ? 5 : 5,
          height:  clicking ? 3 : hovering ? 5 : 5,
          opacity: hovering ? 0 : 0.9,
          scale:   clicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
        style={{
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
        }}
      />
    </>
  );
}
