"use client";

import { Contact, Home, Portfolio, Skills } from "@/sections";
import { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";

export default function MainPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`main-container `}>
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
