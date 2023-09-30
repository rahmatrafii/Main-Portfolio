import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
interface ContactCardType {
  title: string;
  body: string;
  icon: string;
  link: string;
  theme: string;
  index: number;
}
const ContactCard = ({
  body,
  icon,
  link,
  title,
  theme,
  index,
}: ContactCardType) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 1)}>
      <Link
        href={link}
        target="_blank"
        className={`${styles.contact__button__card} contact-card-${
          theme === "light" ? "light" : "dark"
        }`}
      >
        <div className={styles.contact__button__card__image}>
          <Image
            src={icon}
            alt="whatsapp"
            width={50}
            height={50}
            className={styles.contact__button__card__image__content}
          />
        </div>
        <div
          className={`${styles.contact__button__card__body} text-${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <h4 className={styles.contact__button__card__body__title}>{title}</h4>
          <p className={styles.contact__button__card__body__content}>{body}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ContactCard;
