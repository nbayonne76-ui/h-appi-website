'use client';

// Floating gradient orbs — pure CSS, zero JS, zero layout shift.
// Drop <AnimatedMesh /> anywhere as first child of a relative section.

export default function AnimatedMesh({ variant = 'blue' }: { variant?: 'blue' | 'green' | 'purple' | 'hero' }) {
  const orbs = {
    hero: [
      { cls: 'w-[600px] h-[600px] -top-32 -left-32 bg-happi-blue/[0.10]',  dur: '18s', delay: '0s'  },
      { cls: 'w-[500px] h-[500px] -top-16  right-0   bg-happi-green/[0.07]', dur: '22s', delay: '-7s' },
      { cls: 'w-[400px] h-[400px]  bottom-0  left-1/3  bg-purple-500/[0.06]', dur: '26s', delay: '-12s' },
    ],
    blue: [
      { cls: 'w-[500px] h-[500px] -top-24  left-1/4  bg-happi-blue/[0.08]',  dur: '20s', delay: '0s'  },
      { cls: 'w-[350px] h-[350px]  bottom-0  right-1/4 bg-happi-blue/[0.05]', dur: '24s', delay: '-8s' },
    ],
    green: [
      { cls: 'w-[450px] h-[450px] -top-20  right-1/4  bg-happi-green/[0.08]', dur: '21s', delay: '0s'  },
      { cls: 'w-[300px] h-[300px]  bottom-0  left-1/4  bg-happi-green/[0.05]', dur: '25s', delay: '-9s' },
    ],
    purple: [
      { cls: 'w-[500px] h-[500px] -top-20  left-1/3  bg-purple-500/[0.08]', dur: '19s', delay: '0s'  },
      { cls: 'w-[350px] h-[350px]  bottom-0  right-1/3 bg-happi-blue/[0.05]', dur: '23s', delay: '-7s' },
    ],
  }[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.cls}`}
          style={{ animation: `blob-float ${orb.dur} ease-in-out infinite alternate`, animationDelay: orb.delay }}
        />
      ))}
    </div>
  );
}
