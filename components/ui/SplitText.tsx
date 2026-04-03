'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** 'words' (default) or 'chars' */
  by?: 'words' | 'chars';
}

export function SplitText({ text, className, delay = 0, by = 'words' }: SplitTextProps) {
  const prefersReduced = useReducedMotion();

  const units = by === 'chars'
    ? text.split('')
    : text.split(' ');

  const spring = { duration: 0.55, ease: [0.33, 1, 0.68, 1] } as const;

  return (
    <span className={className} aria-label={text}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden leading-[1.15]">
          <motion.span
            className="inline-block"
            initial={{ y: prefersReduced ? 0 : '110%', opacity: prefersReduced ? 0 : 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...spring, delay: delay + i * (by === 'chars' ? 0.03 : 0.07) }}
          >
            {unit}{by === 'words' ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
