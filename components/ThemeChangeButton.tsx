"use client";

import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeChangeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) return null; // prevent mismatch if theme isn't ready

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <SunIcon className="text-yellow-400 w-6 h-6" />
      ) : (
        <MoonIcon className="text-blue-600 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeChangeButton;
