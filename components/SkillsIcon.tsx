"use client";
import styles from "@/app/page.module.scss";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { SkillsIconType } from "@/types";

const SkillsIcon = (props: SkillsIconType) => {
  const { src, title, theme, index } = props;
  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.1, 0.5)}
      className={`${styles.skills__icon} skills-icon`}
    >
      <div
        className={`${styles.skills__icon__image} icon-${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <Image
          src={src}
          width={75}
          height={75}
          className={`${styles.skills__icon__image__content} `}
          alt="html"
        />
      </div>
      <p className={`${styles.skills__icon__title}`}>{title}</p>
    </motion.div>
  );
};

export default SkillsIcon;
