import CardPortfolio from "@/components/CardPortfolio";
import styles from "./Portfolio.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { portfolio } from "@/constant";
import TitleSection from "@/components/TitleSection";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

const Portfolio = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={styles.container} id="portfolio">
      <motion.div
        className={styles.portfolio}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <TitleSection title="Portfolio" />
        <motion.p
          variants={textVariant(0.5)}
          className={`${styles.portfolio__desc} text-${
            theme === "light" ? "light" : "dark"
          }`}
        >
          I've created a few project while i was learing about frontend website
          development. and all of project i'll explain below
        </motion.p>
        <div className={styles.portfolio__content}>
          {portfolio.map((item, index) => (
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
