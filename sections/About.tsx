"use client";
import { motion } from "framer-motion";
import styles from "@/app/page.module.scss";
import TitleSection from "@/components/TitleSection";
import { identity } from "@/constant";
import Image from "next/image";
import { IoMdChatbubbles } from "react-icons/io";
import { slideIn, staggerContainer, textVariant, zoomIn } from "@/utils/motion";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "@/context/themeContext";
const About = () => {
  const { theme, setNavActive } = useContext(ThemeContext);

  const aboutRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (aboutRef.current) {
      const aboutPosition = aboutRef.current.offsetTop;
      setNavActive((prev: any) => ({
        ...prev,
        about: aboutPosition - 250,
      }));
    }
  }, []);
  return (
    <section className={styles.about__container} id="about" ref={aboutRef}>
      <motion.div
        variants={staggerContainer}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.about}
      >
        <TitleSection title="About Me" />
        <div className={styles.about__content}>
          <motion.div
            variants={slideIn("left", "tween", 0.3, 1)}
            className={styles.about__content__thumbnail}
          >
            <img
              src={"/static/image/rafi2.jpeg"}
              alt="rafi"
              className={styles.about__content__thumbnail__image}
            />
          </motion.div>
          <div className={styles.about__content__desc}>
            <motion.h2
              variants={textVariant(0.6)}
              viewport={{ once: true, amount: 0.25 }}
              initial="hidden"
              whileInView={"show"}
              className={`${styles.about__content__desc__title} text-${
                theme === "light" ? "light" : "dark"
              }`}
            >
              Hello👋 i'am {""}
              <span
                className={`${
                  styles.about__content__desc__title__special
                } text-main-${theme === "light" ? "light" : "dark"}`}
              >
                Rahmat Rafi Indrayani
              </span>
            </motion.h2>
            <motion.h4
              variants={textVariant(0.8)}
              viewport={{ once: true, amount: 0.25 }}
              initial="hidden"
              whileInView={"show"}
              className={`${styles.about__content__desc__subtitle} text-${
                theme === "light" ? "light" : "dark"
              }`}
            >
              A{" "}
              <span
                className={`${
                  styles.about__content__desc__subtitle__special
                } text-main-${theme === "light" ? "light" : "dark"}`}
              >
                Frontend Web Developer 🧑‍💻
              </span>
            </motion.h4>
            <motion.p
              variants={textVariant(1)}
              viewport={{ once: true, amount: 0.25 }}
              initial="hidden"
              whileInView={"show"}
              className={`${styles.about__content__desc__paragraph} text-${
                theme === "light" ? "light" : "dark"
              }`}
            >
              {identity.description[1]}
            </motion.p>

            <motion.button
              onClick={() => (window.location.href = "#contact")}
              variants={zoomIn(1, 1)}
              className={`${styles.about__content__desc__button} bg-main-${
                theme === "light" ? "light" : "dark"
              }`}
            >
              <span>let's talk</span> <IoMdChatbubbles />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
