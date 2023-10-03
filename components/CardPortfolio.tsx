"use client";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import { BsEye, BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";
import TechStackIcon from "./TechStackIcon";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { CardPortfolioType } from "@/types";
const CardPortfolio = ({ index, theme, ...item }: CardPortfolioType) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <motion.div
        variants={fadeIn("right", "spring", Number(`0.${5 + index * 4}`), 1)}
        whileInView={"show"}
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.card} ${
          theme === "light" ? "bg-light text-light" : "bg-skills-dark text-dark"
        }`}
      >
        <Link href={item.link} className={styles.card__image} target="_blank">
          <Image
            className={styles.card__image__content}
            src={item.src}
            alt="portfolio"
            width={100}
            height={100}
            quality={100}
          />
        </Link>
        <Link
          href={item.link}
          target="_blank"
          className={`${styles.card__title} portfolio-title-${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <span>{item.title}</span>
        </Link>
        <TechStackIcon techStack={item.techStack} />
        <p className={styles.card__desc}>
          Lorem ipsum dolor, sit amet consectetur elit. at odit perspiciatis
          fugiat et!...
        </p>
        <div className={styles.card__button}>
          <button
            className={`${styles.card__button__details} bg-main-${
              theme === "light" ? "light" : "dark"
            }`}
            onClick={() => setShowModal(true)}
          >
            <span>Details</span>
            <BsFillArrowRightCircleFill />
          </button>
          <Link
            href={item.link}
            target="_blank"
            className={`${styles.card__button__preview} ${
              theme === "light" ? "button-light" : "button-dark"
            }`}
          >
            <span>Preview</span>
            <BsEye />
          </Link>
        </div>
      </motion.div>
      <Modal showModal={showModal} setShowModal={setShowModal} {...item} />
    </>
  );
};

export default CardPortfolio;
