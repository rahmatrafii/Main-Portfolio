"use client";
import styles from "@/app/page.module.scss";
import SkillsIcon from "@/components/SkillsIcon";
import { mySkills } from "@/constant";
import { BiCodeAlt } from "react-icons/bi";
import { RiToolsLine } from "react-icons/ri";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/themeContext";
import TitleSection from "@/components/TitleSection";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const { theme, setNavActive } = useContext(ThemeContext);
  const skillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (skillRef.current) {
      const skillPosition = skillRef.current.offsetTop;
      setNavActive((prev: any) => ({
        ...prev,
        skills: skillPosition - 150,
      }));
    }
  }, []);
  return (
    <section className={styles.skills__container} ref={skillRef} id="skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.skills}
      >
        <TitleSection title={mySkills.title} />
        <motion.p
          variants={textVariant(0.5)}
          className={`${styles.skills__desc} text-${
            theme === "light" ? "light" : "dark"
          }`}
        >
          {mySkills.description}
        </motion.p>
        <div className={styles.skills__content}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={styles.skills__content__techStack}
          >
            <motion.h3
              className={`${styles.skills__content__techStack__title} ${
                theme === "light" ? "text-light" : "text-dark"
              } `}
            >
              <BiCodeAlt />
              <span>Tech Stack</span>
            </motion.h3>
            <div
              className={`${styles.skills__content__techStack__body} ${
                theme === "light"
                  ? "bg-light text-light"
                  : "bg-skills-dark text-dark"
              }`}
            >
              {mySkills.techStack.map((item: any, index) => (
                <SkillsIcon
                  index={index}
                  key={item.src}
                  src={item.src}
                  title={item.title}
                  theme={theme}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            className={styles.skills__content__tools}
            variants={fadeIn("left", "tween", 0.3, 1)}
          >
            <motion.h3
              className={`${styles.skills__content__tools__title} ${
                theme === "light" ? "text-light" : "text-dark"
              } `}
            >
              <RiToolsLine />
              <span>Tools</span>
            </motion.h3>
            <div
              className={`${styles.skills__content__tools__body} ${
                theme === "light"
                  ? "bg-light text-light"
                  : "bg-skills-dark text-dark"
              }`}
            >
              {mySkills.tools.map((item: any, index) => (
                <SkillsIcon
                  key={item.src}
                  src={item.src}
                  title={item.title}
                  theme={theme}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
