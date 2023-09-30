"use client";
type LinkType = {
  title: string;
  src: string;
};
type activeLinkType = "Home" | "Skills" | "Portfolio" | "Contact";
import { link } from "@/constant/index";
import styles from "@/app/page.module.scss";
import Link from "next/link";
import { useRef, useEffect, useState, useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";
import { navVariants } from "@/utils/motion";
const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState<activeLinkType>("Home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
    currentPosition > 50 && setIsScrolled(true);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      currentPosition > 50 ? setIsScrolled(true) : setIsScrolled(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= 0) {
      setActive("Home");
    }
    if (scrollPosition > 300) {
      setActive("Skills");
    }
    if (scrollPosition > 900) {
      setActive("Portfolio");
    }
    if (scrollPosition > 1500) {
      setActive("Contact");
    }
  }, [scrollPosition]);
  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled && theme === "light"
            ? "header-scrolled-light"
            : isScrolled && theme === "dark"
            ? "header-scrolled-dark"
            : ""
        }`}
        ref={headerRef}
      >
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView={"show"}
          className={styles.header__container}
        >
          <div
            onClick={() => (window.location.href = "/")}
            className={`${styles.header__container__logo} text-main-${
              theme === "light" ? "light" : "dark"
            }`}
          >
            Rahmat Rafi Indrayani
          </div>
          <div className={styles.header__container__link}>
            {link.map((item: LinkType) => (
              <Link
                key={item.title}
                className={`${styles.header__container__link__content} ${
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
            <ThemeButton theme={theme} onClick={() => toggleTheme()} />
          </div>
          <button
            className={styles.header__container__hamburger}
            onClick={() => setSidebar(!sidebar)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </motion.div>
      </header>
      <MobileNav active={active} sidebar={sidebar} setSidebar={setSidebar} />
    </>
  );
};

export default Header;
