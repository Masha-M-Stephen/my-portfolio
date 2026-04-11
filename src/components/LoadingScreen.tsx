"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Animated name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold md:text-5xl"
          >
            <span className="text-gradient-purple">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Animated title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-3 text-lg text-purple-light"
          >
            {personalInfo.title}
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-8 h-0.5 rounded-full bg-purple-primary"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
