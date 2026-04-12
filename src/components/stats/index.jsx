"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";

const stats = [
  { value: 6, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  {
    value: 100,
    suffix: "+",
    label: (
      <>
        Happy <br /> Clients
      </>
    ),
  },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

/* =========================
   STAT ITEM
========================= */
function StatItem({ stat, index, animate }) {
  const count = useCountUp(stat.value, 1600 + index * 200, animate);

  return (
    <div
      className={`relative flex flex-col items-center justify-center transition-all duration-700 ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Divider (only tablet & above) */}
      {index !== 0 && (
        <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-12 md:h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      )}

      {/* Number */}
      <div className="flex items-end leading-none mb-1">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {count}
        </span>
        <span className="text-purple-400 font-bold text-lg sm:text-xl ml-0.5">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-xs sm:text-sm text-gray-600 dark:text-[#C7D2FE] uppercase uppercase tracking-wider text-center leading-tight max-w-[90px] sm:max-w-none">
        {stat.label}
      </p>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
export default function StatsCard() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl px-4 py-6 sm:px-6 sm:py-8"
    >
      {/* Background Glow (Premium feel) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl opacity-30" />

      {/* Stats Grid */}
      <div className="relative z-10 grid w-full grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} animate={animate} />
        ))}
      </div>
    </div>
  );
}
