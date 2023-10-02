"use client";
import styles from "@/app/page.module.scss";
import { ThemeButtonType } from "@/types";
import Image from "next/image";
const ThemeButton = ({ theme, onClick = () => {} }: ThemeButtonType) => {
  return (
    <div
      className={`${styles.themeButton} ${
        theme === "light" ? "toggle_dark" : "toggle_light"
      }`}
      onClick={onClick}
    >
      <button>
        <Image
          className={` 
                toggle-dark-${theme === "light" ? "active" : "noactive"}`}
          src={`/static/image/moon.svg`}
          alt="moon"
          width={27}
          height={27}
        />
      </button>
      <button>
        <Image
          src={`/static/image/sun.svg`}
          alt="moon"
          width={27}
          height={27}
          className={` toggle-light-${
            theme === "light" ? "active" : "noactive"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeButton;
