import styles from "@/app/page.module.scss";
import { ThemeContext } from "@/context/themeContext";
import { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { InputType } from "@/types";
const Textarea = (props: InputType) => {
  const { id, label, placeholder, delay, value, onChange, validate } = props;
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  if (validate.invalid && inputRef.current && validate.name === id) {
    inputRef.current.focus();
  }
  return (
    <motion.div
      variants={fadeIn("up", "spring", delay * 0.4, 1)}
      className={styles.textarea__container}
    >
      <label
        id={id}
        className={`${styles.textarea__container__label} text-main-${
          theme === "light" ? "light" : "dark"
        }`}
      >
        {label}
      </label>
      <textarea
        ref={inputRef}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.textarea__container__body} input-${
          theme === "light" ? "light" : "dark"
        } ${validate?.invalid && validate.name == id && "is-invalid"}`}
      />
      {validate?.invalid && validate.name == id && (
        <p className={styles.textarea__container__message}>
          {validate.message}
        </p>
      )}
    </motion.div>
  );
};

export default Textarea;
