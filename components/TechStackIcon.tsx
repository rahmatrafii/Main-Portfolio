import styles from "@/app/page.module.scss";
import Image from "next/image";

const TechStackIcon = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className={styles.techstack}>
      {techStack.map((item: string) => (
        <div key={item} className={styles.techstack__icon}>
          <Image
            src={`/image/${item.toLowerCase()}.svg`}
            alt="nextjs"
            width={20}
            height={20}
            className={styles.techstack__icon__image}
          />
          <span className={styles.techstack__icon__title}>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStackIcon;
