"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; // for mobile toggle
import { useTheme } from "next-themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    // { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Resume", href: "/resume" },
    { name: "Articles", href: "/articles" },
  ];

  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-gray-200 dark:border-white/10 px-6 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-heading font-bold text-gray-900 dark:text-white"
          >
            MyLogo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 dark:text-white hover:text-[#FF1CF7] transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Contact Button */}
            <Link
              href="/contact"
              className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              {/* Spinning gradient border */}
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#006fee_0%,#b249f8_50%,#FF1CF7_100%)]" />
              {/* Inner button */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-900 dark:bg-slate-950 px-7 text-white font-medium backdrop-blur-3xl gap-2">
                Contact Us
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-black/30 text-gray-800 dark:text-white hover:scale-110 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full backdrop-blur-lg bg-white/90 dark:bg-black/60 flex flex-col items-center gap-4 py-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 dark:text-white text-lg hover:text-[#FF1CF7] transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#006fee] via-[#b249f8] to-[#FF1CF7] text-white font-medium shadow-md hover:scale-105 transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
