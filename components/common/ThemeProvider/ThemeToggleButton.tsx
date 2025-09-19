"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="rounded-full bg-gray-200 dark:bg-gray-800 p-3"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </motion.button>
  );
};
