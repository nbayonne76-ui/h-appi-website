'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Anime un chiffre de 0 jusqu'à sa valeur cible au scroll.
 * Accepte des valeurs avec suffixe : "4x", "3 sem.", "24/7".
 * Les valeurs contenant "/" (ex: "24/7") restent statiques.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' });
  const prefersReduced = useReducedMotion();
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!isInView || prefersReduced) {
      setDisplayed(value);
      return;
    }

    // Extrait le nombre entier en début de chaîne + le suffixe
    // "4x"     → num=4,  suffix="x"
    // "3 sem." → num=3,  suffix=" sem."
    // "24/7"   → pas de match (/ interdit) → statique
    const match = value.match(/^(\d+)([^/]*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 1000;
    const steps = Math.min(Math.max(targetNum * 3, 20), 50);
    const stepDuration = duration / steps;
    let step = 0;

    setDisplayed(`0${suffix}`);

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out cubic — démarre vite, finit lentement
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(targetNum * eased);
      setDisplayed(`${current}${suffix}`);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayed(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
