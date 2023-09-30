import React, { useContext } from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
import styles from "@/app/page.module.scss";
import { ThemeContext } from "@/context/themeContext";

const TitleSection = ({ title }: { title: string }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <motion.p
      variants={textContainer}
      className={`${styles.title__section} ${
        theme === "light" ? "text-light" : "text-dark"
      }`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === "" ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TitleSection;
