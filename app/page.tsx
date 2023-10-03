"use client";

import { Contact, Home, Portfolio, Skills } from "@/sections";

export default function MainPage() {
  return (
    <main className={`main-container `}>
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
