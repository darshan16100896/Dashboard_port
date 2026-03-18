"use client";

import { useEffect, useState } from "react";

export default function WireframeFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3); // loop across 3 screens
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-32 flex items-center justify-center relative mt-6">
      <div className="flex items-center space-x-12 relative">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            {/* Screen box */}
            <div
              className={`w-20 h-28 border-2 rounded-md flex flex-col p-2 gap-2 transition-all duration-500 ${
                active === i ? "border-blue-400" : "border-white/30"
              }`}
            >
              <div className="w-full h-3 bg-white/20 rounded" />
              <div className="w-full h-3 bg-white/20 rounded" />
              <div className="w-full h-8 bg-white/10 rounded mt-auto" />
            </div>

            {/* Arrow to next screen */}
            {i < 2 && (
              <svg
                className="absolute top-1/2 right-[-60px] -translate-y-1/2"
                width="60"
                height="20"
                viewBox="0 0 60 20"
                fill="none"
              >
                <path
                  d="M 0 10 L 60 10"
                  stroke="white"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,0 L0,6 L6,3 z" fill="white" />
                  </marker>
                </defs>
              </svg>
            )}

            {/* Dot animation
            {active === i && (
              <div className="absolute top-1/2 right-[-30px] w-3 h-3 bg-yellow-400 rounded-full shadow shadow-yellow-400/50 -translate-y-1/2 animate-pulse" />
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
