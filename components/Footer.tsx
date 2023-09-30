import { link, sosmed } from "@/constant";
import styles from "@/app/page.module.scss";

import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.footer} bg-main-${
        theme === "light" ? "light" : "dark"
      }`}
    >
      <div className={styles.footer__body}>
        <motion.h2
          variants={textVariant(0.6)}
          className={styles.footer__body__title}
        >
          Rahmat Rafi Indrayani
        </motion.h2>
        <motion.h4
          variants={textVariant(0.8)}
          className={styles.footer__body__prof}
        >
          Frontend Web Developer
        </motion.h4>
        <div className={styles.footer__body__link}>
          {link.map((item, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.2, 0.6)}
              key={item.title}
            >
              <Link
                href={item.src}
                className={styles.footer__body__link__content}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className={styles.footer__body__sosmed}>
          {sosmed.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn("up", "tween", index * 0.4, 0.6)}
            >
              <Link
                href={item.link}
                target="_blank"
                className={`${
                  styles.footer__body__sosmed__content
                } sosmed-icon-${theme === "light" ? "light" : "dark"}`}
              >
                {item.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <motion.p variants={fadeIn("right", "tween", 0.8, 0.6)}>
          © 2023 Created by Rahmat Rafi Indrayani
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
