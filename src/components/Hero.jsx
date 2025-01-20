import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akhilesh</h1>
        <p className={styles.description}>
        I am a Frontend Developer skilled in creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, React and other modern technology.
        </p>
        <a href="mailto:akmauryaa314@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img width={5}
        src={getImageUrl("heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
