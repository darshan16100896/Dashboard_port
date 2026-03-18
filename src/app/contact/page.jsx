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
        <div className="mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-2xl fade-in p-10 rounded-3xl shadow-lg">
            <div>
              <div></div>
              <p className="text-white text-center">Call Me Directly </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
