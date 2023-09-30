"use client";
import Header from "./Header";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import Footer from "./Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <body
      className={`custom-scrollbar-${
        theme === "light" ? "light bg-white" : "dark bg-dark"
      } `}
    >
      <Header />
      {children}
      <Footer />
    </body>
  );
};

export default Layout;
