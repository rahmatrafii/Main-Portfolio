"use client";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TechStackIcon from "./TechStackIcon";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/themeContext";
import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useRef } from "react";
import Link from "next/link";
import { ModalType } from "@/types";

const Modal = ({ showModal, setShowModal, ...item }: ModalType) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    function handleClick(e: any) {
      if (modalRef && e.target == modalRef.current) {
        setShowModal(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className={`${styles.modal} ${
        showModal && theme === "light"
          ? "modalShow modal-light"
          : showModal && theme === "dark"
          ? "modalShow modal-dark"
          : "modalHide"
      }`}
    >
      <div
        className={`${styles.modal__content} custom-scrollbar-${
          showModal && theme === "light"
            ? "light modalContentShow modal-content-light"
            : showModal && theme === "dark"
            ? "dark modalContentShow modal-content-dark"
            : !showModal && theme === "light"
            ? "light modalContentHide"
            : !showModal && theme === "dark" && "dark modalContentHide"
        }`}
      >
        <button
          className={styles.modal__content__close}
          onClick={() => setShowModal(false)}
        >
          <AiOutlineCloseCircle />
        </button>
        <div className={styles.modal__content__inner}>
          <div className={styles.modal__content__inner__image}>
            <Image
              src={item.src}
              alt="yt"
              width={200}
              height={200}
              className={styles.modal__content__inner__image__content}
              quality={100}
            />
          </div>
          <h1 className={styles.modal__content__inner__title}>{item.title}</h1>
          <TechStackIcon techStack={item.techStack} />
          <p className={styles.modal__content__inner__desc}>
            {item.description}
          </p>
          <div className={styles.modal__content__inner__button}>
            <Link
              href={item.github}
              target="_blank"
              className={styles.modal__content__inner__button__code}
            >
              <span>Project Repository</span>
              <BsGithub />
            </Link>
            <Link
              href={item.link}
              target="_blank"
              className={`${styles.modal__content__inner__button__preview} ${
                theme === "light" ? "button-light" : "button-dark"
              }`}
            >
              <span>Preview</span>
              <AiFillEye />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
