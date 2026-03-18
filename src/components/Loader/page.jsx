"use client";
import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (or wait for assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="text-center">
            {/* Logo */}
            <h1 className="text-white text-3xl font-bold animate-pulse">
              YourLogo
            </h1>

            {/* Optional spinner */}
            <div className="mt-4 w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
