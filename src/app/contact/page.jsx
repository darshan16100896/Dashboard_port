"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Subtle dot bg - Matching your Articles Page */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-24">
        {/* ── Header ── */}
        <div className="mb-12 sm:mb-20 text-center lg:text-left">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400 mb-4"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease",
            }}
          >
            Get in touch
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-gray-900 dark:text-white"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.5s ease 0.07s",
            }}
          >
            Let’s build something <br /> great together.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ── Left Side: Contact Info ── */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Contact Details
              </h3>
              <div className="space-y-6">
                <a href="mailto:hello@darshan.design" className="group block">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Email
                  </p>
                  <p className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    darshan.makwana0896@gmail.com
                  </p>
                </a>
                <div className="group block">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Location
                  </p>
                  <p className="text-xl font-medium text-gray-900 dark:text-white">
                    Ahmedabad, India
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Socials
              </h3>
              <div className="flex flex-wrap gap-4">
                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/darshan0makwana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium hover:bg-[#0A66C2] hover:text-white transition-all hover:border-[#0A66C2] hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.155 1.459-2.155 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.759 1.381-1.557 2.845-1.557 3.043 0 3.603 2.004 3.603 4.611v6.439z" />
                  </svg>
                  LinkedIn
                </a>

                {/* Behance Link */}
                <a
                  href="https://www.behance.net/darshanmakwana0896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium hover:bg-[#0057ff] hover:text-white transition-all hover:border-[#0057ff] hover:shadow-lg hover:shadow-blue-600/20"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0 2.4-1.5 4.5-4.5 4.5s-4.5-2.1-4.5-4.5c0-2.4 1.5-4.5 4.5-4.5s4.5 2.1 4.5 4.5zm-4.5-2.5c-1.5 0-2 1.2-2 2.5s.5 2.5 2 2.5 2-1.2 2-2.5-.5-2.5-2-2.5zm-7.5 4.5h-5.5v-2h5.5v2zm0-3h-5.5v-2h5.5v2zm0-3h-5.5v-2h5.5v2zm11 1.5h-4v.5h4v-.5z" />
                  </svg>
                  Behance
                </a>
              </div>
            </div>
          </div>

          {/* ── Right Side: Contact Form ── */}
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-500/5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-b border-black/10 dark:border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white resize-none"
                />
              </div>
              <button className="sm:col-span-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-xl shadow-blue-600/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
