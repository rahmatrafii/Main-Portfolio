"use client";
import styles from "@/app/page.module.scss";
import { link } from "@/constant/index";
import { ThemeContext } from "@/context/themeContext";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import ThemeButton from "./ThemeButton";
import { MobileNav } from "@/types";
const MobileNav = ({ active, sidebar, setSidebar }: MobileNav) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    function handleClick(e: any) {
      if (sidebarRef && e.target == sidebarRef.current) {
        setSidebar(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      ref={sidebarRef}
      className={`${styles.mobileNav__container} ${
        sidebar ? "sidebarShow" : "sidebarHide"
      }`}
    >
      <nav
        className={`${styles.mobileNav__container__nav} ${
          sidebar && theme === "light"
            ? "innerSidebarShow sidebarLight"
            : sidebar && theme === "dark"
            ? "innerSidebarShow sidebarDark"
            : !sidebar && theme === "light"
            ? "innerSidebarHide sidebarLight"
            : !sidebar && theme === "dark"
            ? "innerSidebarHide sidebarDark"
            : ""
        }`}
      >
        <div className={styles.mobileNav__container__nav__link}>
          {link.map((item: { title: string; src: string }) => (
            <Link
              onClick={() => setSidebar(!sidebar)}
              key={item.title}
              className={`${styles.mobileNav__container__nav__link__content} ${
                item.title == active && theme === "light"
                  ? "link-active-light text-main-light"
                  : item.title !== active && theme === "light"
                  ? "text-light link-noactive"
                  : item.title == active && theme === "dark"
                  ? "link-active-dark text-main-dark"
                  : item.title !== active && theme === "dark"
                  ? "text-dark link-noactive"
                  : ""
              }`}
              href={item.src}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <ThemeButton theme={theme} onClick={() => toggleTheme()} />
      </nav>
    </div>
  );
};

export default MobileNav;
