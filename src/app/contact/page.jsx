"use client";

import { Input } from "@heroui/react";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-30 px-6 lg:px-12">
      <div className="mx-auto">
        <div className="w-full items-center text-center mx-auto px-4 py-8">
          <h1 className="text-9xl font-heading uppercase font-bold fade-in">
            Contact Me
          </h1>
        </div>
        <div className="relative group">
          {/* Outer Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <form className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FloatingInput
                label="Full Name"
                type="text"
                placeholder="John Doe"
              />
              <FloatingInput
                label="Email Address"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <FloatingInput
              label="Subject / Project Type"
              type="text"
              placeholder="App Design"
            />

            <div className="relative">
              <textarea
                className="w-full bg-transparent border-b-2 border-slate-700 py-4 focus:outline-none focus:border-purple-500 transition-colors peer placeholder-transparent"
                placeholder="Message"
                rows="4"
              />
              <label className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
                Your Message
              </label>
            </div>

            <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
              Send Message <ArrowRightIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
