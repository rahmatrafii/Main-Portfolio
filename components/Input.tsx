import styles from "@/app/page.module.scss";
import { ThemeContext } from "@/context/themeContext";
import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { InputType } from "@/types";
const Input = (props: InputType) => {
  const { id, label, placeholder, delay, value, onChange, validate } = props;
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef<HTMLInputElement>(null);
  if (validate.invalid && inputRef.current && validate.name === id) {
    inputRef.current.focus();
  }
  return (
    <motion.div
      variants={fadeIn("up", "spring", delay * 0.5, 1)}
      className={styles.input__container}
    >
      <label
        className={`${styles.input__container__label} text-main-${
          theme === "light" ? "light" : "dark"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className={`${styles.input__container__input} input-${
          theme === "light" ? "light" : "dark"
        }  ${validate?.invalid && validate.name === id && "is-invalid"}`}
      />
      {validate?.invalid && validate.name === id && (
        <p className={styles.input__container__message}>{validate.message}</p>
      )}
    </motion.div>
  );
};

export default Input;
