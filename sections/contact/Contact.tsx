"use client";
import React from "react";
import ContactCard from "@/components/ContactCard";
import styles from "./Contact.module.scss";
import { ContactButton } from "@/constant/index";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { ThemeContext } from "@/context/themeContext";
import { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleSection from "@/components/TitleSection";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { staggerContainer, textVariant, zoomIn } from "@/utils/motion";
const Contact = () => {
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const { theme } = useContext(ThemeContext);
  const [feedback, setFeedback] = useState({
    show: false,
    success: false,
    message: "",
  });
  const formRef = React.createRef<HTMLFormElement>();
  const buttonRef = React.createRef<HTMLButtonElement>();
  const [validate, setValidate] = useState({
    invalid: false,
    name: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const clearFormAfterSubmit = () => {
      setFullNameInput("");
      setEmailInput("");
      setSubjectInput("");
      setMessageInput("");
    };

    if (buttonRef.current) {
      buttonRef.current.style.opacity = "0";
      console.log("hai");
    }

    if (fullNameInput.length <= 0) {
      setValidate({
        invalid: true,
        name: "fullname",
        message: "please enter at least one character",
      });
      return false;
    }
    if (!emailInput.includes("@")) {
      setValidate({
        invalid: true,
        name: "email",
        message: "invalid email",
      });
      return false;
    }
    if (messageInput.length <= 0) {
      setValidate({
        invalid: true,
        name: "message",
        message: "please enter at least one character",
      });
      return false;
    }
    if (formRef.current) {
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
          formRef.current,
          `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
        )
        .then(() => {
          setFeedback({
            show: true,
            success: true,
            message: "Your Message Is Successfully Sended!",
          });
          setValidate((prev) => ({ ...prev, invalid: false }));
          clearFormAfterSubmit();
        })
        .catch(() => {
          setFeedback({
            show: true,
            success: false,
            message: "Something went wrong!",
          });
        });
    }

    setTimeout(() => {
      setFeedback((prev) => ({ ...prev, show: false }));
    }, 6000);
  };
  return (
    <>
      <section className={styles.container} id="contact">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={styles.contact}
        >
          <TitleSection title="Contact" />
          <motion.p
            variants={textVariant(0.3)}
            className={`${styles.contact__desc} text-${
              theme === "light" ? "light" : "dark"
            }`}
          >
            I'am always open to discussing product design, collaborating work or
            partnerships. Just contact me with this media below
          </motion.p>
          <div className={styles.contact__content}>
            <div className={styles.contact__content__button}>
              {ContactButton.map((item, index) => (
                <ContactCard
                  key={item.title}
                  icon={item.icon}
                  link={item.link}
                  index={index}
                  title={item.title}
                  body={item.body}
                  theme={theme}
                />
              ))}
            </div>
            <form
              className={styles.contact__content__form}
              onSubmit={handleSubmit}
              ref={formRef}
              name="submit-to-google-sheet"
            >
              <div className={styles.contact__content__form__input}>
                <Input
                  id="fullname"
                  label="fullname"
                  placeholder="john doe"
                  delay={1}
                  value={fullNameInput}
                  onChange={(e: any) => setFullNameInput(e.target.value)}
                  validate={validate}
                />
                <Input
                  id="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  delay={2}
                  value={emailInput}
                  onChange={(e: any) => setEmailInput(e.target.value)}
                  validate={validate}
                />
              </div>
              <Textarea
                id="message"
                label="Message"
                placeholder="Hey, I Wanna"
                delay={4}
                value={messageInput}
                onChange={(e: any) => setMessageInput(e.target.value)}
                validate={validate}
              />
              <motion.button
                ref={buttonRef}
                variants={zoomIn(2, 1)}
                className={`${styles.contact__content__form__button} bg-main-${
                  theme === "light" ? "light" : "dark"
                }`}
              >
                Kirim
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
      <p
        className={`${styles.alert} alert-${
          feedback.show && feedback.success
            ? "show bg-green"
            : feedback.show && !feedback.success
            ? "show bg-red"
            : "hide"
        }`}
      >
        {feedback.message}
      </p>
    </>
  );
};

export default Contact;
