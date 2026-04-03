'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// template.tsx re-mounts on every route change (unlike layout.tsx)
// → perfect for page-level enter/exit animations

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
}
