"use client";
import { FaDownload } from "react-icons/fa";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { slideIn, staggerContainer, textVariant, zoomIn } from "@/utils/motion";
import { identity } from "@/constant/index";
const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={styles.home__container} id="home">
      <motion.div
        variants={staggerContainer}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.home}
      >
        <div className={styles.home__info}>
          <motion.h4
            variants={textVariant(0.5)}
            viewport={{ once: true, amount: 0.25 }}
            initial="hidden"
            whileInView={"show"}
            className={styles.home__info__hello}
          >
            Hi, 👋 I'm
          </motion.h4>
          <motion.h1
            variants={textVariant(0.7)}
            viewport={{ once: true, amount: 0.25 }}
            initial="hidden"
            whileInView={"show"}
            className={`${styles.home__info__name} text-main-${
              theme === "light" ? "light" : "dark"
            }`}
          >
            {identity.name}
          </motion.h1>
          <motion.h3
            variants={textVariant(0.9)}
            viewport={{ once: true, amount: 0.25 }}
            initial="hidden"
            whileInView={"show"}
            className={`${styles.home__info__profession} text-${
              theme === "light" ? "light" : "dark"
            }`}
          >
            {identity.devision}
          </motion.h3>

          <motion.p
            variants={textVariant(1.2)}
            viewport={{ once: true, amount: 0.25 }}
            initial="hidden"
            whileInView={"show"}
            className={styles.home__info__about}
          >
            {identity.description[0]}
          </motion.p>
          <motion.a
            href="/cv/CV - Rahmat Rafi Indrayani.pdf"
            download
            variants={zoomIn(1, 1)}
            className={`${styles.home__info__button} bg-main-${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <span>Download CV</span>
            <FaDownload />
          </motion.a>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={styles.home__image}
        >
          <div className={`${styles.home__image__content}`}>
            <img
              src={`/static/image/${
                theme === "light" ? "light" : "dark"
              }-rafi.svg`}
              alt="rafi"
              className={styles.home__image__content__inner}
            />
          </div>
        </motion.div>

        <Link
          href="#about"
          className={`${styles.home__scrolldown} text-main-${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <motion.div
            variants={textVariant(3)}
            viewport={{ once: true, amount: 0.25 }}
            initial="hidden"
            whileInView={"show"}
            className={`${styles.home__scrolldown__content}`}
          >
            <p>Scroll Down</p>
            <Image
              src={`/static/image/bottom-${
                theme === "light" ? "light" : "dark"
              }.svg`}
              className={styles.home__scrolldown__icon}
              alt="bottom"
              width={24}
              height={24}
            />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
