'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import TiltCard from '@/components/ui/TiltCard';

type Stat = { end: number; suffix: string; label: string };

function AnimatedNumber({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);
  const [text, setText] = useState(`0${suffix}`);

  useEffect(() => {
    return display.on('change', (v) => setText(v));
  }, [display]);

  useEffect(() => {
    if (inView) raw.set(end);
  }, [inView, end, raw]);

  return <span ref={ref}>{text}</span>;
}

export default function AtelierStats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
        >
          <TiltCard intensity={4}>
            <div className="glass-card rounded-xl p-5 text-center h-full border border-happi-border hover:border-happi-blue/30 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-1">
                <AnimatedNumber end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-happi-muted text-xs font-medium">{stat.label}</div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}
