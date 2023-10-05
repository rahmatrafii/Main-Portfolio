"use client";
import CardPortfolio from "@/components/CardPortfolio";
import styles from "@/app/page.module.scss";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "@/context/themeContext";
import { portfolio } from "@/constant";
import TitleSection from "@/components/TitleSection";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

const Portfolio = () => {
  const { theme, setNavActive } = useContext(ThemeContext);
  const portfolioRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (portfolioRef.current) {
      const portfolioPosition = portfolioRef.current.offsetTop;
      setNavActive((prev: any) => ({
        ...prev,
        portfolio: portfolioPosition - 150,
      }));
    }
  }, []);
  return (
    <section
      ref={portfolioRef}
      className={styles.portfolio__container}
      id="portfolio"
    >
      <motion.div className={styles.portfolio} variants={staggerContainer}>
        <TitleSection title={portfolio.title} />
        <motion.p
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.portfolio__desc} text-${
            theme === "light" ? "light" : "dark"
          }`}
        >
          {portfolio.desc}
        </motion.p>
        <div className={styles.portfolio__content}>
          {portfolio.projects.map((item, index) => (
            <CardPortfolio
              key={item.title}
              index={index}
              theme={theme}
              {...item}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
