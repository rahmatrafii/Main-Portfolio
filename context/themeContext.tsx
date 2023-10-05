"use client";
import { NavActiveType, contextThemeType } from "@/types";
import React, { useState, createContext, useEffect } from "react";

const ThemeContext = createContext<contextThemeType>({
  theme: "dark",
  toggleTheme: () => {},
  navActive: {
    skills: 0,
    about: 0,
    portfolio: 0,
    contact: 0,
  },
  setNavActive: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === null) {
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(currentTheme);
    }
  }, []);

  const [theme, setTheme] = useState<string>("dark");
  const [navActive, setNavActive] = useState<NavActiveType>({
    skills: 0,
    about: 0,
    portfolio: 0,
    contact: 0,
  });
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, navActive, setNavActive }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
